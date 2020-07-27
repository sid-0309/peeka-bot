const { execute } = require("./ping");

module.exports = {
    name: "peeka",
    description: "Peeka. Peke",
    execute(message) {
        message.reply("peke")
    }
}