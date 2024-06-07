import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app1",
      filename: "remoteEntry.js",
      exposes: {
        "./App1Home": "./src/App1Home",
        "./App1Content": "./src/App1Content",
        "./App1Detail": "./src/App1Detail",
        "./CounterButton": "./src/CounterButton",
        "./App1Layout": "./src/App1Layout",
      },
      remotes: {
        shellApp: "http://localhost:5001/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "react-router-dom", "@group-ui/group-ui-react"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
