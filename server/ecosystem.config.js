module.exports = {
  apps : [{
    name: 'DB2',
    script: 'pm2 reload ./databaseServer/main.js',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    },
  },
  {
    name: 'Account Server',
    script: 'pm2 reload ./accountsserver/main.js',
    instances: 1,
    autorestart: true,
    watch: true,
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  },
   {
	   name: 'Server',
	   script: 'pm2 reload ./server/main.js',
	   instances: 1,
	   autorestart: true,
	   watch: true,
	   env: {
      	     NODE_ENV: "development",
    	   },
      	   env_production: {
      		NODE_ENV: "production",
    	   }
   }

  ],
};
