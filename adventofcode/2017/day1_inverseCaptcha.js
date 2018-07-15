const fs = require('fs');

function inverseCaptcha_next() {
    fs.readFile('day1_input.txt', 'utf8', (err, data) => {
        // if (err) console.log(err);

        const len = data.length;
        let sum = 0;

        for (let i = 0; i < len-1; i++)
            if (data[i] == data[i+1])
                sum += parseInt(data[i]);
        
        if (data[len-1] == data[0]) // compare first and last digit to handle wraparound
            sum += parseInt(data[0]);

        console.log(sum);
    });
}

function inverseCaptcha_halfwayAround() {
    fs.readFile('day1_input.txt', 'utf8', (err, data) => {
        // if (err) console.log(err);

        const len = data.length;
        const half = len/2;
        let sum = 0;

        data += data.slice(0, half); // concatenate first half to end to handle wraparound
        for (let i = 0; i < len; i++)
            if (data[i] == data[i+half])
                sum += parseInt(data[i]);

        console.log(sum);
    });
}

inverseCaptcha_next();
inverseCaptcha_halfwayAround();