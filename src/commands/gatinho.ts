import { SlashCommandBuilder, EmbedBuilder } from "discord.js";
import { Command } from "../interfaces/Command";
import { fetch, request } from 'undici'


export const gatinho: Command = {
  data: new SlashCommandBuilder()
    .setName('gatinho')
    .setDescription('Responde com meme de gatinho aleatorio!'),

  run: async(interaction) => {
    const index = (Math.floor(Math.random() * 84+1)) -1;
    const url = 'https://geradordegatinhosapi.herokuapp.com/gatinhos?_page=1'
    
    const res : any = await fetch(`https://geradordegatinhosapi.herokuapp.com/gatinhos/${index}`)
    const data = await res.json();
    console.log(data)
    //const headers = await request(url, {method: 'HEAD'})
    //const index = headers.('x-total-count')
    //console.log('data', await body.json())
    //console.log(headers.get())

    
    const embed = new EmbedBuilder()
      .setTitle(`**Parabéns, você recebeu o: \n ${data.name}**`)	
      .setThumbnail(data.image)
      .setColor(0x7289DA)

    await interaction.reply({embeds: [embed]});
  }
}