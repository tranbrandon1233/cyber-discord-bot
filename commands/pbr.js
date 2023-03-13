const {
  SlashCommandBuilder,
  PermissionsBitField,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");
const config = require("../utilities/config");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("pbr")
    .setDescription("PBR stuff")
    .setDefaultMemberPermissions(PermissionsBitField.Administrator)
    .addSubcommandGroup((group) =>
      group
        .setName("admin")
        .setDescription("PBR admin commands")
        .addSubcommand((subcommand) =>
          subcommand
            .setName("app-button")
            .setDescription("Sends message with application button")
        )
    ),
  async execute(interaction) {
    console.log(
      `${interaction.user.username} (${interaction.user.id}) ran /pbr in ${interaction.channel.name} (${interaction.channel.id})`
    );
    if (interaction.options.getSubcommandGroup(false) === "admin") {
      let author = interaction.member;
      if (!author.permissions.has([PermissionsBitField.Flags.Administrator])) {
        interaction.reply({
          content: "You do not have permission to run that command",
          ephemeral: true,
        });
      } else {
        await interaction.deferReply({ ephemeral: true });
        const row = new ActionRowBuilder().addComponents(
          new ButtonBuilder()
            .setCustomId("pbr--application")
            .setLabel("Apply!")
            .setStyle(ButtonStyle.Primary)
        );
        await interaction.channel.send({
          content: "Apply to PBR",
          components: [row],
        });
        await interaction.followUp({ content: "Sent!", ephemeral: true });
      }
    }
  },

  async onMessageInteraction(interaction) {
    let customURL = config["pbr"]["application link"];
    // {{DISCORD_USERNAME}}&entry.511297996={{DISCORD_ID}}&entry.1959556633={{YEARS_PBR}}
    let userRoles = interaction.member.roles.cache.filter((role) =>
      role.name.startsWith("cyber paladin")
    );
    let quarters = userRoles.size;
    customURL = customURL
      .replace("{{DISCORD_USERNAME}}", encodeURIComponent(interaction.user.tag))
      .replace("{{DISCORD_ID}}", interaction.user.id)
      .replace("{{YEARS_PBR}}", quarters);
    console.log(customURL);
    await interaction.reply({ content: customURL, ephemeral: true });
  },
};
