
function greeter(person: Array<{}>){
    console.log(person)
    return "hello" + person
}
let user = [0,1,2]
greeter(user)


interface Person{
    firstName: number;
    lastName: string;
}
function hater(person: Person){
    console.log(person)
    return "hello" + person.firstName + " " + person.lastName
}
let admin = { firstName: 12, lastName: 'inpyo'}
hater(admin)



