const { ActionRowBuilder, ButtonBuilder, ButtonStyle, Events } = require('discord.js');

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	if (interaction.commandName === 'button') {
		const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('primary')
					.setLabel('Cyber Academy')
					.setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
					.setCustomId('primary')
					.setLabel('Special Topics')
					.setStyle(ButtonStyle.Primary),
			);

		await interaction.reply({ content: 'I think you should,', components: [row] });
	}
});