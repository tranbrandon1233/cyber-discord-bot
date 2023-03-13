const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder} = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
    .setName("request-role")
    .setDescription("Request a role."),
	async execute(interaction) {
		const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('role-request--cyber-academy')
					.setLabel('Cyber Academy')
					.setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
					.setCustomId('role-request--special-topics')
					.setLabel('Special Topics')
					.setStyle(ButtonStyle.Primary),
			);

		await interaction.reply({ content: 'Choose a role: ', components: [row] });
	}
};