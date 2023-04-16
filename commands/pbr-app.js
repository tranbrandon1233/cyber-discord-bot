const config = require("../utilities/config");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
module.exports = {
  async onMessageInteraction(interaction) {
    await interaction.deferReply({ ephemeral: true });
    let checker = require("./pbr-verify");
    if (await checker.checkSubmission(interaction.user.id)) {
      await interaction.followUp(
        "You have already submitted the application for this quarter."
      );
      return;
    }

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
    let message =
      "Submit the form below to sign up for the " +
      config["pbr"]["current season"]["Quarter"] +
      " " +
      config["pbr"]["current season"]["Year"].toString() +
      " season!";
    let buttonRow = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel("Form link")
        .setStyle(ButtonStyle.Link)
        .setURL(customURL)
    );
    if (
      !interaction.member.roles.cache.some((role) =>
        role.name.startsWith("PBR (ψβρ)")
      )
    ) {
      buttonRow.addComponents(
        new ButtonBuilder()
          .setLabel("Get PBR role")
          .setStyle(ButtonStyle.Success)
          .setCustomId("pbr-verify--give-role")
      );
      message +=
        '\nOnce you have submitted the form, click the "Get PBR role" button in order to get the PBR role!';
    }
    await interaction.followUp({
      components: [buttonRow],
      ephemeral: true,
      content: message,
    });
  },
};
