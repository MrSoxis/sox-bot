const Discord=require('discord.js');
const bot= new Discord.Client();


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

bot.on('ready',function(){
    console.log('Le Bot est en place mon capitaine.');
    bot.user.setGame('Prier le dieu Soxis')
});
bot.on('guildMemberAdd', member=>{
    member.createDM().then(channel=>{
        return channel.send('Bienvenue chez SoSociety '+member.displayName+", pense à te présenter dans le salon présentation !")
    }).catch(console.error)
});
bot.on('guildMemberRemove', member=>{
    member.createDM().then(channel=>{
        return channel.send("Au revoir, tu ne fais plus partie de l'élite. :wave:")
    }).catch(console.error)
});
bot.on('message',function (message) {

    isReaction=getRandomInt(8)
  switch(isReaction){
      case 0:
        var reaction="";
        reactionIndex=getRandomInt(9);
        switch(reactionIndex){
          case 0:
            reaction = "549537743538225153";
            break;
          case 1:
            reaction = "549539616894615559"; 
            break;
          case 2:
            reaction="549539540109492235";
            break;
          case 3:
            reaction="549539823950757889";
            break;
          case 4 :
            reaction="549539674427883521";
            break;
          case 5:
            reaction="551352151629103105";
            break;
          case 6 :
            reaction="551352639653150721";
            break;
          case 7:
            reaction ="551351969243987968";
            break;
          case 8:
            reaction = "551352101435998208";
            break;
        }
        message.react(reaction)
        break;
    }
        switch (message.content) {
            case("pd"):
                myname = message.author.username;
                message.channel.send('C\'est toi le pd ' + myname);
                break;
            case ("juiverie"):
                message.react("539530263349428245");
                message.channel.send('Tu vas finir suicidé mon p\'tit pote à la compote... ');
                break;          
        }
    
        if (message.content === "listemojis") {
   const emojiList = message.guild.emojis.map((e, x) => (x + ' = ' + e) + ' | ' +e.name).join('\n');
   message.channel.send(emojiList);
}
        if(message.content==="Bonne nuit"||message.content==="bonne nuit"){
          message.react("😴");
           message.channel.send('Bonne nuit '+message.author.username+",\nFait de beaux rêves :relaxed:");
        }
        if(message.content==='yo' || message.content==='Yo' || message.content==='YO'){
              message.react("👋");
              i = getRandomInt(4);
                var msg = "";
                switch(i){
                    case(0):
                        msg="abricots :peach:";
                        break;
                    case(1):
                        msg="hélicos :helicopter:";
                        break;
                    case(2):
                        msg="asticot :bug:";
                        break;
                    case(3):
                      msg="haricots :leaves:";
                      break;
                }
                message.channel.send('Yo les '+msg);
        }
        if(message.content==="Coucou"||message.content==='cc'|| message.content==="coucou"){
          message.react("👋");
          i = getRandomInt(4);
                var msg = "";
                switch(i){
                    case(0):
                        msg="loulous :blush:";
                        break;
                    case(1):
                        msg="hiboux :owl:";
                        break;
                    case(2):
                        msg="ripous :spy:";
                        break;
                    case(3):
                        msg="minous :cat:";
                        break;
                }
                message.channel.send('Coucou les '+msg);
        }
        if(message.content==="Bonjour"||message.content==="bonjour"){
          message.react("👋");
          i = getRandomInt(4);
                var msg = "";
                switch(i){
                    case(0):
                        msg="amours :heart:";
                        break;
                    case(1):
                        msg="vautours :eagle:";
                        break;
                    case(2):
                        msg="sourts :hear_no_evil:";
                        break;
                    case(3):
                        msg="fours :fire:";
                        break;
                }
                message.channel.send('Bonjour les '+msg);
        }
        if(message.content==="slt"|| message.content==='Salut'||message.content==="salut"){
          message.react("👋");
          i = getRandomInt(4);
                var msg = "";
                switch(i){
                    case(0):
                        msg="tous nus :eggplant: :sweat_drops:";
                        break;
                    case(1):
                        msg="tordus :smirk:";
                        break;
                    case(2):
                        msg="poilus :scissors:";
                        break;
                    case(3):
                        msg="moldus :star2:";
                        break;
                }
                message.channel.send('Salut les '+msg);
        }
        if (message.content === 't ki' || message.content === 'T ki' || message.content === 'tki' || message.content === 'Tki') {
            message.channel.send("J'suis l'boss, toi t'es qui ?");
        
        }
    } 
);

bot.login(process.env.TOKEN);
