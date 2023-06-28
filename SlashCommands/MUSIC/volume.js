const { MessageEmbed } = require('discord.js')
const { ApplicationCommandOptionType } = require('discord-api-types/v9');

module.exports = {
  name: "volume",
  description: "ตั้งระดับเสียง!",
  inVc: true,
  sameVc: true,
  
  run: async (client, interaction, args) => {
   const player = client.poru.players.get(interaction.guild.id);

    if(isNaN(args[0])) return interaction.reply( { embeds: [{
        color: 'WHITE',
        description: `ระดับเสียงที่ต้องการ` // done here
      }]})
    player.setVolume(args[0]);

    interaction.reply( { embeds: [{
        color: 'WHITE',
        description: `ระดับเสียงถูกตั้งค่าเป็น: ${args0}`
      }]})
  }
} 
