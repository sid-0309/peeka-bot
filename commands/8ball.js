const eightBall = [
    'As I see it, yes.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    'Don\'t count on it.',
    'It is certain.',
    'It is decidedly so.'
];

module.exports = {
    name: '8ball',
    description: 'Magic 8ball',
    execute(message) {
        if (message.content == "") return message.channel.send(`${message.author} Ask a question`);
        const i = Math.floor(Math.random() * eightBall.length);
        const reply = eightBall[i];
        message.channel.send(`${message.author} ${reply}`);
    }
}