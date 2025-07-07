function* numberGenerator() {
    yield 1; // Yield the value 1
    yield 2;
    yield 3;
}
// function* numberGenerator(): This defines a generator function. The * indicates it's a generator.
// yield is the keyword used to pause the generator's execution and return a value.
// Each yield statement effectively creates a pause point.


let gen = numberGenerator();
let genTwo = numberGenerator();

console.log(gen.next().value); //1 - First call to gen, yields 1
console.log(gen.next().value); //2
console.log(gen.next().value); //3
console.log(gen.next().value); //undefined - Fourth call to gen, generator is exhausted

console.log(genTwo.next().value); //1
console.log(genTwo.next().value); //2

// gen.next() resumes the generator's execution until the next yield statement.