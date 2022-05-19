function messagePrint(target) {
  Object.defineProperty(target.prototype, "server", {
    value: () => `Your server is running`,
  });
}

@messagePrint
export default class Message {
  name;

  constructor(name) {
    this.name = name;
  }
}
