const discord = require('discord.js')
const {prefix } = require('../config.json')
const request = require('sync-request');
const readline = require('readline');
const fs = require('fs');
const { send } = require('process');
module.exports ={
    name:"recheckcgr2",
    description:"Commande permettant de recheck les comptes cgr en stock !",
    async execute(client , message){
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Tu ne peux pas faire ça !')

        function  dortmonreuf(time) {
            return new Promise((resolve) => setTimeout(resolve, time));
          }
        
        const embed = new discord.MessageEmbed()
        .setTitle(`**[SUCCESS] Comptes recheck et restock !**`)
        
        const fileStream2 = `${__dirname}/../stock/cgr.txt`
        fs.writeFileSync(fileStream2,"", (err) => {console.log(err)})
    async function all(){
        async function Hashing() { 
            const fileStream22 = fs.createReadStream(`${__dirname}/../stock/cgr2.txt`); 
            
            const rl = readline.createInterface({ input: fileStream22, crlfDelay: Infinity }); for await (const line   of rl) { 
                    var credarr = line.split(':') 
                    await automate(credarr[0], credarr[1]) }}
        
        Hashing();
        
        async function automate(username, password) {
            if(username !== undefined){
            fs.appendFileSync(fileStream2,`${username}:${password}\n`)
            }
        }
        
        automate()
    }


 await all()
 dortmonreuf(5000).then(()=>{
    message.channel.send(embed)
    fs.writeFile(`${__dirname}/../stock/cgr2.txt`,"", (err) => {console.log(err)})
})
}}
