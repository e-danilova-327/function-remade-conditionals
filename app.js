//Ex.1 - Kelvin Weather

const kelvinToFahrenheit = kelvin => {
    let celsius = kelvin - 273;
    let fahrenheit = celsius * (9 / 5) + 32;
    fahrenheit = Math.floor(fahrenheit);
    return fahrenheit;
}

console.log(kelvinToFahrenheit(293));

//Ex.2 - Dog Years

const humanAgeInDogYears = myAge => {
    let earlyYears = 2;
    earlyYears *= 10.5;
    let laterYears = myAge - 2;
    laterYears *= 4;
    return earlyYears + laterYears;
}

console.log(humanAgeInDogYears(29));

//Ex.3 - Magic Eight Ball

const randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
switch (randomNumber) {
    case 0:
        eightBall = 'It is certain';
        break;
    case 1:
        eightBall = 'It is decidedly so';
        break;
    case 2:
        eightBall = 'Reply hazy try again';
        break;
    case 3:
        eightBall = 'Cannot predict now';
        break;
    case 4:
        eightBall = 'Do not count on it';
        break;
    case 5:
        eightBall = 'My sources say no';
        break;
    case 6:
        eightBall = 'Outlook not so good';
        break;
    case 7:
        eightBall = 'Signs point to yes';
        break;
    default:
        eightBall = 'Oops! Something went wrong!';
        break;
};

const answerMyQuestion = (userName, userQuestion) => {
    return `${userName} was wondering: ${userQuestion}? The answer is: ${eightBall}.`
}

console.log(answerMyQuestion('Jane', 'Will I go to Bucharest this year'));

//Ex.4 - Race Day

let raceNumber = Math.floor(Math.random() * 1000);

const raceTime = (userAge, registeredEarly) => {
    if (registeredEarly && userAge > 18) {
        raceNumber += 1000;
    };
    if (userAge > 18 && registeredEarly) {
        return `The runner number ${raceNumber} will race at 9:30AM`;
    } else if (userAge > 18 && !registeredEarly) {
        return `The runner number ${raceNumber} will race at 11:00AM`;
    } else if (userAge < 18) {
        return `The runner number ${raceNumber} will race at 12:30PM`;
    } else {
        return `The runner number ${raceNumber} is asked to wait for further instructions`;
    }
}

console.log(raceTime(19, false));