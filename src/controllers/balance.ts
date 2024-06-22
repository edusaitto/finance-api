import { BalanceControllerParams } from "../interfaces";
import { getAccountById } from "../services/account";

export const BalanceController = ({
  query,
  reply,
}: BalanceControllerParams) => {
  const { account_id: accountId } = query;
  if (!accountId) {
    return reply.status(404).send(0);
  }

  let account = getAccountById(accountId);
  if (!account) {
    return reply.status(404).send(0);
  }

  return reply.status(200).send(account.balance);
};
