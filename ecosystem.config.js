module.exports = {
      apps: [
        {
          name: 'evict.cc',
          script: 'yarn',
          args: 'run start',
          interpreter: 'none', // This tells PM2 not to use Node.js to run the script
        }
      ],
    };
