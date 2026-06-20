"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const songsDatabase = [
    {
      id: 1,
      title: "2023 URBANIZED PARTY MIX",
      artist: "DJ BYRON WORLDWIDE ft. Sia, J. Bieber, J. Derulo, Ed Sheeran",
      image: "images/urban.jpg",
      audioSrc:  "https://bxuxlwxxmdsywzykwzov.supabase.co/storage/v1/object/public/music/Justin_Bieber_-_Ghost(128k).mp3",
      audioType: "audio/mpeg",
    },
    {
      id: 2,
      title: "DJ F2 · Urban RNB Mix",
      artist: "DJ F2 ft. Justin Bieber, Khalid, Anne Marie, Chris Brown, Cardi B",
      image: "images/djf2.jpg",
      audioSrc: "music/DJ-F2-URBAN-RNB-POP-KIZOMBA-VIDE.mp3",
      audioType: "audio/mpeg",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSongs, setFilteredSongs] = useState(songsDatabase);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredSongs(songsDatabase);
    } else {
      const term = searchTerm.toLowerCase();
      setFilteredSongs(
        songsDatabase.filter(
          (song) =>
            song.title.toLowerCase().includes(term) ||
            song.artist.toLowerCase().includes(term)
        )
      );
    }
  }, [searchTerm]);

  return (
    <div className="bg-[#0b1120] text-white min-h-screen">

      {/* HEADER */}
      <header className="flex justify-between items-center p-4 bg-[#111827] sticky top-0">
        <h1 className="text-xl font-bold text-cyan-400">
          🎧 MusicHub WaveGrid
        </h1>

        <input
          className="p-2 rounded-full text-black w-64"
          placeholder="Search songs..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      {/* GRID */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredSongs.map((song) => (
          <div
            key={song.id}
            className="bg-[#111827] p-4 rounded-xl border border-gray-700"
          >
            <img
              src={song.image}
              className="w-full h-48 object-cover rounded-lg"
              alt={song.title}
            />

            <h2 className="mt-3 font-bold text-yellow-300">
              {song.title}
            </h2>

            <p className="text-gray-400 text-sm">{song.artist}</p>

            <audio controls className="w-full mt-3">
              <source src={song.audioSrc} type={song.audioType} />
            </audio>
          </div>
        ))}
      </div>
    </div>
  );
}