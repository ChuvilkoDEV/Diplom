import React from 'react'
import { createRoot } from 'react-dom/client';
import { App } from './1_app'
import '@shared/styles/global.css'
import { store } from '@app/store/store'
import { Provider } from 'react-redux'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
