#include <iostream>
#include <set>

int main() {
    std::set<int> set1, set2;
    int numElements1, numElements2, element;

    std::cout << "Enter the number of elements in the first set: ";
    std::cin >> numElements1;
    std::cout << "Enter the elements of the first set:\n";
    for (int i = 0; i < numElements1; ++i) {
        std::cin >> element;
        set1.insert(element);
    }

    std::cout << "Enter the number of elements in the second set: ";
    std::cin >> numElements2;
    std::cout << "Enter the elements of the second set:\n";
    for (int i = 0; i < numElements2; ++i) {
        std::cin >> element;
        set2.insert(element);
    }

    if (set1 == set2) {
        std::cout << "The two sets are equal." << std::endl;
    } else {
        std::cout << "The two sets are not equal." << std::endl;
    }

    return 0;
}
