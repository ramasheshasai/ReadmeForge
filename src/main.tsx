import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TemplatesGallery from './pages/TemplatesGallery';
import TemplateEditor from './pages/TemplateEditor';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/templates" element={<TemplatesGallery />} />
        <Route path="/editor/:templateId" element={<TemplateEditor />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
