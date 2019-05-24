// run in console with: yarn start

// old way:

// function foo(bar: string | number) {
//     if (typeof bar === 'string') {
//         return bar.toLocaleUpperCase();
//     }

//     if (typeof bar === 'number') {
//         return bar.toFixed(2);
//     }
// }

// const x = foo('aaaa');
// const y = foo(111);

// console.debug(x);
// console.debug(y);

// new way:

class Song {
    constructor(public title: string, public duration: string | number) {}
}

function getSongDuration(item: Song) {
    if (typeof item.duration === 'string') {
        return item.duration;
    }
    const { duration } = item;
    const minutes = Math.floor(duration / 60000);
    const seconds = (duration / 1000) % 60;
    return `${minutes}:${seconds}`;
}

const songDurationFromString = getSongDuration(new Song('Wonderful Wonderful', '05:31'));

console.debug(songDurationFromString);

const songDurationFromMS = getSongDuration(new Song('Wonderful Wonderful', 330000));

console.debug(songDurationFromMS);
