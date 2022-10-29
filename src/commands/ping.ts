import { SlashCommandBuilder } from "discord.js";
import { Command } from "../interfaces/Command";

export const ping: Command = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Responde com Pong!'),

  run: async(interaction) => {
    await interaction.reply('Pong!');
  }
}