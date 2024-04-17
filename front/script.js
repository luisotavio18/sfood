let button = document.getElementById("handleSubmit");
 
button.onclick = async function(event) {
    event.preventDefault();
    let nome = document.getElementById("nome").value;
    let num = document.getElementById("num").value;
    let email = document.getElementById("email").value;
    let data = {nome, num, email};
 
    const response = await fetch('http://localhost:3003/api/store/post', {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(data)
    });
 
    let content = await response.json();
 
    if(content.success){
        alert("Sucesso")
    } else{
        alert("Não deu!")
    }
}