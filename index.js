import { Client, Events, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  message.reply({
    content: "hey hello how are you!"
  })
});

client.on("interactionCreate", (interaction) => {
  console.log(interaction);
  interaction.reply("Pong!!")
});


client
  .login(process.env.BOT_TOKEN)
  .then(() => console.log("Bot logged in successfully!"))
  .catch((error) => console.error("Error logging in:", error));
