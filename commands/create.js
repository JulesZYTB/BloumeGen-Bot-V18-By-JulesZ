// npmjs packages
const Discord = require('discord.js');
const fs = require('fs');

// configuration
const config = require('../config.json');

// export command
module.exports = {
    
    // command name
	name: 'create',

    // command description
	description: 'Create a service.',

    // command
    execute(client, message, args) {

        // split message content
        const messageArray = message.content.split(' ');

        // args
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('tas pas les perms gro')
        // if no args[0] (service)
        if (!args[0]) {

            // send message to channel
            message.channel.send(

                // embed
                new Discord.MessageEmbed()
                .setColor(config.color.red)
                .setTitle('service manquant')
                .setDescription('met un service a créer')
                .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 64 }))
                .setTimestamp()
            );

            // cancel
            return;
        };

        // stock files path
        const filePath = `${__dirname}/../stock/${args[0]}.txt`;

        // write file
        fs.writeFile(filePath, '', function (error) {

            // if error
            if (error) {
                
                // write to console
                console.log(error);
            };

            // send message to channel
            message.channel.send(
                new Discord.MessageEmbed()
                .setColor(config.color.green)
                .setTitle('service créé')
                .setDescription(`le service ${args[0]} a bien été créé ✔`)
                .setFooter(message.author.tag, message.author.displayAvatarURL())
                .setTimestamp()
            );
        });
    },
};