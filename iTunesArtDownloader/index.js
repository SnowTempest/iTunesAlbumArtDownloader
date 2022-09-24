import winax from 'winax';
import path from 'path'


const __dirname = path.resolve() + "\\albumart\\";
const iTunes = new winax.Object("itunes.Application", {activate: true});

function main() {


    if (iTunes.playerState == 1) {
        console.log("Getting album art for the current album.")

        var track = iTunes.CurrentTrack;
        var artwork = track.Artwork.Item(1);

        if (track.Artwork.Count == 1) {
            artwork.SaveArtworkToFile( __dirname + track.Album + ".png");
        }

        console.log("Album art for: " + track.Album + " has been downloaded. \nPlease check: " + __dirname + " for the image.")

    } else {
        console.log("Please play a song and try again.")
    }

}

main();