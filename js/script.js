//set number of student per page 
const studentCountOnPage = 10;

function showPage (pageNumber, allStudent) {
  // first hide all students on the page
  $('.student-item').hide();
  // Then loop through all students in our student list argument
  for (let i=0; i<= allStudent.length; i++) {
    // if student should be on this page number
    if (i < studentCountOnPage * pageNumber && i >= (studentCountOnPage * (pageNumber -1)))
    // show the student
    $(allStudent[i]).show();
  }
}
showPage(1, $('.student-item'));

//take a student list as an argument
function appendPageLinks(allStudent) {
  //determine how many pages for this student list
  const totalPages = Math.ceil($('.student-item').length)/studentCountOnPage;
  // add a page link to the page link section
  // create and insert the new HTML elements
  const newDiv = document.createElement('div');
  const newUl = document.createElement('ul');
  const newLi = document.createElement('li');
  //const newA = document.createElement('a');
  newDiv.appendChild(newUl);
  newUl.appendChild(newLi);
  //newLi.appendChild(newA);
  newDiv.className = 'pagination';
  $('.page').append(newDiv);

  // append our new page link section to the site
  for (let i=0; i<=totalPages; i++) {
  $('.pagination li').append("<a href=#>" + (i+1) + "</a>");

  }
  // define what happens when you click a link (event listener)
  $('a').on('click', function(e) {
    // Use showPage to display the page for the link clicked
    showPage(e.delegateTarget.text, $('.student-item'));
    // remove the old page link section from the site
    $('a').removeClass('active');
    // mark that link as "active"
    e.delegateTarget.className = 'active';

  });

};
appendPageLinks($('.student-item'));

