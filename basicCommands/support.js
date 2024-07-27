const { EmbedBuilder } = require("discord.js");
const db = require("../mongodb");
module.exports = {
    name: "support",
    description: "support server of this Bot",
    execute(message, args) {
        const supportServerLink = "https://discord.gg/8Cc8df9Fdg";
        const embed = new EmbedBuilder()
            .setColor("#b300ff")
            .setAuthor({
                name: "Support Server",
                iconURL:
                    "https://media.discordapp.net/attachments/1266656449896120371/1266656571023167498/98603-verified.gif?ex=66a5f15b&is=66a49fdb&hm=66309b618678e889136db85b8c78e0c2dad3946efc43440cfff3dffae8976947&=&width=43&height=43",
                url: "https://discord.gg/8Cc8df9Fdg",
            })
            .setDescription(
                `➡️ **Join our Discord server for support and updates:**\n- Discord - ${supportServerLink}`,
            )
            .setImage(
                "https://media.discordapp.net/attachments/862865027731685399/1266655479547826247/standard_1.gif?ex=66a5f057&is=66a49ed7&hm=00c8612a2d953e0ea8d5d3e29e8e5a8388489da868f7339393d78438403341fd&=&width=539&height=215",
            )
            .setTimestamp();

        message.reply({ embeds: [embed] });
    },
};

/*

  ________.__                        _____.___.___________
 /  _____/|  | _____    ____  ____   \__  |   |\__    ___/
/   \  ___|  | \__  \ _/ ___\/ __ \   /   |   |  |    |   
\    \_\  \  |__/ __ \\  \__\  ___/   \____   |  |    |   
 \______  /____(____  /\___  >___  >  / ______|  |____|   
        \/          \/     \/    \/   \/                  

╔════════════════════════════════════════════════════════════════════════╗
║                                                                        ║
║  ## Created by GlaceYT!                                                ║
║  ## Feel free to utilize any portion of the code                       ║
║  ## DISCORD :  https://discord.com/invite/xQF9f9yUEM                   ║
║  ## YouTube : https://www.youtube.com/@GlaceYt                         ║
║                                                                        ║
╚════════════════════════════════════════════════════════════════════════╝


*/
