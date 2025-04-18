import React from 'react'
import { createRoot } from 'react-dom/client';
import { App } from './1_app'
import '@shared/styles/global.css'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
