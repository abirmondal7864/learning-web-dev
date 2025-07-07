export function add(a,b) {
    return a + b;
}
export function substract(a,b) {
    return a - b;
}
export default function multiply(a,b) {
    return a * b;
}
// A default export is a way to specify a single, primary value that a module exposes.
// Think of it as the "main" thing that the module provides.
// A module can have only one default export.

// When you use export default, you're essentially saying, "This is the main thing I want to make available 
// from this module."