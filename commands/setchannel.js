const db = require("quick.db");
module.exports = {
    
    // command name
	name: 'set-channel',

    // command description
	description: 'ajouter un salon de gen',

    // command
    execute(client, message, args) {
    
    
    if (!message.channel.permissionsFor(message.author).has('MANAGE_GUILD'))
			return message.channel.send(
				":x: | **Vous n'êtes pas autorisé à utiliser cette commande, vous devez avoir les permissions `MANAGE_GUILD` !**"
			);
		let options = ['add', 'remove','add+', 'remove+'];
		function check(opt, array) {
			return array.some(x => x.toLowerCase() === opt.toLowerCase());
		}
		if (!args[0]) {
			return message.channel.send(
				`:x: | **Spécifiez une option, Les options sont - ${options.join(', ')}**`
			);
		}
		if (!check(args[0], options)) {
			return message.channel.send(
				`:x: | **Les seules options sont ${options.join(', ')}**`
			);
		}
		let channel = message.mentions.channels.first();
		switch (args[0]) {
			case 'add':
				if (!channel) {
					return message.channel.send(':x: | **Spécifiez le channel**');
				}
				db.set(`channel_${message.guild.id}`, channel.id);
				return message.channel.send(`**Le channel des générations a bien était d'infini sur channel **`)
				message.channel.send(` verifier bien que le channel ne soit jamais supprimée`);
                break;
			case 'remove':
				
				db.set(`channelplus_${message.guild.id}`, null);
				return message.channel.send('**Le channel des générations a bien était supprimer**');
				break;
                case 'add+':
				if (!channel) {
					return message.channel.send(':x: | **Spécifiez le channel**');
				}
				db.set(`channelplus_${message.guild.id}`, channel.id);
				return message.channel.send(`**Le channel des générations a bien était d'infini sur channel **`)
				message.channel.send(` verifier bien que le channel ne soit jamais supprimée`);
                break;
			case 'remove+':
				
				db.set(`channelplus_${message.guild.id}`, null);
				return message.channel.send('**Le channel des générations a bien était supprimer**');
				break;
                
    
    
    }
    }
    	}