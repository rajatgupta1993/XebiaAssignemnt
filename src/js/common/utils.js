export function populationRange(population) {
    let counter = 0;
    while (population > 1) {
        population /= 10;
        ++counter;
    }
    return 12 + (0.7 * counter);
}