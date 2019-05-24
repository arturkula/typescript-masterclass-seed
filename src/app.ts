// run in console with: yarn start

// // introduction:
// const exists = 'localStorage' in window; // prop exists in obj
// const foo = 'bar'; // literal type of 'bar'
// const foo: string = 'bar'; // string type

class Song {
    public kind: 'song';
    constructor(public title: string, public duration: number) {}
}

// tslint:disable-next-line:max-classes-per-file
class Playlist {
    public kind: 'playlist';
    constructor(public name: string, public songs: Song[]) {}
}

function isSong(item: any): item is Song {
    return 'title' in item; // title prop exists in item
}

function getItemName(item: Song | Playlist): string {
    // if (isSong(item)) {
    if (item.kind === 'song') {
        return item.title;
    }
    return item.name;
}

const songName = getItemName(new Song('Wonderful Wonderful', 300000));

console.debug('Song name:', songName);

const playlistName = getItemName(new Playlist('The best songs', [new Song('The Man', 300000)]));

console.debug('Playlist name:', playlistName);
