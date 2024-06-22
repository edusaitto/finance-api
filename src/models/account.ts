export class Account {
  id: string;
  balance: number;

  constructor(id: string, balance: number) {
    this.id = id ?? Math.random().toString();
    this.balance = balance ?? 0;
  }
}
