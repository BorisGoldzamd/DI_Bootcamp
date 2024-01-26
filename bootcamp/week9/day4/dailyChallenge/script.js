

function showName(){
    let name = document.getElementById('name').value;
    let lname = document.getElementById('lname').value;
    let resultJSON ={
        name: name,
        lname: lname
    }
    console.log(resultJSON)
    document.getElementById('resultado').innerHTML = JSON.stringify(resultJSON, null, 2);
}