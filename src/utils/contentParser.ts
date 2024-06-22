import { FastifyInstance } from "fastify";

export const contentParserConfig = (app: FastifyInstance) => {
  app.setNotFoundHandler((request, reply) => {
    reply.code(404).send(0);
  });

  app.addContentTypeParser(
    "application/json",
    { parseAs: "string" },
    (req, body, done) => {
      if (!body || body.toString().trim() === "") {
        done(null, {});
      } else {
        try {
          done(null, JSON.parse(body.toString()));
        } catch (err) {}
      }
    }
  );
};
