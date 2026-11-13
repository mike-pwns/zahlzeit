export function generateNumber(numDigits: number): number {
    const min = 10 ** (numDigits - 1);
    const max = 10 ** numDigits;

    return Math.floor(Math.random() * (max - min)) + min;
}

// just like.. manage exceptions n whatnot
type DictionaryNumToString = Record<number, String>;
const UNIQUE_NUM_WORD_DICT: DictionaryNumToString = {
    0: "null",
    1: "ein",
    2: "zwei",
    3: "drei",
    4: "vier",
    5: "fünf",
    6: "sechs",
    7: "sieben",
    8: "acht",
    9: "neun",
    10: "zehn",
    11: "elf",
    12: "zwölf",
    13: "dreizehn",
    14: "vierzehn",
    15: "fünfzehn",
    16: "sechzehn",
    17: "siebzehn",
    18: "achtzehn",
    19: "neunzehn",
    20: "zwanzig",
    30: "dreißig",
    60: "sechzig",
    70: "siebzig"
};

// actual func
// note: only handle up to 6 digit nums, cuz thats all we were taught up till now
export function numToWord(num: number) : String {

    // check if its a "base case" or exception
    if (num in UNIQUE_NUM_WORD_DICT) {
        return UNIQUE_NUM_WORD_DICT[num];
    }

    // check if num is in thousands (4 digits - 6 digits)
    if (Math.floor(num / 1000) !== 0) {

        // split into the thousands and the hundreds (ie remainder, could be tens or just ones, or whatever)
        let thousands = (Math.floor(num / 1000));
        let hundreds = (num % 1000);

        // booyah recursion
        return numToWord(thousands) + "tausend" + numToWord(hundreds);
    }

    // repeat for 100s and 10s

    if (Math.floor(num / 100) !== 0) {

        let hundreds = (Math.floor(num / 100));
        let tens = (num % 100);

        return numToWord(hundreds) + "hundert" + numToWord(tens);

    }

    if (Math.floor(num / 10) !== 0) {

        let tens = (Math.floor(num / 10));
        let ones = (num % 10);

        if (ones === 0) { // *handles the whole 40 --> "vierzig" and not "nullundfierzig
            return numToWord(tens) + "zig";
        }

        return numToWord(ones) + "und" + numToWord(num-ones);

    }

    // hopefully never comes to this :/
    return ""

}