function f(x) {
    // Define the function of the curve here
    return Math.sin(x); // Example: y = sin(x)
}

function derivative(f, x, h = 1e-5) {
    // Numerical approximation of the derivative using the central difference formula
    return (f(x + h) - f(x - h)) / (2 * h);
}

function arcLength(f, a, b, n) {
    // Calculate the arc length using the trapezoidal rule
    const h = (b - a) / n; // Step size
    let sum = 0;

    for (let i = 0; i <= n; i++) {
        const x = a + i * h;
        const fx = Math.sqrt(1 + Math.pow(derivative(f, x), 2));
        if (i === 0 || i === n) {
            sum += fx; // End points are added once
        } else {
            sum += 2 * fx; // Middle points are added twice
        }
    }

    return (h / 2) * sum;
}

// Example usage
const a = 0; // Start of the interval
const b = Math.PI; // End of the interval
const n = 1000; // Number of subintervals

console.log("Arc length of the curve:", arcLength(f, a, b, n));
