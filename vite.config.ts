import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {find: '@common', replacement: path.resolve(__dirname, 'src/modules/Common')},
      {find: '@welcome', replacement: path.resolve(__dirname, 'src/modules/WelcomeView')},
      {find: '@missings', replacement: path.resolve(__dirname, 'src/modules/MissingsView')},
      {find: '@report', replacement: path.resolve(__dirname, 'src/modules/ReportView')},
      {find: '@detailedMissing', replacement: path.resolve(__dirname, 'src/modules/DetailedMissingView')},
    ]
  },
  plugins: [react()],
})
