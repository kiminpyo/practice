function greeter(person) {
    console.log(person);
    return "hello" + person;
}
var user = [0, 1, 2];
greeter(user);
function hater(person) {
    console.log(person);
    return "hello" + person.firstName + " " + person.lastName;
}
var admin = { firstName: 12, lastName: 'inpyo' };
hater(admin);
