var auth = require('./auth.json');
var compo = require('./compo.json');

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

function getCompo()
{
	var tanks = compo.tank1.role.concat(' - ',compo.tank1.name,'\n',compo.tank2.role,' - ',compo.tank2.name);
	var heals = compo.heal1.role.concat(' - ',compo.heal1.name,'\n',compo.heal2.role,' - ',compo.heal2.name);
	var dps = compo.dps1.role.concat(' - ',compo.dps1.name,'\n',
		compo.dps2.role,' - ',compo.dps2.name,'\n',
		compo.dps3.role,' - ',compo.dps3.name,'\n',
		compo.dps4.role,' - ',compo.dps4.name);
	
	var exampleEmbed = new MessageEmbed()
		.setColor('#0099ff')
		.setTitle('Etat actuel du roster')
		.addFields({ name: 'Tanks', value: tanks, inline: false })
		.addFields({ name: 'Heals', value: heals, inline: false })
		.addFields({ name: 'DPS', value: dps, inline: false })
		.setTimestamp();
	
	return exampleEmbed;
}

function changeRole(content)
{
	var temp = content.substring(content.indexOf(" ") + 1, content.length);
	var role = temp.substring(temp.indexOf(" ") + 1, temp.length).toUpperCase();
	var name = temp.substring(0,temp.length-role.length-1);
	
	if(role === 'WAR' || role === 'GUN' || role === 'CHN' || role === 'PLD')
	{
		
	}
}


client.on('message', msg => 
{
	console.warn("Received: "+ msg.content);
	
	if (msg.content === '!compo') 
	{
		var response = getCompo();
		msg.channel.send(response);
	}
	if (msg.content.includes('!editRole'))
	{
		changeRole(msg.content);	
	}
	
	console.warn("Bot said: "+ response);
});

client.login(auth.token);


