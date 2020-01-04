module.exports = {
    name: 'modhelp',
    description: 'help!',
    execute(message) {
        message.channel.send('List of available mod commands: ban, kick, mute, etcWIP.');
    },
};