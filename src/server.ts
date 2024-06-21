import fastify from "fastify";
import { contentParserConfig } from "./utils/contentParser";
import { router } from "./routes";

const app = fastify();

contentParserConfig(app);
router(app);

app
  .listen({
    host: "0.0.0.0",
    port: process.env.PORT ? Number(process.env.PORT) : 3001,
  })
  .then(() => {
    console.log("Server running...");
  });
