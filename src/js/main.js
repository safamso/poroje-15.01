//Elements//
const $ = (id) => document.getElementById(id);
const cardContainerElement = $("cardContainer");
const horizontaLeftElement = $("horizontaLeftElement");
const horizontalRightElement = $("horizontalRightElement");
//Massiv//
const products = [
  {
    name: "Wireless Headphones",
    price: 120,
    description: "High quality wireless headphones with noise cancellation.",
    image: "https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-2-3-500x570.jpg"
  },
  {
    name: "WOODEN CONTINER BOWL",
    price: 190,
    description: "Essentials,Furniture",
    image: "https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-1-6-500x570.jpg"
  },
  {
    name: "Bottle – Wood Cork",
    price: 120,
    description: "Interior",
    image: "https://victorthemes.com/themes/seese/wp-content/uploads/2016/10/Image-2-4-500x570.jpg"
  },
  {
    name: "Woolen Coffee Mug",
    price: 75,
    description: "Furniture Interior",
    image: "https://victorthemes.com/themes/seese/wp-content/uploads/2017/04/Image-2-7-500x570.jpg"
  },
  {
    name: "Sweeper",
    price: 39.99,
    description: "Canvas Basket",
    image: "https://victorthemes.com/themes/seese/wp-content/uploads/2016/11/Image-3-4-500x570.jpg"
  },
  {
    name: "Handcrafted Mug",
    price: 119.1,
    description: "Furniture",
    image: "https://victorthemes.com/themes/seese/wp-content/uploads/2016/11/image-6-1-500x570.jpg"
  },
  {
    name: "Analog Table Clock",
    price: 140,
    description: "Decoration ,Outdoor ,Essentials",
    image: "https://victorthemes.com/themes/seese/wp-content/uploads/2016/11/Image-1-2-500x570.jpg"
  },
  {
    name: "Flat Wooden Plates",
    price: 190,
    description: "Furniture",
    image: "https://victorthemes.com/themes/seese/wp-content/uploads/2016/11/Image-2-10-500x570.jpg"
  },
  {
    name: "Handmade Coir basket",
    price: 190,
    description: "Fast external SSD with 1TB storage.",
    image: "https://victorthemes.com/themes/seese/wp-content/uploads/2016/11/image-5-1-500x570.jpg"
  },
  {
    name: "Flood Light Bulb",
    price: 190,
    description: "Decoration, Essentials",
    image: "https://victorthemes.com/themes/seese/wp-content/uploads/2016/11/Image-1-6-500x570.jpg"
  },
  {
    name: "Desk Lamp",
    price: 40,
    description: "Furniture",
    image: "https://victorthemes.com/themes/seese/wp-content/uploads/2016/11/Image-2-5-500x570.jpg"
  },
  {
    name: "Coffee Mug",
    price: 150,
    description: "Essentials",
    image: "https://victorthemes.com/themes/seese/wp-content/uploads/2016/11/Image-2-12-500x570.jpg"
  },
  {
    name: "Plastic Chair",
    price: 62,
    description: "Furniture",
    image: "https://victorthemes.com/themes/seese/wp-content/uploads/2016/11/Image-1-17-500x570.jpg"
  },
  {
    name: "Bottle With Wooden Cork",
    price: 135,
    description: "Essentials,Furniture",
    image: "https://victorthemes.com/themes/seese/wp-content/uploads/2016/11/Image-2-7-500x570.jpg"
  },
  {
    name: "Lunch Bag Set",
    price: 119.1,
    description: "Essentials,Outdoor",
    image: "https://victorthemes.com/themes/seese/wp-content/uploads/2016/11/Image-1-18-500x570.jpg"
  },
  {
    name: "Handcrafted Vase",
    price: 105,
    description: "Interior,Decoration",
    image: "https://victorthemes.com/themes/seese/wp-content/uploads/2016/11/Image-2-12-500x570.jpg"
  },
  {
    name: "Travelling Book",
    price: 59,
    description: "Outdoor",
    image: "https://victorthemes.com/themes/seese/wp-content/uploads/2016/11/Image-2-14-500x570.jpg"
  },
  {
    name: "Glass Cork Bottles",
    price: 75,
    description: "Furniture",
    image: "https://victorthemes.com/themes/seese/wp-content/uploads/2016/11/Image-2-13-500x570.jpg"
  },
  {
    name: "Liquid Handwash",
    price: 89,
    description: "Essentials",
    image: "https://victorthemes.com/themes/seese/wp-content/uploads/2016/11/Image-2-14-500x570.jpg"
  },
  {
    name: "Glass Vase",
    price: 90,
    description: "Decoration,",
    image: "https://victorthemes.com/themes/seese/wp-content/uploads/2016/11/Image-2-15-500x570.jpg"
  }
];


for (let i = 0; i < products.length; i++) {
  cardContainerElement.innerHTML += `
       <div  class="card_2" style="width:100%;">
            <img src="${products[i].image}" class="card_1_image" alt="...">
            <div class="card_container_3">ADD</div>
            <div class="card_2_info">
                <div class="card_2_info_price"> <p>${products[i].name}</p> <p> $ ${products[i].price}</p></div>
              <p class="card_2_description">${products[i].description}</p>
              <p class="card_2_description_cart"><i class = "bi bi-handbag"></i> Add To cart</p>
              
              


            </div>
        </div>
    
    
    `



};


//Events//
const hideOffset = 200; // səhifənin sonuna neçə px qalmış gizlənsin

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  const distanceFromBottom =
    documentHeight - (scrollTop + windowHeight);

  if (distanceFromBottom < hideOffset) {
    horizontaLeftElement.classList.add("hide");
    horizontalRightElement.classList.add("hide");
  } else {
    horizontaLeftElement.classList.remove("hide");
    horizontalRightElement.classList.remove("hide");
  }
});

