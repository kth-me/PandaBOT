
module.exports = {
    name: 'whois',
    description: 'Display info about user',
    execute(message) {
        console.log('whois command used!');
        const user = message.mentions.users.first();
        const member = message.guild.member(user);
        message.channel.send(`Avatar: ${user.displayAvatarURL}\nUsername: ${user.tag}\nUser ID: ${user.id}\nUser Creation Date: ${user.creationDate}`);
    },
};