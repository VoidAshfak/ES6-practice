const person = {
    name: 'Jack william',
    age: 17,
    job: 'facebook user',
    gfName: 'Emma Watson',
    address:'mohakhali',
    phone:'01541648697',
    friends:['Tom Hanks', 'Tom Cruise','Tom and Jerry']}

    const {gfName, phone, address} = person;

    // console.log(gfName, phone, address);
    // console.log(gfName, phone, address);
    // console.log(gfName, phone, address);
    // console.log(gfName, phone, address);

const friends = ['naim','subarno','rashid','sakib','mormo','nirjhar'];

const [bestFrienf, notBest,...rest] = friends;

console.log(notBest);
console.log(bestFrienf);
console.log(rest);