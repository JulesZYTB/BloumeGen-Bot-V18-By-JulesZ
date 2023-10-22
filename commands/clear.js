const { Client, Message, MessageEmbed } = require('discord.js');
const db = require("quick.db")
const config = require("../config.json")

module.exports = {
    name: 'clear',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
      
        execute(client, message, args) {
     
        let color =  "BLUE"
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande !');
        if (!args[0]) return message.channel.send({embed: {color: color, description: 'Vous devez indiquer un nombre de message à supprimer !'}});
        if (parseInt(args[0]) <= 0 || parseInt(args[0]) > 99) return message.channel.send('Le nombre de message à supprimer doit être compris entre 1 et 99 !');
        if (isNaN(args[0])) return message.channel.send('Le nombre de message à supprimer doit être écrit en chiffre et compris entre 1 et 99 !');
        message.channel.bulkDelete(parseInt(args[0]) + 1)
        message.channel.send(`Vous avez supprimé ${args[0]} message(s).`).then(msg => {
            setTimeout(() => {
                msg.delete()
            }, 2000);
        });
    }
}