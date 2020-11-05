export async function apiRequest(endpoint) {
  const key = import.meta.env.VITE_PEXELS_KEY;
  const res = await fetch(`https://api.pexels.com/v1${endpoint}`, {
    headers: { authorization: key },
  });
  return await res.json();
}
