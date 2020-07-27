const fetch = require('node-fetch')

const inspirobotAPI = 'https://inspirobot.me/api?generate=true'

module.exports = {
    name: 'quote',
    description: 'Quotes from inspirobot.me',
    execute(message) {
        fetch(inspirobotAPI)
        .then(res => {return res.text()})
        .then(data => {
            let embed = {image: {url:data }}
            message.channel.send({embed});
        })
    }
}