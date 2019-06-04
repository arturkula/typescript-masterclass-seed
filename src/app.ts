// run in console with: yarn start

// interface IArtist {
//     name: string;
// }

class ArtistCreator /*implements IArtist*/ {
    constructor(public name: string) {}
}

function artistFactory({ name }: ArtistCreator) {
    // return { id: 101, name };
    return new ArtistCreator(name);
}

const newArtist = artistFactory({ name: 'arku' });

console.debug('newArtist:', newArtist);
