document.addEventListener('DOMContentLoaded', function () {

    let button = document.createElement('button');
    let btnText = document.createTextNode('Click Me');
    button.appendChild(btnText);
    document.body.appendChild(button);

    button.addEventListener('click', function () {
        alert('Hey you are being alerted!')
    })

    let button2 = document.createElement('button');
    let btnText2 = document.createTextNode('Click me Too');
    button2.appendChild(btnText2);
    document.body.appendChild(button2);

    button2.addEventListener('click', function () {
        alert('Hey you are being alerted again!');
    })

    let div = document.createElement('div');
    let divText = document.createTextNode('a div');
    div.appendChild(divText);
    document.body.appendChild(div);

    div.addEventListener("mouseenter", function () {
        div.style.backgroundColor = "red";
    })

    div.addEventListener("mouseleave", function () {
        div.style.backgroundColor = "white";
    })

    let para = document.createElement("p");
    let paraText = document.createTextNode('a Word');
    para.appendChild(paraText);
    div.appendChild(para);
    para.addEventListener("click", function () {
        let allchar = "0123456789ABCDEF";
        let randcol = "";
        for (let i = 0; i < 6; i++) {
            randcol += allchar[Math.floor(Math.random() * 16)];
        }
        para.style.color = "#" + randcol;
    })

    let button3 = document.createElement("button");
    let btnText3 = document.createTextNode('Click me three');
    button3.appendChild(btnText3);
    document.body.appendChild(button3);


    button3.addEventListener('click', function () {
        let div2 = document.createElement("div");
        let span = document.createElement("span");
        let text = document.createTextNode("Frank");
        span.appendChild(text);
        div2.appendChild(span);
        document.body.appendChild(div2);
    })

    let friendList = ['cole', 'kayla', 'mary', 'blake', 'jack', 'raven', 'josh', 'chris', 'ari', 'jim'];
    let button4 = document.createElement('button');
    let btnText4 = document.createTextNode('click me 4');
    let ul = document.createElement('ul');
    button4.appendChild(btnText4);
    document.body.appendChild(button4);

    button4.addEventListener('click', function () {
        for (i = 0; i < friendList.length; i++) {
            let li = document.createElement('li');
            let liText = document.createTextNode(friendList[i]);
            for (j = 0; j < 1; j++) {
                //let li = document.createElement('li');
                li.appendChild(liText);
                ul.appendChild(li);
                document.body.appendChild(ul);
            }
        }
        //document.body.appendChild(ul);
    })

});