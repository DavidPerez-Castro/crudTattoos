export class Tattoo {
  _id?: number;
  title: string;
  description: string;
  price: number;
  details: string;
  imageUrl: string;

  constructor(title: string, description: string, price: number, details: string, imageUrl: string) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.details = details;
    this.imageUrl = imageUrl;
  }
}
