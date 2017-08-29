class Fizzbuzz {
    constructor(num) {
        this.keyArray = this.getKeyArray(num);
        this.msg = {
            multiplesOf3: 'Fizz',
            multiplesOf3: 'Buzz',
            multiplesOf3and5: 'FizzBuzz',
        };
    }

    isMultiplesOf3(num) {
        return (num % 3) === 0;
    };

    isMultiplesOf5(num) {
        return (num % 5) === 0;
    };

    evalCount(num) {
        const check3 = this.isMultiplesOf3(num);
        const check5 = this.isMultiplesOf5(num);

        if (check3 && check5) {
            return this.msg.multiplesOf3and5;
        } else if (check3) {
            return this.msg.multiplesOf3;
        } else if (check5) {
            return this.msg.multiplesOf5;
        } else {
            return num;
        }
    }

    getKeyArray(num) {
        let array = [];
        let count = 0;

        while (count < num) {
            count++;
            array.push(count);
        }

        return array;
    }

    getFizzBuzz() {
        if (this.keyArray.length === 0) return null;

        return this.keyArray.map(index => this.evalCount(index));
    }
}

const fizzbuzz = new Fizzbuzz(30);

console.log(fizzbuzz.getFizzBuzz());
