const {
  SlashCommandBuilder,
  PermissionsBitField,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  PermissionFlagsBits,
} = require("discord.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName("pbr")
    .setDescription("PBR stuff")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
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
            .setCustomId("pbr-app--application")
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
};
