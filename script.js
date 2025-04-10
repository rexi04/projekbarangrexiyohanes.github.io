document.addEventListener("DOMContentLoaded", function() {
    const stockList = document.getElementById("stock-list");
    const addItemButton = document.getElementById("add-item");

    let inventory = [
        {id: 1, name: "Meja", quantity: 10},
        {id: 2, name: "Kursi", quantity: 20}
    ];

    function renderInventory() {
        stockList.innerHTML = "";
        inventory.forEach(item => {
            let row = `<tr>
                        <td>${item.id}</td>
                        <td>${item.name}</td>
                        <td>${item.quantity}</td>
                        <td><button onclick="removeItem(${item.id})">Hapus</button></td>
                        </tr>`;
                        stockList.innerHTML += row;
        })
    }

    window.removeItem = function(id) {
        inventory = inventory.filter(item => item.id !== id);
        renderInventory();
    }

    addItemButton.addEventListener("click", function(){
        let itemName = prompt("Masukkan Nama Barang:");
        let itemQuantity = parseInt(prompt("Masukkan Jumlah Barang:"), 10);
        if (itemName && itemQuantity) {
            let newItem = { id: inventory.length +1 , name: itemName, quantity: itemQuantity };
            inventory.push(newItem);
            renderInventory();
        }
    });
    renderInventory();
});