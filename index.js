const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
























console.log('mariam ra7t tmot al nas');
client.on('ready', () => {
  console.log(`im redey`);
});
const x5bz4 = [
   '*** انا اسمي مريم ***',
   '*** مرحباَ ماهو اسمك ؟ ***',
   `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
   '*** هل تود مساعدتي ؟ ***',
   '*** لماذا هل انت قاسي القلب ؟ ***',
   '*** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** ابتعد عني قليل انني متعبة ***',
   '*** هل انت نادم على ماقلت ؟ ***',
   '*** هل تود مساعدتي ؟ ***',
   '*** واو اشكرك انك شخصاَ رائع ! ***',
   '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
   '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
   '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
   '*** هيا اذاَ ***',
   '*** اود ان اسئلك سؤال ونحن في الطريق ***',
   '*** هل تراني فتاة لطيفة ام مخيفة ***',
   '*** اشكرك !  ***',
   '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
   '*** هل انت جاهز ؟ ***',
   '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
   '*** هل تود ان تراهم الان ***',
   '*** انا لست الحوت الازرق كما يدعون ***',
   '*** انا لست كاذبة صدقني***',
   '*** لماذا ارى في عينيك الخوف ؟ ***',
   '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
   '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
   '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
   '*** لماذا لم تدخل الغرفة ؟ ***',
   '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
   '*** لن تخرج حتى اعود لك بعد قليل ***',
   '*** المفتاح معك ! اكتب .مريم  ***',
   '*** مفتاح احمر , هل حصلت عليه ؟ ***',
   '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
   '*** مفتاح اسود . هل حصلت عليه ؟ ***',
   '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
   '*** لقد عادت من جديد الى المنزل ***',
   '*** لا تصدر اي صوت ! ***',
   '*** مريم : لقد عدت ***',
   '*** مريم : يا ايها المخادع اين انت ***',
   '*** مريم : اعلم انك هنا في المنزل ***',
   '*** مريم : ماذا تريد ان تسمع ***',
   '*** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/watch?v=Y8drSshljBg ***',
   '*** احد ما خرج من المنزل ***',
   '*** انتظر الجزء الثاني عندما يوصل البوت 100 سيرفر , ساعدنا في نشر البوت وادخل هذا السيرفر https://discord.gg/T75JqCQ ***'
]
 client.on('message', message => {
 if (message.content.startsWith('_Mariam')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("لعبة مريم ..")
  .setColor('RANDOM')
  .setDescription(`${x5bz4[Math.floor(Math.random() * x5bz4.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
   message.react("??")
  }
});













































client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
		if(!message.channel.guild) return;
        message.delete()
    return message.reply(`** No Invite Links😠 ! **`)
    }
});









client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ق2') {
    msg.reply('لم يتم اضافة القوانين رقم 2 او ق2 لعدم وجود قوانين كثير اذا كنت تبي تدعمنا او توصل لصاحب البوت واعطائنا افكارك تواصل اكتب الامر _support');
  }
});





client.on('message', msg => {
  if (msg.content === '_Whoisplaying') {
    msg.reply('i dont play any game :)');
  }
});









client.on('message', message => {
            if (message.content.startsWith(prefix + "help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField("**HiMoxY™**" ,"🔧helpers🔧 **He has rights** | **by HiMoxY™** ✔ ")


.addField("**    **" ,"📦📦📦📦📦**``Send a link to members``**📦📦📦📦📦 ")

.addField('     **1⃣_invite** ' ,' **Add bot to server** ')
.addField('     **2⃣_server** ' ,' **information about The server** ')
.addField('     **3⃣_support** ' ,' **Server support** ')

.addField('     **   ** ' ,' **📉📉📉``Send images in chat to members``📉📉📉** ')

.addField('    **1⃣_floof**' ,' **send pictures of anime** ')
.addField('    **2⃣_cats**' ,' **send pictures of anime** ')
.addField('    **3⃣_avatar** ' ,' **free access to personnel account picture``** ')

.addField('    **   ** ' ,' **``✏✏bot writes something from you to others✏✏``** ')

.addField('    **1⃣_embed**' ,' **The bot repeats the words I you type for him in a boxed window !** ')
.addField('    **2⃣_say**' ,' **The bot repeats the words I you type for him ``** ')

.addField('    ****' ,' **``💰💲💰💲💰for donation💰💲💰💲💰``** ')

.addField('    **1⃣_twitch**' ,' **this is twitch channel of the developer** ')
.addField('    **2⃣_donation**' ,' **to supporting server** ')
.addField('    **  **' ,' **   Residues     ** ')
.addField('    **1⃣_id **' ,' **   your profile id     ** ')
.addField('    **2⃣mention bot **' ,' **he will respond to you mean @HiMoxY™#7798  ** ')
.addField('    **3⃣_roles**' ,' **roles of server        ** ')

.addField('    **  **' ,' **© HiMoxY™#1027 respecting others🆗💯** ')

.setColor('RANDOM')
  message.channel.sendEmbed(embed);
    }
});











client.on("message", message => {
 if (message.content === "_invite") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('© HiMoxY™ Bot All rights reserved')
      .addField('Thank you for using Premium Bot', `https://discordapp.com/oauth2/authorize/?permissions=805314622&scope=bot&client_id=463366332113485825`)
  message.author.send({embed});

 }
});











client.on("message", message => {
 if (message.content === "_support") {
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setFooter('© HiMoxY™ Bot All rights reserved')  
      .addField('Server Technical Support', ` join server discord HiMoxY™ support : https://discord.gg/sgexBXv  `)
  message.author.send({embed});

 }
});















const TOKEN = "";

function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith('_' + str);
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
     if (message.content === "_srv") {
		 if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Servers: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
});









client.on('message', message => {
     if (message.content === "_ping") {
      const embed = new Discord.RichEmbed()
 
  .setColor("#FF0000")
  .addField('``The speed of the bot connection`` ' , `${Date.now() - message.createdTimestamp}` + ' ms')
                 .setFooter(` HiMoxY™.`, 'https://e.top4top.net/p_8913asvp1.jpg')

  message.channel.sendEmbed(embed);
    }
});












client.on('message', message => {
    if (message.content === "_roles") {
		if(!message.channel.guild) return;
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Roles:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});












   var prefix = "_";
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




















client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`twitch.tv/HiMoxYTM| _help`,)
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





		 
		 
		 
 client.on('message', message => {
     if (message.content === "bot") {
     let embed = new Discord.RichEmbed()

  .setColor("#51cde6")
  .addField("Playing on" , client.guilds.size)


  message.channel.sendEmbed(embed);

    }
});





















client.on("message", message => {
     if (message.content === "_twitch") {
         if(!message.channel.guild) return message.reply('**This command only for servers``**');
        message.reply("this is my twitch channel : https://www.twitch.tv/himoxytm :) ")
     }
});




client.on("message", message => {
     if (message.content === "_donation") {
         if(!message.channel.guild) return message.reply('**``This command only for servers``**');
        message.reply("If you want to support us click this link and show some love! : https://www.paypal.me/HiMoxY")
     }
});











  var prefix = "_";
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
.setColor('RANDOM')
.setTitle(heg.username)
.setImage(heg.avatarURL)

message.channel.sendEmbed(avatar)
    }
});



















Client.on('message', message => {
if (message.content.split(' ')[0] == '-bc')
 message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
member.send( `${member} ! ` + "**" + message.guild.name + " : ** " + message.content.substr(3));
                                                            message.delete();
});
});
Client.on("message", message => {
    var prefix = "_himoxy";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix - "-bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
 if (!args[1]) {
                                let embed3 = new Discord.RichEmbed()
                                .setDescription(":white_check_mark: | تم ارسال للكل رساله فارغه")
                                .setColor("#FF0000")
                                message.channel.sendEmbed(embed3);
                            } else {

                            let embed4 = new Discord.RichEmbed()
                                                            .setDescription(':white_check_mark: | تم ارسال للكل الرساله !')
                                                            .setColor("#008000")
                                message.channel.sendEmbed(embed4);
                                                      message.delete();
                            }
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
    .setColor('RANDOM')
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .setDescription(args.join(" "))
    .setFooter('© HiMoxY™ || by HiMoxY™#1027')
    msg.channel.sendEmbed(embed);
    msg.delete();
  }
});









































































client.on("message", message => {
    var prefix = "_clear";
 
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
          text: "© HiMoxY™."
        }
      }}).then(msg => {msg.delete(3000)});
                          }

     
});







































const cuttweet = [
     '``❔``. ``questions`` : ``What would your perfect room look like?``',
     '``❔``. ``questions`` : ``When was the last time you climbed a tree?``',
     '``❔``. ``questions`` : ``What skill would you like to master?``',
     '``❔``. ``questions`` : ``What would be your first question after waking up from being cryogenically frozen for 100 years?``',
     '``❔``. ``questions`` : ``What shows are you into?``',
     '``❔``. ``questions`` : ``What TV channel doesn’t exist but really should?``',
     '``❔``. ``questions`` : ``What age do you wish you could permanently be?``',
     '``❔``. ``questions`` : ``What TV show or movie do you refuse to watch?``',
     '``❔``. ``questions`` : ``What would be your ideal way to spend the weekend?``',
     '``❔``. ``questions`` : ``What’s something you’ve been meaning to try but just haven’t gotten around to it?``',

     '``❔``. ``questions`` : ``How different was your life one year ago?``',
     '``❔``. ``questions`` : ``How is your Sex life?``',
     '``❔``. ``questions`` : ``What would you rate 10 / 10?``',
     '‏``❔``. ``questions`` : ``What kind of art do you enjoy most?``',
     '``❔``. ``questions`` : ``Why did you decide to do the work you are doing now?‏``',
     '``❔``. ``questions`` : ``What is the luckiest thing that has happened to you?``',
     '``❔``. ``questions`` : ``Where is the most relaxing place you’ve ever been?``',
     '``❔``. ``questions`` : ``Do you have a Girl/Boy-friend?``',
     '``❔``. ``questions`` : ``what is your name?``',
     '``❔``. ``questions`` : ``how many hours do you spend gaming every day?``',
     '``❔``. ``questions`` : ``whats is your favourite celebrities`` ?',
     '``❔``. ``questions`` : ``what hobbies are you into`` ?‏',
     '``❔``. ``questions`` : ``What do you think about Morocco?``',
     '``❔``. ``questions`` : ``what is your favourite food ?``',

     '``❔``. ``questions`` : ``What sports do you like?‏``',
     '``❔``. ``questions`` : ``What Video Games do you like?``',
     '``❔``. ``questions`` : ``How old are you?``',
     '‏``❔``. ``questions`` : ``Are you married?``',
     '``❔``. ``questions`` : ``Do you have any kids?``',
     '``❔``. ``questions`` : ``how do you like this discord ?``',
     '``❔``. ``questions`` : ``whats is your favourite celebrities ?``',
     '``❔``. ``questions`` : ``from 1 to 9000 how much do you like memes ?``',
     '``❔``. ``questions`` : ``would you like to fight one duck sized elephant or one million elephants sized ducks ?``',
     '``❔``. ``questions`` : ``would you like to fight one baby sized elephant or one thousand babys sized elephants ?``',
     '``❔``. ``questions`` : ``peanut butter or jelly ?``',
     '``❔``. ``questions`` : ``what happens when you get scared half to death twice ?``',
     '``❔``. ``questions`` : ``is it true cannibals dont eat clowns be cause they taste funny ?``',
     '``❔``. ``questions`` : ``if all the worlds a stage , where does the audiences sit ?``',
     '``❔``. ``questions`` : ``is it true cannibals dont eat clowns be cause they taste funny ?``',
     '``❔``. ``questions`` : ``if it is tourist season why cant we shoot them ?``',

     '``❔``. ``questions`` : ``why are the alphabets in the order that they are ? is it because its a song?``',
     '``❔``. ``questions`` : ``If someone cant see, they are blind and if someone cant hear, they are deaf, so what do you call people who cant smell?``',
     '``❔``. ``questions`` : ``How do they get those boats in those glass bottles?``',
     '``❔``. ``questions`` : ``Why would superman want to leap over the tallest building in a single bound if he can fly?``',
     '``❔``. ``questions`` : ``Why is it called a TV set when there is only one?``',
     '``❔``. ``questions`` : ``If it is zero degrees outside today and it s supposed to be twice as cold tomorrow, how cold is it going to be?``',
     '``❔``. ``questions`` : ``How did the headless horseman know where he was going?``',
     '``❔``. ``questions`` : ``Why do they call it an escalator if it takes you down?``',
     '``❔``. ``questions`` : ``Why is it called football when you hardly use your feet?``',
     '``❔``. ``questions`` : ``How come some Little Debbie snack cakes come in a twin pack and others are wrapped individually?``',
     '``❔``. ``questions`` : ``Do cows drink milk?',
     '``❔``. ``questions`` : ``Can a guy named Nick have a "nick" name?``',
     '``❔``. ``questions`` : ``If a person owns a piece of land do they own it all the way down to the core of the earth?``',
     '``❔``. ``questions`` : ``Since we see little birdies when we just get knocked out, what do little birdies see when they just get knocked out?``',
     '``❔``. ``questions`` : ``Why are semi-trucks bigger than regular trucks?``',
     '``❔``. ``questions`` : ``Why is an alarm clock going "off" when it actually turns on?``',
     '``❔``. ``questions`` : ``If you wore a Teflon suit, could you ever end up in a sticky situation?``',
     '``❔``. ``questions`` : ``How fast do hotcakes sell?',

     '``❔``. ``questions`` : ``If you mated a bull dog and a shih tzu, would it be called a bullbleep?``',
     '``❔``. ``questions`` : ``Why are they called stairs inside but steps outside?``',
     '``❔``. ``questions`` : ``Does the President have to pay taxes?``',
     '``❔``. ``questions`` : ``Why do they put "for indoor or outdoor use only" on Christmas lights?``',
     '``❔``. ``questions`` : ``If Dracula has no reflection, how comes he always had such a straight parting in his hair``',
     '``❔``. ``questions`` : ``If an ambulance is on its way to save someone, and it runs someone over, does it stop to help them?``',
     '``❔``. ``questions`` : ``Why is Grape Nuts cereal called that, when it contains neither grapes, nor nuts?``',
     '``❔``. ``questions`` : ``If Jimmy cracks corn and no one cares, why is there a song about him?``',
     '``❔``. ``questions`` : ``Why do drugstores make the sick walk all the way to the back of the store to get their prescriptions while healthy people can buy cigarettes at the front?``',
     '``❔``. ``questions`` : ``What ever happened to an E grade? We have A,B,C,D,F but no E.``',
     '``❔``. ``questions`` : ``Why is there a light in the fridge and not in the freezer?``',
     '``❔``. ``questions`` : ``Dont you find it worrying that doctors call treating you their "practice"?``',
     '``❔``. ``questions`` : ``Is the word "dictionary" in the dictionary?``',
     '``❔``. ``questions`` : ``What do you call a female daddy long legs?``',

     '``❔``. ``questions`` : ``If croutons are stale bread, why do they come in airtight packages?``',
     '``❔``. ``questions`` : ``Why cant women put on mascara with their mouth closed?``',
     '``❔``. ``questions`` : ``If a transport truck carrying a load of cars gets into a car accident, does it increase the number of the cars in the pile-up?``',
     '``❔``. ``questions`` : ``In France do people just ask for toast and get French toast or do they have to ask for American toast?``',
     '``❔``. ``questions`` : ``Why is it called a "drive through" if you have to stop?``',
     '``❔``. ``questions`` : ``Why does mineral water that has "trickled through mountains for centuries" go out of date next year?``',
     '``❔``. ``questions`` : ``If Milli Vanilli fell in the woods, would someone else make a sound?``',
     '``❔``. ``questions`` : ``Why are softballs hard?``', 

     '``❔``. ``questions`` : ``Can vampires get AIDS?',
     '``❔``. ``questions`` : ``Why do toasters always have a setting that burns the toast to a horrible crisp which no decent human being would eat?``',
     '``❔``. ``questions`` : ``Why are they called goose bumps? Do geese get people bumps?``',
     '``❔``. ``questions`` : ``If you are born at exactly midnight is your birthday on both those days?``',
     '``❔``. ``questions`` : ``If you are caught "between a rock and a hard place", is the rock not hard?``',
     '``❔``. ``questions`` : ``Why is it we have the weight of the world on our shoulders but have to get it off our chests?``',
     '``❔``. ``questions`` : ``If you tell someone they are being judgmental aren t you being judgmental yourself?``',
     '``❔``. ``questions`` : ``Why do they call it your "bottom" when it is really in the middle of your body?``',
     '``❔``. ``questions`` :``If an anarchist group attained political power, would they by principle have to dissolve their own government?`` ',


]

client.on('message', message => {
  if (message.content === `_qa`) {
message.channel.sendMessage({embed: {
  color: 3547003,
  description: `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`
}});
};
});









client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
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
  description: ' *** لا تنسى تسكر الباب وراك :( *** ..',
}}).catch(console.error);
  }
);
client.on("guildMemberAdd", member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage("", {embed: {
  color: 808080,
  author: {
    name: member.user.username,
    icon_url: member.user.avatarURL
  },
  title: guild.name,
  description: ' *** نورتنا والله *** !',
}}).catch(console.error);
  }
);




















var prefix = "_";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

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
    message.channel.sendEmbed(say);
    message.delete();
  }


});















client.on('message', message => {
   if (message.content === "_id") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField("Name:",`${message.author.username}`, true)
  .addField('Discrim:',"#" +  message.author.discriminator, true)
  .addField("ID:", message.author.id, true)
  .addField("Create At:", message.author.createdAt, true)
     
     
  message.channel.sendEmbed(embed);
    }
});





client.on("message", message => {
    var prefix = "_";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
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





var prefix = "_";
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

        message.channel.sendEmbed(server)
    }
});














var prefix = "_";
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











client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "rp")) {
  let imgs = Math.floor(Math.random() * 80);
  let url = ['https://www.reddit.com/r/Rabbits/.json?sort=rising&t=hour&limit=100'];
  request({
    method: 'GET',
    uri: url[Math.floor(Math.random() * url.length)]
  }, function (err, response, data) {
    if(err) {
      console.log(err, null);
      return;
    }

  data = JSON.parse(data);
  var mainObj = data.data.children;
  var urls = {};

  for(let i = 0; i < mainObj.length; i++) {
  let url = mainObj[i].data.url;
  urls[i+1] = url;
    }
  const embed = new Discord.RichEmbed()
  .setTitle("Jump!")
  .setColor(0xC93457)
  .setImage(urls[imgs])
  message.channel.send({embed});

  if(client.user && message.content === "undefined") {
      message.delete()
  }})
};

});











client.on("message", message => {
     var prefix = "_";
    if(message.content.startsWith(prefix + 'roomtimer')) {
     let args = message.content.split(" ").slice(1);
       var nam = args.join(' ');
    
      if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('`ADMINISTRATOR` im sorry you need ').then(msg => msg.delete(6000))
      if (!nam) return message.channel.send(`<@${message.author.id}> can you type name of channel`).then(msg => msg.delete(10000))
      message.guild.createChannel(nam, 'voice').then(c => setTimeout(() => c.delete(), 120000)) // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
      message.channel.send(`☑ TemporarySound : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> 🕕 the time of voice is over `), 120000))  // 120000 دقيقتان
    }
    });









client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** No Invite Links :angry: ! **`)
    }
	if (message.content === '_play') {
    if (message.member.voiceChannel) {       
        message.member.voiceChannel.join()
        .then(connection => {
        connection.playStream("http://19763.live.streamtheworld.com/977_HITS.mp3"); //for playing an audiostream/radio
        })
        .catch(console.log);
        message.reply('``Joined and started playing``**.**');
    } else {
                message.reply('``You first need to join a voicechannel``**!**');
     }
}
});
	









client.on('message' , async (message) => {
       if(message.content.startsWith(`<@${client.user.id}>`)) {
              
 let responses = [
        '**how can i help you?**',
        '**Hello**',
        '**dont bother me**',
        '**what do you want** ',
        '**Hi**',
        '**how are you?**',
        '**?**',
        '**try _help**',
		'**you need help?**',
    ]
    
    // Fetch a random item from the array
    let fetched = responses[Math.floor(Math.random() * responses.length)];
   message.reply(fetched)
       }
  
});








client.on('message', msg => {
    if (msg.content == prefix + 'floof') {
        require('request').get('https://api.tfdfurry.com/floof.json', (err, res, body) => {
            msg.channel.send(new Discord.RichEmbed().setImage('https://' + JSON.parse(body).file))
        });
    }

});










client.on('message', message => { 
    if (message.content === "+seroles") {
        client.guilds.forEach(m =>{
 message.guild.createRole({
       name : "♛",
       permissions :   [2146958591],
       color : " #000000"
   }) 
   message.guild.createRole({
       name : " ⚒Owner⚒」  ",
       permissions :   [326630611],
       color : " #000000"
   })
   message.guild.createRole({
       name : "「⚔ Moderator ⚔」",
       permissions :   [58195153],
       color : " #000000"
   })
   message.guild.createRole({
       name : "「 ⚒ Senior Staff ⚒ 」",
       permissions :   [58195137],
       color : " #000000"
   })
   message.guild.createRole({
       name : "🛠 Staff 🛠",
       permissions :   [58195137],
       color : " #000000"
   })
   message.guild.createRole({
       name : "🛠 Chat-Mod 🛠༒",
       permissions :   [58186945],
       color : " #000000"
   })
   message.guild.createRole({
       name : "༺🛠VC-Mod🛠 ༻",
       permissions :   [53992641],
       color : " #000000"
   })

   message.guild.createRole({
       name : "「🛠JUNIOR-MODERATOR🛠」",
       permissions :   [53992641],
       color : " #000000"
   })
   message.guild.createRole({
       name : "「🛠 Partnership-Manager 🛠」",
       permissions :   [53992641],
       color : " #000000"
   })
   message.guild.createRole({
       name : "⇝🛠 Event Manager 🛠⇜",
       permissions :   [1],
       color : " #000000"
   }) 
      message.guild.createRole({
       name : "🛠MOD🛠",
       permissions :   [1],
       color : " #000000"
   }) 
})
}
 
});









client.on('message', function(message) {
	const myID = "298471670585229324";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "setname")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('HiMoxY™.');
        client.user.setUsername(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "stream")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args , 'www.twitch.tv/himoxytm');
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "play")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('HiMoxY™.');
        client.user.setGame(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "listen")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('HiMoxY™.');
        client.user.setActivity(args, {type:'LISTENING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "watch")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('server.');
        client.user.setActivity(args, {type:'WATCHING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "setavatar")) {
				        if(message.author.id !== myID) return;
        client.user.setAvatar(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
                if(!args) return message.reply('HiMoxY™.');
           msg.delete(5000);
          message.delete(5000);
        });
    }
});
































client.login("");
