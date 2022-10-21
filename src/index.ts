import { Client } from "discord.js";
import { IntentOptions } from "./config/IntentOptions";
import { connectDatabase } from "./database/connectDatabase";
import { validateEnv } from "./utils/validateEnv";

(async () => {
  if(!validateEnv()) return
  const BOT = new Client({intents: IntentOptions});
  
  BOT.on("ready", () => console.log("Connected to Discord! 🎉"))





  await connectDatabase()
  await BOT.login(process.env.BOT_TOKEN)
})();