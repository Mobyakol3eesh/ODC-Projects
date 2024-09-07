let container = document.querySelector(".container");

let getResult = async () => {
    let error;
    let result = await fetch("https://dummyjson.com/products")
        .then((resolve) => resolve.json())
        .catch((er) => {
            error = er;
        });

    let products = [...result?.products];
    let colCounter = 1;
    let rowConter = 1;
    products.forEach((product) => {
        if (container.children.length == 0) {
            container.innerHTML += `<div class="row row-${rowConter} g-4"></div>`;
        } else {
            let row = document.querySelector(`.row-${rowConter}`);
            if (colCounter <= 3) {
                let col;
                switch (colCounter) {
                    case 1: {
                        col = ".col-one";
                        break;
                    }
                    case 2: {
                        col = ".col-two";
                        break;
                    }
                    case 3: {
                        col = ".col-three";
                        break;
                    }
                }
                row.innerHTML += `
            <div class="col-4 col-${col} my-4">
            <div class='card h-100 '>
            <div class='card-body'>
                <img src="${product.thumbnail}">
                <h3>${product.title}</h3>
                <p>${product.price}</p>
                <a class="btn btn-primary" href="single-product.html?id=${product.id}">Show More</a>
                </div>
            </div>
            </div>`;
                colCounter++;
            } else {
                colCounter = 1;
                rowConter++;
                container.innerHTML += `<div class="row row-${rowConter}"></div>`;
            }
        }
    });
};
getResult();
//Native JS

//v8 engine -> asyn
