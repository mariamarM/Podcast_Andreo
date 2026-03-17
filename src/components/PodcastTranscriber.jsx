import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import axios from 'axios';

const PodcastTranscriber = forwardRef(({ audioUrl }, ref) => {
  const ASSEMBLYAI_API_KEY = '3f232d69bd40464bb29178049cf34fc1';

  const [transcript, setTranscript] = useState('');
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [subtitles, setSubtitles] = useState([]);
  const [currentSubtitle, setCurrentSubtitle] = useState('');
  const [error, setError] = useState('');
  
  const audioRef = useRef(null);
  const pollingIntervalRef = useRef(null);

  // EXPONER la función startTranscription al componente padre
  useImperativeHandle(ref, () => ({
    startTranscription: handleTranscribe
  }));

  const handleTranscribe = async () => {
    if (!audioUrl) {
      setError('No hay archivo de audio disponible');
      return;
    }

    setIsTranscribing(true);
    setTranscript('');
    setProgress(0);
    setError('');

    try {
      const baseUrl = window.location.origin;
      const fullAudioUrl = audioUrl.startsWith('http') 
        ? audioUrl 
        : `${baseUrl}${audioUrl}`;
      
      console.log('📢 Cargando audio desde:', fullAudioUrl);

      // Obtener el archivo de audio como blob
      const audioFileResponse = await fetch(fullAudioUrl);
      if (!audioFileResponse.ok) {
        throw new Error(`No se pudo cargar el audio: ${audioFileResponse.status}`);
      }
      
      const audioBlob = await audioFileResponse.blob();
      console.log('✅ Audio cargado, tamaño:', audioBlob.size, 'bytes');

      // SUBIR el archivo a AssemblyAI
      const uploadResponse = await axios.post(
        'https://api.assemblyai.com/v2/upload',
        audioBlob,
        {
          headers: {
            'authorization': ASSEMBLYAI_API_KEY,
            'content-type': 'application/octet-stream'
          }
        }
      );

      const uploadedAudioUrl = uploadResponse.data.upload_url;
      console.log('✅ Audio subido a AssemblyAI:', uploadedAudioUrl);

      // SOLICITAR TRANSCRIPCIÓN - CON MODELOS CORRECTOS (guiones bajos)
      const transcriptResponse = await axios.post(
        'https://api.assemblyai.com/v2/transcript',
        {
          audio_url: uploadedAudioUrl,
          language_code: 'es',
          punctuate: true,
          auto_chapters: false,
          format_text: true,
          speaker_labels: true,
          speech_models: [ 'universal-2','universal-3-pro'],
          entity_detection: true,
        },
        {
          headers: {
            'authorization': ASSEMBLYAI_API_KEY,
            'content-type': 'application/json'
          }
        }
      );

      console.log('Transcripción solicitada:', transcriptResponse.data);
      const transcriptId = transcriptResponse.data.id;

      // POLLING para verificar progreso
      const pollInterval = setInterval(async () => {
        try {
          const pollingResponse = await axios.get(
            `https://api.assemblyai.com/v2/transcript/${transcriptId}`,
            {
              headers: { 'authorization': ASSEMBLYAI_API_KEY }
            }
          );

          const { status, text, words, error: transcriptError } = pollingResponse.data;

          if (status === 'completed') {
  clearInterval(pollInterval);
  setTranscript(text);

  // una vez ya cargado cpmo el audio entero llama al endpoint de las frases para obtener los timestamps y printarlas
  const sentencesResponse = await axios.get(
    `https://api.assemblyai.com/v2/transcript/${transcriptId}/sentences`,
    {
      headers: { authorization: ASSEMBLYAI_API_KEY }
    }
  );

  const sentences = sentencesResponse.data.sentences;

  if (sentences) {
    const subs = sentences.map((sentence, index) => ({
      id: index,
      text: sentence.text,
      start: sentence.start / 1000,
      end: sentence.end / 1000
    }));
    setSubtitles(subs);
  }

  setIsTranscribing(false);
  setProgress(100);
} else if (status === 'error') {
            clearInterval(pollInterval);
            setIsTranscribing(false);
            setError(`Error en transcripción: ${transcriptError}`);
          } else {
            setProgress(pollingResponse.data.progress || 0);
          }
        } catch (pollError) {
          console.error('Error en polling:', pollError);
        }
      }, 3000);

      pollingIntervalRef.current = pollInterval;

    } catch (error) {
      console.error('❌ Error detallado:', error);
      
      if (error.response) {
        console.error('Respuesta de AssemblyAI:', error.response.data);
        setError(`Error de API: ${JSON.stringify(error.response.data)}`);
      } else if (error.request) {
        setError('Error de red. Verifica tu conexión');
      } else {
        setError(error.message);
      }
      
      setIsTranscribing(false);
    }
  };

  // actualizar subtítulos en tiempo real
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || subtitles.length === 0) return;

    const updateSubtitle = () => {
      const currentTime = audio.currentTime;
      const activeSub = subtitles.find(
        sub => currentTime >= sub.start && currentTime <= sub.end
      );
      setCurrentSubtitle(activeSub?.text || '');
    };

    audio.addEventListener('timeupdate', updateSubtitle);
    return () => audio.removeEventListener('timeupdate', updateSubtitle);
  }, [subtitles]);

  useEffect(() => {
    return () => {
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 overflow-hidden shadow-sm">
      {/* Cabecera - SIN BOTÓN DE GENERAR */}
      <div className="p-5 border-b border-gray-200/50">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-900">
            Transcripción automática
          </h3>
          {/* ELIMINAMOS EL BOTÓN DE GENERAR TRANSCRIPCIÓN */}
        </div>

        {/* Error */}
        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-sm font-medium text-red-800">❌ {error}</p>
          </div>
        )}

        {/* Progreso */}
        {isTranscribing && progress > 0 && (
          <div className="mt-4">
            <div className="flex justify-between text-xs text-gray-500 mb-1">
              <span>Procesando audio...</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-naranja to-lila rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Reproductor (solo si hay transcripción) */}
      {transcript && (
        <div className="px-5 pt-5">
          <audio
            ref={audioRef}
            controls
            className="w-full"
          >
            <source src={audioUrl} type="audio/mpeg" />
          </audio>
        </div>
      )}

      <div className="p-5">
        <div className="min-h-[300px] max-h-[400px] overflow-y-auto bg-gray-50/50 rounded-2xl p-5 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          
{currentSubtitle ? (
  <p className="text-[35px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-naranja to-lila leading-tight">
    {currentSubtitle}
  </p>
) : isTranscribing ? (
  <div className="h-full flex items-center justify-center">
    <p className="text-gray-400 font-light">
      Generando transcripción...
    </p>
  </div>
) : null}
        </div>
      </div>
    </div>
  );
});

export default PodcastTranscriber;