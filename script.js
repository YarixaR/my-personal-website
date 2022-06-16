let addToCartButton = document.getElementById('addToCart');
let addToContainer = document.getElementById('addToContainer');
let inputField = document.getElementById('inputField');

addToCartButton.addEventListener('click', function(){
    const paragraph = document.createElement('p')
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    addToContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function() {
        paragraph.style.textDecoration = "line-through";
    })
    })
  
