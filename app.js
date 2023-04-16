
function Product(title, price, description, image) {
  this.title = title;
  this.price = price;
  this.description = description;
  this.image = image;
}

let products = [];

fetch('https://fakestoreapi.com/products?limit=20')
  .then(res => res.json())
  .then(data => {
    products = data.map(item => new Product(item.title, item.price, item.description, item.image));
    products.forEach(item => {


      const cardsHolder = document.getElementById("cards-holder");
      
      
      const card = document.createElement("div");
      card.classList.add("card");
      cardsHolder.appendChild(card);

      const image = document.createElement('img');
      image.classList.add("card-img-top");
      image.classList.add("img-fluid");
      image.style.maxWidth = "100%";
      image.style.maxHeight = "200px";
      image.src = item.image;
      card.appendChild(image);


      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      card.appendChild(cardBody);


    
      const title = document.createElement('h5');
      title.textContent = item.title;
      cardBody.appendChild(title);


      const description = document.createElement('p');
      description.textContent = item.description;
      cardBody.appendChild(description);


      const price = document.createElement('p');
      price.classList.add("price");
      price.textContent = `Price : ${item.price}`;
      cardBody.appendChild(price);

      
    });
  });