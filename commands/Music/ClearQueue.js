module.exports = {
  name: "clearqueue",
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: async (client, message, args) => {

    const memberChannel = message.member.voice.channel.id

    const player = client.poru.players.get(message.guild.id)

    if(!player.queue.length){
      message.reply("คิวว่าง")
    }
    
    let queueLength = player.queue.length

    player.queue.clear();

    message.reply(`เคลียร์ \`${queueLength}\` จากคิววี`)

  }
}