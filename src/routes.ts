import { FastifyInstance } from "fastify/types/instance";
import { verifyBody } from "./utils/contentParser";
import { FastifyRequest } from "fastify/types/request";
import { TransactionRequest } from "./interfaces/transaction";
import { updateAccount } from "./services/account";

export const router = (app: FastifyInstance) => {
  app.post("/reset", (request, reply) => {
    const body = request.body as string;
    verifyBody(body, reply);
    return reply.status(200).send("OK");
  });

  app.post(
    "/event",
    (request: FastifyRequest<{ Body: TransactionRequest }>, reply) => {
      const { type, destination, amount } = request.body;
      if (type === "deposit") {
        // get account and add amount value
      }
      updateAccount({ account: { id: destination, balance: amount } });
      return reply
        .status(201)
        .send({ destination: { id: destination, balance: amount } });
    }
  );
};
