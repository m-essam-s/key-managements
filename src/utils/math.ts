/**
 * * Function to calculate the power of a number modulo another number.
 * * This is used in the Diffie-Hellman | ElGamal key exchange algorithms to calculate the public keys and shared secret keys.
 * @param base 
 * @param exp 
 * @param mod 
 * @returns 
 */
const powMod = (base: number, exp: number, mod: number) => {
    let result = 1;
    base = base % mod;
    while (exp > 0) {
        if (exp % 2 === 1) {
            result = (result * base) % mod;
        }
        exp = Math.floor(exp / 2);
        base = (base * base) % mod;
    }
    return result;
};

/**
 * * Function to calculate the modular inverse of a number.
 * * This is used in the ElGamal key exchange algorithm to decrypt the message.
 * @param a 
 * @param m 
 * @returns 
 */
const inverseMod = (a: number, m: number) => {
    const m0 = m;
    let y = 0, x = 1;
    if (m === 1) return 0;
    while (a > 1) {
        const q = Math.floor(a / m);
        let t = m;
        m = a % m;
        a = t;
        t = y;
        y = x - q * y;
        x = t;
    }
    if (x < 0) x += m0;
    return x;
}

export { powMod, inverseMod };