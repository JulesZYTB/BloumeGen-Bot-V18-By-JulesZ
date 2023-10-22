const { MessageEmbed } = require("discord.js"), 
fs = require("fs"), 
getNow = () => { return { time: new Date().toLocaleString("en-GB", { timeZone: "Europe/Paris", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }), }; };

module.exports = {
    name: "nuke",
    category: "nuke",
    cooldown: 0,
    description: "Nuke Channel!",
    usage: "Nuke <Mention Channel>",

    execute(client, message, args) {
    if(!message.guild) return;
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return;
    message.channel.clone({reason: `Nuke par  ${message.author.tag} (${message.author.id})`}).then(c => c.setPosition(message.channel.position) && c.send(`héhé, Channel nuke par ${message.author}`))
    message.channel.delete() 
    }};
