const { MessageEmbed } = require('discord.js');
const { ApplicationCommandOptionType } = require('discord-api-types/v9');
const ms = require('ms');

module.exports = {
  name: "queue",
  description: "แสดงเพลย์ลิสต์ของเพลง!",
  inVc: true,
  sameVc: true,
  
  run: async (client, interaction, args) => {
    const player = client.poru.players.get(interaction.guild.id);
    const queue = player.queue.length > 9 ? player.queue.slice(0, 9) : player.queue;
    
    const currentTrackDuration = ms(player.currentTrack.info.length, { long: true });
    
    const embed = new MessageEmbed()
      .setColor("WHITE")
      .setTitle('Now Playing')
      .setThumbnail(`https://img.youtube.com/vi/${player.currentTrack.identifier}/default.jpg`)
      .setDescription(`[${player.currentTrack.info.title}](${player.currentTrack.uri}) [${currentTrackDuration}]`)
      .setFooter(`queue length: ${player.queue.length}`);

    if (queue.length) {
      embed.addField('Up Next', queue.map((track, index) => `**${index + 1}.)** \`${track.info.title}\``).join('\n'));
    }

    interaction.reply({ embeds: [embed] });
  }
}
