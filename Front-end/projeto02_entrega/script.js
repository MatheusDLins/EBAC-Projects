
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    const newRow = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.textContent = name;
    newRow.appendChild(nameCell);

    const phoneCell = document.createElement('td');
    phoneCell.textContent = phone;
    newRow.appendChild(phoneCell);

    document.getElementById('contactList').appendChild(newRow);

    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
});
