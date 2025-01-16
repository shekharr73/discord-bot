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
  if (message.content.startsWith("create")) {
    const url = message.content.split("create")[1];
    return message.reply({
      content: "Generating Short ID for " + url
    });
  }
  message.reply({
    content: "hey from bot"
  });
});

client.on("interactionCreate", (interaction) => {
  console.log(interaction);
  interaction.reply("Pong!!");
});

client
  .login(process.env.BOT_TOKEN)
  .then(() => console.log("Bot logged in successfully!"))
  .catch((error) => console.error("Error logging in:", error));
