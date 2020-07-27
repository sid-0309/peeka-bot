const fetch = require("node-fetch")

const trumpPersonalizedAPI = 'https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q='
const trumpRandomAPI = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random'

module.exports = {
    name: 'trump',
    description: 'Whats Orange boy gotta say',
    execute(message) {
        let args = message.content.trim()
	let api = trumpRandomAPI
	if(args.length > 6) {
		api = trumpPersonalizedAPI + args.slice(7)		
	}
	fetch(api)
	.then(result => {return result.json()})
	.then(data => {
		message.channel.send("> " + data.message)	
	})
    }
}