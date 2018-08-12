const Discord = require("discord.js");
const client = new Discord.Client();



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});














client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'discord') {
    msg.reply('https://discord.gg/WSXUkRG');
  }
});





client.on('message', msg => {
  if (msg.content === 'play') {
    msg.reply('i dont play any game :)');
  }
});









client.on("message", message => {
 if (message.content === "-help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`

***__describe the bot__***
**
describe the your bot here

**

        ***__General orders__***
**
『-play / play music radio』 
『-id / your profile id』
『-invite/ Add bot to server』
『-embed/ The bot repeats the words I you type for him in a boxed window !』
『-say /The bot repeats the words I you type for him』
『-roles / roles of server 』
『-mention bot / he will respond to you mean @HiMoxY™#7798』
『-server / information about The server』
『-animal/ send pictures of animal』
『-meme/ send pictures of memes』
『-gif/ send pictures of gif』
『-hug/ send pictures of hug with __someone__ (@mention) 』

『-cats/ send pictures of』
『-avatar/ free access to personnel account picture』
『-time/ if you want to see time of your country』
『-dt/ Offers time in UAE, Makkah, Egypt and history』 
『-stats/ uptime』
**

        ***__Bot orders__***
**
『-ping / if you want to see ping of the bot』
『-uptime / It shows you how much pot is running』
『-support / Server support』
『-invite / Add bot to server』
『-twitch/ this is twitch channel of the developer』
『-member / Members Status』
『-bot / Basic Information About the bot』
『-donation/ to supporting server』
**

        ***__Administrative Orders__***
**
『-kick / kick』
『-ban / ban』
『-mute /mute』
『-unmute /unmute』
『-mutechannel /mutechannel』
『-unmutechannel /unmutechannel』
『-add.r / add role』
『-server-av /avatar of the bot』
**


        ***__Games orders__***
 **      
『-num / random number』
『-qa / Ask you questions 』
**
   
        
`)


message.channel.sendEmbed(embed)

}
}); 










client.on("message", message => {
 if (message.content === "-invite") {
  const embed = new Discord.RichEmbed()
      .setColor("#ff8f01")
      .setFooter(" HiMoxY™")
      .setTimestamp()
      .setFooter('© HiMoxY™ Bot All rights reserved')
      .addField('Thank you for using Premium Bot📌', `https://discordapp.com/oauth2/authorize/?permissions=805314622&scope=bot&client_id=455505297520328724`)
  message.channel.send({embed});

 }
});


































client.on("message", message => {
 if (message.content === "-support") {
  const embed = new Discord.RichEmbed()
      .setColor("#0070ff")
      .setFooter(" HiMoxY™")
      .setTimestamp()
      .setFooter('© HiMoxY™ Bot All rights reserved')  
      .addField('Server Technical Support', ` join support server discord Tinder™support🔧🔧 : https://discord.gg/WSXUkRG  `)
  message.channel.send({embed});

 }
});






















const TOKEN = "";

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith('>' + str);
}

function pluck(array) {
    return array.map(function(item) { return item["name"]; });
}

function hasRole(mem, role) {
    if(pluck(mem.roles).includes(role)){
        return true;
    } else {
        return false;
    }

  }
  
  
  








client.on('message', message => {
     if (message.content === "-srv") {
		 if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("#56ca37")
  .addField("**Servers: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
});









client.on('message', message => {
     if (message.content === "-ping") {
      const embed = new Discord.RichEmbed()
 
  .setColor("#ebff00")
  .addField('``The speed of the bot connection`` ' , `${Date.now() - message.createdTimestamp}` + 'ms`')
                 .setFooter(` HiMoxY™.`, 'https://e.top4top.net/p_8913asvp1.jpg')
                 .setTimestamp()
  message.channel.sendEmbed(embed);
    }
});












client.on('message', message => {
    if (message.content === "-roles") {
		if(!message.channel.guild) return;
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('#00ff47')
	.setFooter(" HiMoxY™")
        .setTimestamp()
        .addField('Roles:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});












   var prefix = "-";
var cats = [

"https://d.top4top.net/p_902xtbbr1.jpg",
"https://e.top4top.net/p_902ijp1y1.jpg",
"https://e.top4top.net/p_901kfk8l1.jpg",
"https://c.top4top.net/p_902cdjxe1.jpg",
"https://f.top4top.net/p_902ezjsq1.jpg",
"https://c.top4top.net/p_902s0a5p1.jpg",
"https://d.top4top.net/p_9024axlu1.jpg",
"https://f.top4top.net/p_902bcq951.jpg",
"https://c.top4top.net/p_9020jjms1.jpg",
"https://b.top4top.net/p_9025r1a31.jpg",
"https://d.top4top.net/p_902mhfcc1.jpg",
"https://e.top4top.net/p_902k4zba1.jpg",
"https://a.top4top.net/p_902srhhb1.jpg",
"https://b.top4top.net/p_902sq75i1.jpg",
"https://e.top4top.net/p_90205qtg1.jpg",
"https://b.top4top.net/p_9020xqmm1.jpg",
"https://e.top4top.net/p_902iydbc1.jpg",
"https://b.top4top.net/p_902f2gft1.jpg",
"https://c.top4top.net/p_902rrxkb1.jpg",
"https://d.top4top.net/p_902e3bsd1.jpg",
"https://e.top4top.net/p_902e3ul01.jpg",
"https://a.top4top.net/p_902x8eyq1.jpg",
"https://b.top4top.net/p_9024tmi71.jpg",
"https://f.top4top.net/p_902llnpr1.jpg",
"https://b.top4top.net/p_902rlmix1.jpg",
"https://a.top4top.net/p_902q3s9f1.jpg",
"https://d.top4top.net/p_9024bazr1.jpg",
"https://f.top4top.net/p_902hxb4d1.jpg",
"https://b.top4top.net/p_902w2iw01.jpg",
"https://e.top4top.net/p_902gf4w41.jpg",
"https://c.top4top.net/p_902d3txz1.jpg",
"https://a.top4top.net/p_902bgd671.jpg",
"https://b.top4top.net/p_902r506i1.jpg",
"https://f.top4top.net/p_902o80kv1.jpg",
"https://a.top4top.net/p_902h40fm1.jpg",
"https://c.top4top.net/p_9026k67j1.jpg",
"https://e.top4top.net/p_902oe0ju1.jpg",
"https://b.top4top.net/p_902rtd071.jpg",
"https://f.top4top.net/p_902e7vlw1.jpg",
"https://b.top4top.net/p_902hd5tg1.jpg",
"https://e.top4top.net/p_902j1nhd1.jpg",
"https://e.top4top.net/p_902qtdum1.jpg",
"https://f.top4top.net/p_9024t6g61.jpg",
"https://a.top4top.net/p_902p47431.jpg",
"https://a.top4top.net/p_902oqjst1.jpg",
"https://d.top4top.net/p_9025jiiz1.jpg",
"https://a.top4top.net/p_9023abjx1.jpg",
"https://d.top4top.net/p_902b8txi1.jpg",
"https://b.top4top.net/p_902bmg961.jpg",
"https://a.top4top.net/p_902pk5rf1.jpg",
"https://a.top4top.net/p_9027vfr71.jpg",
"https://c.top4top.net/p_902fiiir1.jpg",
"https://e.top4top.net/p_902leqoi1.jpg",
"https://e.top4top.net/p_9025pcel1.jpg",
"https://f.top4top.net/p_90250ngs1.jpg",
"https://b.top4top.net/p_902pfaam1.jpg",
"https://c.top4top.net/p_902et23r1.jpg",
"https://d.top4top.net/p_9025hdnu1.jpg",
"https://c.top4top.net/p_902ja55j1.jpg",
"https://d.top4top.net/p_902ol3tc1.jpg",
"https://e.top4top.net/p_902bmi4n1.jpg",
"https://a.top4top.net/p_902jkh421.png",
"https://c.top4top.net/p_902ghtp41.jpg",
"https://d.top4top.net/p_902d7wsi1.jpg",
"https://f.top4top.net/p_902sng1m1.jpg",
"https://b.top4top.net/p_9023u61r1.png",
"https://d.top4top.net/p_902lo8911.jpg",
"https://e.top4top.net/p_902fg3ic1.jpg",
"https://f.top4top.net/p_902g6yqx1.jpg",
"https://a.top4top.net/p_9028m4w11.jpg",
"https://c.top4top.net/p_902d8t0d1.jpg",
"https://e.top4top.net/p_902ntpje1.jpg",
"https://f.top4top.net/p_902pyauh1.jpg",
"https://b.top4top.net/p_902d98af1.jpg",
"https://e.top4top.net/p_902xo85y1.jpg",
"https://b.top4top.net/p_902vnh1x1.jpg",
"https://f.top4top.net/p_902rz8v81.jpg",
"https://c.top4top.net/p_902wehtq1.jpg",
"https://e.top4top.net/p_902i0s671.jpg",
"https://e.top4top.net/p_9021574t1.jpg",
"https://b.top4top.net/p_9026c0xw1.jpg",
"https://c.top4top.net/p_902xgin71.jpg",
"https://e.top4top.net/p_902krozb1.jpg",
"https://f.top4top.net/p_902rw4cz1.jpg",

]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'cats')) {
         var gore = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(gore);
    }
});












client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`-help |twitch.tv/HiMoxYTM| `,)
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});






































const Client = new Discord.Client();







         client.on('message', message => {
            if (message.content === 'برب') {
              message.channel.sendFile("./tyt.png");
            }
         });




         client.on('message', message => {
            if (message.content === 'ق1') {
              message.channel.sendFile("./5.png");
            }
         });





         client.on('message', message => {
            if (message.content === 'السلام عليكم') {
              message.channel.sendFile("./5bz.png");
            }
         });








         client.on('message', message => {
            if (message.content === 'حشيش') {
              message.channel.sendFile("./2.png");
            }
         });








         client.on('message', message => {
            if (message.content === 'باك') {
              message.channel.sendFile("./WLC.png");
            }
         });
         
         
         
         
         
         
         
         
         
                 client.on('message', message => {
            if (message.content === 'ترحيب') {
              message.channel.sendFile("./1.jpg");
            }
         });




























 client.on('message', message => {
     if (message.content === "bot") {
     let embed = new Discord.RichEmbed()

  .setColor("#51cde6")
  .addField("Playing on" , client.guilds.size)


  message.channel.sendEmbed(embed);

    }
});





















client.on("message", message => {
     if (message.content === "-twitch") {
         if(!message.channel.guild) return message.reply('** This command only for servers **');
        message.reply("this is my twitch channel💯 : https://www.twitch.tv/himoxytm :) ")
     }
});




client.on("message", message => {
     if (message.content === "-donation") {
         if(!message.channel.guild) return message.reply('** This command only for servers **');
        message.reply("If you want to support us click this link and show some love!💰💰 : https://www.paypal.me/HiMoxY")
     }
});











  var prefix = "-";
    client.on('message', message => {
    if(message.content.startsWith(prefix + 'avatar')) {
         var men = message.mentions.users.first();
      var heg;
      if(men) {
          heg = men
      } else {
          heg = message.author
      }
  var avatar = new Discord.RichEmbed()
.setColor('#00fcff')
.setFooter(" Tinder™")
.setTimestamp()
.setTitle(heg.username)
.setImage(heg.avatarURL)

message.channel.sendEmbed(avatar)
    }
});







client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = msg.content.split(" ").slice(1);


if (command == "by") {
    let embed = new Discord.RichEmbed()
    .setColor('#9800ff')
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .setDescription(args.join(" "))
    .setFooter(" Tinder™ ")
    .setTimestamp()
    msg.channel.sendEmbed(embed);
    msg.delete();
  }
});







 client.on('guildCreate', guild => {
  client.channels.get("465556430288846848").send(`**the bot has been added in new server 
Server name: __${guild.name}__
Server owner: __${guild.owner}__**`)
}); 

































































client.on("message", message => {
    var prefix = "-clear";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix - "clear")) {
				if(!message.channel.guild) return;
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | *** ⚠ لا يوجد لك مانج ماسج ***');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "© Tinder™."
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});







































const cuttweet = [
     '❔. ``questions`` : ``What would your perfect room look like?``',
     '❔. ``questions`` : ``When was the last time you climbed a tree?``',
     '❔. ``questions`` : ``What skill would you like to master?``',
     '❔. ``questions`` : ``What would be your first question after waking up from being cryogenically frozen for 100 years?``',
     '❔. ``questions`` : ``What shows are you into?``',
     '❔. ``questions`` : ``What TV channel doesn’t exist but really should?``',
     '❔. ``questions`` : ``What age do you wish you could permanently be?``',
     '❔. ``questions`` : ``What TV show or movie do you refuse to watch?``',
     '❔. ``questions`` : ``What would be your ideal way to spend the weekend?``',
     '❔. ``questions`` : ``What’s something you’ve been meaning to try but just haven’t gotten around to it?``',

     '❔. ``questions`` : ``How different was your life one year ago?``',
     '❔. ``questions`` : ``How is your Sex life?``',
     '❔. ``questions`` : ``What would you rate 10 / 10?``',
     '❔. ``questions`` : ``What kind of art do you enjoy most?``',
     '❔. ``questions`` : ``Why did you decide to do the work you are doing now?``‏',
     '❔. ``questions`` : ``What is the luckiest thing that has happened to you?``',
     '❔. ``questions`` : ``Where is the most relaxing place you’ve ever been?``',
     '❔. ``questions`` : ``Do you have a Girl/Boy-friend?``',
     '❔. ``questions`` : ``what is your name?``',
     '❔. ``questions`` : ``how many hours do you spend gaming every day?``',
     '❔. ``questions`` : ``whats is your favourite celebrities ?``',
     '❔. ``questions`` : `` what hobbies are you into ?‏``',
     '❔. ``questions`` : `` What do you think about Morocco?``',
     '❔. ``questions`` : `` what is your favourite food ?``',

     '❔. ``questions`` : `` What sports do you like?‏``',
     '❔. ``questions`` : `` What Video Games do you like?``',
     '❔. ``questions`` : ``How old are you?``',
     '❔. ``questions`` : `` Are you married?``',
     '❔. ``questions`` : ``Do you have any kids?``',
     '❔. ``questions`` : ``how do you like this discord ?``',
     '❔. ``questions`` : ``whats is your favourite celebrities ?``',
     '❔. ``questions`` : ``from 1 to 9000 how much do you like memes ?``',
     '❔. ``questions`` : ``would you like to fight one duck sized elephant or one million elephants sized ducks ?``',
     '❔. ``questions`` : `` would you like to fight one baby sized elephant or one thousand babys sized elephants ?``',
     '❔. ``questions`` : `` peanut butter or jelly ?``',
     '❔. ``questions`` : ``what happens when you get scared half to death twice ?``',
     '❔. ``questions`` : ``is it true cannibals dont eat clowns be cause they taste funny ?``',
     '❔. ``questions`` : ``if all the worlds a stage , where does the audiences sit ?``',
     '❔. ``questions`` : ``is it true cannibals dont eat clowns be cause they taste funny ?``',
     '❔. ``questions`` : ``if it is tourist season why cant we shoot them ?``',

     '❔. ``questions`` : ``why are the alphabets in the order that they are ? is it because its a song?``',
     '❔. ``questions`` : ``If someone cant see, they are blind and if someone cant hear, they are deaf, so what do you call people who cant smell?``',
     '❔. ``questions`` : ``How do they get those boats in those glass bottles?``',
     '❔. ``questions`` : ``Why would superman want to leap over the tallest building in a single bound if he can fly?``',
     '❔. ``questions`` : ``Why is it called a TV set when there is only one?``',
     '❔. ``questions`` : ``If it is zero degrees outside today and it s supposed to be twice as cold tomorrow, how cold is it going to be?``',
     '❔. ``questions`` : ``How did the headless horseman know where he was going?``',
     '❔. ``questions`` : `` Why do they call it an escalator if it takes you down?``',
     '❔. ``questions`` : ``Why is it called football when you hardly use your feet?``',
     '❔. ``questions`` : ``How come some Little Debbie snack cakes come in a twin pack and others are wrapped individually?``',
     '❔. ``questions`` : ``Do cows drink milk?``',
     '❔. ``questions`` : ``Can a guy named Nick have a "nick" name?``',
     '❔. ``questions`` : ``If a person owns a piece of land do they own it all the way down to the core of the earth?``',
     '❔. ``questions`` : ``Since we see little birdies when we just get knocked out, what do little birdies see when they just get knocked out?``',
     '❔. ``questions`` : ``Why are semi-trucks bigger than regular trucks?``',
     '❔. ``questions`` : ``Why is an alarm clock going "off" when it actually turns on?``',
     '❔. ``questions`` : ``If you wore a Teflon suit, could you ever end up in a sticky situation?``',
     '❔. ``questions`` : ``How fast do hotcakes sell?``',

     '❔. ``questions`` : ``If you mated a bull dog and a shih tzu, would it be called a bullbleep?``',
     '❔. ``questions`` : ``Why are they called stairs inside but steps outside?``',
     '❔. ``questions`` : ``Does the President have to pay taxes?``',
     '❔. ``questions`` : ``Why do they put "for indoor or outdoor use only" on Christmas lights?``',
     '❔. ``questions`` : ``If Dracula has no reflection, how comes he always had such a straight parting in his hair?``',
     '❔. ``questions`` : ``If an ambulance is on its way to save someone, and it runs someone over, does it stop to help them?``',
     '❔. ``questions`` : ``Why is Grape Nuts cereal called that, when it contains neither grapes, nor nuts?``',
     '❔. ``questions`` : ``If Jimmy cracks corn and no one cares, why is there a song about him?``',
     '❔. ``questions`` : ``Why do drugstores make the sick walk all the way to the back of the store to get their prescriptions while healthy people can buy cigarettes at the front?``',
     '❔. ``questions`` : ``What ever happened to an E grade? We have A,B,C,D,F but no E.``',
     '❔. ``questions`` : ``Why is there a light in the fridge and not in the freezer?``',
     '❔. ``questions`` : ``Dont you find it worrying that doctors call treating you their "practice"?``',
     '❔. ``questions`` : ``Is the word "dictionary" in the dictionary?``',
     '❔. ``questions`` : ``What do you call a female daddy long legs?``',

     '❔. ``questions`` : ``If croutons are stale bread, why do they come in airtight packages?``',
     '❔. ``questions`` : ``Why cant women put on mascara with their mouth closed?``',
     '❔. ``questions`` : ``If a transport truck carrying a load of cars gets into a car accident, does it increase the number of the cars in the pile-up?``',
     '❔. ``questions`` : ``In France do people just ask for toast and get French toast or do they have to ask for American toast?``',
     '❔. ``questions`` : ``Why is it called a "drive through" if you have to stop?``',
     '❔. ``questions`` : ``Why does mineral water that has "trickled through mountains for centuries" go out of date next year?``',
     '❔. ``questions`` : ``If Milli Vanilli fell in the woods, would someone else make a sound?``',
     '❔. ``questions`` : ``Why are softballs hard?``', 

     '❔. ``questions`` : ``Can vampires get AIDS?``',
     '❔. ``questions`` : ``Why do toasters always have a setting that burns the toast to a horrible crisp which no decent human being would eat?``',
     '❔. ``questions`` : ``Why are they called goose bumps? Do geese get people bumps?``',
     '❔. ``questions`` : ``If you are born at exactly midnight is your birthday on both those days?``',
     '❔. ``questions`` : ``If you are caught "between a rock and a hard place", is the rock not hard?``',
     '❔. ``questions`` : ``Why is it we have the weight of the world on our shoulders but have to get it off our chests?``',
     '❔. ``questions`` : ``If you tell someone they are being judgmental aren t you being judgmental yourself?``',
     '❔. ``questions`` : ``Why do they call it your "bottom" when it is really in the middle of your body?``',
     '❔. ``questions`` : ``:If an anarchist group attained political power, would they by principle have to dissolve their own government?`` ',


]

client.on('message', message => {
  if (message.content === `?qa`) {
message.channel.sendMessage({embed: {
  color: 3547003,
  description: `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`
}});
};
});









client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});






















var prefix = "-";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.member.hasPermission("ADMINISTRATOR"))  return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// _say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    .setFooter(" HiMoxY™")
    .setTimestamp()
    message.channel.sendEmbed(say);
    message.delete();
  }


});















client.on('message', message => {
   if (message.content === "-id") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setFooter(" Tinder™")
  .setTimestamp()
  .setThumbnail(message.author.avatarURL)
  .addField("Name:",`${message.author.username}`, true)
  .addField('Discrim:',"#" +  message.author.discriminator, true)
  .addField("ID:", message.author.id, true)
  .addField("Create At:", message.author.createdAt, true)
     
     
  message.channel.sendEmbed(embed);
    }
});





client.on("message", message => {
    var prefix = "-";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
				         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
 if (!args[1]) {
                                let x5bz1 = new Discord.RichEmbed()
                                .setDescription("_clear <number>")
                                .setColor("#0000FF")
                                message.channel.sendEmbed(x5bz1);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            let x5bz2 = new Discord.RichEmbed()
                                                            .setColor("#008000")
                                .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                        message.delete("..");
                                message.channel.sendEmbed(x5bz2);
                            }
                          }
});





var prefix = "-";
client.on('message', message => {
    if(message.content == prefix + 'server') {
        var servername = message.guild.name
        var اونر = message.guild.owner
        var اعضاء = message.guild.memberCount
        var ايدي = message.guild.id
        var بلدالسيرفر = message.guild.region
        var الرومات = message.guild.channels.size
        var الرتب = message.guild.roles
        var عمل = message.guild.createdAt
        var الروم = message.guild.defaultChannel
        var server = new Discord.RichEmbed()
        .setThumbnail(message.guild.iconURL)
        .addField('**``SERVER NAME``**', servername)
        .addField('``SERVER ID`` ' , [ايدي])
        .addField('``SERVER MEMBERS``', اعضاء)
        .addField('``SERVER ROOMS``', الرومات)
        .addField('``SERVER ROOMS BASIC``', الروم)
        .addField('``SERVER OWNER``', اونر)
        .addField('``SERVER FROM``', بلدالسيرفر)
        .addField('opening server date', عمل)
        .setColor('RANDOM')
	.setFooter(" HiMoxY™ ")
        .setTimestamp()

        message.channel.sendEmbed(server)
    }
});






var prefix = "-";
client.on("message", message => {

            if (message.content.startsWith(prefix + "himoxy")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : Number of receiving members`); 
 message.delete(); 
};     
});




client.on("message", message => {
     var prefix = "-";
    if(message.content.startsWith(prefix + 'roomtimer')) {
     let args = message.content.split(" ").slice(1);
       var nam = args.join(' ');
    
      if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('`ADMINISTRATOR` im sorry you need ').then(msg => msg.delete(6000))
      if (!nam) return message.channel.send(`<@${message.author.id}> can you type name of channel`).then(msg => msg.delete(10000))
      message.guild.createChannel(nam, 'voice').then(c => setTimeout(() => c.delete(), 120000)) // 
      message.channel.send(`â˜‘ TemporarySound : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> ðŸ•• the time of voice is over `), 120000))  // 120000 fast
    }
    });

	
	
	



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message' , async (message) => {
       if(message.content.startsWith(`<@${client.user.id}>`)) {
              
 let responses = [
        '**how can i help you?**',
        '**Hello, Welcome to HiMoxY Bot Support, if you need any help ask in** #support-himoxy™-bot ',
        '**ask ** @ChW3lECh#7791   or @HiMoxY™#1027  ',
        '**what do you want?** ',
        '**Hi**',
        '**how are you?**',
        '**?**',
        '**try _ help**',
		'**you need help?**',
		'**if you need any help about the bot ask @HiMoxY™#1027 !**',
		'**you need help?**',
		'**go to** https://discord.gg/fzTqJDa ',
		'**you need help?**',
		'**you need help?**',
    ]
    
    // Fetch a random item from the array
    let fetched = responses[Math.floor(Math.random() * responses.length)];
   message.reply(fetched)
       }
  
});










   var prefix = "-";
var gif = [

"https://media.giphy.com/media/aFTt8wvDtqKCQ/giphy.gif",
"https://media.giphy.com/media/l41lVsYDBC0UVQJCE/giphy.gif",
"https://media.giphy.com/media/bwoJs5empFpS0/giphy.gif",
"https://media.giphy.com/media/puOukoEvH4uAw/giphy.gif",
"https://media.giphy.com/media/l41lVsYDBC0UVQJCE/giphy.gif",
"https://media.giphy.com/media/4PT6v3PQKG6Yg/giphy.gif",
"https://media.giphy.com/media/l41JL6uw91df5MrVm/giphy.gif",
"https://media.giphy.com/media/3oGRFzdjFNRJBB10eQ/giphy.gif",
"https://media.giphy.com/media/pQgy4NI7IvoKk/giphy.gif",
"https://media.giphy.com/media/UN010XlEdWvAc/giphy.gif",
"https://media.giphy.com/media/12zAkMUg1MDqZG/giphy.gif",
"https://media.giphy.com/media/148x4ezZxvpIeA/giphy.gif",
"https://media.giphy.com/media/DpB9NBjny7jF1pd0yt2/giphy.gif",
"https://media.giphy.com/media/XIqCQx02E1U9W/giphy.gif",
"https://media.giphy.com/media/3ornjSBhRWTaL3l2X6/giphy.gif",
"https://media.giphy.com/media/10UMktW09cciac/giphy.gif",
"https://media.giphy.com/media/l41m4QayVvSvWPf2w/giphy.gif",
"https://media.giphy.com/media/Ysce790SgjJK0/giphy.gif",
"https://media.giphy.com/media/1x3LVhXaUdISA/giphy.gif",
"https://media.giphy.com/media/xTiTnjBDwXj0YuD9C0/giphy.gif",
"https://media.giphy.com/media/l41m1vlWiwNRSZ8w8/giphy.gif",
"https://media.giphy.com/media/I4hvxPEWSbq5q/giphy.gif",
"https://media.giphy.com/media/3oEduGsxd7CfpVDifu/giphy.gif",
"https://media.giphy.com/media/3o85xsjWrrTxQibBuw/giphy.gif",
"https://media.giphy.com/media/3oEduZ8hvmVwURkneg/giphy.gif",
"https://media.giphy.com/media/XIqCQx02E1U9W/giphy.gif",
"https://media.giphy.com/media/l0HlvtIPzPdt2usKs/giphy.gif",
"https://media.giphy.com/media/l4Jz3a8jO92crUlWM/giphy.gif",
"https://media.giphy.com/media/26gs6vEzlpaxuYgso/giphy.gif",
"https://media.giphy.com/media/uHox9Jm5TyTPa/giphy.gif",
"https://media.giphy.com/media/l4FGpPki5v2Bcd6Ss/giphy.gif",
"https://media.giphy.com/media/3o72F8t9TDi2xVnxOE/giphy.gif",
"https://media.giphy.com/media/1dIo6kDOPMzsnMOJTj/giphy.gif",
"https://media.giphy.com/media/3ohzdLXkniI2rb635u/giphy.gif",
"https://media.giphy.com/media/qaaSZMnWkufRu/giphy.gif",
"https://media.giphy.com/media/c2jy2J8z43vhu/giphy.gif",
"https://media.giphy.com/media/l1J9DR9vVpUlpcbMA/giphy.gif",
"https://media.giphy.com/media/FxEwsOF1D79za/giphy.gif",
"https://media.giphy.com/media/3oKIP8Eg8l52mZ4i7m/giphy.gif",
"https://media.giphy.com/media/JEVqknUonZJWU/giphy.gif",
"https://media.giphy.com/media/41I5c7m6CNqHm/giphy.gif",
"https://media.giphy.com/media/xUPGcGRlSnHARsI4fe/giphy.gif",
"https://media.giphy.com/media/xT0BKiaM2VGJ553P9K/giphy.gif",
"https://media.giphy.com/media/pSpmpxFxFwDpC/giphy.gif",
"https://media.giphy.com/media/DKCNQcgbdekrC/giphy.gif",
"https://media.giphy.com/media/ZLPsKWJA4v0go/giphy.gif",
"https://media.giphy.com/media/l4FGETcwLzIZ1IaGs/giphy.gif",
"https://media.giphy.com/media/h30Uk86LypXpe/giphy.gif",
"https://media.giphy.com/media/cgRTVEIKVX8AM/giphy.gif",
"https://media.giphy.com/media/wcjtdRkYDK0sU/giphy.gif",
"https://media.giphy.com/media/YWf50NNii3r4k/giphy.gif",
"https://media.giphy.com/media/sRLDXeGeMpdAs/giphy.gif",
"https://media.giphy.com/media/10zgZP9BTtHXUI/giphy.gif",
"https://media.giphy.com/media/wE63f26x4nlYY/giphy.gif",
"https://media.giphy.com/media/c2jy2J8z43vhu/giphy.gif",
"https://media.giphy.com/media/IA1c7Y9rTvgyI/giphy.gif",
"https://media.giphy.com/media/wx7TBsIbK5e5W/giphy.gif",
"https://media.giphy.com/media/OMvPQIlgL5kYw/giphy.gif",
"https://media.giphy.com/media/PDey9GbOPqwHS/giphy.gif",
"https://media.giphy.com/media/2A02BHjAVvNRe/giphy.gif",
"https://media.giphy.com/media/TOKns3c8Yz7QA/giphy.gif",
"https://media.giphy.com/media/vzuqin231fC92/giphy.gif",
"https://media.giphy.com/media/hVmc8ZmrL3k0U/giphy.gif",
"https://media.giphy.com/media/FcwjrGgiEpWaQ/giphy.gif",
"https://media.giphy.com/media/VpJnTX0kF2KfC/giphy.gif",
"https://media.giphy.com/media/26FPr0GKKPaPiUbbG/giphy.gif",
"https://media.giphy.com/media/l4Jz3a8jO92crUlWM/giphy.gif",
"https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif",
"https://media.giphy.com/media/xTiTnJ3BooiDs8dL7W/giphy.gif",
"https://media.giphy.com/media/41I5c7m6CNqHm/giphy.gif",
"https://media.giphy.com/media/l0HlThbpfmd3mvlqo/giphy.gif",
"https://media.giphy.com/media/3o6gDUY3B8ocAgMNhu/giphy.gif",
"https://media.giphy.com/media/Lcn0yF1RcLANG/giphy.gif",
"https://media.giphy.com/media/uMUcWg5fIQhWM/giphy.gif",
"https://media.giphy.com/media/ehc19YLR4Ptbq/giphy.gif",
"https://media.giphy.com/media/oOTTyHRHj0HYY/giphy.gif",
]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'gif')) {
         var gore = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setFooter(" Mommy™")
      .setTimestamp()
      .setImage(gif[Math.floor(Math.random() * gif.length)])
message.channel.sendEmbed(gore);
    }
});






client.on("message", message => {    
    if(!message.channel.guild) return;
if(message.author.bot) return;
if(message.content === prefix + "server-av"){ 
    const embed = new Discord.RichEmbed()

.setTitle(`picture of server ** ${message.guild.name} **`)
.setAuthor(message.author.username, message.guild.iconrURL)
.setColor('RANDOM')
.setImage(message.guild.iconURL)

message.channel.send({embed});
}
});









client.on('message', message => {
    
   if(message.member.hasPermission('MANAGE_ROLES')) 
    if (message.content === "s-rl") {
        client.guilds.forEach(m =>{
 message.guild.createRole({
       name : "⚒Owner⚒",
       permissions :   [2146958591],
       color : " #000000"
   }) 
   message.guild.createRole({
       name : "🔧M Owner🔧",
       permissions :   [326630611],
       color : " #000000"
   })
   message.guild.createRole({
       name : "⚔ Moderator ⚔",
       permissions :   [58195153],
       color : " #000000"
   })
   message.guild.createRole({
       name : "⚒ Senior Staff ⚒",
       permissions :   [58195137],
       color : " #000000"
   })
   message.guild.createRole({
       name : "🛠 Staff 🛠",
       permissions :   [58195137],
       color : " #000000"
   })
   message.guild.createRole({
       name : "CUSTOM BOTS",
       permissions :   [58186945],
       color : " #000000"
   })
   message.guild.createRole({
       name : "🛠 Chat-Mod 🛠",
       permissions :   [53992641],
       color : " #000000"
   })

   message.guild.createRole({
       name : "🛠VC-Mod🛠",
       permissions :   [53992641],
       color : " #000000"
   })
   message.guild.createRole({
       name : "🛠JUNIOR-MODERATOR🛠",
       permissions :   [53992641],
       color : " #000000"
   })
   message.guild.createRole({
       name : "🛠 Partnership-Manager 🛠",
       permissions :   [1],
       color : " #000000"
   }) 
      message.guild.createRole({
       name : "🛠 Event Manager 🛠",
       permissions :   [1],
       color : " #000000"
   }) 
})
}
 
});
client.on('message', message => {
    if (message.content === "-vc") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);

		
     message.guild.createChannel('🔒Réunion🔒', 'voice')
   	 message.guild.createChannel('🎮GAMING🎮', 'voice')
	 message.guild.createChannel('📞-public-1-📞', 'voice')
	 message.guild.createChannel('📞-public-2-📞', 'voice')
	 message.guild.createChannel('📞-public-3-📞', 'voice')
	 message.guild.createChannel('📞-public-4-📞', 'voice')
	 message.guild.createChannel('📞-public-5-📞', 'voice')
	 message.guild.createChannel('📞-public-6-📞', 'voice')
	 message.guild.createChannel('📞-public-7-📞', 'voice')
	 message.guild.createChannel('📞-public-8-📞', 'voice')
	 message.guild.createChannel('📞-public-9-📞', 'voice')
	 message.guild.createChannel('📞-public-10-📞', 'voice')
	 message.guild.createChannel('📞-public-11-📞', 'voice')
	 message.guild.createChannel('📞-public-12-📞', 'voice')
	 message.guild.createChannel('📞-public-13-📞', 'voice')
	 message.guild.createChannel('welcome', 'text')
	 message.guild.createChannel('rules', 'text')
	 message.guild.createChannel('announcements', 'text')
	 message.guild.createChannel('notification', 'text')
	 message.guild.createChannel('new-members', 'text')
	 message.guild.createChannel('✔sign-up✔', 'text')
	 message.guild.createChannel('streaming-channel', 'text')
	 message.guild.createChannel('bot-commands', 'text')
	 message.guild.createChannel('memes', 'text')
	 message.guild.createChannel('info', 'text')
	 message.guild.createChannel('change-log', 'text')
	 message.guild.createChannel('chat', 'text')
	 message.guild.createChannel('Youtube', 'text')
	 message.guild.createChannel('suggestions', 'text')
	 message.guild.createChannel('Event', 'text')
	 message.guild.createChannel('share-your-link', 'text')


message.channel.sendMessage('**Please wait for what the server is doing We are not responsible for any malfunctions that occur, but rather because of the repetition of the matter. Thank you**')
}
});




client.on('message', msg => {
  if (msg.content === '>cs') {
    msg.reply('الرجاء التأكد من اعطاء البوت خاصية الـ(MANAGE_CHANNELS و MANAGE_ROLES) ');
  }
});







client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'num')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**type a specific number**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});










            var prefix = "-";
client.on('message', message => {
         if (message.content === prefix + "dt") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');  
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
            
            }  
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            } 
            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
 

                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                .setTitle( "『date and time』")
                .setColor('RANDOM')
                .setFooter(message.author.username, message.author.avatarURL)
                .addField('United Arab Emirates',
                "『"+ hours + ":" + minutes +":"+ seconds + "』")
                 .addField('Makkah',
                "『"+ hours2 + ":" + minutes +":"+ seconds  + "』") 
                .addField('Egypt',
                "『"+ hours3 + ":" + minutes +":"+ seconds  + "』") 
                
                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year +  "』")

                 message.channel.sendEmbed(Date15);
        }
    });








client.on('message', message => {
    if (message.content.startsWith("?stats")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .addField('Uptime', timeCon(process.uptime()), true)
            .addField('RAM Usage', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)
            .addField('Guild Count', client.guilds.size, true)
    })
}
});

function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}

client.on('message', message => {
    var prefix = "-"
    let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);


if(command == "draw") {
    var Canvas = require('canvas')
  , Image = new Canvas.Image
  , canvas = new Canvas(450, 170)
  , ctx = canvas.getContext('2d');
  ctx.font = '30px Impact';
  let args = message.content.split(" ").slice(1);
  
Image.src = canvas.toBuffer();

    console.log(Image);
ctx.drawImage(Image, 0, 0, Image.width / 470, Image.height / 170);
ctx.fillText(args.join("  "),110, 70);


ctx.beginPath();
ctx.lineTo(50, 102);
ctx.stroke();

message.channel.sendFile(canvas.toBuffer());
}
}).on('ready', () => {

});







    var prefix = "-";
var animal = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg","http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg","http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg","http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg","https://animalso.com/wp-content/uploads/2016/12/black-german-shepherd_2.jpg","https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg","https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg","https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg","http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg","https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg","https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/animals/GiantPanda3Slider.jpg","http://imagem.band.com.br/f_230168.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'animal')) {
         var animal = new Discord.RichEmbed()
.setImage(animal[Math.floor(Math.random() * animal.length)])
message.channel.sendEmbed(animal);
    }
});






client.on('message', message => {
    if(message.content == '-server') {
    const embed = new Discord.RichEmbed()
    .setDescription(`
**   📗  online:  **__${message.guild.members.filter(m=>m.presence.status == 'online').size}__
 
**   📕  dnd:      **__${message.guild.members.filter(m=>m.presence.status == 'dnd').size}__
 
**   📙  idle:     **__${message.guild.members.filter(m=>m.presence.status == 'idle').size} __  
 
**   📓   offline:  **__${message.guild.members.filter(m=>m.presence.status == 'offline').size}__
 
**   🔖   all: **__${message.guild.memberCount}__`)      
 
         message.channel.send({embed});
 
    }
  });
  
 
  
  
  
client.on('message', msg => {
  if(msg.content === 'mok') {
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: true,
        READ_MESSAGES: true
      })
    })
    msg.channel.send('tabon mok aweld l9a7aa')
  }
})

    const superagent = require("superagent");

client.on('message', async message => {
  if (message.content.startsWith(prefix + 'hu')) {
       let args = message.content.split(" ").slice(1);
    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hugUser) return message.channel.send("Make sure you mention someone!");
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hug`);
    let hugEmbed = new Discord.RichEmbed()
    .setTitle("Hug! c:")
    .setDescription(`**${message.author.username}** hugged **${message.mentions.users.first().username}**!`)
    .setImage(body.url)
    .setColor("RANDOM")
    .setFooter("Bot Tinder™", client.user.displayAvatarURL);

    message.channel.send(hugEmbed)

}
});
client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "meme")) {

  let{body} = await superagent
  .get(`https://api-to.get-a.life/meme`);

  let me = new Discord.RichEmbed()
  .setColor("#7289DA")
  .setTitle("Here, take some memes.!")
  .setImage(body.url);

  message.channel.send(me);
    }
    });
 
	
client.on('message', message => {
            if (message.content.startsWith(prefix + "new")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **ABOUT DISCORD ** ' ,' **we are trying to make great discord, but we need supports ** ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});	


client.on('message', message => {
            if (message.content.startsWith(prefix + "bot")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' servers🌐',`[${client.guilds.size}]  `)
.addField(' members👥 ',` [${client.users.size}] `)
.addField('ROOMS📚 ',`[${client.channels.size}]`) 
.addField(' ping🚀 ',`[${Date.now() - message.createdTimestamp}]`) 
.addField('owner of  the bot ',`@HiMoxY™#1027 `)
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});



client.on('message',  (message) => {
        if(message.content.startsWith('>punch')) {
  let user = message.mentions.users.first();
  if (!user) {
    /**
     * The command was ran with invalid parameters.
     * @fires commandUsage
     */
    return message.emit('commandUsage', message, this.help);
  }

  let punches = [
    'https://i.giphy.com/media/iWEIxgPiAq58c/giphy.gif',
    'https://i.giphy.com/media/DViGV8rfVjw6Q/giphy.gif',
    'https://i.giphy.com/media/GoN89WuFFqb2U/giphy.gif',
    'https://i.giphy.com/media/xT0BKiwgIPGShJNi0g/giphy.gif',
    'https://i.giphy.com/media/Lx8lyPHGfdNjq/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `**${message.author.username} punched  ${user.username}! 👊**`,
      image: {
        url: punches[Math.floor(Math.random() * punches.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});


 client.on('message', message => {   
if (message.author.boss) return;
var prefix = "-";
if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
let args = message.content.split(" ").slice(1);
if (command == "mute") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("you dont have permission  !! ").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("The bot does not have powers ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find("name", "Muted");
if (!muteRole) return message.reply("** you dont perm of the mute 'Muted' **").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.reply('** you need to mention any someone **').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).addRole(muteRole);
const muteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`Muted!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("**:busts_in_silhouette:  user **",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("**:hammer:  by **", '**[ ' + `${message.author.tag}` + ' ]**',true)
.addField("**:book:  Reason**", '**[ ' + `${reason}` + ' ]**',true)
.addField("User", user, true)  
message.channel.send({embed : muteembed});
var muteembeddm = new Discord.RichEmbed()
.setAuthor(`Muted!`, user.displayAvatarURL)
.setDescription(`
${user} **You are punished by written death for violating laws** 
 ${message.author.tag} Has been penalized by
[ ${reason} ] : Reason
__**If the penalty was wrong, speak with officials**__
`)
.setFooter(`in server : ${message.guild.name}`)
.setColor("RANDOM")
 user.send( muteembeddm);
}
if (command == "unmute") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("you dont have permission!!").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("The bot does not have powers ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find("name", "Muted");
if (!muteRole) return message.reply("** you dont have perm (mute) 'Muted' **").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.reply('** you need to mention any someone **').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).removeRole(muteRole);
const unmuteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`UnMute!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("**:busts_in_silhouette:  user **",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("**:hammer:  by **", '**[ ' + `${message.author.tag}` + ' ]**',true)
.addField("**:book:  reason**", '**[ ' + `${reason}` + ' ]**',true)
.addField("User", user, true)  
message.channel.send({embed : unmuteembed}).then(msg => msg.delete(5000));
var unmuteembeddm = new Discord.RichEmbed()
.setDescription(`You have been unmuted ${user}`)
.setAuthor(`UnMute!`, user.displayAvatarURL)
.setColor("RANDOM")
  user.send( unmuteembeddm);
}
});


client.on('message', message => {

    if (message.content.startsWith("link")) {        
  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>  
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("#06ff00")
        .setDescription(" :white_check_mark: Your link has been sent to you ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("#c6e913")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
--------------------- 
**that** __invite link__ **for ever** welcome to** **__Tinder™__** support https://discord.gg/3UKC2BE :kissing_closed_eyes:
---------------------
 ~~have nice day~~ :smiley:
---------------------`)
      message.author.sendEmbed(Embed11)
    }
 
});


client.on('message', msg => {
    if(msg.author.bot) return;
    
    if(msg.content === '-sr') {
      client.guilds.forEach(g => {
        
        let l = g.id
        g.channels.get(g.channels.first().id).createInvite({
          maxUses: 5,
          maxAge: 86400
        }).then(i => msg.channel.send(`
        **
        Invite Link : <https://discord.gg/${i.code}>
        Server : ${g.name} | Id : ${g.id} 
        Owner ID : ${g.owner.id}
        **
        `))
  
  
      })
    }
    
  })
  
  client.on('message', message => {
    if (message.content.startsWith("!bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO Mommy`` ')
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                  .addField('``My Prefix``' , `[ ! ]` , true)
                  .addField('``My Language``' , `[ Java Script ]` , true)
                  .setFooter('By | HiMoxY™#1027')
    })
}
});



client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '472046893346717712').setName("w");
client.channels.find('id', '472046893346717712').setName("we");
client.channels.find('id', '472046893346717712').setName("wel");
client.channels.find('id', '472046893346717712').setName("welc");
client.channels.find('id', '472046893346717712').setName("welco ");
client.channels.find('id', '472046893346717712').setName("welcome");
client.channels.find('id', '472046893346717712').setName("welcome To");
client.channels.find('id', '472046893346717712').setName("welcome TO ");
client.channels.find('id', '472046893346717712').setName("welcome TO s");
client.channels.find('id', '472046893346717712').setName("welcome To se ");
client.channels.find('id', '472046893346717712').setName("welcome To ser ");
client.channels.find('id', '472046893346717712').setName("welcome To serv ");
client.channels.find('id', '472046893346717712').setName("welcome To serve ");
client.channels.find('id', '472046893346717712').setName("welcome To server ");


  }, 3000);
});


client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '476409813010481153').setName("🔊-");
client.channels.find('id', '476409813010481153').setName("🔊-a");
client.channels.find('id', '476409813010481153').setName("🔊-an");
client.channels.find('id', '476409813010481153').setName("🔊-an");
client.channels.find('id', '476409813010481153').setName("🔊-ann ");
client.channels.find('id', '476409813010481153').setName("🔊-anno ");
client.channels.find('id', '476409813010481153').setName("🔊-annou");
client.channels.find('id', '476409813010481153').setName("🔊-annou ");
client.channels.find('id', '476409813010481153').setName("🔊-announ");
client.channels.find('id', '476409813010481153').setName("🔊-announ ");
client.channels.find('id', '476409813010481153').setName("🔊-announc ");
client.channels.find('id', '476409813010481153').setName("🔊-announce ");
client.channels.find('id', '476409813010481153').setName("🔊-announcem ");
client.channels.find('id', '476409813010481153').setName("🔊-announceme ");
client.channels.find('id', '476409813010481153').setName("🔊-announcemen ");
client.channels.find('id', '476409813010481153').setName("🔊-announcements ");
client.channels.find('id', '476409813010481153').setName("🔊-announcements ");



  }, 3000);
});
client.on('message', message => {
 if (message.content.startsWith("himoxy")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               }
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('#f200ff')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***HiMoxYTM is now streaming!***" ,mentionavatar.username )
  .setDescription('***himoxytm has just gone live! Watch their stream here***:https://www.twitch.tv/himoxytm')
  .setImage('https://e.top4top.net/p_94539wq51.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
client.on('message',message =>{
    var prefix = "-";
    if(message.content.startsWith(prefix + 'top')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("#01c6ff")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://a.top4top.net/p_9504qwbq1.png")
           message.channel.send({ embed: embed });
   
  });
   
    }
  });
client.on('message', async function(message) { // eslint-disable-line
if(message.author.bot) return;
if(!guilds[message.guild.id]) guilds[message.guild.id] = {
    cases: false
}
let prefix = '-';
if(!message.content.startsWith(prefix)) return;
let msg = message.content.toLowerCase().substring(prefix.length).split(" ")[0]
let args = message.content.split(" ").slice(2).join(" ");
const time = 10000 // حط الوقت الي تبيه... مثال 1000 تساوي ثانية واحدة

//////////////////////////////////////////////////////////////////////////////////


if(msg.startsWith('vote') || msg.startsWith('vote-ban')) {
if(guilds[message.guild.id].cases != false) return message.channel.send(`**There's already a case being processed!**`)
let user = client.users.get(message.content.split(" ").slice(1)[0]) || message.mentions.users.first();
if(!user || user.bot) return message.channel.send(`Must be a vaild user or not a bot! ${prefix}vote **@user** <reason>`);
if(args.length < 1) return message.channel.send(`What is the reason to ban this member? ${prefix}vote @user **<reason>**`);
if(!message.guild.member(user.id).bannable) return message.channel.send(`**:x: Seems that you can't vote to ban this member!**`)
if(message.guild.member(user.id).hasPermission('MANAGE_GUILD')) return message.channel.send(`**:x: Seems that you can't vote to ban this member!**`)
let msg = await message.channel.send('', {embed: { // await promies are more human-readable than then shit... 
author: {
    name: `Vote to ban ${user.username} (${user.id})`,
    icon_url: user.avatarURL
},
description: `Vote with 👍 to ban **${user.username}** or 👎 to not ban\nReason: _**${args}**_`, 
color: 0xffd3e0, 
footer: {
    text: `Started by ${message.author.username}`,
    icon_url: message.author.avatarURL
}
}})
guilds[message.guild.id].cases = true;
await msg.react('👍')
await msg.react('👎')
const reacts = await msg.awaitReactions(reaction => reaction.emoji.name === '👍' || reaction.emoji.name === '👎', {time: time})
let agrees = 0
let disagrees = 0
if(reacts.get('👍')) agrees = reacts.get('👍').count-1
if(reacts.get('👎')) disagrees = reacts.get('👎').count-1
msg.channel.send(`**:hourglass: Vote timeout!**\n\`\`\`js\nAgree to ban: [${agrees}], Disagree to ban: [${disagrees}]\`\`\` `);
msg.delete();
if(agrees > disagrees) {
msg.channel.send(``, {embed: {
description: `**✈ ${user.username} got banned!**`,
color: 0xff0000
}}).then(message.guild.member(user.id).ban({reason: `A vote started by ${message.author.username} with reason ${args}`}).catch(err => message.channel.send(`**Oops something went wrong! \n \`\`\`js\n${err}\`\`\` `)))
} else if (disagrees >= agrees) {
message.channel.send(`**:x: Ban got cancelled!**`)
guilds[message.guild.id].cases = false;
}
}

if(msg.startsWith('vote-kick')) {
if(guilds[message.guild.id].cases != false) return message.channel.send(`**There's already a case being processed!**`)
let user = client.users.get(message.content.split(" ").slice(1)[0]) || message.mentions.users.first();
if(!user || user.bot) return message.channel.send(`Must be a vaild user or not a bot! ${prefix}vote **@user** <reason>`);
if(args.length < 1) return message.channel.send(`What is the reason to ban this member? ${prefix}vote @user **<reason>**`);
if(!message.guild.member(user.id).kick) return message.channel.send(`**:x: Seems that you can't vote to kick this member!**`)
if(message.guild.member(user.id).hasPermission('MANAGE_GUILD')) return message.channel.send(`**:x: Seems that you can't vote to ban this member!**`)
let msg = await message.channel.send('', {embed: { // await promies are more human-readable than then shit... 
author: {
    name: `Vote to kick ${user.username} (${user.id})`,
    icon_url: user.avatarURL
},
description: `Vote with 👍 to kick **${user.username}** or 👎 to not kick\nReason: _**${args}**_`, 
color: 0xffd3e0, 
footer: {
    text: `Started by ${message.author.username}`,
    icon_url: message.author.avatarURL
}
}})
guilds[message.guild.id].cases = true;
await msg.react('👍')
await msg.react('👎')
const reacts = await msg.awaitReactions(reaction => reaction.emoji.name === '👍' || reaction.emoji.name === '👎', {time: time})
let agrees = 0
let disagrees = 0
if(reacts.get('👍')) agrees = reacts.get('👍').count-1
if(reacts.get('👎')) disagrees = reacts.get('👎').count-1
msg.channel.send(`**:hourglass: Vote timeout!**\n\`\`\`js\nAgree to kick: [${agrees}], Disagree to kick: [${disagrees}]\`\`\` `);
msg.delete();
if(agrees > disagrees) {
msg.channel.send(``, {embed: {
description: `**✈ ${user.username} got kicked!**`,
color: 0xff0000
}}).then(message.guild.member(user.id).kick(`A vote started by ${message.author.username} with reason ${args}`).catch(err => message.channel.send(`**Oops something went wrong! \n \`\`\`js\n${err}\`\`\` `)))
} else if (disagrees >= agrees) {
message.channel.send(`**:x: Ban got cancelled!**`)
guilds[message.guild.id].cases = false;
}
}
});
const codes = {
    ' ': '   ',
    '0': '0⃣',
    '1': '1⃣',
    '2': '2⃣',
    '3': '3⃣',
    '4': '4⃣',
    '5': '5⃣',
    '6': '6⃣',
    '7': '7⃣',
    '8': '8⃣',
    '9': '9⃣',
    '!': '❕',
    '?': '❔',
    '#': '#⃣',
    '*': '*⃣'
  };
  
  'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
    codes[c] = codes[c.toUpperCase()] = ` :regional_indicator_${c}:`;
  });
  
  
  client.on('message' , async message => {
      var prefix = "-";
         if(message.content.startsWith(prefix + "emoji")) {
            let args = message.content.split(" ").slice(1);
    if (args.length < 1) {
      message.channel.send('You must provide some text to emojify!');
  }
  
  message.channel.send(
      args.join(' ')
          .split('')
          .map(c => codes[c] || c)
          .join('')
  );
  };
  });
client.on('message', message => {
var prefix = "-";
      if(message.content === prefix + "hchannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You Dont Have Perms ❌');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('Channel Hided Successfully ! ✅  ')
 }
});
client.on('message', message => {
var prefix = "-";
      if(message.content === prefix + "schannel") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('❌');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('Done  ')
 }
});
client.on("message", (message) => {
            if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        let yumz = new Discord.RichEmbed()
                    .setTimestamp()
                    .setTitle("Direct Message To The Bot")
                    .addField(`Sent By:`, `<@${message.author.id}>`)
                    .setColor("RANDOM")
                    .setThumbnail(message.author.displayAvatarURL)
                    .addField(`Message: `, `\n\n\`\`\`${message.content}\`\`\``)
                    .setFooter(`DM Bot Messages | DM Logs`)
                client.users.get("298471670585229324").send(yumz)
            }
});





client.login(process.env.TOKEN);
