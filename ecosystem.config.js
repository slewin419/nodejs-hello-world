module.exports = {
  apps : [{
    name: 'hello-world',
    version: '0.9.0',
    script: 'index.js',
    watch: 'false'
  }],
  deploy : {
    qa : {
      user : 'pi',
      host : '192.168.0.19',
      ref  : 'origin/master',
      repo : 'git@github.com:slewin419/nodejs-hello-world.git',
      path : '/var/www/html/nodejs-hello-world',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.config.js --env qa --name nodejs-hello-world',
      'post-setup': 'ls -la',
      'pre-setup': ''
    }
  }
};
