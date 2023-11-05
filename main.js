var btns=document.getElementsByClassName('btn');

Array.from(btns).forEach((item) => {
    item.addEventListener('click',(e)=> {
        e.preventDefault();
        var parentEle=item.parentElement.parentElement;
        var li=item.parentElement;
        console.log(parentEle);
        parentEle.removeChild(li);

    })

});