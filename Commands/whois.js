
module.exports = {
    name: 'whois',
    description: 'Display info about user',
    execute(message) {
        //log(console);
        const user = message.mentions.users.first();
        const member = message.guild.member(user);
        message.channel.send(`Username: ${user.tag}\nUser ID: ${user.id}`);
    },
};