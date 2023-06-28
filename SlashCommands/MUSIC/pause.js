const { MessageEmbed } = require('discord.js')
const { ApplicationCommandOptionType } = require('discord-api-types/v9');

module.exports = {
  name: "pause",
  description: "หยุดเพลงชั่วคราว",
  inVc: true,
  sameVc: true,
  
  run: async (client, interaction, args) => {
    const player = client.poru.players.get(interaction.guild.id);
    if(player.isPaused) {
      return interaction.reply({ embeds: [{
        color: "WHITE",
        title: 'หยุดเพลงชั่วคราวแล้ว!'
      }]
         })
    }
      player.pause(true);
    return interaction.reply({ embeds: [{
        color: "WHITE",
        title: 'หยุดชั่วคราว!'
      }] 
     })

  }} // try it 