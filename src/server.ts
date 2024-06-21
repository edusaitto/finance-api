import fastify from "fastify";

const app = fastify();

app.addContentTypeParser("*", (request, payload, done) => {
  let data = "";
  payload.on("data", (chunk) => {
    data += chunk;
  });
  payload.on("end", () => {
    done(null, data);
  });
  payload.on("error", (err) => {
    done(err);
  });
});

app.post("/reset", (request, reply) => {
  const body = request.body as string;

  if (!body || body.length === 0) {
    return reply.status(400).send({ error: "Corpo vazio" });
  }

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
