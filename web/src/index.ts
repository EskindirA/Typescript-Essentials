import { User } from "./models/User";

const user = new User({ id: 1 });
const user2 = new User({ name: "Yonathan", age: 30 });

user.events.on("change", () => {
  console.log("change");
});

user.events.trigger("change");
