//current temperature.
const kelvin = 0;

//converting kelvin to celsius
const celsius = kelvin - 273;

//coverting kelvin to fahrenheit
let fahrenheit = celsius * (9 / 5) + 32

//.floor()method
fahrenheit = Math.floor(fahrenheit)

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

//convert  to Newton.
let newton = celsius * (33 / 100);

//round down
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton.`);
