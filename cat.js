const fetch = require('node-fetch')

const catAPI = 'https://api.thecatapi.com/v1/images/search'

module.exports = {
    name: 'cat',
    description: 'cuz Cats Are Annoying',
    execute(message) {
        fetch(catAPI)
	.then(result => {return result.json()})
	.then(data => {
	    const embed = {image: {url: data.url }}
	    message.channel.send({ embed });
	}).catch(err => console.error(err));
    }
}