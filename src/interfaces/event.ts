import { FastifyReply } from "fastify";

export enum EventTypes {
  DEPOSIT = "deposit",
  WITHDRAW = "withdraw",
  TRANSFER = "transfer",
}

export interface EventRequestBody {
  type: string;
  origin?: string;
  destination?: string;
  amount: number;
}

export interface EventControllerParams {
  body: EventRequestBody;
  reply: FastifyReply;
}
