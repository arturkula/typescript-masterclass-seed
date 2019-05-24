// run in console with: yarn start

class Song {
    constructor(public title: string, public duration: number) {}
}

// tslint:disable-next-line:max-classes-per-file
class Playlist {
    constructor(public name: string, public songs: Song[]) {}
}

function isSong(item: any): item is Song {
    return item instanceof Song;
}

function getItemName(item: Song | Playlist): string {
    if (isSong(item)) {
        return item.title;
    }
    return item.name;
}

const songName = getItemName(new Song('Wonderful Wonderful', 300000));

console.debug('Song name:', songName);

const playlistName = getItemName(new Playlist('The best songs', [new Song('The Man', 300000)]));

console.debug('Playlist name:', playlistName);
