import { FastifyReply } from "fastify";
import { resetAccounts } from "../services/account";

export const ResetController = (reply: FastifyReply) => {
  resetAccounts();
  return reply.status(200).send("OK");
};
