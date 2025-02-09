export class FizzBuzz {
    answerFor(arg0: number): string | number {
        if (isFizz(arg0) && isBuzz(arg0)) return "FizzBuzz";
        if (isFizz(arg0)) return "Fizz";
        if (isBuzz(arg0)) return "Buzz";

        return arg0;
    }
}

function isFizz(arg0: number) {
    return arg0 % 3 === 0 || arg0.toString().includes("3");
}
function isBuzz(arg0: number) {
    return arg0 % 5 === 0 || arg0.toString().includes("5");
}

