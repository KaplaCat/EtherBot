var auth = require('./auth.json');

const XIVAPI = require('xivapi-js')
const xiv = new XIVAPI({
  private_key: '5966da3db81c45808f21087729e6cb88e0ada6648cd247f8803cfdea76f8694b',
  language: 'fr',
  snake_case: true
})
const { Client, MessageEmbed } = require('discord.js');
const client = new Client();

client.on('ready', () => 
{
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => 
{
	console.warn("Received: "+ msg.content);
	
	if (msg.content === 'ping') 
	{
		msg.channel.send('Pong !');
	}
	
	console.warn("Bot said: "+ response);
});

client.login(auth.token);
