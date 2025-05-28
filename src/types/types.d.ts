interface sublinks {
  name: string;
  url: string;
}

interface Projects {
  name: string;
  description: string;
  github: string;
  badge: string;
  sublinks?: Array<sublinks>;
}

interface Icons {
  name: string;
  icon: string;
  wakatime_name?: string;
  template_icon: string;
  category: string;
  color: string;
}

interface Media {
  url: string;
  icon: string;
  path: string;
  name: string;
}

interface WakatimeData {
  color: string;
  decimal: string;
  digital: string;
  hours: number;
  minutes: number;
  name: string;
  percent: number;
  text: string;
  total_seconds: number;
}

interface WakatimeLangs {
  data: WakatimeData[];
}

interface Artists {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

interface SpotifyData {
  error?: string;
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  trackUrl: string;
}
