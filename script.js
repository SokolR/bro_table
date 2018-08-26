//Динамическое создание елементов

var ELEMENT_FOR_INSERT = ".wrapper";

var element = document.querySelector(ELEMENT_FOR_INSERT);

//Создание кнопок

function createButtons() {
  var btnWrapper = document.createElement('div');
  btnWrapper.classList.add('wrapper-buttons');
  btnWrapper.classList.add('btn');

  var btnRight = document.createElement('button');
  btnRight.classList.add('btn');
  btnRight.classList.add('btn__right');
  btnRight.classList.add('btn__add');
  btnRight.innerText = '+';
  btnWrapper.appendChild(btnRight);

  var btnBottom = document.createElement('button');
  btnBottom.classList.add('btn');
  btnBottom.classList.add('btn__bottom');
  btnBottom.classList.add('btn__add');
  btnBottom.innerText = '+';

  btnWrapper.appendChild(btnBottom);

  var btnTop = document.createElement('button');
  btnTop.classList.add('btn');
  btnTop.classList.add('btn__top');
  btnTop.classList.add('btn__delete'); 
  btnTop.innerText = '-';

  btnWrapper.appendChild(btnTop);

  var btnLeft = document.createElement('button');
  btnLeft.classList.add('btn');
  btnLeft.classList.add('btn__left');
  btnLeft.classList.add('btn__delete');  
  btnLeft.innerText = '-';
  btnWrapper.appendChild(btnLeft);
     
  element.appendChild(btnWrapper);
}
createButtons();

//Создание таблици

function createTable(element, rows, columns) {
  var tableWrapper = document.createElement('div');
  tableWrapper.classList.add('wrapper-table');
  var table = document.createElement('table');
  table.classList.add('table');

  for (var i = 0; i < rows; i++) {
    var row = document.createElement('tr');

    for (var j = 0; j < columns; j++) {
      var column = document.createElement('td');
      row.appendChild(column);
    }
    table.appendChild(row);
  }
  tableWrapper.appendChild(table);
  element.appendChild(tableWrapper);
}

createTable(element, 4, 4);

//Редактирование таблици

var btnRight = document.querySelector('.btn__right');
var btnBot = document.querySelector('.btn__bottom');
var btnTop = document.querySelector('.btn__top');
var btnLeft = document.querySelector('.btn__left');

// btnTop.classList.add('disabled');
//btnLeft.classList.add('disabled');

var table = document.querySelector('table');

//Функция добавление строк

function addRow() {
  var tableRows = document.querySelector('tr');

  for (var i = 0; i < 1; i++) {
    var rows = document.createElement('tr');
    for (var j = 0; j < tableRows.cells.length; j++) {
      var cell = document.createElement('td');
      rows.appendChild(cell);
    }
    table.appendChild(rows);
  }
}

//Функция удаление строк

function delRow() {
  for (var i = 0; i < 1; i++) {
    oneRow();
    table.deleteRow(-1);
  }
}

//Функция добавление колонок

function addColumn() {
  var tableColumns = document.querySelectorAll('tr');

  for (var i = 0; i < tableColumns.length; i++) {
    var cells = document.createElement('td');
    tableColumns[i].appendChild(cells);
  }
}

//Функция удаление колонок

function delColumn() {
var tableColumns = document.querySelectorAll('tr');

  for (i = 0; i < tableColumns.length; i++) {
    oneColumn();
    tableColumns[i].deleteCell(-1);
  }
}

//Проверка количества строк

function oneRow() {
  var tableRows = document.querySelector('tr');
 
  if (tableRows.length <= 1) {
    btnLeft.style = 'display: none';
  }
}

//Проверка количества столбцов

function oneColumn() {
  var tableColumns = document.querySelector('tr'); 

  if (tableColumns.cells.length <= 1) {
     btnTop.style = 'display: none';
  }
}

btnBot.addEventListener('click', addRow);     //Добавление строки по клику на кнопку
btnRight.addEventListener('click', addColumn);      //Добавление колонки по клику на кнопку
btnLeft.addEventListener('click', delRow);     //Удаление строки по клику на кнопку
btnTop.addEventListener('click', delColumn);     //Удаление колонки по клику на кнопку

