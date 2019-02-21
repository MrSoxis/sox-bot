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

        switch (message.content) {
            case("pd"):
                myname = message.author.username;
                message.channel.send('C\'est toi le pd ' + myname);
                break;
            case ("juiverie"):
                message.channel.send('Tu vas finir suicidé mon p\'tit pote à la compote... ');
                break;
            case ("yo" || "Yo" || "Salut" || "Bonjour" || "Coucou"):
                i = getRandomInt(3);
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
                }
                message.channel.send('Yo les '+msg);
                break;

        }

        if (message.content === 't ki' || message.content === 'T ki' || message.content === 'tki' || message.content === 'Tki') {
            message.channel.send("J'suis l'boss, toi t'es qui ?")
        }
    }
);

bot.login(process.env.TOKEN);
