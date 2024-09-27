import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            refresh: true,
        }),
        react(),
    ],

    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'],

    //Cette partie n'est parise en compte

  //   server: {
  //   host: '0.0.0.0', 
  //   port: 3000,      
  //   hmr: {
  //     host: '172.12.12.27' 
  //   }
  // }
});
