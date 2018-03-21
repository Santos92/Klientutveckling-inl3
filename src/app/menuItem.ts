export class menuItem {
	
	Name: string;
	Description: string;
	price: number;
    imageUrl: string;
	
	constructor(Name: string, Description: string, price: number, imageUrl: string) {
    this.Name = Name;
    this.Description = Description;
    this.price = price;
    this.imageUrl = imageUrl;
  }
	
}