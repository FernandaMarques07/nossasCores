let quantity = 1;
        const price = 60;

        function updatePrice() {
            const total = quantity * price;
            document.getElementById('total-price').textContent = total.toFixed(2).replace('.', ',');
        }

        function incrementQuantity() {
            quantity++;
            document.getElementById('quantity').textContent = quantity;
            updatePrice();
        }

        function decrementQuantity() {
            if (quantity > 1) {
                quantity--;
                document.getElementById('quantity').textContent = quantity;
                updatePrice();
            }
        }