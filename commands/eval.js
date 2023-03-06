const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("eval")
    .setDescription(
      `Eval code. Only bot owner (${process.env.OWNER_ID}) may use.`
    )
    .addStringOption((option) =>
      option.setName("code").setDescription("JS code to eval").setRequired(true)
    ),
  async execute(interaction) {
    const author = interaction.user;
    if (author.id !== process.env.OWNER_ID) {
      interaction.reply({
        content: "You do not have permission to run that",
        ephemeral: true,
      });
      return;
    }
    let result = "";
    try {
      result += await eval(interaction.options.getString("code"));
    } catch (err) {
      result += "\n\nAn error occurred:\n" + err.toString();
    }
    interaction.reply({ content: "```\n" + result + "\n```", ephemeral: true });
  },
};
