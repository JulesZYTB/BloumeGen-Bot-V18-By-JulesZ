const discord = require('discord.js'), fs = require('fs')
module.exports = {
    name: "restock",
    category: "sd",
    cooldown: 0,
    description: "sd",
    aliases: ['restonk', 'restocks', 'restonks', 'add'],
    usage: "restock",
	execute(client, message, args) {
        message.delete()
        if (!message.member.hasPermission("VIEW_AUDIT_LOG")) return message.channel.send('Tu ne peux pas faire ça !')
        if (!message.attachments.size <= 0) {
            let stonks = args[0]
            if (!stonks) return message.channel.send('quel type je dois restock ?')
            const restockable = `${__dirname}/../stock/${args[0]}.txt`;

            var Attachment = (message.attachments).array();
            let thing = Attachment[0]
            const { DownloaderHelper } = require('node-downloader-helper')
            const dl = new DownloaderHelper(thing.url, __dirname)

            dl.on('end', file => {



                fs.readFile(`${file.filePath}`, 'utf8' , (err, data) => {
                    fs.appendFile(restockable, `${data}\n`, err => {
                        
                    })
                    fs.unlink(file.filePath, function (err) {
                        if (err) throw err;
                        // if no error, file has been deleted successfully
                    }); 
                    
                    let accs = data.split('\n').length
                    message.channel.send(`:white_check_mark: | j’ai restock des comptes **${stonks.toUpperCase()} avec la somme de \`${accs}\` comptes !`)

                })
            })
            dl.start()
        } else {
            const restockable = __dirname+`/../stock/${args[0]}.txt`;
            let accounts = args.slice(1).join(" ");
            let accountss = accounts.split('\n')
            if (!accounts) return message.channel.send('tu veux j’restock le vent ?')
            fs.appendFile(restockable, `${accounts}\n`, err => {
                if (err) return message.channel.send("jai pas pu restock **__" + args[0].toUpperCase() + "__**, t sur que les fichiers existent ?")
                if (!err){ 
                    const embed = new discord.MessageEmbed()
                    .setTitle("Comptes Restock Avec Succès !")
                    .setDescription(`:white_check_mark: | j’ai bien restock **${accountss.length}** comptes pour **__${args[0].toUpperCase()}__**`)   
                    .setColor(0x000FF)         
                    message.channel.send(embed)
                }

            })
        }
        
    }
}