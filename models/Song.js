import mongoose from "mongoose";

const SongSchema = new mongoose.Schema({
    title: String,
    artist: String,
    image: String,
    audioUrl: String,
    videoUrl: String,
    type: String
});

export default mongoose.models.Song ||
    mongoose.model("Song", SongSchema);