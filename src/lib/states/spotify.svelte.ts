type spotifyStateType = {
  data: SpotifyData | null;
  isConnected: boolean;
};

export const spotifyState: spotifyStateType = $state({ data: null, isConnected: false });

let sse: EventSource | null = null;

export function init(initial: SpotifyData) {
  if (typeof window === 'undefined' || spotifyState.isConnected) return;
  if (initial) {
    spotifyState.data = initial;
  }

  const connect = () => {
    if (sse) return;
    sse = new EventSource('/api/spotify/playing');

    sse.onmessage = (e) => {
      spotifyState.data = JSON.parse(e.data);
    };

    spotifyState.isConnected = true;
  };

  const disconnect = () => {
    if (sse) {
      sse.close();
      sse = null;
    }
  };

  const handleVisibility = () => {
    document.hidden ? disconnect() : connect();
  };

  document.addEventListener('visibilitychange', handleVisibility);
  connect();
}
