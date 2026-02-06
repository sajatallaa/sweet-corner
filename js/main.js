const products = [
  { name: "Chocolate Cake", type: "cake", price: "$15", img: "assets/images/cake.jpg" },
  { name: "Dark Chocolate", type: "chocolate", price: "$8", img: "assets/images/chocolate.jpg" },
  { name: "Cookies Box", type: "cake", price: "$10", img: "assets/images/cookies.jpg" }
];

function displayProducts(filter) {
  $("#productList").html("");
  products.forEach(product => {
    if (filter === "all" || product.type === filter) {
      $("#productList").append(`
        <div class="col-md-4 mb-3">
          <div class="card">
            <img src="${product.img}" class="card-img-top">
            <div class="card-body text-center">
              <h5>${product.name}</h5>
              <p>${product.price}</p>
            </div>
          </div>
        </div>
      `);
    }
  });
}

displayProducts("all");

$(".filter").click(function () {
  const type = $(this).data("type");
  displayProducts(type);
});