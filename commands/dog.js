const fetch = require('node-fetch')

const dogAPI = 'https://api.thedogapi.com/v1/images/search?mime_types=gif'

module.exports = {
    name: 'dog',
    description: 'cuz Dogs Are Amazing',
    execute(message) {
        fetch(dogAPI)
	.then(result => {return result.json()})
	.then(data => {
	    const embed = {image: {url: data[0].url }}
	    message.channel.send({ embed });
	}).catch(err => console.error(err));
    }
}
