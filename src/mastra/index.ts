import { Mastra } from "@mastra/core/mastra";
import { weatherAgent } from "./agents/weather-agent";

console.log("Starting Mastra...");
export const mastra = new Mastra({
  agents: { weatherAgent }
});
