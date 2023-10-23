import { Client, GatewayIntentBits } from "discord.js"
import "dotenv/config"

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
    ],
});

client.on('ready', () => {
   client.channels.cache.get(process.env.CHANNEL_ID).send(process.argv[2]);
});

client.login(process.env.BOT_TOKEN);