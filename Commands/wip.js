module.exports = {
    name: 'hi',
    description: 'reply with hello',
    cooldown: 0,
    execute(message) {
        const channel = member.guild.channels.find(ch => ch.name === 'member-log');
        if (!channel) return;
        channel.send(`Welcome to the server, ${member}`);
    },
};