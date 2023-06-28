module.exports = {
  name: "shuffle",
  args: false,
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: async (client, message, args) => {
 
    let player = client.poru.players.get(message.guild.id)
    
    if(!player.currentTrack.isSeekable){
  message.reply("ไม่สามารถค้นหาแทร็กได้")
}
player.queue.shuffle()
 
    return message.reply('เปลี่ยนคิว')
  }
}