import { jsPDF } from "jspdf";

function InformePDF() {

  const generarPDF = () => {
    const doc = new jsPDF();

    
    doc.setFontSize(18);
    doc.text("Informe de Auditoría de Accesibilidad Web", 10, 20);

    doc.setFontSize(12);
    doc.text("Proyecto desarrollado en React", 10, 30);

    doc.text("Autor: Tu Nombre", 10, 40);
    doc.text("Fecha: 2026", 10, 50);
    doc.text("URL: https://tu-web.vercel.app", 10, 60);

    doc.setFontSize(14);
    doc.text("Introducción", 10, 80);

    doc.setFontSize(10);
    doc.text(
      "Este documento presenta la auditoría de accesibilidad realizada en este proyecto aprobada por LightHouse. Se han evaluado aspectos clave como el contraste de colores, la navegación por teclado, el uso de etiquetas ARIA y la estructura semántica del HTML.",
      10,
      90,
      { maxWidth: 180 }
    );

    doc.save("informe-accesibilidad.pdf");
  };

  return (
    <button onClick={generarPDF} aria-label="Descargar informe PDF" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
      Descargar informe PDF
    </button>
  );
}

export default InformePDF;