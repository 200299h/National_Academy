// Function to compute the inverse of a binary relation
function inverseBinaryRelation(relation) {
    return relation.map(([a, b]) => [b, a]);
}

// Function to compute the inverse of a ternary relation
function inverseTernaryRelation(relation) {
    return relation.map(([a, b, c]) => [c, b, a]);
}

// Function to check reflexivity
function isReflexive(relation, elements) {
    for (let element of elements) {
        if (!relation.some(([a, b]) => a === element && b === element)) {
            return false;
        }
    }
    return true;
}

// Function to check symmetry
function isSymmetric(relation) {
    for (let [a, b] of relation) {
        if (!relation.some(([c, d]) => c === b && d === a)) {
            return false;
        }
    }
    return true;
}

// Function to check transitivity
function isTransitive(relation) {
    for (let [a, b] of relation) {
        for (let [c, d] of relation) {
            if (b === c && !relation.some(([e, f]) => e === a && f === d)) {
                return false;
            }
        }
    }
    return true;
}

// Example usage
const binaryRelation = [
    [1, 2],
    [2, 3],
    [3, 1]
];

const ternaryRelation = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const elements = [1, 2, 3];

const inverseBinary = inverseBinaryRelation(binaryRelation);
const inverseTernary = inverseTernaryRelation(ternaryRelation);

console.log("Original Binary Relation:", binaryRelation);
console.log("Inverse Binary Relation:", inverseBinary);
console.log("Original Ternary Relation:", ternaryRelation);
console.log("Inverse Ternary Relation:", inverseTernary);

console.log("Is Binary Relation Reflexive?", isReflexive(binaryRelation, elements));
console.log("Is Binary Relation Symmetric?", isSymmetric(binaryRelation));
console.log("Is Binary Relation Transitive?", isTransitive(binaryRelation));
