'use client';
import { useEffect, useState } from 'react';

export default function SpotifyTrack() {
  const [track, setTrack] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchTrack() {
      try {
        const res = await fetch('/api/recently-played');
        const data = await res.json();

        if (data.error) setError(data.error);
        else setTrack(data);
      } catch (err) {
        setError('Failed to fetch track');
      }
    }

    fetchTrack();
  }, []);

  if (error) return <div className="text-red-500">{error}</div>;
  if (!track) return <p>Loading...</p>;

  return (
    <div className="p-4 bg-black text-white rounded-xl shadow-lg max-w-md">
      <img src={track.image} alt="Track" className="w-full rounded-lg mb-4" />
      <h2 className="text-xl font-bold">{track.name}</h2>
      <p className="text-sm">{track.artist}</p>
      <div className="flex gap-2 mt-3">
        <a href={track.url} target="_blank" className="text-green-400 underline">
          🎧 Listen on Spotify
        </a>
        <a href={track.profileUrl} target="_blank" className="text-blue-400 underline">
          🧑‍💼 Profile
        </a>
      </div>
    </div>
  );
}
