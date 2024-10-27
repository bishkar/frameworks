export interface AdvertismentProps {
  children: React.ReactNode;
  title: string;
  event: string;
  date: string;
  time: string;
  img: string;
  reverse?: boolean;
}