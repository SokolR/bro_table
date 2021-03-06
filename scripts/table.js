export default class DynamicTable {
  constructor (element, rows, columns) {
    this.ELEMENT = document.querySelector(element);
    this.ROWS = rows;
    this.COLUMNS = columns;

    this.table = document.createElement('table');
    this.btnRight = document.createElement('button');
    this.btnBot = document.createElement('button');
    this.btnTop = document.createElement('button');
    this.btnLeft = document.createElement('button');

    this.rowIndex;
    this.columnIndex;
  } 


  createBtns(button, className, text, handler) {
    this.ELEMENT.appendChild(button);
    button.innerText = text;
    button.classList.add('btn', className);
    button.addEventListener('click', handler);      
  } 

  create() {
    this.table.classList.add('table');

    for (let i = 0; i < this.ROWS; i++) {
      let row = document.createElement('tr');
  
      for (let j = 0; j < this.COLUMNS; j++) {
        let column = document.createElement('td');
        row.appendChild(column);
      }
      this.table.appendChild(row);
    }
    this.ELEMENT.appendChild(this.table);

    this.table.addEventListener("mouseover", () => this.btnsDelVisible());
    this.table.addEventListener("mouseout", () => this.btnsDelHide());
    this.table.addEventListener("mousemove", () => this.delBtnsMove(event));

    this.createBtns(this.btnRight, 'btn__right', '+', () => this.addColumn());
    this.createBtns(this.btnBot, 'btn__bottom', '+', () => this.addRow());
    this.createBtns(this.btnTop, 'btn__top', '-', () => this.delColumn());
    this.createBtns(this.btnLeft, 'btn__left', '-', () => this.delRow());  
  } 

  addRow() {
    let rowLength = this.table.rows[0].cells.length;
    let addNewRow = this.table.insertRow();
  
    for (let i = 0; i < rowLength; i++) {
      addNewRow.insertCell(i);
    }
    this.oneRow()
  }

  addColumn() {
    let columnLength = this.table.rows;

    for (let i = 0; i < columnLength.length; i++) {
      columnLength[i].insertCell();
    }
    this.oneColumn()
  }

  delBtnsMove(event) {
    let targetElement = event.target;
    let targetName = targetElement.nodeName;
    let left = targetElement.offsetLeft;
    let top = targetElement.offsetTop;

    this.rowIndex = targetElement.parentElement.rowIndex;
    this.columnIndex = targetElement.cellIndex;

    if (targetName === 'TD') {
      this.btnTop.style.left = left + 'px';
      this.btnLeft.style.top = top + 'px';
    }
  }

  delRow() {      
    this.table.deleteRow(this.rowIndex);    
    
    this.oneRow();
  }

  delColumn() {     
    let column = this.table.rows;

    for (let i = 0; i < column.length; i++) {      
      column[i].deleteCell(this.columnIndex);        
    }

    this.oneColumn();  
  }  

  oneRow() {
    if (this.table.querySelectorAll('tr')[1]) {
      this.btnLeft.style.display = 'block';
    } else {
      this.btnLeft.style.display = 'none';
    } 

    this.btnLeft.style.visibility = 'hidden';
  }

  oneColumn() {
    if (this.table.querySelector('tr').children[1]) {
      this.btnTop.style.display = 'block';
    } else {
      this.btnTop.style.display = 'none';
    }

    this.btnTop.style.visibility = 'hidden';
  }

  btnsDelVisible() {  
    this.btnTop.style.visibility = 'visible';
    this.btnLeft.style.visibility = 'visible';
  }

  btnsDelHide() {
    setTimeout(() => {
      if (this.ELEMENT.querySelector('table:hover') || (this.ELEMENT.querySelector('.btn__left:hover') || this.ELEMENT.querySelector('.btn__top:hover')))  {
        this.btnTop.style.visibility = 'visible';
        this.btnLeft.style.visibility = 'visible';  
      } else {
        this.btnTop.style.visibility = 'hidden';
        this.btnLeft.style.visibility = 'hidden';
      }
    }, 200);
  }
}