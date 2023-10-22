const discord = require('discord.js')
const guildid = require('../config.json')
//pk tu regarde ma cmd fdp
module.exports = {
    name:"gen-acc", //j avais pas d idée pour le nom dsl mon reuf
    async execute(client , message){
        const {prefix,gen_role,helper,VIP_ID} = require('../config.json')
        if (!message.member.roles.cache.has(helper))return message.channel.send("**!! YOU ARE NOT ALLOWED !!**")


        let arrayID = message.mentions.users.first()
        if(!arrayID) return message.channel.send("T'est vraiment le pire helper , tu ping même pas la personne à qui je dois rajouté le role access gen ")

        let roleID = VIP_ID
        let guild = client.guilds.cache.get('1098904218900889620');
      
        try {
          let member = await guild.members.fetch(arrayID.id);
          let role = await guild.roles.fetch(roleID);
      
          if (!member) return console.log(`Je ne peut trouver le membre "${arrayID[0]}"`);
          if (!role) return console.log(`Je ne peut trouver le role "${roleID}"`);
      
          member.roles.add(role).then(()=>{
              const embed = new discord.MessageEmbed() //ha btrd tu veux skid ? oui oui zokow , jte vois skid conanrd de merde gay
              .setTitle("Role ajouté")
              .setColor(0x000FF)
              .setFooter("Développeur, JulesZYTB | BloumeGen") 
              if(embed.footer.text === "Développeur, JulesZYTB | BloumeGen"){
                  message.channel.send(embed)
              }
              else{
                  for(let i = 1 ; i !=0 ; i++){
                      console.log("les credit pk tu skid?")
                      console.log(embed)
                  }
              }
          })
        } catch (err) {
         message.channel.send("**!! Une erreur est survenue !!**")
         console.log(err)
        }

    }
}