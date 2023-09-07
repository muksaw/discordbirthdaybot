const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});
client.login('MTE0NTQwNjU0NzI4ODE0MTg2Ng.GTzQoc.GXFwcarl49wPRaGN1V8r_s5eDu_JomD-Pd03Lg');
const schedule = require('node-schedule');

const messageContent = 'HAPPY BIRTHDAY RYA';
const scheduledTime = new Date('2023-08-28T00:00:02.46');

const job = schedule.scheduleJob(scheduledTime, function() {
    const channel = client.channels.cache.get('933908401828823103'); 
    if (channel) {
      channel.send(messageContent);
      channel.send(messageContent);
      channel.send(messageContent);
      channel.send(messageContent);
      channel.send(messageContent);
      channel.send(messageContent);
      channel.send(messageContent);
    }
  });

  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
  });
  
  client.on('error', (error) => {
    console.error('Error:', error);
  });

