#include <iostream>

// Function to perform modular addition
int modularAdd(int a, int b, int mod) {
    return (a % mod + b % mod + mod) % mod;  // + mod to handle negative numbers
}

// Function to perform modular subtraction
int modularSub(int a, int b, int mod) {
    return (a % mod - b % mod + mod) % mod;  // + mod to ensure non-negative result
}

// Function to perform modular multiplication
int modularMul(int a, int b, int mod) {
    int result = 0;
    a = a % mod;
    while (b > 0) {
        if (b & 1)  // Check if b is odd
            result = (result + a) % mod;
        a = (2 * a) % mod;
        b >>= 1;  // Divide b by 2
    }
    return result;
}

// Function to perform modular exponentiation
int modularExp(int base, int exp, int mod) {
    int result = 1;
    base = base % mod;
    while (exp > 0) {
        if (exp & 1)  // Check if exp is odd
            result = modularMul(result, base, mod);
        base = modularMul(base, base, mod);
        exp >>= 1;  // Divide exp by 2
    }
    return result;
}

int main() {
    int a, b, mod;
    std::cout << "Enter two integers (a and b): ";
    std::cin >> a >> b;
    std::cout << "Enter the modulus (mod): ";
    std::cin >> mod;

    std::cout << "Modular Addition (" << a << " + " << b << ") % " << mod << " = " << modularAdd(a, b, mod) << std::endl;
    std::cout << "Modular Subtraction (" << a << " - " << b << ") % " << mod << " = " << modularSub(a, b, mod) << std::endl;
    std::cout << "Modular Multiplication (" << a << " * " << b << ") % " << mod << " = " << modularMul(a, b, mod) << std::endl;

    int base, exponent;
    std::cout << "Enter base and exponent for exponentiation (base exponent): ";
    std::cin >> base >> exponent;
    std::cout << "Modular Exponentiation (" << base << "^" << exponent << ") % " << mod << " = " << modularExp(base, exponent, mod) << std::endl;

    return 0;
}
