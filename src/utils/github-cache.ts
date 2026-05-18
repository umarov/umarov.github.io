interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

const CACHE_TTL_MS = 60 * 60 * 1000;

export async function fetchWithCache<T>(key: string, url: string): Promise<T> {
  const cached = readCache<T>(key);
  if (cached) {
    return cached;
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status}`);
  }

  const data = (await response.json()) as T;
  writeCache(key, data);
  return data;
}

function readCache<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) {
      return null;
    }

    const entry = JSON.parse(raw) as CacheEntry<T>;
    if (Date.now() - entry.timestamp > CACHE_TTL_MS) {
      localStorage.removeItem(key);
      return null;
    }

    return entry.data;
  } catch {
    return null;
  }
}

function writeCache<T>(key: string, data: T): void {
  try {
    const entry: CacheEntry<T> = { data, timestamp: Date.now() };
    localStorage.setItem(key, JSON.stringify(entry));
  } catch {
    // Ignore quota errors — the page still works without cache.
  }
}
