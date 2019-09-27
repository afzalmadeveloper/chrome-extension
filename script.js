// Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(function (tab) {
//   // No tabs or host permissions needed!
//   console.log('Turning ' + tab.url + ' red!');
//   chrome.tabs.executeScript({
//     code: 'document.body.style.backgroundColor="red"'
//   });
// });

// tinymce.init({
//   selector: '#textarea',
//   toolbar: 'undo redo | styleselect | bold italic | link image',

//   plugins: 'advlist autolink link image lists charmap print preview'

// });

// document.addEventListener('DOMContentLoaded', function () {
//   var link = document.getElementById('link');
//   link.addEventListener('click', function () {
//     loadNotepad();
//   });
// });

// function loadNotepad() {
//   document.body.innerHTML = `<textarea>text goes here</textarea>
//   <button class=green>bold</button>`
// }
function bold() {
  console.log("hai")
  document.getElementsByClassName("button1").style.fontWeight = "bold";
}

document.getElementById('link').addEventListener('click', function () {
  var notepad = document.createElement('textarea'); // INPUT also works
  notepad.setAttribute('type', 'text');
  notepad.setAttribute('class', 'notepad');
  document.body.appendChild(notepad);

  var bold = document.createElement('button');
  bold.setAttribute('class', 'button1');
  bold.setAttribute('name', 'bold');
  bold.setAttribute('onclick', 'bold()');
  bold.innerHTML = 'BOLD';
  document.body.appendChild(bold);
  bold();
});
