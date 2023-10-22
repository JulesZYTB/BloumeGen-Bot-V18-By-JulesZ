const discord = require('discord.js')
const config = require('../config.json')
let footer = config.footer;

module.exports = {
    name: "membercount",
    category: "member",
    cooldown: 5,
    description: "nombre de membres",
    aliases: ['members', 'memberscount'],
    usage: "<prefix> membercount",
	execute(client, message, args) {
        let guild = message.guild;
        let membercount = guild.memberCount;
        let emb = new discord.MessageEmbed()
        .setTitle('😀 Members')
        .setDescription(membercount)
        .setColor(0x000FF)
        .setFooter('Développée par JulesZYTB, BloumeGen', 'https://share.creavite.co/MBqK7PfYzbvFvpHN.gif')
        message.channel.send(emb)

    }}
