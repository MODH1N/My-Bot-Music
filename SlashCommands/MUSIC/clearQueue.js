const { MessageEmbed } = require('discord.js')
const { ApplicationCommandOptionType } = require('discord-api-types/v9');

module.exports = {
  name: "clear",
  description: "ล้างคิวเพลง!",
  inVc: true,
  sameVc: true,
  
  run: async (client, interaction, args) => {
 
    const memberChannel = interaction.member.voice.channel.id

    const player = client.poru.players.get(interaction.guild.id)

    if(!player.queue.length){
      interaction.reply({ embeds: [{
      color: 'WHITE',
      description: `คิวเพลงว่าง!`
    }]})
    }
    
    let queueLength = player.queue.length

    player.queue.clear();

    interaction.reply({ embeds: [{
      color: 'WHITE',
      description: `เคลียร์ \`${queueLength}\` จากคิวเพลง`
    }]})
  }
} // try it 