
const config = require('../config.json');
module.exports = {
    name: 'reload',
    description: 'Restarted the bot.',
    owner: true,
    cat: 'owner',

    execute(client, message, args) {
        var config = require("../config.json")
let authorized = [`${config.bot.owner}`, `${config.bot.owner1}`, `${config.bot.owner2}`, `${config.bot.owner3}`, `${config.bot.owner4}`, `${config.bot.owner5}`, `${config.bot.owner6}`, `${config.bot.owner7}`, `${config.bot.owner8}`, `${config.bot.owner9}`, `${config.bot.owner10}`]
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Vous devez être \`OWNER\` du bot pour éxecuter cette commande.`);
        let bot = message.client;
       
 console.log(`Rédémarage By ${message.author.username}`)   
        message.channel.send(`Rédémarage de \`${message.client.user.tag}\` en cours....`).then(() => bot.destroy()).then(() => bot.login(config.token)).then(() => message.channel.send(`Le bot a redémarré avec succès`))


    },
};
