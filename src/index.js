import {
  Hero,
  createNavBar,
  createTitle,
  Menu,
  ContactForm,
} from "./modules/initial-load.js";

import cremeImg from './img/cremeBrulee.jpg';
import cupcakeImg from './img/cupcake.jpg';
import macaronsImg from './img/Macarons.jpg';
import icecreamImg from './img/ice-cream.jpg';

let images = [cremeImg, cupcakeImg, macaronsImg, icecreamImg];
Hero.createHero();
Hero.createHeroContent();
createTitle();
createNavBar();

//menu 
Menu.createMenuSection();
Menu.createMenu(images);
//contact form

ContactForm.createContactSection();
ContactForm.createContactForm();