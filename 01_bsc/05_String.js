const name = "alpha"
const repocount = 50

console.log(name + repocount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`)

const gamename = new String("alpha")
console.log(gamename[0]);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename);
console.log(gamename.toLowerCase());

const newstring = gamename.substring(0,2)
console.log(newstring);

const anotherstring = gamename.slice(-8,4)
console.log(anotherstring)

const url = "https://google.com"

console.log(url.replace('google','go'))


