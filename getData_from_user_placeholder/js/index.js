url ="https://jsonplaceholder.typicode.com/users";
fetch(url)
.then(Response => Response.json())
.then(data =>{
    const getName = document.querySelector("#listName");
    data.forEach(item => {
        getName.innerHTML+=`
            <li >${item.name}</li>
        `;
    });
})

function onFilterKeyUp(){
    var inputElement=document.querySelector('input');
    var filter=inputElement.value.toUpperCase();
    var textValue;
    const liElements=document.getElementsByTagName('li');
    // 
    for(var i=0;i< liElements.length; i++){
        textValue=liElements[i].textContent || liElements[i].innerText;
        console.log(textValue.indexOf(filter));
        let isfind = textValue.toUpperCase().indexOf(filter);
        if(isfind>-1){
            liElements[i].style.display= "block";
        }else{
            liElements[i].style.display= "none";
        }
    }  
}
document.addEventListener('keyup', onFilterKeyUp);