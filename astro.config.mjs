// // @ts-check
// import { defineConfig } from 'astro/config';

// import tailwindcss from '@tailwindcss/vite';

// // https://astro.build/config
// export default defineConfig({
//   vite: {
//     plugins: [tailwindcss()]
//   }
// });

// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://khudeengineer.github.io', // আপনার লাইভ ওয়েবসাইটের লিংক
  vite: {
    plugins: [tailwindcss()]
  }
});