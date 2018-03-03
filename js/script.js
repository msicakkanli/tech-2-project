//count student 

let student = $('.student-list').children();
let studentCount = student.length;
// get student li item
let students = document.getElementsByClassName('student-item');

$(document).ready(function () {
    showPage(1);
})

function showPage(clickedPage) {
    //hide studenlist
    alert("showpage çalıştı");
    $('.student-item').hide();
    //show student items on first page
    let studentNumber = 10 * clickedPage;
    alert("student number = "+studentNumber);
    if (clickedPage === 1) {
        for (let i=0; i<studentNumber; i++) {
            students[i].style.display = 'block';
        }
    } else {
        alert("elseye gelindi")
        for (let i = 10*(clickedPage-1); i<studentNumber; i++){
            students[i].style.display = 'block';   
        }
    }; 
}



function appendPageLinks(pageNumber) {
    
    let pageCount = Math.ceil(studentCount / 10);
    $('.page').append('<div class="pagination"></div>');
    $('.pagination').append('<ul></ul>');
    
    for (let i=1; i<pageCount; i++ ) 
    {      
        $('.pagination ul').append(    
        '<li>'+
            '<a href="#">' + i + '</a>'+
          '</li>'
    )};
    $( ".pagination ul li a").first().addClass("active");
}

appendPageLinks(3);

$('.pagination ul li a').on('click',function () {
   let clickedPage =  $(this).parent('li').index()+1;
   alert(clickedPage + "sayfasına tuşlandı");
showPage(clickedPage);
})

