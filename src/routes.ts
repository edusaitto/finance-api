import { FastifyInstance } from "fastify/types/instance";
import { verifyBody } from "./utils/contentParser";

export const router = (app: FastifyInstance) => {
  app.post("/reset", (request, reply) => {
    const body = request.body as string;
    verifyBody(body, reply);
    return reply.status(200).send("OK");
  });

  app.post("/balance", (request, reply) => {
    const query = request.query as { [key: string]: string };
    const account_id = query.account_id;
    console.log(account_id);
    return reply.status(404).send(0);
  });
};
