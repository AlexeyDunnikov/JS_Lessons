export class Person {
  constructor(name = "", family = "", surName = "", money = 0, role = "") {
    this.name = name;
    this.family = family;
    this.surName = surName;
    this.money = money;
    this.role = this.checkRole(role) ? role : "";
  }

  getFIO() {
    return `${this.family[0]}.${this.name[0]}.${this.surName[0]}.`;
  }

  getInitialsAndFamily() {
    return `${this.family} ${this.name[0]}.${this.surName[0]}.`;
  }

  getMoney() {
    let formatter = new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: "BYN",
    });

    return formatter.format(this.money);
  }

  setMoney(money) {
    this.money = money;
  }

  getMonthExpences(moneyPerDay) {
    return moneyPerDay * 30;
  }

  getRole() {
    return this.role;
  }

  setRole(role) {
    this.role = this.checkRole(role) ? role : "";
  }

  checkRole(role) {
    return Object.values(roles).indexOf(role) !== -1;
  }

  log(str) {
    if (this.logsArr.length < 50) {
      this.logsArr.push(str);
    } else {
      this.logsArr.pop();
      this.logsArr.push(str);
    }
  }

  getLogs() {
    return this.logsArr;
  }
}
