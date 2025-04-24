// Objeto JSON que armazena o estado atual da máquina
let maquina = {
    status: "Desligada",
    temperatura: "--",
    pressao: "--"
  };
  
  function ligarMaquina() {
    // Atualiza o objeto com valores simulados
    maquina.status = "Ligada";
    maquina.temperatura = getRandomInt(60, 100);
    maquina.pressao = getRandomInt(5, 10);
  
    // Atualiza a interface com os dados do objeto
    atualizarInterface();
  }
  
  function desligarMaquina() {
    // Atualiza o objeto com valores de desligado
    maquina.status = "Desligada";
    maquina.temperatura = "--";
    maquina.pressao = "--";
  
    // Atualiza a interface com os dados do objeto
    atualizarInterface();
  }
  
  // Atualiza os elementos HTML com os dados do objeto
  function atualizarInterface() {
    document.getElementById("status").textContent = maquina.status;
    document.getElementById("temperatura").textContent = maquina.temperatura;
    document.getElementById("pressao").textContent = maquina.pressao;
  }
  
  // Função auxiliar para gerar número inteiro aleatório
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  