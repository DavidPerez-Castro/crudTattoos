export class Tattoo {
  _id?: string;
  title: string;
  description: string;
  price: number;
  details: string;
  size: string;
  color: string;
  style: string;
  bodyPart: string;
  imageUrl: string;

  constructor(title: string, description: string, price: number, details: string, size: string, color: string, style: string, bodyPart: string, imageUrl: string) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.details = details;
    this.size = size;
    this.color = color;
    this.style = style;
    this.bodyPart = bodyPart;
    this.imageUrl = imageUrl;
  }
}
