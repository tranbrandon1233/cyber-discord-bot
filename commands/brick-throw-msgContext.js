const {
  ContextMenuCommandBuilder,
  ApplicationCommandType,
} = require("discord.js");

module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName("Throw Brick")
    .setType(ApplicationCommandType.Message),
  async execute(interaction) {
    await interaction.reply({
      content: `${interaction.targetMessage.author}, ${interaction.user} threw a :bricks: at you!`,
    });
  },
};
