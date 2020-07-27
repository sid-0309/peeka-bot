const fetch = require('node-fetch')

const duckAPI = 'https://random-d.uk/api/v2/random?type=gif'

module.exports = {
    name: 'duck',
    description: 'cuz Duck Lives Matter',
    execute(message) {
        fetch(duckAPI)
	.then(result => {return result.json()})
	.then(data => {
	    const embed = {image: {url: data.url }}
	    message.channel.send({ embed });
	}).catch(err => console.error(err));
    }
}