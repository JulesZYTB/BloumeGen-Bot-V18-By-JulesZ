const { MessageEmbed } = require('discord.js');
const db = require(`quick.db`)
const ms = require('ms');
module.exports = {
    name: 'slowmode',

    execute(client, message, args) {


        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send("Tu n'as pas la permission **MANAGE_CHANNELS** !").then(m => m.delete({ timeout: 5000 }));

        if (!args[0]) return 

        const currentCooldown = message.channel.rateLimitPerUser;

        const reason = args[1] ? args.slice(1).join(' ') : 'Pas de raison';

        const embed = new MessageEmbed()
            .setFooter(`${message.author.tag} | ${message.author.id}`, message.author.displayAvatarURL({ dynamic: true }));

        if (args[0] === 'off') {

            if (currentCooldown === 0) return 
            
            message.channel.send("Slowmode OFF, désactiver !")
            return message.channel.setRateLimitPerUser(0, reason)
            

        }

        const time = ms(args[0]) / 1000;

        if (isNaN(time)) return message.channel.send(`Durée incorrecte : essayez a nouveau**${prefix}slowmode 4m**`).then(m => m.delete({ timeout: 5000 }));

        if (time >= 21600) return message.channel.send("Durée incorrecte : essayez a nouveau **${prefix}slowmode 4m**").then(m => m.delete({ timeout: 5000 }));

        if (currentCooldown === time) return 

message.channel.send('Le mode lent est maintenant activé, vous pouvez le désactiver avec la commande ${prefix}slowmode off')
        message.channel.setRateLimitPerUser(time, reason).then(m => m.send(embed));

    }
}