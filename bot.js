//Imports
const { readdirSync } = require("fs");
const { Client, Collection } = require("discord.js");
const { join } = require("path");

//Config
const { PREFIX  } = require('./config.json');
const TOKEN = process.env.BOT_TOKEN

//Setting up client
const client = new Client({ disableMentions: "everyone" });
client.login(TOKEN);
client.commands = new Collection();
client.prefix = PREFIX;
client.queue = new Map();

//Client States
client.on("ready", () => {
  console.log(`${client.user.username} ready!`);
  client.user.setActivity(`${PREFIX}help`);
});
client.once('reconnecting', () => console.log('Reconnecting!'));
client.once('disconnect', () => console.log('Disconnect!'));
client.on("warn", (info) => console.log(info));
client.on("error", console.error);

//Import Commands
const commandFiles = readdirSync(join(__dirname, "commands")).filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(join(__dirname, "commands", `${file}`));
  client.commands.set(command.name, command);
}

//Command Handling
client.on('message', async message => {
	
	//Filter
	if (message.author.bot) return;
  	if (!message.guild) return;
	if (!message.content.startsWith(PREFIX)) return;
	
	//Parsing
	const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    	const commandName = args.shift().toLowerCase();
    	const command =
      	client.commands.get(commandName) ||
      	client.commands.find((cmd) => cmd.aliases && cmd.aliases.includes(commandName));

    	if (!command) return;
	
	//Execute
	try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply("There was an error executing that command.").catch(console.error);
	}
});


