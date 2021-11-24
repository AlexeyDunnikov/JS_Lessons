import {Person} from './person.js';
import {roles} from './options.js';

let person1 = new Person(
  "Алексей",
  "Дунников",
  "Викторович",
  28500,
  roles.USER
);

console.log(person1.getFIO());
console.log(person1.getInitialsAndFamily());

console.log(`Текущее кол-во денег: ${person1.getMoney()}`);
person1.setMoney(520000);
console.log(`Кол-во денег после изменения: ${person1.getMoney()}`);

let expencesPerDay = 1500;
console.log(
  `Месячны затраты при ежедневных (${expencesPerDay}) составляют: ${person1.getMonthExpences(
    expencesPerDay
  )}`
);

console.log(`Роль пользователя: ${person1.getRole()}`);
person1.setRole(roles.MODERATOR);
console.log(`Роль пользователя после изменения: ${person1.getRole()}`);
