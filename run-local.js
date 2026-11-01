const { spawn } = require('child_process');

console.log('=======================================================');
console.log(' Starting KARIGAAR Full-Stack Marketplace');
console.log('=======================================================');

const server = spawn('node', ['server/server.js'], {
  stdio: 'inherit',
  shell: true,
});

server.on('error', (err) => {
  console.error('Failed to start backend server:', err);
});

const web = spawn(process.platform === 'win32' ? 'npx.cmd' : 'npx', ['expo', 'start', '--web', '--port', '8081'], {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, EXPO_NO_TELEMETRY: '1' },
});

web.on('error', (err) => {
  console.error('Failed to start web frontend:', err);
});

process.on('SIGINT', () => {
  server.kill();
  web.kill();
  process.exit();
});
