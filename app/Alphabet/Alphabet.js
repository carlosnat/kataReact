import React, {Component} from 'react';

export class Alphabet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alfabeto: [
        {letra: 'a'},
        {letra: 'b'},
        {letra: 'c'},
        {letra: 'd'},
        {letra: 'e'},
        {letra: 'f'},
        {letra: 'g'},
        {letra: 'h'},
        {letra: 'i'},
        {letra: 'j'},
        {letra: 'k'},
        {letra: 'l'},
        {letra: 'm'},
        {letra: 'n'},
        {letra: 'o'},
        {letra: 'p'},
        {letra: 'q'},
        {letra: 'r'},
        {letra: 's'},
        {letra: 't'},
        {letra: 'u'},
        {letra: 'v'},
        {letra: 'w'},
        {letra: 'x'},
        {letra: 'y'},
        {letra: 'z'}
      ]
    };
  }
  
  render() {
    return (
      <div className="container">
        {
          this.state.alfabeto.map((item, indice) => {
            let arregloDeLetras = this.calcularArreglo(this.state.alfabeto, indice);
            return this.construirSpanBlock(arregloDeLetras, indice);
          })
        }
      </div>
    );
  }

  //devolver un arreglo
  calcularArreglo(letras, indice) {
    
    let topArreglo = [];
    let bottomArreglo = [];

    for (let i = 0; i < letras.length; i += 1) {
      if (i <= indice) {
        topArreglo.push(letras[i].letra);
      } else {
        bottomArreglo.push(letras[i].letra);
      }
    }
    const resultado = bottomArreglo.concat(topArreglo);
    return resultado;
  }

  // devuelve etiqueta span
  construirSpanBlock(arreglo, indice) {
    return <p key={indice}><span>{indice+1}:</span><span>{arreglo}</span></p>;
  }

}

export default Alphabet;
