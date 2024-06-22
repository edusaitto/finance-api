import { FastifyInstance } from "fastify/types/instance";
import { FastifyRequest } from "fastify/types/request";
import { EventRequestBody } from "./interfaces/event";
import { BalanceRequestQuery } from "./interfaces";
import {
  EventController,
  ResetController,
  BalanceController,
} from "./controllers";

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
    BalanceController({ query: request.query as BalanceRequestQuery, reply });
  });
};
