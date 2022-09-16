import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import 'index.css'

const container = document.getElementById('app')
const root = createRoot(container)

document.addEventListener('DOMContentLoaded', () => {
  root.render(
    <App />
  );
});