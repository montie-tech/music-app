import { connectDB } from "@/lib/mongodb";
import Song from "@/models/Song";

export async function GET() {
    await connectDB();

    const songs = await Song.find();

    return Response.json(songs);
}