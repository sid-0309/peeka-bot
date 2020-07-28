const fetch = require('node-fetch')

const catAPI = 'https://api.thecatapi.com/v1/images/search?mime_types=gif'

module.exports = {
    name: 'cat',
    description: 'cuz Cats Are Annoying',
    execute(message) {
        fetch(catAPI)
	.then(result => {return result.json()})
	.then(data => {
	    const embed = {image: {url: data[0].url }}
	    message.channel.send({ embed });
	}).catch(err => console.error(err));
    }
}
