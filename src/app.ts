// run in console with: yarn start

interface IItem {
    name: string;
}

interface IArtist extends IItem {
    songs: number;
}

interface IArtist {
    // no error
    getSongs(): number;
}

type Artist2 = { name: string } & IItem;
// type Artist2 = { name: string; } & IItem; // error

const newArtist: IArtist = {
    name: 'ABC',
    songs: 5,
    getSongs() {
        return this.songs;
    },
};

console.debug('newArtist:', newArtist);
