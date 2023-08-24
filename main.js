function tocaSom(idElementoAudio) {  //função com parametro
  const elemento = document.querySelector(idElementoAudio);

  if (elemento != null && elemento.localName === 'audio') {
    elemento.play();
  } else {
    console.log("Instrumento não encontrado ou seletor inválido")
  }
}

//Referencias 
const listaDeTeclas = document.querySelectorAll('.tecla'); //foi criado um array com todos elementos da classe tecla

for (let contador = 0; contador < listaDeTeclas.length; contador++) { //enquanto o contator for menor que a lista, faça

  const tecla = listaDeTeclas[contador];
  const instrumento = tecla.classList[1]; //vai listar os elementos   
  const idAudio = `#som_${instrumento}`;//vai guardar o id da tag audio - Template string

  tecla.onclick = function () { // uma função anonima para conseguir chamar a função tocaSom
    tocaSom(idAudio);
  }

  //condicional 
  tecla.onkeydown = function (evento) { //onkeydown é quando a tecla ta pressionada 
    if (evento.code === 'Space' || evento.code === 'Enter')
      tecla.classList.add('ativa'); //inserção de classes
  }

  tecla.onkeyup = function () { // quando a tecla levanta
    tecla.classList.remove('ativa'); //remoção de classes

  }


}
