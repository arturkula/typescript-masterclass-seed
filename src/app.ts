// run in console with: yarn start

// class Foo {
//     public bar() {
//         // //
//     }
// }

// const bar = new Foo();

// // old way:
// console.debug(Object.getPrototypeOf(bar) === Foo.prototype);
// // new way:
// console.debug(bar instanceof Foo);

// tslint:disable-next-line:max-classes-per-file
class Song {
    constructor(public title: string, public duration: number) {}
}

// tslint:disable-next-line:max-classes-per-file
class Playlist {
    constructor(public name: string, public songs: Song[]) {}
}

function getItemName(item: Song | Playlist): string {
    if (item instanceof Song) {
        return item.title;
    }
    return item.name;
}

const songName = getItemName(new Song('Wonderful Wonderful', 300000));

console.debug('Song name:', songName);

const playlistName = getItemName(new Playlist('The best songs', [new Song('The Man', 300000)]));

console.debug('Playlist name:', playlistName);
