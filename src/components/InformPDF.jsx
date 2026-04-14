import { jsPDF } from "jspdf";

function InformePDF() {

  const generarPDF = () => {
     const doc = new jsPDF();
     //esto lo tienes que hacer para dividir el contenido en bloques para que
     // añades nuevas paginas cuando el contenido se pase del tamaño de la pagina
  let y = 20;

  const addText = (text) => {
    const splitText = doc.splitTextToSize(text, 180);
    doc.text(splitText, 10, y);
    y += splitText.length * 7;

    if (y > 270) {
      doc.addPage();
      y = 20;
    }
  };
    
    doc.setFontSize(18);
  doc.text("Informe de Auditoría de Accesibilidad Web", 10, y);
  y += 10;

  doc.setFontSize(12);
  addText("Proyecto React – Evaluación Técnica Completa Nivel AA");

  // 🔹 DATOS
  addText("Autor: Maria Andreo");
  addText("Empresa: Practica academica sobre accesibilidad web");
  addText(`Fecha: ${new Date().toLocaleDateString()}`);

    doc.setFontSize(14);
    doc.text("Introducción", 10, 80);

    doc.setFontSize(10);
    addText("Este informe presenta los resultados de la auditoría de accesibilidad realizada en el proyecto React, evaluando su conformidad con las pautas WCAG 2.1 a nivel AA. Se han identificado áreas de mejora y se proponen recomendaciones para garantizar una experiencia inclusiva para todos los usuarios.");
    addText("URL pública (entorno producción): https://podcast-andreo-accesibility.vercel.app/");
    addText("Repositorio Github principal: https://github.com/andreomaria/podcast-andreo-accesibility");
addText("Branch analizada: main");

   addText("Commit base sin accesibilidad: 1a2b3c4d5e6f7g8h9i0j");
   addText("Commit final con mejoras de accesibilidad: 0j9i8h7g6f5e4d3c2b1a");
   addText("Historial de commits relacionados con accesibilidad: ");
   doc.AddImage("/screenshotsAccesbility/git.png", "PNG", 10, y, 180, 100);
   
    doc.setFontSize(14);
    doc.text("Descripcion obligatoria", 10, 80);
    addText("Se han implementado mejoras significativas en la accesibilidad del proyecto, abordando problemas de contraste, navegación con teclado, etiquetas ARIA y estructura semántica. Estas mejoras garantizan una experiencia más inclusiva para usuarios con discapacidades visuales, auditivas y motoras, cumpliendo con los estándares WCAG 2.1 a nivel AA.");
    
    
    
    
    doc.save("informe-accesibilidad.pdf");
  };

  return (
    <button onClick={generarPDF} aria-label="Descargar informe PDF" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
      Descargar informe PDF
    </button>
  );
}

export default InformePDF;