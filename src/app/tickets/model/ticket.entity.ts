export class Ticket {
  id: number;
  artist: string;
  date: string;
  venue: string;
  hour: string;
  price: number;
  image: string;

  constructor() {
    this.id = 0;
    this.artist = '';
    this.date = '';
    this.venue = '';
    this.hour = '';
    this.price = 0;
    this.image = '';
  }

}
