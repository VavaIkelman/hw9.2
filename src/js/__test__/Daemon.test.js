import Daemon from '../Daemon';

describe('Daemon:', () => {
  const fear = new Daemon('Fear');

  test('should throw error', () => {
    expect(() => new Daemon('s')).toThrow();
    expect(() => new Daemon('ae12345678910')).toThrow();
  });

  test('creat correctly', () => {
    expect(fear).toMatchObject({
      name: 'Fear',
      type: 'Daemon',
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    });
  });
});
