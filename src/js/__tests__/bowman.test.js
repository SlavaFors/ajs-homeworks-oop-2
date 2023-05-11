/* eslint-disable no-unused-vars */
import Bowman from '../Bowman';

test('should return normal char', () => {
  const char = new Bowman('Legolas');
  const result = {
    name: 'Legolas',
    type: 'Bowman',
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
  };
  expect(char).toEqual(result);
});

test('testing for invalid name', () => {
  const error = 'Допускаются только имена длиной от 2 символов и не более 10';
  expect(() => {
    const char = new Bowman('ы');
  }).toThrow(error);
});

test('testing for invalid type', () => {
  const error = 'Тип класса должен быть строкой';
  expect(() => {
    const char = new Bowman('Длинноухий', 13);
  }).toThrow(error);
});

test('should execute lvlUp fn', () => {
  const char = new Bowman('Legolas');
  char.levelUp();
  const result = {
    name: 'Legolas',
    type: 'Bowman',
    attack: 30,
    defence: 30,
    health: 100,
    level: 2,
  };
  expect(char).toEqual(result);
});

test('testing invalid levelUp for dead char', () => {
  const error = 'нельзя повысить левел умершего';
  const char = new Bowman('Legolas');
  char.health = 0;
  expect(() => {
    char.levelUp();
  }).toThrow(error);
});

test.each([
  {
    health: 100, points: 20, defence: 25, expected: 85,
  },
  {
    health: 0, points: 10, defence: 25, expected: 0,
  },
  {
    health: 50, points: 30, defence: 30, expected: 29,
  },
])(
  ('testing different damage with health: $health, defence: $defence and damage: $points'),
  ({
    health, points, defence, expected,
  }) => {
    const char = new Bowman('Legolas');
    char.health = health;
    char.defence = defence;
    char.damage(points);
    const result = char.health;
    expect(result).toBe(expected);
  },
);
