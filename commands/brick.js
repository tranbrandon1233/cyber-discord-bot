const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("brick")
    .setDescription(":bricks:")
    .addSubcommand((subcommand) =>
      subcommand.setName("get").setDescription("Get a brick")
    )
    .addSubcommand((subcommand) =>
      subcommand
        .setName("throw")
        .setDescription("Throw a brick at someone")
        .addUserOption((option) =>
          option.setName("target").setDescription("User to throw brick at")
        )
    ),
  async execute(interaction) {
    console.log(
      `${interaction.user.username} (${interaction.user.id}) ran /brick in ${interaction.channel.name} (${interaction.channel.id})`
    );
    if (interaction.options.getSubcommand() === "throw") {
      await interaction.reply({
        content: `${interaction.options.getUser("target")}, ${
          interaction.user
        } threw a :bricks: at you!`,
      });
    } else if (interaction.options.getSubcommand() === "get") {
      await interaction.reply({ content: ":bricks:" });
    } else {
      await interaction.reply({ content: "An unknown error occurred" });
    }
  },
};
