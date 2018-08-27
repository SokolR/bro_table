//Динамическое создание елементов

var ELEMENT_FOR_INSERT = ".wrapper";

var element = document.querySelector(ELEMENT_FOR_INSERT);

//Создание кнопок

function createButtons() {
  //var btnWrapper = document.createElement('div');
  //btnWrapper.classList.add('wrapper-buttons');
  //btnWrapper.classList.add('btn');

  var btnRight = document.createElement('button');
  btnRight.classList.add('btn');
  btnRight.classList.add('btn__right');
  btnRight.classList.add('btn__add');
  btnRight.innerText = '+';

  element.appendChild(btnRight);

  var btnBottom = document.createElement('button');
  btnBottom.classList.add('btn');
  btnBottom.classList.add('btn__bottom');
  btnBottom.classList.add('btn__add');
  btnBottom.innerText = '+';

  element.appendChild(btnBottom);

  var btnTop = document.createElement('button');
  btnTop.classList.add('btn');
  btnTop.classList.add('btn__top');
  btnTop.classList.add('btn__delete'); 
  btnTop.classList.add('disabled');
  btnTop.innerText = '-';

  element.appendChild(btnTop);

  var btnLeft = document.createElement('button');
  btnLeft.classList.add('btn');
  btnLeft.classList.add('btn__left');
  btnLeft.classList.add('btn__delete');  
  btnLeft.classList.add('disabled');
  btnLeft.innerText = '-';
  element.appendChild(btnLeft);  
     
  //element.appendChild(btnWrapper);
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
  oneRow();
  moveRowsAddBtn();
}

//Функция удаление строк

function delRow() {
  for (var i = 0; i < 1; i++) {
    
    table.deleteRow(-1);
  }
  oneRow();
  moveRowsAddBtn();
}

//Функция добавление колонок

function addColumn() {
  var tableColumns = document.querySelectorAll('tr');

  for (var i = 0; i < tableColumns.length; i++) {
    var cells = document.createElement('td');
    tableColumns[i].appendChild(cells);
  }
  oneColumn();
  moveCollumnsAddBtn();
}

//Функция удаление колонок

function delColumn() {
var tableColumns = document.querySelectorAll('tr');

  for (i = 0; i < tableColumns.length; i++) {
    
    tableColumns[i].deleteCell(-1);
  }
  moveCollumnsAddBtn();
  oneColumn();
  
}

//Проверка количества строк

function oneRow() {
  if (table.rows.length < 2) {
    btnLeft.style = 'display: none';
  }  
  else {
    btnLeft.removeAttribute("style")
  }
}

//Проверка количества столбцов

function oneColumn() {
  var oneColumn = document.querySelector('tr'); 

  if (oneColumn.cells.length < 2) {
     btnTop.style = 'display: none';
  } 
  else {
    btnTop.removeAttribute("style")
  } 
}

//Отобразить кнопки удаления

function btnsDelVisible() {
  leftBtnVisible();
  topBtnVisible();
}

//Скрыть кнопки удаления

function btnsDelHide() {
  leftBtnHide();
  topBtnHide();
}

function leftBtnVisible() {
  btnLeft.classList.remove('disabled');
}

function leftBtnHide() {
  btnLeft.classList.add('disabled');
}

function topBtnVisible() {
  btnTop.classList.remove('disabled');
}

function topBtnHide() {
  btnTop.classList.add('disabled');
}

//Смещение кнопки при добавлении строки

function moveRowsAddBtn() {
  var coordinate = table.getBoundingClientRect();
  
  btnBot.style.top = `${coordinate.height}px`;
}

//Смещение кнопки при добавлении колонки

function moveCollumnsAddBtn() {
  var coordinate = table.getBoundingClientRect();
  
  btnRight.style.left = `${coordinate.width}px`;
}


table.addEventListener('mouseover', btnsDelVisible);     //Появление кнопок удаления при наведении курсора на таблицу

table.addEventListener('mouseout', btnsDelHide);     //Пропадание кнопок удаления при отведении курсора с таблици

btnBot.addEventListener('click', addRow);     //Добавление строки по клику на кнопку

btnRight.addEventListener('click', addColumn);      //Добавление колонки по клику на кнопку

btnLeft.addEventListener('click', delRow);     //Удаление строки по клику на кнопку

btnLeft.addEventListener('mouseover', leftBtnVisible);     //Появление кнопки при наведении курсора на кнопку

btnLeft.addEventListener('mouseout', leftBtnHide);     //Пропадание кнопки при отведении курсора с конпки

btnLeft.addEventListener('click', leftBtnHide);     //Пропадание кнопки при клике по ней

btnTop.addEventListener('click', delColumn);     //Удаление колонки по клику на кнопку

btnTop.addEventListener('click', delColumn);     //Удаление колонки по клику на кнопку

btnTop.addEventListener('mouseover', topBtnVisible);     //Появление кнопки при наведении курсора на кнопку

btnTop.addEventListener('mouseout', topBtnHide);     //Пропадание кнопки при отведении курсора с конпки

btnTop.addEventListener('click', topBtnHide);     //Пропадание кнопки при клике по ней

