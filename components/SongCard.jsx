export default function SongCard({ song }) {
    return ( <
        div className = "music-card" > {
            song.type === "video" ? ( <
                video controls >
                <
                source src = { song.videoUrl }
                type = "video/mp4" /
                >
                <
                /video>
            ) : ( <
                >
                <
                img src = { song.image }
                alt = { song.title }
                />

                <
                audio controls >
                <
                source src = { song.audioUrl }
                type = "audio/mpeg" /
                >
                <
                /audio> <
                />
            )
        }

        <
        h3 > { song.title } < /h3>

        <
        p > { song.artist } < /p> <
        /div>
    );
}