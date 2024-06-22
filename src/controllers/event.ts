import { EventControllerParams, EventTypes } from "../interfaces";
import { getAccountById, updateAccount } from "../services/account";

export const EventController = ({ body, reply }: EventControllerParams) => {
  const { type, destination, amount, origin } = body;

  let destinationAccount = getAccountById(destination ?? "-1");
  let originAccount = getAccountById(origin ?? "-1");

  switch (type) {
    case EventTypes.DEPOSIT:
      if (!destinationAccount) {
        return reply.status(404).send(0);
      }

      destinationAccount.balance += amount;
      updateAccount({ account: destinationAccount });

      return reply.status(201).send({
        destination: { id: destination, balance: destinationAccount.balance },
      });

    case EventTypes.WITHDRAW:
      if (!originAccount) {
        return reply.status(404).send(0);
      }

      originAccount.balance -= amount;
      updateAccount({ account: originAccount });

      return reply.status(201).send({
        origin: { id: origin, balance: originAccount.balance },
      });

    case EventTypes.TRANSFER:
      if (!originAccount || !destinationAccount) {
        return reply.status(404).send(0);
      }

      originAccount!.balance -= amount;
      destinationAccount!.balance += amount;

      return reply.status(201).send({
        origin: { id: origin, balance: originAccount!.balance },
        destination: { id: destination, balance: destinationAccount!.balance },
      });
  }
};
