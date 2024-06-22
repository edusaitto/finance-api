test("POST to /reset should return 200", async () => {
  const response = await fetch("http://127.0.0.1:3001/reset", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  expect(response.status).toBe(200);
});

test("GET to /balance?account_id=1234 should return 404", async () => {
  const response = await fetch("http://127.0.0.1:3001/balance?account_id=1234");
  expect(response.status).toBe(404);
});

test("POST to /event should return 201 for existing account", async () => {
  const firstDeposit = await fetch("http://127.0.0.1:3001/event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type: "deposit",
      destination: "100",
      amount: 10,
    }),
  });
  expect(firstDeposit.status).toBe(201);
  const firstDepositJson = await firstDeposit.json();
  expect(firstDepositJson.destination.balance).toBe(10);
  const secondDeposit = await fetch("http://127.0.0.1:3001/event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type: "deposit",
      destination: "100",
      amount: 10,
    }),
  });
  expect(secondDeposit.status).toBe(201);
  const secondDepositJson = await secondDeposit.json();
  expect(secondDepositJson.destination.balance).toBe(20);
});

test("GET to /balance?account_id=100 should return 200", async () => {
  const response = await fetch("http://127.0.0.1:3001/balance?account_id=100");
  expect(response.status).toBe(200);
});

test("POST to /event should return 201 for withdraw type", async () => {
  const response = await fetch("http://127.0.0.1:3001/event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type: "withdraw",
      origin: "100",
      amount: 5,
    }),
  });
  expect(response.status).toBe(201);
  const json = await response.json();
  expect(json.origin.balance).toBe(15);
});

test("POST to /event should return 201 for transfer type", async () => {
  const response = await fetch("http://127.0.0.1:3001/event", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type: "transfer",
      origin: "100",
      amount: 15,
      destination: "300",
    }),
  });
  expect(response.status).toBe(201);
  const json = await response.json();
  expect(json.origin.balance).toBe(0);
  expect(json.destination.balance).toBe(15);
});
