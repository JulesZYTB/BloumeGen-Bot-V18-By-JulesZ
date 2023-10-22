const { Client, Message, MessageEmbed } = require('discord.js');
const config = require("../config.json")

module.exports = {
    name: 'say',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
      
        execute(client, message, args) {
        try{
      if(!args[0])
        return message.channel.send(new MessageEmbed()
            .setColor("#e01e01")
            .setFooter('Développée par JulesZYTB, BloumeGen')
            .setTitle(`❌ ERROR | Vous n'avez pas envoyé un msg, s'il vous plaît écrivez un msg`)
            .setDescription(`Usage: \`${prefix}say <Votre text>\``)
        );
      message.channel.send(text);
    } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.channel.send(new MessageEmbed()
            .setColor("#ffca4f")
            .setFooter('Développée par JulesZYTB, BloumeGen')
            .setTitle(`❌ ERROR | Une erreur ses produite`)
            .setDescription(`\`\`\`${e.message}\`\`\``)
        );
    }

}
	}