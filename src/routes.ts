import { FastifyInstance } from "fastify/types/instance";
import { FastifyRequest } from "fastify/types/request";
import { EventController } from "./controllers/event";
import { EventRequestBody } from "./interfaces/event";
import { ResetController } from "./controllers/reset";
import { BalanceController } from "./controllers/balance";
import { BalanceRequestQuery } from "./interfaces";

export const router = (app: FastifyInstance) => {
  app.post("/reset", (_, reply) => {
    ResetController(reply);
  });

  app.post(
    "/event",
    (request: FastifyRequest<{ Body: EventRequestBody }>, reply) => {
      EventController({ body: request.body, reply });
    }
  );

  app.get("/balance", (request, reply) => {
    BalanceController({query: request.query as BalanceRequestQuery, reply})
  });
};
