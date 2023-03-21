// GitHub auto commit bot

import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const filePath = './data.json'

const createCommits = (n) => {
    if (n === 0){ return simpleGit().push()}

    const x = random.int(0, 52)
    const y = random.int(0, 6)
    const date = moment().subtract(1, 'y').add(1, 'd').add(x, 'w').add(y, 'd').format()

    const data = {
        data: date
    }

    console.log(date);

    jsonfile.writeFile(filePath, data, () => {
        simpleGit().add([filePath]).commit(date, {'--date': date},
            createCommits.bind(this, --n))
    })
}

createCommits(100)
