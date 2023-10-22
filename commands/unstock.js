const discord = require('discord.js')
const fs = require('fs');
const { dirname } = require('path');
const prefix = require('../config.json')

module.exports = {
    name:"unstock",
    execute(client,message){
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Tu ne peux pas faire ça !')
        const path = `${__dirname}/../stock/${args[1]}.txt`
        fs.writeFile(path,"",(err) => {
            if(!err){
                const embed = new discord.MessageEmbed()
                .setTitle("Unstock effectué avec succès")
               
                .setColor(0x000FF)
                message.channel.send(embed)
            }
            else{
            message.channel.send("**!! Une erreur est survenue !!**")
            }
        })
    }
}