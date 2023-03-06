const {
  ContextMenuCommandBuilder,
  ApplicationCommandType,
} = require("discord.js");

module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName("Throw Brick At")
    .setType(ApplicationCommandType.User),
  async execute(interaction) {
    await interaction.reply({
      content: `${interaction.targetUser}, ${interaction.user} threw a :bricks: at you!`,
    });
  },
};
