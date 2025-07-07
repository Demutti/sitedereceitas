function sent(event) {

    const form = document.querySelector("form");

    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    event.preventDefault();
    let nome = document.getElementById('nomeinput').value;
    let receita = document.getElementById('nome-receita').value
    document.getElementById("invited").innerHTML = ' Olá ' + nome + ', sua receita de ' + receita + ' foi enviada com sucesso!';
    document.querySelector("form").reset();
}
document.getElementById('invite').addEventListener('click', sent);