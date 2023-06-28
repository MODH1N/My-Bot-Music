module.exports = {
  name: "resume",
  inVc: true,
  sameVc: true,
  player: true,
  run: async (client, message, args) => {

    let player = client.poru.players.get(message.guild.id)

    if (!player.isPaused) {
      player.pause(false)
      return message.reply('เล่นเพลง')
     
    }

    if (player.isPaused) {
      
      return message.reply("กลับมาเล่นเพลงต่อแล้ว")
    }

    
  }
}