import React from 'react';
import {shallow} from 'enzyme';
import Alphabet from '../Alphabet';


describe('Alphabet', () => {
  let component;
  let instance;
  
  beforeEach(() => {
    component = shallow(<Alphabet/>);
    instance = component.instance();
  });
  
  describe('on instance', () => {
    it('should defined state', () => {
      expect(instance.state).toEqual({
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
      });

      //expect(component.find('span').length).toBe(26);
    });
  });

  describe('calcular arreglo', () =>{
    it('calculando el arreglo de letras', () => {
      const alfabeto = instance.state.alfabeto;
      const result = instance.calcularArreglo(alfabeto, 14);
      expect(result.length).toBe(26);
      expect(result[0]).toBe('p');
      expect(result[25]).toBe('o');
    });
  });
});
