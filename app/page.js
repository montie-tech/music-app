import SongCard from "@/components/SongCard";

async function getSongs() {
    const res = await fetch(
        "http://localhost:3000/api/songs", {
            cache: "no-store"
        }
    );

    return res.json();
}

export default async function Home() {

    const songs = await getSongs();

    return ( <
        main >
        <
        h1 > MusicHub < /h1>

        <
        div className = "grid" > {
            songs.map(song => ( <
                SongCard key = { song._id }
                song = { song }
                />
            ))
        } <
        /div> <
        /main>
    );
}