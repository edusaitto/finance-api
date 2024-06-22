import { accounts, initialState } from "../database";
import { Account } from "../models/account";

interface IUpdateAccount {
  account: Account;
}

export const resetAccounts = () => {
  accounts.map((_acc, i) => {
    accounts[i] = initialState[i];
  });
};

export const getAccountById = (id: string): Account | void => {
  let _account;
  accounts.map((_acc) => {
    if (_acc.id === id) {
      _account = _acc;
    }
  });
  return _account;
};

export const updateAccount = ({ account }: IUpdateAccount) => {
  accounts.map((_acc, i) => {
    if (_acc.id === account.id) {
      accounts[i] = account;
    }
  });
};
