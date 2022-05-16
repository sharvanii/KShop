let KpopProduct = document.getElementById("product");
document.getElementById("btn-product").addEventListener('click', getProduct);

function getProduct(e) {
  fetch('product.json')
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    data.forEach((item) => {
      let section = 
      `
         <div class="product">
           <h2>${item.name}</h2>
           <p>Price: ${item.price}</p>
           <p>Type: ${item.type}</p>
         </div>  
       `;
      KpopProduct.innerHTML += section;
    })
  })
  .catch((err) => console.log(`Error: ${err}`));
}

export {postData };