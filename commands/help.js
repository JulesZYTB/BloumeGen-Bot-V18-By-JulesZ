const { MessageEmbed } = require("discord.js");
const discord = require("discord.js");
const pagination = require('discord.js-pagination');
const config = require("../config.json")
let prefix = config.prefix

module.exports = {
    name: "help",
    category: "config",
    cooldown: 5,
    description: "panel d'help",
    aliases: ['help', 'wat'],
    usage: "+help",
	execute(client, message, args) {
		
		
        var gen = new discord.MessageEmbed()
        .setTitle("📌・Commandes Générateur et fournisseur")
        .setColor(0x000FF)
        .addField(`\`${prefix}gen <service>\``, "Générer un service dans le salon gen.")
         .addField(`\`${prefix}gen+ <service>\``, "Générer un service dans le salon gen+.")
        .addField(`\`${prefix}unstock <service>\``, "Unstock un service (enlevé du stock a un service).")
        .addField(`\`${prefix}create <service>\``, "Créer un nouveau service." )
        .addField(`\`${prefix}restock <service> <compte/fichier>\``, "Restock un fichier ou plusieurs comptes a la fois.." )
        .addField(`\`${prefix}stock\``, "Vérifie les stocks du serveur." )
        .addField('Sponsor', `[Click ici](https://manager.bloume-gen.tk/)`)
        .setThumbnail(`https://share.creavite.co/MBqK7PfYzbvFvpHN.gif`)

 var owner = new discord.MessageEmbed()
        .setTitle("👑・Commandes Des fondateurs ")
        .setColor(0x000FF)
        .addField(`\`${prefix}membercount\`` , `Nombre de membres dans le serveur.`)
        .addField(`\`${prefix}reload\`` , `Restart le bot (avoir dans la console) .`)
         .addField(`\`${prefix}set-channel [add/remove]\`` , `Modifier ou ajoutée un salon des generations`)
        .addField(`\`${prefix}set-logs [add/remove]\`` , `Modifier ou ajoutée un salon des logs`)
        .addField(`\`${prefix}ping\`` , `Vérifier la latence du bot.`)
        .addField('Sponsor', `[Click ici](https://manager.bloume-gen.tk/)`)
        .setThumbnail(`https://share.creavite.co/MBqK7PfYzbvFvpHN.gif`)


  var modo = new discord.MessageEmbed()
  .setTitle("😎・Commandes Modération ")
  .setColor(0x000FF)
  .setFooter(`BloumeGen・Prefix : ${prefix}`)
  .addField(`\`${prefix}lock/unlock <channel>\``, `Ouvrir ou fermer un salon.`)
  .addField(`\`${prefix}kick <@username>\``, `exclure un membre bien mérité.`)
.addField(`\`${prefix}nuke <channel>\``, `Supprime un salon et le recrée (Un clone).`)
  .addField('Sponsor', `[Click ici](https://manager.bloume-gen.tk/)`)
  .setThumbnail(`https://share.creavite.co/MBqK7PfYzbvFvpHN.gif`)
  
  
  const pages = [
gen,
owner,
modo,
]

const emojiList = ["↩️", "↪️"];


const timeout = '100000';
pagination(message, pages, emojiList, timeout)

  }
};