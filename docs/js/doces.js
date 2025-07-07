function favoritar(botao) {
    if (botao.dataset.estado === "ativo") {
        botao.style.backgroundColor = "#D88A8A";
        botao.style.color = "#C33678";
        botao.dataset.estado = "inativo";
    }
    else {
        botao.style.backgroundColor = "pink";
        botao.style.color = "#C33678";
        botao.dataset.estado = "ativo";
    }
}