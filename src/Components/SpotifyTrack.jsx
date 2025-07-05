import { NextResponse } from 'next/server';

// Fetch new access token using refresh token
async function refreshAccessToken() {
  const tokenUrl = 'https://accounts.spotify.com/api/token';
  const refreshToken = process.env.REFRESH_TOKEN;
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;

  const formData = new URLSearchParams();
  formData.append('grant_type', 'refresh_token');
  formData.append('refresh_token', refreshToken);

  const authHeader = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const response = await fetch(tokenUrl, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${authHeader}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: formData,
  });

  const data = await response.json();
  return data.access_token;
}

// Fetch recently played track
async function getRecentlyPlayedTrack(accessToken) {
  const apiUrl = 'https://api.spotify.com/v1/me/player/recently-played?limit=1';

  const response = await fetch(apiUrl, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();
  return data.items.length ? data.items[0].track : null;
}

// Fetch user profile
async function getUserProfile(accessToken) {
  const apiUrl = 'https://api.spotify.com/v1/me';

  const response = await fetch(apiUrl, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });

  const data = await response.json();
  return data;
}

// Main GET method
export async function GET() {
  try {
    const accessToken = await refreshAccessToken();
    const track = await getRecentlyPlayedTrack(accessToken);
    const user = await getUserProfile(accessToken);

    if (!track) return NextResponse.json({ error: 'No recent track found' });

    return NextResponse.json({
      name: track.name,
      artist: track.artists.map(a => a.name).join(', '),
      image: track.album.images[0]?.url || '',
      url: track.external_urls.spotify,
      profileUrl: user.external_urls.spotify,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
