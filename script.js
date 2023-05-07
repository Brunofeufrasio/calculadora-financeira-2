let saldo = 0;

function adicionar(classe) {
  
  // Cria uma nova div com a classe recebida como parâmetro
  var novaDiv = document.createElement("div");
  novaDiv.className = classe;

  // Cria uma nova label com o placeholder
  var novaLabel = document.createElement("label");

  // Cria um novo input de texto com o placeholder
  var novoInput = document.createElement("input");
  novoInput.type = "text";
  novoInput.placeholder = "Insira o nome da " + classe;

  // Cria um elemento "br" para quebrar a linha
  var quebraLinha = document.createElement("br");
  var quebraLinha1 = document.createElement("br");

    // Cria um novo input numérico com o placeholder
    var novoInputNum = document.createElement("input");
    novoInputNum.type = "number";
    novoInputNum.step = "0.01";
    novoInputNum.value = "0.00";
    novoInputNum.placeholder = "Insira o valor R$0,00";


  // Cria um novo botão para remover a div
  var btnRemover = document.createElement("button");
  btnRemover.type = "button";
  btnRemover.innerText = "Remover";
  btnRemover.style.backgroundColor = "red";
  btnRemover.addEventListener("click", function() {
      novaDiv.remove();
});

btnRemover.addEventListener("click", function() {
  const valorRemovido = parseFloat(novoInputNum.value);
  if (classe === "despesa") {
    saldo += valorRemovido;
  } else {
    saldo -= valorRemovido;
  }
  const valorSaldo = document.getElementById("valor-saldo");
  valorSaldo.textContent = "R$" + saldo.toFixed(2);
  novaDiv.remove();
});

// Adiciona o botão "Remover" à nova div
novaDiv.appendChild(btnRemover);


  // Adiciona os novos elementos à nova div
  novaDiv.appendChild(novoInput);
  novaDiv.appendChild(novoInputNum);
  novaDiv.appendChild(quebraLinha);
  novaDiv.appendChild(quebraLinha1);

  // Adiciona a nova div ao formulário correspondente
  var formulario = document.getElementById("meu-formulario");
  if (classe === "despesa") {
    formulario = document.getElementById("meu-formulario2");
  }
  formulario.appendChild(novaDiv);

  // Atualiza o saldo de acordo com o tipo de operação
  novoInputNum.onblur = function () {
    const valor = parseFloat(novoInputNum.value);
    if (classe === "receita") {
      saldo += valor;
    } else {
      saldo -= valor;
    }
    const valorSaldo = document.getElementById("valor-saldo");
    valorSaldo.textContent = "R$" + saldo.toFixed(2);
  };

  novoInputNum.onblur = function () {
    const valor = parseFloat(novoInputNum.value);
    if (classe === "receita") {
      saldo += valor;
    } else {
      saldo -= valor;
    }
    const valorSaldo = document.getElementById("valor-saldo");
    valorSaldo.textContent = "R$" + saldo.toFixed(2);
    
    if (saldo < 0) {
      valorSaldo.style.color = "red";
    } else {
      valorSaldo.style.color = "green";
    }

    if (saldo==0) {
      valorSaldo.style.color = "gray";
    }
  };
}
