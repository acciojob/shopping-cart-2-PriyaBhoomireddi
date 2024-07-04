//your code here
document.getElementById('add-button').addEventListener('click', function() {
    const itemName = document.getElementById('item-name-input').value;
    const itemPrice = document.getElementById('item-price-input').value;

    if (itemName.trim() !== "" && !isNaN(itemPrice) && itemPrice > 0) {
        const tableBody = document.getElementById('shopping-list');
        
        // Create new row
        const newRow = document.createElement('tr');
        
        // Create name cell
        const nameCell = document.createElement('td');
        nameCell.setAttribute('data-ns-test', 'item-name');
        nameCell.innerText = itemName;
        newRow.appendChild(nameCell);
        
        // Create price cell
        const priceCell = document.createElement('td');
        priceCell.setAttribute('data-ns-test', 'item-price');
        priceCell.innerText = itemPrice;
        newRow.appendChild(priceCell);
        
        // Insert new row before the total row
        tableBody.insertBefore(newRow, tableBody.lastElementChild);

        // Update grand total
        const grandTotalElement = document.querySelector('[data-ns-test="grandTotal"]');
        const currentTotal = parseFloat(grandTotalElement.innerText);
        grandTotalElement.innerText = (currentTotal + parseFloat(itemPrice)).toFixed(2);

        // Clear input fields
        document.getElementById('item-name-input').value = '';
        document.getElementById('item-price-input').value = '';
    } else {
        alert('Please enter valid item name and price.');
    }
});

