/* eslint-disable no-unused-vars */
import Daemon from '../Daemon';

test('should return normal char', () => {
  const char = new Daemon('Diablo');
  const result = {
    name: 'Diablo',
    type: 'Daemon',
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
  };
  expect(char).toEqual(result);
});

test('testing for invalid name', () => {
  const error = 'Допускаются только имена длиной от 2 символов и не более 10';
  expect(() => {
    const char = new Daemon('J');
  }).toThrow(error);
});

test('testing for invalid type', () => {
  const error = 'Тип класса должен быть строкой';
  expect(() => {
    const char = new Daemon('Konstati', 13);
  }).toThrow(error);
});

test('should execute lvlUp fn', () => {
  const char = new Daemon('Diablo');
  char.levelUp();
  const result = {
    name: 'Diablo',
    type: 'Daemon',
    attack: 12,
    defence: 48,
    health: 100,
    level: 2,
  };
  expect(char).toEqual(result);
});

test('testing invalid levelUp for dead char', () => {
  const error = 'нельзя повысить левел умершего';
  const char = new Daemon('Diablo');
  char.health = 0;
  expect(() => {
    char.levelUp();
  }).toThrow(error);
});

test.each([
  {
    health: 100, points: 20, defence: 40, expected: 88,
  },
  {
    health: 0, points: 10, defence: 40, expected: 0,
  },
  {
    health: 50, points: 30, defence: 45, expected: 33.5,
  },
])(
  ('testing different damage with health: $health, defence: $defence and damage: $points'),
  ({
    health, points, defence, expected,
  }) => {
    const char = new Daemon('Diablo');
    char.health = health;
    char.defence = defence;
    char.damage(points);
    const result = char.health;
    expect(result).toBe(expected);
  },
);
