import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

// Configuración de AssemblyAI (necesitas registrarte gratis en assemblyai.com)
const ASSEMBLYAI_API_KEY = '51148534f85a4ed2b11ede05af4959c2'; // Obtén una gratis en assemblyai.com

export default function PodcastTranscriber({ audioUrl}) {
  const [transcript, setTranscript] = useState('');
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [subtitles, setSubtitles] = useState([]);
  const [currentSubtitle, setCurrentSubtitle] = useState('');
  const audioRef = useRef(null);
  const pollingIntervalRef = useRef(null);

  // Función para subir el archivo y transcribirlo
  const handleTranscribe = async () => {
    if (!audioUrl) {
      alert('No hay archivo de audio disponible');
      return;
    }

    setIsTranscribing(true);
    setTranscript('');
    setProgress(0);

    try {
      // 1. Subir el archivo de audio
      const audioFileResponse = await fetch(audioUrl);
      const audioBlob = await audioFileResponse.blob();

      const uploadResponse = await axios.post('https://api.assemblyai.com/v2/upload', audioBlob, {
        headers: {
          'authorization': ASSEMBLYAI_API_KEY,
          'content-type': 'application/octet-stream'
        }
      });

      const audioUrl_ = uploadResponse.data.upload_url;

      // 2. Solicitar la transcripción
      const transcriptResponse = await axios.post('https://api.assemblyai.com/v2/transcript', {
        audio_url: audioUrl_,
        language_code: 'es', // Español
        punctuate: true,
        format_text: true
      }, {
        headers: {
          'authorization': ASSEMBLYAI_API_KEY,
          'content-type': 'application/json'
        }
      });

      const transcriptId = transcriptResponse.data.id;

      const pollInterval = setInterval(async () => {
        const pollingResponse = await axios.get(`https://api.assemblyai.com/v2/transcript/${transcriptId}`, {
          headers: {
            'authorization': ASSEMBLYAI_API_KEY
          }
        });

        const { status, text, words } = pollingResponse.data;

        if (status === 'completed') {
          clearInterval(pollInterval);
          setTranscript(text);
          
          if (words) {
            const subs = words.map((word, index) => ({
              id: index,
              text: word.text,
              start: word.start / 1000, 
              end: word.end / 1000
            }));
            setSubtitles(subs);
          }
          
          setIsTranscribing(false);
          setProgress(100);
        } else if (status === 'error') {
          clearInterval(pollInterval);
          setIsTranscribing(false);
          alert('Error en la transcripción');
        } else {
          setProgress(pollingResponse.data.progress || 0);
        }
      }, 3000);

      pollingIntervalRef.current = pollInterval;

    } catch (error) {
      console.error('Error:', error);
      setIsTranscribing(false);
      alert('Error al transcribir el audio');
    }
  };

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
      <div className="p-5 border-b border-gray-200/50">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-900">
            Transcripción automática
          </h3>
          <button
            onClick={handleTranscribe}
            disabled={isTranscribing}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isTranscribing
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-naranja to-lila text-white shadow-lg shadow-lila/25 hover:shadow-xl hover:scale-105'
            }`}
          >
            {isTranscribing ? 'Transcribiendo...' : 'Generar Transcripción'}
          </button>
        </div>

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
          
          {currentSubtitle && (
            <div className="mb-4 p-3 bg-gradient-to-r from-naranja/5 to-lila/5 rounded-xl border border-gray-200/50">
              <p className="text-sm text-gray-500 mb-1">Ahora:</p>
              <p className="text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-naranja to-lila">
                {currentSubtitle}
              </p>
            </div>
          )}

          {transcript ? (
            <div className="space-y-4">
              <p className="text-sm text-gray-400 font-light">Transcripción completa:</p>
              <p className="text-gray-700 font-light leading-relaxed whitespace-pre-wrap">
                {transcript}
              </p>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <svg className="w-16 h-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round"  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <p className="text-gray-400 font-light">
                Haz click en "Generar Transcripción" para obtener los subtítulos del audio
              </p>
              <p className="text-xs text-gray-300 mt-2">
                El proceso puede tardar unos segundos
              </p>
            </div>
          )}
        </div>
      </div>

      
    </div>
  );
}