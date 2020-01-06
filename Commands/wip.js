module.exports = {
    name: 'wip',
    description: 'reply with hello',
    cooldown: 0,
    execute(message) {
        
        if (message.deletable) message.delete();

        if (args.length < 0) return message.reply(`Nothing to say?`).then(m => m.delete(5000));

        // Role color
        const roleColor = message.guild.me.highestRole.hexColor;

        // If the first argument is embed, send an embed,
        // otherwise, send a normal message
        if (args[0].toLowerCase() === "embed") {
            const embed = new RichEmbed()
                .setDescription(args.slice(1).join(" "))
                .setColor(roleColor === "#000000" ? "#ffffff" : roleColorv)
                .setTimestamp()
                .setImage(client.user.displayAvatarURL)
                .setAuthor(message.author.username, message.author.displayAvatarURL);

            message.channel.send(embed);
        } else {
            message.channel.send(args.join(" "));
        }
    },
};