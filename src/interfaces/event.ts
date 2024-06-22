import { FastifyReply } from "fastify";

export interface EventRequestBody {
  type: string;
  destination: string;
  amount: number;
}

export interface EventControllerParams {
  body: EventRequestBody;
  reply: FastifyReply;
}
