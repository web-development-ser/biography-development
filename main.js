function numberOne () {
  var num = document.
  getElementById('num').value;
  num = Number(num);
  var frase = document.
  getElementById('frase');
  if (num === 1) {
    frase.innerHTML = "Lute, mas não pare por pequenos erros na sua história..."
  } else if (num === 2) {
    frase.innerText = "Se for parar, pare por ter certeza de não haver nenhuma chance de chegar lá..."
  } else if (num === 3) {
    frase.innerText = "Acredite, você é incrível, continue na guerra até está apto para se alegrar na conquista da vitória..."
  } else if (num === 4) {
    frase.innerText = "Sabia, de que no universo você é o único que sabe fazer algo, viu como todos tem diferenças e a sua é admirável...";
  } else if (num === 5) {
    frase.innerHTML = "As rosas ao luar possuem um brilho magnífico, se espelhe nelas, quando precisar se inspirar...";
  } else if (num === 6) {
    frase.innerHTML = "O conhecimento é um <span>dom</span>, e nós seres humanos somos os únicos que conseguem explorar..."
  } else if (num === 7) {
    frase.innerText = "Não desista de um sonho sem antes tentar, nós mínimos detalhes existem grandes saídas..."
  } else if (num <= 1 && num >= 7) {
    frase.innerText = "Número entre 1 à 7..."
  } else {
    frase.innerText = "Digite um número entre 1 e 7..."
  }
}



// tag ( headet )
function descc () {
  var description = document.
  getElementById('description');
  
  description.innerHTML = "Isso veio de minha infância, com meu primeiro <span>Smartphone</span>, ele não tinha Android, baseado em sistema <span>Java</span>. Depois de um bom tempo ganhei meu segundo celular com android 4.4.2, parece antigo, os de hoje são Android 11. Depois que ganhei meu terceiro Smartphone minha vida mudou, tive a curiosidade de programar <span>HTML5</span>, impressionado com tudo que era possível comecei a estudar. E hoje quando se trata de programação estou dentro da aposta... Obg por lê..."
}
