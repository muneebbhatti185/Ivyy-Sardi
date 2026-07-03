export interface BookingData {
  name: string;
  email: string;
  phone: string;
  age: number;
  goal: string;
  challenges: string;
  timeSlot: string;
  date: string;
}

export interface Pillar {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface ClientResult {
  id: number;
  name: string;
  result: string;
  imageUrl: string;
}
