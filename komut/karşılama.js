const { ActionRowBuilder, StringSelectMenuBuilder, Events, ButtonBuilder, ButtonStyle } = require("discord.js")
const info = require("../info.json")
module.exports.run = (client, message, args, interaction) => {
 if (message.member.id !== info.rolessahip) return;

 var mesaj = `Register Kanalına Aktarılmak İçin Kayıtsız tuşuna Basınız.
`
const ec1 = new ActionRowBuilder()
.addComponents(
    new ButtonBuilder()
    .setCustomId('kyt')
    .setLabel('Kayıtsız')
    .setEmoji('🔔')
    .setStyle(ButtonStyle.Success)
)
 
message.delete()
message.channel.send({ content: `${mesaj}`, components: [ec1] })

}
module.exports.name ="role-karşılama",
module.exports.use = ['kk','karşılama']