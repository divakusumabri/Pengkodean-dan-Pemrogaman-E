document.addEventListener("DOMContentLoaded", function() {
    loadItems();

    document.getElementById("addItemForm").addEventListener("submit", function(e) {
        e.preventDefault();
        let name = document.getElementById("name").value;
        let category = document.getElementById("category").value;
        let quantity = document.getElementById("quantity").value;
        let price = document.getElementById("price").value;

        fetch("add_item.php", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `name=${name}&category=${category}&quantity=${quantity}&price=${price}`
        }).then(response => response.text())
          .then(() => loadItems());
    });
});

function loadItems() {
    fetch("get_items.php")
        .then(response => response.json())
        .then(data => {
            let table = document.getElementById("inventoryTable");
            table.innerHTML = "";
            data.forEach(item => {
                let row = `<tr>
                    <td>${item.name}</td>
                    <td>${item.category}</td>
                    <td>${item.quantity}</td>
                    <td>${item.price}</td>
                    <td><button onclick="deleteItem(${item.id})">Hapus</button></td>
                </tr>`;
                table.innerHTML += row;
            });
        });
}

function deleteItem(id) {
    fetch("delete_item.php?id=" + id)
        .then(response => response.text())
        .then(() => loadItems());
}
