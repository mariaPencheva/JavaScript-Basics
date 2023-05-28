function birthdayParty(input) {
  let rent = Number(input);

  let cake = rent * 0.2;
  let drinks = cake - (cake * 0.45);
  let animator = (1 / 3) * rent;

  let budget = rent + cake + drinks + animator;

  console.log(budget);
}


birthdayParty(["2250"]);
