const math = require("mathjs")

module.exports = {
    name: 'calc',
    description: 'Calculator. Go wild',
    execute(message) {
        message.channel.send(math.evaluate(message.content.slice(6)))
    }
}

