// JavaScript for Item Lister

// Function to add a new item with description
function addItem() {
    var itemName = document.getElementById('addItemInput').value;
    var itemDescription = document.getElementById('addDescriptionInput').value;
  
    if (itemName.trim() !== '') {
      // Create new list item
      var newItem = document.createElement('li');
      newItem.className = 'list-group-item';
      newItem.innerHTML = `${itemName} <button class='btn btn-danger btn-sm float-right delete'>X</button>`;
      newItem.dataset.name = itemName;
      newItem.dataset.description = itemDescription;
  
      // Add the new item to the list
      document.getElementById('items').appendChild(newItem);
  
      // Clear input fields
      document.getElementById('addItemInput').value = '';
      document.getElementById('addDescriptionInput').value = '';
    }
  }
  
  // Function to handle dynamic search
  function searchItems() {
    var searchString = document.getElementById('searchInput').value.toLowerCase();
    var items = document.querySelectorAll('#items li');
  
    items.forEach(function (item) {
      var itemName = item.dataset.name.toLowerCase();
      var itemDescription = item.dataset.description.toLowerCase();
  
      if (itemName.includes(searchString) || itemDescription.includes(searchString)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }
  
  // Event delegation for delete buttons
  document.getElementById('items').addEventListener('click', function (event) {
    if (event.target.classList.contains('delete')) {
      var listItem = event.target.parentElement;
      listItem.remove();
    }
  });
  