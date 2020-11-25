/*The Purpose of this module is to create and append 
all the html elements once the page has loaded */

let content = document.querySelector('#content');

const Hero = (() => {
  let heroContent;
  const createHero = () => {
    let hero = document.createElement('section');
    hero.id = "hero";
    content.appendChild(hero);
  }
  const getHero = () => hero;
  const createHeroContent = () => {
    heroContent = document.createElement('div');
    heroContent.id = "hero-content";
    Hero.getHero().appendChild(heroContent);
  }
  const getHeroContent = () => heroContent;
  return {
    getHero,
    getHeroContent,
    createHero,
    createHeroContent,
  }
})();

function createNavBar() {

  let navbar = document.createElement('ul');
  Hero.getHeroContent().appendChild(navbar);
  navbar.id = "navbar";

  createNavLinks('Order Online', navbar)
  createNavLinks('Menu', navbar);
  createNavLinks('About', navbar);
  createNavLinks('Contact', navbar);
};

function createNavLinks(linkName, navbar) {
  let listItem = document.createElement('il');
  let anchor = document.createElement('a');
  anchor.textContent = linkName;
  anchor.href = "#";
  listItem.id = linkName;
  listItem.appendChild(anchor);
  navbar.appendChild(listItem);
}

function createTitle() {
  let title = document.createElement('H1');
  let titleText = document.createTextNode('Le pâtisserie boutique');
  title.appendChild(titleText);
  title.id = 'restaurant-title';
  Hero.getHeroContent().appendChild(title);

}


//------------End of Hero Creation-------------//
//-----------Beginning of Menu Creation---------//
const Menu = (() => {
  let menuSection;
  let currency = "$";
  const getMenuSection = () => menuSection;
  const createMenuSection = () => {
    menuSection = document.createElement('section');
    menuSection.id = "menu-wrapper";
    content.appendChild(menuSection);
  }
  const createMenu = (images) => {
    let cremeMenu = MenuItems();
    let cupcake = MenuItems();
    let icecream = MenuItems();
    let macaron = MenuItems();


    let menuTitle = document.createElement('H1');
    menuTitle.textContent = "What's On the Menu!?";
    menuTitle.id = "menuTitle";
    menuSection.appendChild(menuTitle);

    cremeMenu.createMenuItemsContainers('creme-brulee');
    cupcake.createMenuItemsContainers('cupcake');
    icecream.createMenuItemsContainers('icecream');
    macaron.createMenuItemsContainers('macarons');

    cremeMenu.createMenuItem('Creme Brulee', images[0], `is a dessert consisting of a rich custard base topped with a texturally contrasting layer of hardened caramelized sugar.`, currency + 5.25);
    cupcake.createMenuItem('Cupcake', images[1], 'This recipe is the gold standard when it comes to classic cupcakes. We frosted these with Easy White Icing, but you could use our Chocolate Glaze for an even richer dessert.', currency + 5.25);
    macaron.createMenuItem('Macarons', images[2], 'Parisian-style macarons presented with a french-vanilla buttercream sandwiched between two cookies made out of almond flour', `${currency}9.00 for 9 pieces`);
    icecream.createMenuItem('Ice cream', images[3], 'Vanilla Icecream served with your choices of chocolate or cookie piece', currency + 5.25);

  }
  return {
    createMenuSection,
    createMenu,
    getMenuSection,
  }
})();
const MenuItems = () => {
  //let menuItem;
  let menuItemContainer;
  let menuItemDes;

  const getMenuItemContainer = () => menuItemContainer;
  const getMenuItemDes = () => menuItemDes;
  const createMenuItemsContainers = (name) => {

    menuItemContainer = document.createElement('div');
    menuItemContainer.className = "menu-item-wrapper";
    menuItemContainer.id = name;

    menuItemDes = document.createElement('div');
    menuItemDes.className = "menu-item-description";
    menuItemDes.id = name + "Description";

    Menu.getMenuSection().appendChild(menuItemContainer);
    menuItemContainer.appendChild(menuItemDes);

  };
  const createMenuItem = (name, img, description, price) => {
    let image = document.createElement('img');
    image.src = img;

    let menuItemTitle = document.createElement('H1');
    menuItemTitle.textContent = name;

    let menuDescription = document.createElement('p');
    menuDescription.textContent = description;

    let menuItemPrice = document.createElement('H3');
    menuItemPrice.textContent = price;

    menuItemContainer.appendChild(image);
    menuItemDes.appendChild(menuItemTitle);
    menuItemDes.appendChild(menuDescription);
    menuItemDes.appendChild(menuItemPrice);
  }

  return {
    getMenuItemContainer,
    getMenuItemDes,
    createMenuItemsContainers,
    createMenuItem,
  }
};

//-----------Ending of Menu Creation---------//
//-----------Beginning Of Contact Form--------------//
const ContactForm = (() => {
  let contactSection;
  const createContactSection = () => {
    contactSection = document.createElement("section");
    contactSection.className = "contact-section";
    content.appendChild(contactSection);
  }
  const createContactForm = () => {
    //section title, name,email, message, submit button,
    let contactTitle = document.createElement('H1');
    let contactForm = document.createElement('form');
    let name = document.createElement('input');
    let email = document.createElement('input');
    let message = document.createElement('textarea');
    let submit = document.createElement('input');

    contactTitle.className = 'contact-title';
    contactTitle.textContent = 'Contact Us!';

    name.type = 'text';
    name.className = "txtName";
    name.placeholder = "Enter Your Name";

    email.type = 'email';
    email.className = "txtEmail";
    email.placeholder = "Enter Your Email Address";

    message.className = "message";
    message.placeholder = "Write Us A Message";
    message.rows = 15;
    message.cols = 15;

    submit.type = 'submit';
    submit.className = "btnSubmit";
    submit.value = "Send";


    contactForm.appendChild(name);
    contactForm.appendChild(email);
    contactForm.appendChild(message);
    contactForm.appendChild(submit);
    contactSection.appendChild(contactTitle);
    contactSection.appendChild(contactForm);
  }
  return {
    createContactForm,
    createContactSection
  }
})();
//-----------End of Contact Form--------------//





module.exports = {
  Hero,
  Menu,
  ContactForm,
  createNavBar,
  createTitle,
  MenuItems,
}