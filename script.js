////Динамическое создание елементов

//Выбор элемента для вставки

var element = document.querySelector('.wrapper');

//Создание кнопок

function createButtons() {
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

////Редактирование таблици

//Переменные

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
}

//Проверка количества столбцов

function oneColumn() {
  var oneColumn = document.querySelector('tr'); 

  if (oneColumn.cells.length < 2) {
     btnTop.style = 'display: none';
  }   
}

//Отобразить кнопки удаления

function btnsDelVisible() {
  btnLeft.classList.remove('disabled');
  btnTop.classList.remove('disabled');
}

//Скрыть кнопки удаления

function btnsDelHide() {
  btnLeft.classList.add('disabled');
  btnTop.classList.add('disabled');
}

//Смещение кнопки при добавлении строки

function moveRowsAddBtn() {
  var coordinate = table.getBoundingClientRect();
  
  btnBot.style = `top: ${coordinate.height}px`;
}

//Смещение кнопки при добавлении колонки

function moveCollumnsAddBtn() {
  var coordinate = table.getBoundingClientRect();
  
  btnRight.style = `left: ${coordinate.width}px`;
}

//Смещение кнопок удаления

function cellsEventListner() {
  var tableCells = document.querySelectorAll('td');
  for( var i = 0; i < tableCells.length; i++){
    tableCells[i].addEventListener('mousemove', moveDelBtns);    
  }

  oneRow();
  oneColumn();

  function moveDelBtns() {  
    var wrapper = document.querySelector('.wrapper').getBoundingClientRect();
    var cellsCoord = this.getBoundingClientRect();
    table.getBoundingClientRect();
   
    btnTop.style = `left: ${cellsCoord.left - wrapper.left}px;`;  
    btnLeft.style = `top: ${cellsCoord.top - wrapper.top}px;`;
  }
  
  
}

table.addEventListener('mouseover', btnsDelVisible);     //Появление кнопок удаления при наведении курсора на таблицу

table.addEventListener('mouseout', btnsDelHide);     //Пропадание кнопок удаления при отведении курсора с таблици

table.addEventListener('mousemove', cellsEventListner);     //Перемещение кнопок удаления

btnBot.addEventListener('click', addRow);     //Добавление строки по клику на кнопку

btnRight.addEventListener('click', addColumn);      //Добавление колонки по клику на кнопку

btnLeft.addEventListener('click', delRow);     //Удаление строки по клику на кнопку

btnLeft.addEventListener('mouseover', btnsDelVisible);     //Появление кнопок при наведении курсора на кнопку

btnLeft.addEventListener('mouseout', btnsDelHide);     //Пропадание кнопок при отведении курсора с конпки

btnLeft.addEventListener('click', btnsDelHide);     //Пропадание кнопок при клике по ней

btnTop.addEventListener('click', delColumn);     //Удаление колонки по клику на кнопку

btnTop.addEventListener('click', delColumn);     //Удаление колонки по клику на кнопку

btnTop.addEventListener('mouseover', btnsDelVisible);     //Появление кнопок при наведении курсора на кнопку

btnTop.addEventListener('mouseout', btnsDelHide);     //Пропадание кнопок при отведении курсора с конпки

btnTop.addEventListener('click', btnsDelHide);     //Пропадание кнопок при клике по ней

