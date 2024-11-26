// function storeName(){
//     console.log("let store name in local storage ");
//     localStorage.setItem('username','shinde');
// }

function storeName(){
    document.getElementById('nameInput').value;
    localStorage.setItem('username',name);
}

function getData(){
    let username = localStorage.getItem('username');
    document.getElementById('user-data').textContent = username;
}