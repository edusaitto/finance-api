import { FastifyReply } from "fastify";

export interface BalanceRequestQuery {
  account_id: string;
}

export interface BalanceControllerParams {
  query: BalanceRequestQuery;
  reply: FastifyReply;
}
