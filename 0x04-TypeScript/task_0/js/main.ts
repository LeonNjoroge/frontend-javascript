export interface Student{
    firstName: string;
    lastname: string;
    age: number;
    location: string;
}

let student1: Student = {firstName: 'Zion', lastname: 'Mupumba' ,age: 27, location: 'New Zealand'};
let student2: Student =  {firstName: 'Sulaiman', lastname: 'Alhabin' ,age: 62, location: 'Genievah'};

let studentList: Student[] = [student1, student2];

//. Render table using Vanilla JS
const table: HTMLTableElement = document.createElement('table');
table.style.border = '1px solid black';

//  Header row
const headerRow: HTMLTableRowElement = document.createElement('tr');

const firstNameHeader: HTMLTableCellElement = document.createElement('th');
firstNameHeader.textContent = 'First Name';
firstNameHeader.style.border = '1px solid black';

const locationHeader: HTMLTableCellElement = document.createElement('th');
locationHeader.textContent = 'Location';
locationHeader.style.border = '1px solid black';

headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

//  Data rows
studentList.forEach((student) => {
    const row: HTMLTableRowElement = document.createElement('tr');

    const firstNameCell: HTMLTableCellElement = document.createElement('td');
    firstNameCell.textContent = student.firstName;
    firstNameCell.style.border = '1px solid black';

    const locationCell: HTMLTableCellElement = document.createElement('td');
    locationCell.textContent = student.location;
    locationCell.style.border = '1px solid black';

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});

// Append table to body
document.body.appendChild(table);
