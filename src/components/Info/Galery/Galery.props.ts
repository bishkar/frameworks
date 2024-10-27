export interface GaleryProps {
  children: React.ReactNode;
  images: {
    src: string;
    alt: string;
  }[];
}