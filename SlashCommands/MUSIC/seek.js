const { MessageEmbed } = require('discord.js')
const { ApplicationCommandOptionType } = require('discord-api-types/v9');

module.exports = {
  name: "seek",
  description: "ค้นหาเพลง!",
  inVc: true,
  sameVc: true,
  
  run: async (client, interaction, args) => {
   const player = client.poru.players.get(interaction.guild.id);
  if(!player.currentTrack.isSeekable){
  interaction.reply( { embeds: [{
        color: 'WHITE',
        description: `ไม่สามารถค้นหาเพลงได้`
      }]})
}
    
player.seekTo(args[0]*1000)
    
    return interaction.reply( { embeds: [{
        color: 'WHITE',
        description: `พยายามที่จะ \`${args[0]}\``
      }]})
  }
  }
 