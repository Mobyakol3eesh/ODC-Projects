let queries = new URLSearchParams(location.search);

let pid = queries.get("id");

let text = document.querySelector('.text')
let img = document.querySelector('.product-img');

let getData = async () => {
    let result = await fetch('https://dummyjson.com/products/' + pid)
    let product = await result.json();
   
    img.src = product.thumbnail
    text.innerHTML = `
    <div class='card'>
    <div class="card-body">
    <h3>
        Title: ${product.title}
    </h3>
    <h3>
        Price: ${product.price}
    </h3>
    <p>
        Description: ${product.description}
    </p>
    <h5>
        stock : ${product.stock}
    </h5>
    <a class="btn btn-primary">Add to Cart</a>
    </div>
    </div>`
    
    
};

getData(pid);