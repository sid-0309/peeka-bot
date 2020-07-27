const fetch = require('node-fetch')

const opentdbURL = 'https://opentdb.com/api.php?amount=1'


module.exports = {
    name: 'trivia',
    description: 'Picks your brain if you have one',
    execute(message) {
        fetch(opentdbURL)
            .then(res => res.json())
            .then((data) => {
                let q = data.results[0].question.replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace('<[^>]+>', '').replace('&#39;', "'").replace('&#32;', ' ').replace('&eacute;', 'é').replace('&rsquo;', "'").replace('&#039;', "'")
                let a = data.results[0].correct_answer
                let answers = data.results[0].incorrect_answers
                answers.push(a)

                for (let i = answers.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    [answers[i], answers[j]] = [answers[j], answers[i]];
                }

                message.channel.send(`${q} 

Options: ${answers} 

${message.author}`)
                setTimeout(() => message.channel.send(`Time's up ${message.author}, the answer is ${a}`), 15000)
            })
    }
}

