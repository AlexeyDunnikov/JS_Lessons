//Objects
const person = {
  name: "Alexey",
  age: 18,
  job: "Frontend",
};

const objProxy = new Proxy(person, {
  get(target, prop) {
    if (!(prop in target)) {
      return prop
        .split("_")
        .map((p) => target[p])
        .join(" ");
    }

    return target[prop];
  },
  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value;
    } else {
      throw new Error(`No ${prop} field in target`);
    }
  },
  has(target, prop) {
    return ["age", "name", "job"].includes(prop);
  },
  deleteProperty(target, prop) {
    console.log(`Deleting... ${prop}`);
    delete target[prop];
    return true;
  },
});

console.log(objProxy.name);
console.log(objProxy.name_age_job);

//Functions
const sum = (a, b) => a + b;

const funcProxy = new Proxy(sum, {
  apply(target, thisArg, args) {
    console.log("Calling function...");

    return target.apply(thisArg, args);
  },
});

console.log(funcProxy(5, 3));

//Classes
class Person {
  constructor(name, age, salary, experience) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.experience = experience;
  }
}

const PersonProxy = new Proxy(Person, {
  construct(target, args) {
    console.log("Constuct...");

    return new Proxy(new target(...args), {
      get(t, prop) {
        console.log(`Getting prop "${prop}"`);
        if (prop === "salary") return t[prop] + t[prop] * (t.experience / 10);
        return t[prop];
      },
    });
  },
});

const user = new PersonProxy("Alexey", 18, 500, 5);
console.log(user);
console.log(user.salary);
