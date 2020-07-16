module.exports = {
  apps: [{
    name: 'modular',
    script: 'index.js',
    kill_timeout: 5000,
    listen_timeout: 5000,
    wait_ready: true,
    max_memory_restart: '250M',
  }]
}
