const { MessageEmbed } = require('discord.js')
const { ApplicationCommandOptionType } = require('discord-api-types/v9');

module.exports = {
  name: "resume",
  description: "เล่นเพลงต่อ!",
  inVc: true,
  sameVc: true,
  
  run: async (client, interaction, args) => {
   const player = client.poru.players.get(interaction.guild.id);

    if (!player.isPaused) {
      player.pause(false)
      interaction.reply({ embeds: [{
        color: 'WHITE',
        title: ` กลับมาเล่นเพลงต่อแล้ว`
      }]})
    }
    else {
      if (player.isPaused) {
      player.pause(false)
      return interaction.reply({ embeds: [{
        color: 'WHITE',
        title: `Resumed`
      }]})
    }
    }
    
  }
} // try it 

  