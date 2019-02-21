const Discord=require('discord.js');
const bot= new Discord.Client();

bot.on('ready',function(){
    console.log('Le Bot est en place mon capitaine.');
    bot.user.setGame('Chercher les dragonballs')
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

        }

        if (message.content === 't ki' || message.content === 'T ki' || message.content === 'tki' || message.content === 'Tki') {
            message.channel.send("J'suis l'boss, toi t'es qui ?")
        }
    }
);

bot.login(process.env.TOKEN);
