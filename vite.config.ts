import { defineConfig } from 'vite'
import dns from 'dns'

import react from '@vitejs/plugin-react-swc'

dns.setDefaultResultOrder('verbatim')

export default defineConfig({
	server: { port: 3000, host: 'localhost' },
	plugins: [react()],
})
