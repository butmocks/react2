// const getTotalRevenue = (transactions) => {
//   const newArr = transactions
//     .map((user) => Object.entries(user));
//     const result = []
//       newArr.filter(user => result.push(user[1])); 
//       const sum = result
//       .reduce((acc, elem) => { 
//         return acc + elem[1] 
//       }, 0);
//       return sum;
// };









const getCustomersList = obj => Object.entries(obj)
  .reduce((acc, elem) => {
    acc.push({
      id: elem[0],
      ...elem[1]
    })
    return acc;
  }, [])
  .sort((a, b) => {
    if (a.age > b.age) return 1;
    if (a.age < b.age) return -1;
  });
const customers = {
  'customer-id-1': {
    name: 'Willian',
    age: 54
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17
  }
};


