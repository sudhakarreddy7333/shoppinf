var config = {
    local : {
        mode : 'local',
        port : 3000
    },
    qa : {
        mode : 'qa',
        port : 4000
    },
    production : {
        mode : 'production',
        port : 5000
    },
};

module.exports = config;