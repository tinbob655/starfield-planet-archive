import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss';

import Home from './components/pages/home/home.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);
