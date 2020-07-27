
module.exports = {
    name: "tex",
    description: "Render LaTeX",
    execute(message) {
        let embed = {image: {url:`https://latex.codecogs.com/png.latex?%5Cdpi%7B120%7D%20%5Chuge%20%5Ccolor%7Bwhite%7D%7B${message.content.slice(5)}%7D` }}
        message.channel.send({embed});
    }
}
