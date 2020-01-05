module.exports = {
    name: 'code',
    description: 'give user code for the bot.',
    execute(message) {
        console.log('code command used!');
        message.channel.send('Here is my code: https://github.com/kth-me/PandaBOT');
    },
};