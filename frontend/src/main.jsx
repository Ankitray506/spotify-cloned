import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Automatically remove Netlify badge/drawer widget if injected
if (typeof window !== 'undefined') {
  const purgeNetlifyBadge = () => {
    document.querySelectorAll('[class*="netlify"], [id*="netlify"], netlify-drawer-widget, iframe[src*="netlify"]').forEach(el => el.remove());
    document.querySelectorAll('div, button, a').forEach(el => {
      if (el.textContent && el.textContent.toLowerCase().includes('powered by netlify')) {
        el.style.setProperty('display', 'none', 'important');
        el.remove();
      }
    });
  };
  purgeNetlifyBadge();
  window.addEventListener('DOMContentLoaded', purgeNetlifyBadge);
  const badgeObserver = new MutationObserver(purgeNetlifyBadge);
  badgeObserver.observe(document.documentElement, { childList: true, subtree: true });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
