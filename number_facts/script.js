const number = 3;

// Part One
async function one() {
    let baseURL = 'http://numbersapi.com';
    let data = await axios.get(`${baseURL}/${number}?json`);
    console.log(data)
}
//one();


// Part Two
const numbers = [1,2,3]
async function two() {
    let baseURL = 'http://numbersapi.com';
    let data = await axios.get(`${baseURL}/${numbers}?json`);
    console.log(data)
}
//two();


// Part Three
async function three() {
    let baseURL = 'http://numbersapi.com';
    let one = await axios.get(`${baseURL}/${number}`);
    let two = await axios.get(`${baseURL}/${number}`);
    let three = await axios.get(`${baseURL}/${number}`);

    let result1 = one;
    let result2 = two;
    let resul3 = three;

    console.log(result1);
    console.log(result2);
    console.log(result3);
}
three()