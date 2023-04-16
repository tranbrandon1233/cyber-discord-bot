const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  SlashCommandBuilder,
  Role,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("request-role")
    .setDescription("Request a role."),
  async execute(interaction) {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("role-request--cyber-academy")
        .setLabel("Cyber Academy")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("role-request--special-topics")
        .setLabel("Special Topics")
        .setStyle(ButtonStyle.Primary)
    );

    await interaction.reply({ content: "Choose a role: ", components: [row] });
  },
  async onMessageInteraction(interaction) {
    if (interaction.customId === "role-request--cyber-academy") {
      await interaction.reply({
        content: "You have been given the Cyber Academy role.",
        ephemeral: true,
      });
      interaction.inCachedGuild();
      const role = interaction.guild.roles.cache.find(
        (r) => r.name === "Cyber Academy"
      );
      await interaction.member.roles.add(role);
    } else if (interaction.customId === "role-request--special-topics") {
      await interaction.reply({
        content: "You have been given the Special Topics role.",
        ephemeral: true,
      });
      interaction.inCachedGuild();
      const role = interaction.guild.roles.cache.find(
        (r) => r.name === "Special Topics"
      );
      await interaction.member.roles.add(role);
    }
  },
};
