// Modales
function getAllElementsWithAttribute(attribute)
{
  // Arreglo con los elementos que buscamos
  var matchingElements = [];
  // Se obtienen todos los elemtos del document
  var allElements = document.getElementsByTagName('*');
  for (var i = 0, n = allElements.length; i < n; i++)
  {
    if (allElements[i].getAttribute(attribute) !== null)
    {
      // Elementos existentes con el atributo se agregan al arreglo
      matchingElements.push(allElements[i]);
    }
  }
  return matchingElements;
}

var btnModal = getAllElementsWithAttribute('data-target');

for(var x=0; x < btnModal.length; x++) {
  btnModal[x].addEventListener('click', modalToggle);
}

function modalToggle() {
  var id = this.getAttribute('data-target');
  var modal = document.getElementById(id);
  modal.classList.toggle('hide');
}