const ages = [11,14,16,13,17];
const ages2 = [15,16,12];
const ages3 = [25,36,22,29]

const allAges = ages.concat(ages2).concat(87).concat(ages3)

const allAges2 = [...ages,...ages2,54,...ages3]
//console.log(allAges2)

const max = Math.max(...allAges2)
console.log(max);