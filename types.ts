
export interface PortfolioItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  title: string;
  category: string;
  description: string;
}
