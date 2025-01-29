import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env
  },
  // server: {
  //   port: 3000,
  //   open: true,
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:3001',
  //     }
  //   }
  // } 

});