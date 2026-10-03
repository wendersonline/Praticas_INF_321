function forms(event) {
    event.preventDefault();

    const nome_input = document.querySelector("#nome");
    const email_input = document.querySelector("#email");
    const mensagem_input = document.querySelector("#mensagem");

    nome_input.classList.toggle("erro", nome_input.value == "");
    email_input.classList.toggle("erro", email_input.value == "");
    mensagem_input.classList.toggle("erro", mensagem_input.value == "");

    if (nome_input.value == "") {
        alert("O campo NOME está vazio, preencha para enviar!");
    }

    if (email_input.value == "") {
        alert("O campo E-MAIL está vazio, preencha para enviar!");
    }

    if (mensagem_input.value == "") {
        alert("O campo MENSAGEM está vazio, preencha para enviar!");
    }
}

function buscar() {
    const text = document.querySelector("#barra-pesquisa").value.toLowerCase();
    const cards = document.querySelectorAll(".produto-card");

    cards.forEach((c) => {
        const nome = c.querySelector("h3").textContent.toLowerCase();

        if (nome.includes(text)) {
            c.style.display = "";
        } else {
            c.style.display = "none";
        }

    });
}

function comprar(event) {
    event.preventDefault();

    const card = event.target.closest(".produto-card");
    const msg = document.querySelector("#mensagem-carrinho");

    card.classList.add("comprado");
    msg.textContent = "Produto adicionado ao carrinho!";
    msg.classList.add("visivel");

    setTimeout(() => {
        card.classList.remove("comprado");
        msg.classList.remove("visivel");
    }, 3000);
}

const formulario = document.querySelector("#forms");
formulario.addEventListener("submit", forms);

const busca = document.querySelector("#pesquisar");
busca.addEventListener("click", buscar);

document.querySelectorAll(".produto-card a").forEach((a) => {
    a.addEventListener("click", comprar);
});