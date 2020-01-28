$(document).ready(function () {
})

let $button = $('<button>Click me</button>'); 
($button).appendTo("body");

$('button').click(function() {
    alert('This is an alert!');
})

let $button2 = $('<button>Click me Too</button>');
let $div = $('<div></div>');
($div).appendTo("body");
($button2).appendTo('div');

($button2).click(function() {
    alert('This is an alert Too!');
})

let $divNew =  $('<div>Something</div>');
($divNew).appendTo("body"); 

($divNew).mouseover(function() {
    ($divNew).css('background-color', 'red');

    ($divNew).mouseout(function() {
        ($divNew).css('background-color', 'white');
    })
})

let $p = $('<p>color</p>'); 
($p).appendTo("body");

($p).click(function () {

    let colors = ['red', 'green', 'blue', 'orange', 'yellow', 'brown', 'purple'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)]

    $(this).css('color', randomColor);
});


let $button3 = $('<button>Click me three</button>');
($button3).appendTo("body");

($button3).click(function () {
    let $span = $('<span>Frank</span>');
    let $div2 = $('<div></div>');
    ($span).appendTo($div2); 
    ($div2).appendTo('body');
})

let $friendList = ['cole', 'kayla', 'mary', 'blake', 'jack', 'raven', 'josh', 'chris', 'ari', 'jim'];
let $button4 = $('<button>Click Me 4th</button>');
let $ul = $('<ul></ul>');
//($ul).appendTo($button4);
($button4).appendTo('body');


($button4).click(function () {
    for(i=0; i < $friendList.length; i++) {
        let $ul = $('<ul></ul>');
        let $li = $('<li>'+ $friendList[i]+ '</li>');
        ($li).appendTo($ul);
        ($ul).appendTo('body');
    } 
}); 