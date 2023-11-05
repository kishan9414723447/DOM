var btns = document.getElementsByClassName('btn');
var firstInput = document.getElementById('item');
var description = document.getElementById('description');
var submitBtn = document.getElementById('submitButton');
var ul = document.getElementById('items');
var searchValue=document.getElementById('filter');






submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    var text1 = firstInput.value;
    var text2 = description.value;
    var str = text1 + ' ' + text2;


    var li = document.createElement('li');
    var button1 = document.createElement('button');
    var button2 = document.createElement('button');
    var span=document.createElement('span');


    var textNode = document.createTextNode(str);
    var textNode1 = document.createTextNode('EDIT');
    var textNode2 = document.createTextNode('X');

    li.className = "list-group-item";
    button1.className = "float-right edit";
    button2.className = "btn btn-danger btn-sm float-right delete";
    span.className="span";
    

    button1.appendChild(textNode1);
    button2.appendChild(textNode2);
    span.appendChild(textNode);
    span.appendChild(button1);
    span.appendChild(button2);
    li.appendChild(span);
    li.appendChild(button1);
    li.appendChild(button2);
    ul.appendChild(li);
    

    Array.from(btns).forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            var parentEle = item.parentElement.parentElement;
            var li = item.parentElement;
            parentEle.removeChild(li);
    
        })
    
    });  
    

})


searchValue.addEventListener('keyup',(e)=> {
    e.preventDefault();
    var searchText=e.target.value;
    var arr=document.getElementsByClassName('span');
    var itemList=[];
    Array.from(arr).forEach((x)=> {
        itemList.push(x.innerText);
        
    })

    for (var i=0;i<itemList.length;i++)
    {
        const array=itemList[i].split(' ');
        if ((array[0].indexOf(searchText)!=-1)||(array[1].indexOf(searchText)!=-1)||(itemList[i].indexOf(searchText)!=-1))
        {
            var ithItem=document.getElementsByClassName('list-group-item')[i];
            ithItem.style.display='block';

                                  

        }
        else
        {
            var ithItem=document.getElementsByClassName('list-group-item')[i];
            ithItem.style.display='none';

        }
    }
})






