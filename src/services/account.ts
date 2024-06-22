import { accounts } from "../database";
import { Account } from "../models/account";

interface IUpdateAccount {
  account: Account;
}

export const getAccountById = (id: string): Account | void => {
  accounts.map((_acc, i) => {
    if (_acc.id === id) {
      return _acc;
    }
  });
};

export const updateAccount = ({ account }: IUpdateAccount) => {
  accounts.map((_acc, i) => {
    if (_acc.id === account.id) {
      accounts[i] = account;
    }
  });
};
