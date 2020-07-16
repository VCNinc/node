module.exports = {
  apps : [{
    name: 'modular',
    script: 'index.js',
    watch: '.',
    kill_timeout: 5000,
    listen_timeout: 5000,
    wait_ready: true,
    max_memory_restart: '250M',
    instances : 1,
    exec_mode : 'cluster'
  }, {
    script: './service-worker/',
    watch: ['./service-worker']
  }]
};
