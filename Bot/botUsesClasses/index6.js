

// localStorage.clear();
// localStorage.setItem('name', 'Tom');

// localStorage.getItem('name');

// localStorage.clear();
// localStorage.setItem('hobbies', JSON.stringify({ name: 'Tom' }));
// localStorage.setItem('name','Tom');
// localStorage.setItem('age', JSON.stringify(17));

// console.log(JSON.parse(localStorage.getItem('hobbies')));

export const getLocalStorageData = () => {
  return Object.entries(localStorage)
    .reduce((acc, [key, value]) => {
      let newValue;
      try {
        newValue = JSON.parse(value);
      } catch (e) {
        newValue = value;
      }
      return {
        ...acc,
        [key]: newValue,
      }
    }, {})
};

// console.log(getlocalStorageData());