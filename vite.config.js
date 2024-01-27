import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // base: 'https://PrashanthKumar0.github.io/unnamed-food-app/',
  plugins: [react()],
})
