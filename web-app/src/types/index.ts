export interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: News[];
}

export interface News {
  source: SourcePreview;
  author?: string;
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content: string;
}

export interface SourcePreview {
  id: string;
  name: string;
}

export interface SourcesApiResponse {
  status: string;
  sources: Source[];
}

export interface Source {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}
