console.log('Yotsubot esta lista para funcionar!!');
const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
	if (message.content == 'hola') {
		message.channel.sendMessage('Hola soy yotsuba, la segunda bot de pruebas :/');
	}
	
	if (message.content == 'YotsubaBestGirl') {
		message.channel.sendMessage('WOAAAA, yo!!! https://cdn.discordapp.com/attachments/605529156104618000/605604960255737867/tenor_3.gif');
	}
	if (message.content == ';.numerorandom') {
		var rand1 = Math.round(Math.random()*100);
		message.channel.sendMessage('Numero random: ' + rand1);
	}
});
bot.login(process.env.BOT_TOKEN);
