import { Client, REST, Routes } from "discord.js";
import { CommandList } from "../commands/_CommandList";

export const onReady = async (client: Client) => {
  const rest = new REST({version: "10"}).setToken(
    process.env.BOT_TOKEN as string
  );

  const commandData = CommandList.map((command) => command.data.toJSON());

  // GUILD 
  // await rest.put(
  //   Routes.applicationGuildCommands(
  //     client.user?.id || "missing id",
  //     process.env.GUILD_ID as string
  //   ),
  //   {body: commandData}
  // );

  //GLOBAL
  await rest.put(
    Routes.applicationCommands(
      client.user?.id || "missing id",
    ),
    {body: commandData}
  );

  console.log("Discord ready!")
};
