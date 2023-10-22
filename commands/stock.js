const Discord = require('discord.js');
const fs = require('fs');

module.exports = {
    name: "stock",
    category: "sd",
    description: "sd",
    aliases: ['stonk', 'stock', 'stocks', 'stonks'],
    usage: "sd",
    execute(client, message) {
        let desc = "\n"
        let t = 0
        let t2 = 0

        let first_directory = `${__dirname}/../stock/`
        fs.readdirSync(first_directory).forEach(file => {
            t += 1
            let file_name = file.split('.txt')[0];
            let file_s = __dirname+`/../stock/${file}`

            fs.readFile(file_s, "utf8", (err, accdata) => {        
                let account_nb = accdata.split('\n').length -1
                t2 += 1
               
                    desc += `😀${file_name} : **${account_nb}** Comptes Prémium\n`
                    
                    if(t2 == t) {
                        const embed = new Discord.MessageEmbed()
                        .setColor(0x000FF)
                        .setTitle('Stock du bot generateur ™️')
                        .setDescription(`Voisi tout les stock disponible \n Tout les stocks sont vérifié est changé regulierment \n ${desc}`)
                        .addField('Sponsor', `[Click ici](https://manager.bloume-gen.tk/)`)
                        .addField('CREDIT', `Bot By JulesZ & BloumeGen`)
                        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 64 }))
                        .setTimestamp()
                        
                        message.channel.send(embed)                
                    
                }
            })
        })
    }
};