/* eslint-disable no-unused-vars */
import Zombie from '../Zombie';

test('should return normal char', () => {
  const char = new Zombie('Shaun');
  const result = {
    name: 'Shaun',
    type: 'Zombie',
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
  };
  expect(char).toEqual(result);
});

test('testing for invalid name', () => {
  const error = 'Допускаются только имена длиной от 2 символов и не более 10';
  expect(() => {
    const char = new Zombie('ы');
  }).toThrow(error);
});

test('testing for invalid type', () => {
  const error = 'Тип класса должен быть строкой';
  expect(() => {
    const char = new Zombie('Шон', 13);
  }).toThrow(error);
});

test('should execute lvlUp fn', () => {
  const char = new Zombie('Shaun');
  char.levelUp();
  const result = {
    name: 'Shaun',
    type: 'Zombie',
    attack: 48,
    defence: 12,
    health: 100,
    level: 2,
  };
  expect(char).toEqual(result);
});

test('testing invalid levelUp for dead char', () => {
  const error = 'нельзя повысить левел умершего';
  const char = new Zombie('Shaun');
  char.health = 0;
  expect(() => {
    char.levelUp();
  }).toThrow(error);
});

test.each([
  {
    health: 100, points: 20, defence: 10, expected: 82,
  },
  {
    health: 0, points: 10, defence: 10, expected: 0,
  },
  {
    health: 50, points: 30, defence: 15, expected: 24.5,
  },
])(
  ('testing different damage with health: $health, defence: $defence and damage: $points'),
  ({
    health, points, defence, expected,
  }) => {
    const char = new Zombie('Shaun');
    char.health = health;
    char.defence = defence;
    char.damage(points);
    const result = char.health;
    expect(result).toBe(expected);
  },
);
