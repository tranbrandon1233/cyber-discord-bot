const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder().setName("brick").setDescription(":bricks:"),
  async execute(interaction) {
    console.log(
      `${interaction.user.username} (${interaction.user.id}) ran /brick in ${interaction.channel.name} (${interaction.channel.id})`
    );
    await interaction.reply({ content: ":bricks:" });
  },
};
