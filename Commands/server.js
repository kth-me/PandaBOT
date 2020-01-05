
module.exports = {
    name: 'server',
    description: 'Display info about this server.',
    execute(message) {
        console.log('server command used!');
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    },
};