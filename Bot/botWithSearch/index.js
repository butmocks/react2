let a = ('https://github.com/butmocks/react2/blob/main/Bot/botWithSearch/Diamond.py')
console.log(a)
//   fs.readFile(FILE_LOCATION, function (err, data) {
//     if (err) throw err;
//     if (data.indexOf('search string') >= 0) {
//       console.log(data)
//     }
//   });


fs.readFile(a, function (err, data) {
  if (err) throw err;
  if (data.includes('search string')) {
    console.log(data)
  }
});


// const name = { ........};

// const fs = require('fs');
// fs.writeFile("name.js", JSON.stringify(name, null, 4), (err) => {
//   if (err) {
//     return console.log(err);
//   }
// });
// export


//   const inputElement = document.getElementById("input");
// inputElement.addEventListener("change", handleFiles, false);
// function handleFiles() {
//   const fileList = this.files; /* now you can work with the file list */
// }



// // Чистим контейнер с таблицей
// output.innerHTML = '';

// // Вставляем в таблицу её тело
// table.appendChild(tbody);
// // Определяем заголовок таблицы (Названия колонок)
// tbody.innerHTML =
//   "<tr><td>Имя</td><td>MIME тип</td><td>Размер (байт)</td><td>Превью</td></tr>";

// // Перебираем все файлы в FileList'е
// for (var i = 0; i < files.length; i++) {
//   file = files[i];
//   // Если в файле содержится изображение
//   if (/text.*/.test(file.type)) {
//     // узнаём информацию о нём
//     data = [file.name, file.type, file.size];
//     fr = new FileReader();
//     // считываем его в строку base64
//     fr.readAsDataURL(file);
//     // как только файл загружен
//     fr.onload = (function (file, data) {
//       alert("Loaded");
//     })(file, data);
//     // Если файл не изображение
//   } else {
//     // то вместо превью выводим соответствующую надпись
//     data = [file.name, file.type, file.size, 'Файл не является изображением'];
//     appendFileInfo(tbody, data);
//   }
// }
// // помещаем таблицу с информацией о файле в div
// output.appendChild(table);  
// }