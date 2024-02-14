const date = new Date();
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];

console.log(year + '年')
console.log(month + '月');
console.log(day + '日');
