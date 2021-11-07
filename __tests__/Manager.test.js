const Manager = require('../lib/Engineer')

test('creates an Engineer object', () => {
    const engineer = new Engineer('Jim', 32, 'jim@gmail.com', 'github');

    expect(engineer.name).toBe('Jim');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.gitHub).toEqual(expect.any(String));    
});