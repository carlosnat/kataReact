import React, {Component} from 'react';

class Encryption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alfabeto: [
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
        {letra: 'z'},
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
        {letra: 'n'}
      ],
      correcto: [
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
        Encryption page
      </div>
    );
  }

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
    console.log('arregloResult', resultado);
    return resultado;
  }

  ubicarIndices(arregloDeLetras, palabra) {
    console.log('arreglo de letras', arregloDeLetras);
    let indices = [];
    for (let i = 0; i < palabra.length; i += 1) {
      for (let y = 0; y < arregloDeLetras.length; y += 1) {
        if (arregloDeLetras[y].toLowerCase() === palabra[i].toLowerCase()) {
          indices.push(y);
        }  
      }
    }
    console.log('indices de letras', indices);
    return indices;
  }

  armarMensaje(indices, alfabeto) {
    return indices.map((index) => alfabeto[index].letra).join('');
  }


}

export default Encryption;
