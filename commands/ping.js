const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!"),
  async execute(interaction) {
    console.log(`${interaction.user.username} (${interaction.user.id}) ran /ping in ${interaction.channel.name} (${interaction.channel.id})`);
    await interaction.reply({ content: "Pong!", ephemeral: true });
  },
};
