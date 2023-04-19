//** === ===== === Vite Config === ==== === */
import { defineConfig, loadEnv } from 'vite';
import { dirname, resolve } from 'path';
const __dirname = resolve(dirname(''));

export default defineConfig(({ command, mode }) => {
  const port = 3000;

  console.log(command, mode);
  /* === loadEnv*/
  const env = loadEnv(mode, process.cwd());
  console.log(env);
  console.log(env.VITE_NAME);

  /* === command & mode*/
  if (mode === 'development') {
    console.log('State Dev');
    return {
      server: {
        port,
      },
    };
  } else {
    console.log('State Production - Build');
    return {
      build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, `index.html`),
            help: resolve(__dirname, `help`, `help.html`),
            nested: resolve(__dirname, `nested`, `nested.html`),
          },
        },
      },
    };
  }
});
