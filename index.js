// npmjs packages
const Discord = require('discord.js');
const fs = require('fs');

// configuration
const config = require('./config.json');

// create client
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// const commands
client.commands = new Discord.Collection();

// load commands
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// const commands
for (const file of commandFiles) {

    // read command file
	const command = require(`./commands/${file}`);

    // set the command
	client.commands.set(command.name, command);
};

// login with token
client.login(config.token)

// ready event
client.once('ready', () => {

    // write to console
	console.log(`${client.user.tag}`);

    // set activity
    client.user.setPresence({ activity: { name: "BloumeGen https://manager.bloume-gen.tk/", type: 1, url: "https://manager.bloume-gen.tk"}})
});

// message event // command handling
client.on('message', (message) => {
    // command without prefix
	if (!message.content.startsWith(config.prefix)) {
        // cancel
        return;
    };
    // if a bot execute a command
	if (message.author.bot) {
        // cancel
        return;
    };

    // get the args
	const args = message.content.slice(config.prefix.length).trim().split(/ +/);

    // const command
	const command = args.shift().toLowerCase();

    // if not match
	if (!client.commands.has(command)) {

        // send message to channel
    };

    // try to executing the command
	try {
        if(!message.member.roles.cache.has(config.VIP_ID)){
        // get command
        const embed = new Discord.MessageEmbed()
        .setTitle(message.author.username)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 64 }))
        .addField("Auteur du message ",`<@${message.author.id}>`,true)
        .addField("L'auteur est VIP ?","`Non`",true)
        .addField("Commande exécutée",`\`${message.content}\``,false)
        .setColor(0x000FF)
        .setDescription(`Quelqu'un viens D'utilisé la commande ${command} !`)
        client.channels.cache.get(`${config.logs}`).send(embed)
        }
        else if(message.member.roles.cache.has(config.VIP_ID)){
            const embed = new Discord.MessageEmbed()
        .setTitle(message.author.username)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 64 }))
        .addField("Auteur du message ",`<@${message.author.id}>`,true)
        .addField("L'auteur est VIP ?","`Oui`",true)
        .addField("Commande exécutée",`\`${message.content}\``,false)
        .setColor(0x000FF)
        .setDescription(`Quelqu'un viens D'utilisé la commande ${command} !`)
        client.channels.cache.get(`${config.logs}`).send(embed)
        }
		client.commands.get(command).execute(client, message, args);
 
    // if error
	} catch (error) {
        console.log(error)
        // go config les logs hien sinon ca marche pas!
	};
});