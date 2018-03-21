import { Component, OnInit } from '@angular/core';
import { menuItem } from '../menuItem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

    appetisers = [];
    mainCourse = [];

  constructor() { }

  ngOnInit() {
  
  this.appetisers = [
  new menuItem("Fresh Soup of the Day",
  "Vegetable Soup - with fresh regional products",
  4, ""),  
  new menuItem("Bread Soup (Madeira Traditional Soup)",
  "Bread, Savory, egg, oil pepper",
  4, ""),  
  new menuItem("Tomato soup",
  "Tomato, Onion, Poached egg and roasted bread",
  4.5, ""),
  ]
  this.mainCourse = [
  new menuItem("Black Scabbardfish Fillet with Banana",
  "Black scabbard fish with banana and passion fruit sauce",
  13, ""),  
  new menuItem("Mixed variety of delicious Charcoal grilled Meat)",
  "‘Mirandesa’ Veal, Pork, Chicken and a Sausage ‘Churrasquito Transmontano’",
  15, ""),  
  new menuItem("Veal Steaks on Planka",
  " Little steaks with fresh mushrooms, fried round potatoes and cream sauce ",
  13, ""),
  ]
  
  }

}
