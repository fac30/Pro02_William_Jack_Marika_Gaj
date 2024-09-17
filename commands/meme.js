import { SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("piiing2")
    .setDescription("Replies with Pooong!"),
  async execute(interaction) {
    await interaction.reply("Pooong!");
  },
};
