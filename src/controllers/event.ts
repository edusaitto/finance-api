import { EventControllerParams } from "../interfaces";
import { getAccountById, updateAccount } from "../services/account";

export const EventController = ({ body, reply }: EventControllerParams) => {
  const { type, destination, amount } = body;

  let account = getAccountById(destination);
  if (!account) {
    return reply.status(404).send(0);
  }

  if (type === "deposit") {
    account.balance += amount;
  }

  updateAccount({ account });

  return reply.status(201).send({
    destination: { id: destination, balance: account.balance },
  });
};
