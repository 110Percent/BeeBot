
var Discord = require("discord.js");
var bot = new Discord.Client();
var script = require("./script.json");
console.log(script);
bot.on("message", function(msg){
	if (msg.cleanContent == "Bee Movie script, please."){
		console.log("Command fired by " + msg.author.name + "! Posting Script...");
		var i = 0;
		var running = setInterval( scriptFunction, 2000);
		function scriptFunction(){
		  var line = script[i];
		  bot.sendMessage(msg.channel,line,{},function(err,sendmsg){
		      console.log(line)
		  });
		  if( i++ >= script.length ) clearInterval(running);
		}
	}
})

bot.on("ready", function(){
	console.log("BeeBot is running!");
})

bot.loginWithToken("INSERT BOT TOKEN HERE");