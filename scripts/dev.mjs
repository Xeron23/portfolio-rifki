// The preview daemon uses Vite-style flags. Translate them for Next.js while
// keeping `npm run dev` compatible with ordinary local development.
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const input = process.argv.slice(2);
const output = ['dev'];
let hasPort = false;
for (let i = 0; i < input.length; i++) {
  const arg = input[i];
  if (arg === '--strictPort') continue;
  if (arg === '--host') { output.push('--hostname', input[++i]); continue; }
  if (arg === '--port' || arg === '-p') hasPort = true;
  output.push(arg);
}
if (!hasPort) output.push('--port', '4003');
const child = spawn(process.execPath, [require.resolve('next/dist/bin/next'), ...output], { stdio: 'inherit' });
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => child.kill(signal));
child.on('exit', (code) => process.exit(code ?? 0));
