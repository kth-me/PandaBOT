module.exports = {
    name: 'punda',
    description: 'Pundas special command',
    execute(message) {
        console.log('punda command used!');
        message.channel.send('Punda#0001 is my creator, he is a legend as well, he totally didnt program me to say this at all... :-)');
    },
};