let userNote;
let numOfNotes = 2;
let todaysDate;
let noteTitle;
let noteContent;
let userTitle;

//gets current date and saves it to the variable todaysDate
const getDate = () => {
     let today = new Date();
     let thisYear = today.getFullYear()
     let  year = thisYear.toString().substr(-2);
     let date = today.getDate()+'/'+(today.getMonth()+1)+'/'+year;
     todaysDate = date; 
}
//adds 1 to the numOfNotes variable when called
const noteCounter = () => {
    numOfNotes++;
}
//creates the content of the note
const noteBody = () =>{
     let note = prompt("write your note","new note");
     let body = document.createElement("p");
     let text = document.createTextNode(note);
     body.appendChild(text);
     body.style.cssText = "font-size: 20px; font-weight: 500;"
     userNote = note;
     noteContent = body;
}
//creates the heading of the note
const noteHeading = () => { 
     getDate();
     let heading = prompt("Enter a title")
     let header = document.createElement("h1");
     let title = `${todaysDate}:  ${heading}`
     let head = document.createTextNode(title);
     userTitle = heading;
     header.appendChild(head);
     header.style.cssText = "font-weight: bold; border: 4px solid #050401;margin-right: 20%; margin-left: 20%; font-size: 25px;  padding-bottom: 20px; padding-right: 10px;padding-left: 5px; font-weight: bold; box-shadow: 3px 3px 0 0 #e4572e;  opacity: 92%;  text-align: left;"
     noteTitle = header;
}
//adds the new note to the DOM
const renderNote = () => {
     noteHeading();
     noteBody();
     
     if (userNote===null || userNote === ''){
         alert('Enter a note!');
     }
     else if(userTitle === null || userTitle === ''){
         alert('Enter a title!');
     }
     else{
     let parentNode = document.querySelector('#root');
     parentNode.insertBefore(noteTitle, parentNode.firstChild);
     noteTitle.appendChild(noteContent);
     noteCounter();
     document.getElementById('notes').innerHTML = 'You have ' + numOfNotes + ' Notes'
     }
}
    
    
