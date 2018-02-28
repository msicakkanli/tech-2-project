//count student 

let student = $('.student-list').children();
let studentCount = student.length;
// get student li item
let students = document.getElementsByClassName('student-item');


function showPage(studentNumber) {
    //hide studenlist
    $('.student-item').hide();
    //show student items on first page
    for (let i=0; i<studentNumber; i++) {
        students[i].style.display = 'block';
    }
}

showPage(10);

function appendPageLinks() {
    let page = 1
    let pageCount = Math.ceil(studentCount / 10);
    $('.page').append('<div class="pagination"></div>');
    $('.pagination').append('<ul></ul>');
    
    for (let i=1; i<pageCount; i++ , page++) 
    {      
        $('.pagination ul').append(    
        '<li>'+
            '<a href="#">' + page + '</a>'+
          '</li>'
    )};
    $( ".pagination ul li:nth-child(1) a").addClass("active");
}

appendPageLinks();


