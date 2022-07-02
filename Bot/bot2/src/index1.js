// var CSV = `h1,h2,h3,h4
// 11;Иванов;Иван;Иванович
// 12;Петров;Петр;Петрович
// 13;Васильев;Василий;Васильевич`;

let CSV = ('https://github.com/butmocks/react2/blob/main/Bot/botWithSearch/Diamond.py')
console.log(CSV)

function Search(CSV) {
  var index = {
    name: {},
    surname: {},
    patronymic: {}
  },
    __keys = Object.keys(index);

  this.data = CSV.split(/\n/g).slice(1).reduce(function (res, row) {
    row = row.split(';');
    row = res[row[0]] = {
      index: row[0],//Полагаю, что индекс уникальный и присутствует всегда
      name: (row[2] || '').trim(),
      surname: (row[1] || '').trim(),
      patronymic: (row[3] || '').trim()
    };

    

    __keys.forEach(function (key) {
      if (!row[key])
        return;

      var f_char = row[key].charAt(0).toLowerCase();
      (index[key][f_char] || (index[key][f_char] = [])).push({
        index: row.index,
        value: row[key].toLowerCase()
      });
      
    });
    
    return res;
  }, {});

  

  this.index = index;
};



Search.prototype.byIndex = function (index) {
  return this.data[index] || null;
};
Search.prototype.byName = function (name) {
  return this.__get_from(name, this.index.name);
};
Search.prototype.bySurname = function (surname) {
  return this.__get_from(surname, this.index.surname);
};
Search.prototype.byPatronymic = function (patronymic) {
  return this.__get_from(patronymic, this.index.patronymic);
};
Search.prototype.byString = function (string) {
  var context = this,
    result = Object.keys(this.index).reduce(function (res, key) {
      return res.concat(context.__get_from(string, context.index[key]));
    }, []).filter(function (item) {
      return item !== null;
    });

  return !result ? null : result;
};

Search.prototype.__get_from = function (value, from) {
  value = value.toString().trim().toLowerCase();
  if (!value || !from || !from[value.charAt(0)])
    return null;

  var get = this.byIndex.bind(this);
  from = from[value.charAt(0)].filter(function (item) {
    return item.value == value;//Тут можно изменить принцип поиска
  }).map(function (item) {
    return get(item.index);
  });

  return !from ? null : from;
};

var Get = new Search(CSV);
console.log(Get.byString('Иван'));

console.log(Get)