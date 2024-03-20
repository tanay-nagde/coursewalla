
const productcontainer = document.querySelector("#product_container")
const producttemplate = document.querySelector("#product_card")

export const showproduct = (products) => {
    if (!products) {
        return false;
    }

    products.forEach((element) => {
        const { id, tittle, category, discription, price, quantity, img } = element
        const productclone = producttemplate.content.cloneNode(true)
        productclone.querySelector("#product_title").innerText = tittle;
        productclone.querySelector("#product_description").innerText = discription;
        productclone.querySelector("#product_category").innerText = category;
        productclone.querySelector("#product_price").innerText = `₹ ${price}`;
        productclone.querySelector("#product_img").src = img;
        productclone.querySelector("#product_img").alt = tittle;
        productclone.querySelector(".quantity-container").innerText = quantity;

        console.log(producttemplate.content);
        productcontainer.appendChild(productclone)
    }
    )
}