//config file is helpful in running code in different environments
//NODE_ENV should be set in heroku settings otherwise it will return null
var config = {};
var configObj = {
    dev : {
        mode : process.env.NODE_ENV || 'dev',
        port : process.env.PORT || 3000
    },
    qa : {
        mode : process.env.NODE_ENV || 'qa',
        port : process.env.PORT || 4000
    },
    production : {
        mode : process.env.NODE_ENV || 'production',
        port : process.env.PORT || 5000
    },
};

if(process.argv[2] === undefined || process.argv[2] === null){
    if(process.env.NODE_ENV){
        config.port = process.env.PORT;
        config.mode = process.env.NODE_ENV;
    }
    else {
        config.port = configObj.dev.port;
        config.mode = configObj.dev.mode;
    }
}
else if(process.argv[2] === 'dev' || process.argv[2] === 'qa' || process.argv[2] === 'production') {
    config.port = configObj[process.argv[2]].port;
    config.mode = configObj[process.argv[2]].mode;
}
else {
    console.log('Invalid config mode switching to dev mode..');
    config.port = configObj.dev.port;
    config.mode = configObj.dev.mode;
}

module.exports = config;