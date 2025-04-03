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
  category?: string;
}

interface Media {
  url: string;
  xmlns: string;
  path: string;
  name: string;
}
