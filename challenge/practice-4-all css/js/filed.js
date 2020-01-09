let liElements = document.getElementsByTagName("li");
for (let i = 0; i < liElements.length; i++) {
    //console.log(liElements[i].textContent);
}
function onFilterInput(){
    let inputElement=document.querySelector('input');
    var filter=inputElement.value.toUpperCase();
    console.log(filter);
}
document.addEventListener('keypress', onFilterInput);