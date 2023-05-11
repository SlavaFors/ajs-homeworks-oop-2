/* eslint-disable no-unused-vars */
import Character from '../character';

test('should return normal char', () => {
  const char = new Character('God', 'Celestial');
  const result = {
    name: 'God',
    type: 'Celestial',
    attack: undefined,
    defence: undefined,
    health: 100,
    level: 1,
  };
  expect(char).toEqual(result);
});

test('testing for invalid name', () => {
  const error = 'Допускаются только имена длиной от 2 символов и не более 10';
  expect(() => {
    const char1 = new Character('ы', 'Celestial');
  }).toThrow(error);
});

test('testing for invalid type', () => {
  const error = 'Тип класса должен быть строкой';
  expect(() => {
    const char2 = new Character('Боооог', 13);
  }).toThrow(error);
});

test('testing invalid levelUp for dead char', () => {
  const error = 'нельзя повысить левел умершего';
  const char = new Character('God', 'Celestial');
  char.health = 0;
  expect(() => {
    char.levelUp();
  }).toThrow(error);
});
