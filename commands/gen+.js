// npmjs packages
const Discord = require('discord.js');
const fs = require('fs');
const db = require("quick.db");
// configuration
const config = require('../config.json');
VIP_ID = config.VIP_ID

// collections
const generated = new Set();

// export command
module.exports = {
    
    // command name
	name: 'gen+',

    // command description
	description: 'generer un service.',

    // command
    execute(client, message, args) {
let channel = db.get(`channelplus_${message.guild.id}`)
   if (channel === null) return message.channel.send("Un administrateur doivent configurer le Channel de génération VIP pour que le serveur fonctionne ! ");
        // if gen channel
        if (message.channel.id === channel) {

            // if generated before
            if (generated.has(message.author.id)) {

                // send message to channel
                message.channel.send(
                    new Discord.MessageEmbed()
                    .setColor(0x000FF)
                    .setTitle('cooldown ⏱')
                    .setDescription('attends pour regenerer un compte')
                    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 64 }))
                    .setTimestamp()
                );

                // cancel
                return;

            // if not generated before
            } else {

                // split message content
                const messageArray = message.content.split(' ');

                // args
                const args = messageArray.slice(1);

                // if the service is missing
                if (!args[0]) {

                    // send message to channel
                    message.channel.send(

                        // embed
                        new Discord.MessageEmbed()
                        .setColor(0x000FF)
                        .setTitle('service manquant')
                        .setDescription('Tu à oublier de mentionner le service a généré !')
                        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 64 }))
                        .setTimestamp()
                    );

                    // cancel
                    return;
                };

                // stock files path
                const filePath = `${__dirname}/../stock/${args[0]}.txt`;

                // read the file
                fs.readFile(filePath, function (error, data) {

                    // if no error
                    if (!error) {

                        // text file content to string
                        data = data.toString();

                        // find position
                        const position = data.toString().indexOf('\n');

                        // find first line
                        const firstLine = data.split('\n')[0];

                        // if cannot find first line
                        if (position === -1) {

                            // send message to channel
                            message.channel.send(

                                // embed
                                new Discord.MessageEmbed()
                                .setColor(0x000FF)
                                .setTitle('erreur')
                                .setDescription(`Il n'y a plus de comptes dans\`${args[0]}\`, attends le prochain restock s'il vous plaît !`)
                                .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 64 }))
                                .setTimestamp()
                            );

                            // cancel
                            return;
                        };

                        fs.readFile(filePath, "utf8", (err, accdata) => {   
                            let account_nb = accdata.split('\n').length -1
                           
                            if(account_nb <= 10 && account_nb !== 0 && !message.member.roles.cache.has(`${VIP_ID}`)){
                                return
                            }
                                
      
               
                               
                            
                            
                        message.author.send(

                            //embed
                            new Discord.MessageEmbed()
                            .setColor(0x000FF)
                            .setImage()
                            .setTitle('compte généré ☑️')
                            .addField('Service généré', `${args[0]}`)
                            .addField('Email/Mdp', `\`\`\`${firstLine}\`\`\``)
                            .addField('Sponsor', `[Click ici](https://manager.bloume-gen.tk/)`)
                            .addField('CREDIT', `Bot By JulesZ & BloumeGen`)
                            .setTimestamp()
                        ).then(message.author.send('copié-collé:')).then(message.author.send(`\`${firstLine}\``))
                    })

                        // if the service generated successful (position)
                        if (position !== -1) {
                            fs.readFile(filePath, "utf8", (err, accdata) => {   
                                let account_nb = accdata.split('\n').length -1
                               
                                if(account_nb <= 10 && account_nb !== 0 && !message.member.roles.cache.has(`${VIP_ID}`)){
                                   
                                    const embed = new Discord.MessageEmbed()
                                    .setColor(0x000FF)
                                    .setTitle('Stock bientôt vid')
                        .setFooter("BloumeGen.")
                                    .setDescription('Les stocks pour ce service sont bientôt vid ! Veuillez attendre un restock ou devenez VIP pour accéder aux baux fin de stock restant (-10).')
                                    .addField(`\`Stocks bientôt vid'\`` , `Le stock est bientôt saturé, tu veux en avoir accées aux fin de stock paye 3€ ;), fait un ticket !`)
                                    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 64 }))
                                    .setTimestamp()
                                    .setFooter("BloumeGen.")
                                    
                                    
                                  return message.channel.send(embed)
                                }
                                else {
                            // text file to string and change position
                            data = data.substr(position + 1);

                            // write file
                            fs.writeFile(filePath, data, function (error) {

                                // send message to channel
                                message.channel.send(

                                    // embed
                                    new Discord.MessageEmbed()
                                    .setColor(0x000FF)
                                    .setTitle('compte généré ☑️')
                                    .addField(`\`Si probléme\`` , `Si le compte fonctionne pas, veuillez contacter un staffs ou régénéré un compte`)
                                    .setDescription(`Regarde dans tes mp ${message.author}! *si t'as pas recu les massages unlock tes dm stp*`)
                                    .addField('Sponsor', `[Click ici](https://manager.bloume-gen.tk/)`)
                                    .addField('CREDIT', `Bot By JulesZ & BloumeGen`)                                    
                                    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 64 }))
                                    .setTimestamp()
                                );

                                // add the message author to cooldown collection
                                generated.add(message.author.id);

                                // set cooldown (in millisec)
                                setTimeout(() => {

                                    // remove the message author from cooldown collection after timeout
                                    generated.delete(message.author.id);
                                }, config.genCooldown);

                                // if error
                                if (error) {

                                    // write to console
                                    console.log(error);
                                };
                            })}});

                        // if no lines
                        } else {

                            // send message to channel
                            message.channel.send(

                                // embed
                                new Discord.MessageEmbed()
                                .setColor(0x000FF)
                                .setTitle('erreur ❎')
                                .setDescription(`Il n'y a plus de comptes \`${args[0]}\`, attends le prochain restock.`)
                                .addField(`\`Stocks null\`` , `Pas de stock tu veux restock, devenir fournisseur viens faire un ticket`)
                                .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 64 }))
                                .setTimestamp()
                            );

                            // cancel
                            return;
                        };

                    // if error
                    } else {

                        // send message to channel
                        message.channel.send(

                            // embed
                            new Discord.MessageEmbed()
                            .setColor(0x000FF)
                                .setTitle('erreur ❎')
                                .setDescription(`Il n'y a plus de comptes \`${args[0]}\`, attends le prochain restock.`)
                            .addField(`\`Stocks null\`` , `Pas de stock tu veux restock, devenir fournisseur viens faire un ticket`)
                            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 64 }))
                            .setTimestamp()
                        );

                        // cancel
                        return;
                    };
                });
            };

        // if not gen channel
        } else {

            // send message to channel
            message.channel.send(

                // embed
                new Discord.MessageEmbed()
                .setColor(0x000FF)
                .setTitle('mauvais salon')
                .setDescription(`tu ne peux pas gen dans ce salon, le seul salon autorisé est : <#${channel}>`)
                .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 64 }))
                .setTimestamp()
            );
        }
	},
};