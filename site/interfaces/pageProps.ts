export interface PageProps {
  baseUrl: string;
  fullUrl: string;
  query: Record<string, string>;
  title: string;
  description: string;
  bodyId: string;
  bodyClass: string;
}