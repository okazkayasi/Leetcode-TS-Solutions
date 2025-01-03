function reverseNumber(x: number): number {
    let ans = 0;
    while (x > 0) {
        // get Last Digit
        const lastDigit = x % 10;
        // add it to the end
        ans = ans * 10 + lastDigit;
        // get rid of last digit
        x = Math.floor(x / 10);
    }
    return ans;
}

function isPalindrome(x: number): boolean {
    // solve without converting to string
    if (x < 0) return false;

    let modulus = 10;
    const numbersArr: number[] = [];
    while (true) {
        const leftOver = x % modulus;
        const remainder = Math.floor(leftOver / (modulus / 10));
        numbersArr.push(remainder);
        if (modulus > x) {
            break;
        }
        modulus *= 10;
    }



    let left = 0;
    let right = numbersArr.length - 1;
    while (left < right) {
        if (numbersArr[left] !== numbersArr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};
