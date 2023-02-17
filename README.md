# cyber-discord-bot

A Discord bot made for Psi Beta Rho. :)

## Setup
0. Install node and yarn.
1. Download and copy .env.example as .env
2. Run `yarn install` to install dependencies
3. Create a discord bot application: https://discordjs.guide/preparations/setting-up-a-bot-application.html
4. [Invite your discord bot to our shared testing discord server](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#creating-and-using-your-invite-link). If you need admin, let me (Alec) know.
5. Add the token from step 3 into the .env in the proper location. Make sure there are no extra spaces between the text and the equals sign!
6. Replace GUILD_ID with the server id you are testing in, CLIENT_ID with the discord bot user id, and OWNER_ID with your user id (this is used solely for /eval). Getting IDs: https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-
## Running
1. If this is the first time you are running OR you changed the format of slash commands, refresh them by running `node node utilities/deploy-guild-commands.js`
2. Run `node index.js` to run the bot
