import fastify from "fastify";

const app = fastify();

app.removeAllContentTypeParsers();

app.post("/reset", (request, reply) => {
  return reply.status(200).send("OK");
});

app
  .listen({
    host: "0.0.0.0",
    port: process.env.PORT ? Number(process.env.PORT) : 3001,
  })
  .then(() => {
    console.log("Server running...");
  });
