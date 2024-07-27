const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require("discord.js");
const { ButtonStyle } = require("discord.js");
const db = require("../mongodb");
module.exports = {
  name: "help",
  aliases: ["hlp", "h"],
  description: "Shows a list of available commands",
  execute(message, args) {
    const botUser = message.client.user;
    const botPing = Date.now() - message.createdTimestamp;
    const serverCount = message.client.guilds.cache.size;
    const embed = new EmbedBuilder()
      .setColor("#2b71ec")
      .setAuthor({
        name: "Im here to Help!",
        iconURL:
          "https://media.discordapp.net/attachments/1266656449896120371/1266656570339758141/8847_rules.gif?ex=66a5f15b&is=66a49fdb&hm=2eca55b4833835e4925a94b6ff63eadaf7e41b2be3b318d3292a63f8a3478205&=&width=27&height=26",
        url: "https://discord.gg/8Cc8df9Fdg",
      })

      .setDescription(
        `__**STATS :**__\n\n> **📊 Copyer berada di :** ${serverCount} **server**\n> **🟢 Sinyal Copyer:** ${botPing}ms\n> **👑 Owner [ponar.](https://discord.gg/8Cc8df9Fdg)**\n\n__**COMMANDS :**__ `,
      )
      .addFields(
        {
          name: "▶️  Dasar",
          value: "`avatar`, `update`, `support`,`userinfo`",
          inline: true,
        },

        {
          name: "▶️  Musik",
          value:
            "`play`, `stop`, `seek`,`pause`,`resume`,`skip`,`remove`,`shuffle`,`queue`",
          inline: true,
        },

        {
          name: "▶️  Fun",
          value: " `say`, `joke`, `roll`",
          inline: true,
        },

        {
          name: "▶️  Gambar",
          value: "`cat`, `dog`",
          inline: true,
        },

        {
          name: "▶️  Utility",
          value: "`serverinfo`,`userinfo`",
          inline: true,
        },

        {
          name: " ",
          value: " ",
          inline: true,
        },
      )
      .setThumbnail(
        botUser.avatarURL({ dynamic: true, format: "png", size: 1024 }),
      )
      .setImage(
        `https://media.discordapp.net/attachments/862865027731685399/1266655479547826247/standard_1.gif?ex=66a5f057&is=66a49ed7&hm=00c8612a2d953e0ea8d5d3e29e8e5a8388489da868f7339393d78438403341fd&=&width=539&height=215`,
      );

    const button1 = new ButtonBuilder()
      .setLabel("🔔 Support Server")
      .setURL("https://discord.gg/8Cc8df9Fdg")
      .setStyle(ButtonStyle.Link);

    const button2 = new ButtonBuilder()
      .setLabel("🎮 Sirkelo! Game Center")
      .setURL("https://discord.gg/gvnW7uHxUV")
      .setStyle(ButtonStyle.Link);

    const button3 = new ButtonBuilder()
      .setLabel("🔗 Invite Copyer!")
      .setURL(
        "https://discord.com/oauth2/authorize?client_id=863981370815545344&scope=bot&permissions=3145736",
      )
      .setStyle(ButtonStyle.Link);

    const row = new ActionRowBuilder().addComponents(button1, button2, button3);

    message.reply({ embeds: [embed], components: [row] });
  },
};
