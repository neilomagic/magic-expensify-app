const add = (a,b)=> a+b;
const generateGreeting = (name='Annon')=> `Hello ${name}`;

test('should add two numbers', () =>{
    const result = add(3,4);
    expect(result).toBe(7);
});

test('should return a name', ()=>{
    const greet = generateGreeting('neso');
    expect(greet).toBe('Hello neso');
});

test('should return anno if no name is supplied', ()=>{
    const greet = generateGreeting();
    expect(greet).toBe('Hello Annon');
});