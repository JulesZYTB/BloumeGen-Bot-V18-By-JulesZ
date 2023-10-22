const Discord = require('discord.js');
module.exports = {
    name: 'lock',
    description: 'Verrouille un salon ou le salon actuel',
    aliases: ['lockchannel', 'close', 'closechannel'],
    cat: 'moderation',
    botpermissions: ["SEND_MESSAGES", "EMBED_LINKS", "MANAGE_CHANNELS"],

    permissions: ['MANAGE_CHANNELS'],
    execute(client, message, args) {
        if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('Tu ne peux pas faire ça !')
        if (!client.lockit) client.lockit = [];
        message.channel.updateOverwrite(message.guild.roles.everyone, {
            SEND_MESSAGES: false
        }).then(g => {
            g.edit({
                name: ' 🔒' + g.name
            })
            g.send(`Le salon a été bloqué par ${message.author}`)
        })





    },
};