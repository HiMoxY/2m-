const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
  client.user.setGame(`$help | By @HiMoxY™#1027 .`,'');
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});
client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});
if (message.content === '$help') {
              var embed  = new Discord.RichEmbed()
                .addField("**LINKS**" ,":no_entry_sign: Added blocking links :no_entry_sign: ")
                .addField("broadcast (bc)" ,"**user:** ``$broadcast <message> , $bc <message>``")
                .addField("**BAN**" ,"**user:** ``$ban <user>``")
                .addField("**KICK**" ,"**user:** ``$kick <user> ``")
                .addField("**ِAVATAR**" ,"**user:** ``$avatar``")
                .addField("**INFO**", "**user :** ``$info``")
                .addField("**SAY**" ,"**user:** ``$say <message>``")
                .addField("**ID**" ,"**ال��ستخدام:** ``$id``")
                .addField("**SERVER**" ,"**user:** ``$server``")
                .addField("**INVITE**" ,"**user:** ``$invite <invite bots>``")
                .addField("**SUPPORT**" ,"**user:** ``$suppport <server support>``")
                .addField("**QA**" ,"**user:** ``$qa <السؤال>``  ")
                .addField("**CLEAR**" ,"**user:** ``$clear <العدد>``")
                .addField("**PING**", "**user:** ``$ping``")
                .addField("**SERVERNAME**", "**user:** ``$servername``")
                .addField("**CUT_TWEET**", "**user** ``$ct``")
                .addField("**TWEET**", "**user** ``$tweet <message>``")
                .addField("**NO INVITE LINKE**","Added the block blocking feature")
                .addField("**LOGIN**" , " no thing ")
                .setColor('RANDOM')
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});
client.on('message', message => {
  if(message.content === ('clear')) {
  let modRole = message.guild.roles.find("name", "Admin");
  if (!modRole) return message.reply('You do not have Admin Role'); {
    }
  const params = message.content.split(" ").slice(1)
    let messagecount = parseInt(params[0]);
    message.channel.fetchMessages({limit: messagecount})
        .then(messages => message.channel.bulkDelete(messages));
  }
});
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** No Invite Links :angry: ! **`)
    }
	if (message.content === '$play') {
    if (message.member.voiceChannel) {       
        message.member.voiceChannel.join()
        .then(connection => {
        connection.playStream("http://20043.live.streamtheworld.com/SKYRADIO.mp3"); //for playing an audiostream/radio
        })
        .catch(console.log);
        message.reply('Joined and started playing.');
    } else {
                message.reply('You first need to join a voicechannel!');
     }
}
});
client.on('message', msg => {
  if (msg.content === '$invite') {
    msg.reply('https://discordapp.com/oauth2/authorize/?permissions=2146958591&scope=bot&client_id=445626711313219594');
  }
});
client.on('message', msg => {
  if (msg.content === '$help') {
    msg.reply(':envelope: | Message sent in private');
  }
});
client.on("message", message => {
    var prefix = "$";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
      
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done ",
        color: 0x06DF00,
        description: "Messages successfully cleared",
        footer: {
          text: "HiMo🎤."
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});
// Your Avatar URL!
client.on('message', message => {
    if (message.content === "$Avatar") {
    message.reply(message.author.avatarURL); 
    }
});
client.on('message', msg => {
  if (msg.content === '$suppport') {
    msg.reply('server support join ,https://discord.gg/G7D7VnD');
  }
});
client.on("message", message => {
      if (message.content === "$ping") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('**Ping:**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
    }
});
    client.on('message', message => {
     if (message.content === "$id") {
     let embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)  
  .setAuthor(message.author.username)
.setDescription("Account information")
               .setFooter(`HiMo🎤.`, '')
  .setColor("#9B59B6")
  .addField("account name", `${message.author.username}`)
  .addField('account code', message.author.discriminator)
  .addField("YOUR ID", message.author.id)
  .addField('Bots', message.author.bot)
  .addField("date registration", message.author.createdAt)
     
     
  message.channel.sendEmbed(embed);
    }
});
var prefix = "$";
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
   message.channel.sendMessage(args.join("  "))
  }
});
client.on("guildMemberRemove", member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage("", {embed: {
  color: 808080,
  author: {
    name: member.user.username,
    icon_url: member.user.avatarURL
  },
  title: guild.name,
  description: ' Bye ..',
}}).catch(console.error);
  }
);
client.on("message", (message) => {
    if (message.content.startsWith("*ban ")) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('⚠ you dont have permission');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
            message.channel.send(member.displayName + " He was successfully expelled :wave: ");
        }).catch(() => {
            message.channel.send(":x: There are mistakes try again:x: ");
        });
    }
});
client.login(process.env.TOKEN);
