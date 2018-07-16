const fs = require('fs');

function corruptionChecksum() {
    fs.readFile('day2_input.txt', 'utf8', (err, data) => {
        // if (err) console.log(err);

        let checksum = 0;
        const rows = data.toString().split('\n');

        for (let line of rows) {
            const entries = line.toString().split('\t');
            let max = min = parseInt(entries[0]);

            for (let i = 1; i < entries.length; i++) {
                const curr = parseInt(entries[i]);
                if (curr > max) max = curr;
                if (curr < min) min = curr;
            }

            checksum += (max - min);
        }

        console.log(checksum);
    });
}

function corruptionChecksum_evenlyDivisible() {
    fs.readFile('day2_input.txt', 'utf8', (err, data) => {
        // if (err) console.log(err);

        let checksum = 0;
        const rows = data.toString().split('\n');

        for (let line of rows) {
            const entries = line.toString().split('\t');
            let big = 0, small = 1;

            for (let i = 0; i < entries.length; i++) {
                for (let j = 0; j < entries.length; j++) {
                    if (i == j) continue; // skip if same entry
                    const curr_b = parseFloat(entries[i]); // parse float to prevent integer division
                    const curr_s = parseFloat(entries[j]);
                    if (Number.isInteger(curr_b / curr_s)) {
                        big = curr_b;
                        small = curr_s;
                    }
                }
            }

            checksum += (big / small);
        }

        console.log(checksum);
    });
}

corruptionChecksum();
corruptionChecksum_evenlyDivisible();