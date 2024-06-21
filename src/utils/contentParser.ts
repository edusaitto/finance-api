import { FastifyReply } from "fastify";
import { FastifyInstance } from "fastify/types/instance";

export const contentParserConfig = (app: FastifyInstance) => {
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

export const verifyBody = (body: string, reply: FastifyReply) => {
  if (!body || body.length === 0) {
    return reply.status(400).send({ error: "Corpo vazio" });
  }
};
