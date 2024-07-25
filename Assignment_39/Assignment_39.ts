// Author: [Mudassir Baig]
// Date: [10-4-2024]


interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function make_album(artist_name: string, album_title: string, num_tracks?: number): Album {
    let album: Album = {
        artist: artist_name,
        title: album_title
    };

    if (num_tracks !== undefined) {
        album.tracks = num_tracks;
    }

    return album;
}

// Example usage:
const album1: Album = make_album("Linkin Park", "Meteora");
const album2: Album = make_album("Ed Sheeran", "÷ (Divide)", 12);
const album3: Album = make_album("Taylor Swift", "1989");

console.log(album1);
console.log(album2);
console.log(album3);