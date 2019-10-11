export function add(a: number, b: number): number | TypeError {
    if (Number.isInteger(a)) {
        return TypeError("Expected number");
    }

    if (Number.isInteger(b)) {
        return TypeError("Expected number");
    }
    return a + b;
}
