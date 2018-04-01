const Eris = require("eris");
var Codes = new Eris("توكن");

var chaneel_id = "ايدي احسابك";
                    var i = "0";
                    var x = "0";
Codes.on("voiceChannelJoin", (msg) => {
    x++;
    Codes.editChannel(chaneel_id, { name : " Voice Online " + x + ""});
});
Codes.on("voiceChannelLeave", (msg) => {
    x--;
    Codes.editChannel(chaneel_id, { name : " Voice Online " + x + ""});
});

Codes.on("messageCreate", (msg) => {
    if(msg.author.id !== "ايدي اروم ") return Codes.createMessage('__**This Command is only for the bot Owner**__');
    if(msg.content === "$voice") {
        let users = msg.channel.guild.members.map(m => m.user.id);
        let messages = [];
        messages.push(users);
        setTimeout(function(){
        while (i <= messages[0].length - 1) {
            check = msg.channel.guild.members.get(messages[0][i]);
        if(!check.voiceState.channelID){
                i++;
        }else{
                x++;
                i++;
        }
}
    console.log(x);
    Codes.createMessage(msg.channel.id, "Voice Online Members Now Are: **"+x+"** Members!");
    Codes.editChannel(chaneel_id, { name : " Voice Online "+x+""});
    messages = [];
}, 1);
    }
});




Codes.connect("توكن")
