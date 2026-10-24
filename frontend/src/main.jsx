import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Automatically remove Netlify badge/drawer widget if injected
if (typeof window !== 'undefined') {
  const purgeNetlifyBadge = () => {
    // 1. Selector purge
    document.querySelectorAll('[class*="netlify"], [id*="netlify"], netlify-drawer-widget, iframe[src*="netlify"], a[href*="netlify.com"]').forEach(el => {
      try {
        el.style.setProperty('display', 'none', 'important');
        el.remove();
      } catch (e) {}
    });

    // 2. Text-content & Shadow DOM piercing purge
    document.querySelectorAll('body *').forEach(el => {
      try {
        if (el.shadowRoot) {
          el.shadowRoot.querySelectorAll('*').forEach(shadowEl => {
            if (shadowEl.textContent && /powered\s+by\s+netlify/i.test(shadowEl.textContent)) {
              shadowEl.style.setProperty('display', 'none', 'important');
              shadowEl.remove();
            }
          });
        }
        if (el.textContent && /powered\s+by\s+netlify/i.test(el.textContent)) {
          if (el.children.length === 0 || el.tagName === 'A' || el.tagName === 'BUTTON' || (el.offsetWidth > 0 && el.offsetWidth < 300)) {
            el.style.setProperty('display', 'none', 'important');
            el.remove();
          }
        }
      } catch (e) {}
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
