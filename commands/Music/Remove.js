module.exports = {
  name: "remove",
  args: true,
  inVc: true,
  sameVc: true,
  player: true,
  current: true,
  run: async (client, message, args) => {

    let player = client.poru.players.get(message.guild.id)

    if (args[0] == 0) return message.reply(`ไม่สามารถลบเพลงที่กำลังเล่นอยู่`);
    if (args[0] > player.queue.length) return message.reply('ไม่พบเพลง');

    player.queue.remove(args[0] - 1)
    return message.reply(`ลบแทร็กออกจากคิว`)
  }

}