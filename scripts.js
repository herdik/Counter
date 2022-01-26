
/*let count = 0;
$('h2').text(count);*/

let count = parseInt($('h2').text());


$('button').on('click', () => {    
    count++;
    $('h2').text(count);
});    

$('body').append('<button id="min">Decrease</button>');
$('#min').on('click', () => {
    count--;
    $('h2').text(count);
    
});




