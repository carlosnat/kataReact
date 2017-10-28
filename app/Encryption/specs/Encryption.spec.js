import React from 'react';
import {shallow} from 'enzyme';
import Encryption from '../Encryption';

describe('Encryption', () => {
  let component;
  let instance;
  
  beforeEach(() => {
    component = shallow(<Encryption/>);
    instance = component.instance();
  });
  

  describe('on instance', () => {
    
    it('should defined state', () => {
      expect(instance.state.alfabeto.length).toBe(26);
    });

    fit('debe ubicar los indices de la palabra en el arreglo', () => {
      const primera = instance.calcularArreglo(instance.state.correcto, 19);
      const segunda = instance.calcularArreglo(instance.state.correcto, 5);
      const tercera = instance.calcularArreglo(instance.state.correcto, 24);
      const cuarta = instance.calcularArreglo(instance.state.correcto, 5);

      const indicesPrimera = instance.ubicarIndices(primera, 'YMNU');
      const indicesSegunda = instance.ubicarIndices(segunda, 'KT');
      const indicesTercera = instance.ubicarIndices(tercera, 'KZ');
      const indicesCuarta = instance.ubicarIndices(cuarta, 'HOHROUZKIG');

      const resultOne = instance.armarMensaje(indicesPrimera, instance.state.correcto);
      console.log('result', resultOne);
      const resultTwo = instance.armarMensaje(indicesSegunda, instance.state.correcto);
      console.log('result', resultTwo);
      const resultThree = instance.armarMensaje(indicesTercera, instance.state.correcto);
      console.log('result', resultThree);
      const resultFour = instance.armarMensaje(indicesCuarta, instance.state.correcto);
      console.log('result', resultFour);
      //expect(result).toEqual([]);
    });

    it('debe mostrar la palabra segun el arreglo de indices enviado', () => {
      const result = instance.armarMensaje([1, 0, 19, 12, 0, 13], instance.state.correcto);
      expect(result).toEqual('batman');
    });

  });
});
