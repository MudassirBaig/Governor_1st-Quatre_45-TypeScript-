function make_album(artist_name, album_title, num_tracks) {
    var album = {
        artist: artist_name,
        title: album_title
    };
    if (num_tracks !== undefined) {
        album.tracks = num_tracks;
    }
    return album;
}
// Example usage:
var album1 = make_album("Linkin Park", "Meteora");
var album2 = make_album("Ed Sheeran", "÷ (Divide)", 12);
var album3 = make_album("Taylor Swift", "1989");
console.log(album1);
console.log(album2);
console.log(album3);
