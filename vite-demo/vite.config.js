//** === ===== === Vite Config === ==== === */
import { defineConfig, loadEnv } from 'vite';

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
  } else {
    console.log('State Production - Build');
  }

  return {
    server: {
      port,
    },
  };
});
