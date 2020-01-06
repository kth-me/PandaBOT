
module.exports = {
    name: 'whois',
    description: 'Display info about user',
    execute(message) {
        console.log('whois command used!');
        const user = message.mentions.users.first();
        const member = message.guild.member(user);
        //message.channel.send(`Avatar: ${user.displayAvatarURL}\nUsername: ${user.tag}\nUser ID: ${user.id}\nUser Creation Date: ${user.creationDate}`);

        //


        const Discord = require('discord.js');
        const exampleEmbed = new Discord.RichEmbed()
            .setColor('#9999ff') //lightblue 0099ff
            .setTitle(`${user.tag}`)
            .setURL(`${user.displayAvatarURL}`)
            //.setAuthor('Some name', 'png', 'link')
            .setDescription(`UserID: ${user.id}\nAccount created:`)
            //.setThumbnail('png')
            //.addField('Roles', `${guild.member.id>}`)
            //BUGGED.addBlankField(`Status: ${user.presence}`)
            //.addField('Inline field title', 'Some value here', true)
            //.addField('Inline field title', 'Some value here', true)
            //.addField('Inline field title', 'Some value here', true)
            //.setImage('https://i.imgur.com/wSTFkRM.png')
            .setTimestamp()
            .setFooter('PandaBOT, created by Punda#0001', 'https://cdn.discordapp.com/avatars/398355997929897986/a_312b74874079b29bb2e87fea88e406f7.gif');

        message.channel.send(exampleEmbed);
    }, 
};