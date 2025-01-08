function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Alice", "Bob"];
user.forEach(person => {
    console.log(greeter(person));
});