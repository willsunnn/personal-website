// Core viewer
import { Worker, Viewer } from '@react-pdf-viewer/core';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

export const ResumePage = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div className="w-full h-max">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl={"/Resume.pdf"} plugins={[defaultLayoutPluginInstance]} />
      </Worker>
    </div>
  )
}
