// Obtener todos los elementos con un atributo a especificar
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

//-------------------- Modales --------------------------------------
var btnModal = getAllElementsWithAttribute('data-target');

// Asignar evento a todos los elementos de abrir o cerrar modals 
for(var x=0; x < btnModal.length; x++) {
  btnModal[x].addEventListener('click', modalToggle);
}

// Ocultar o mostrar modals
function modalToggle() {
  var id = this.getAttribute('data-target');
  var modal = document.getElementById(id);
  modal.classList.toggle('hide');
}

// Cerrar modals al clickear fuera
document.addEventListener("click", e => {
  modal = document.getElementsByClassName('modal');
  for(i=0; i < modal.length; i++){
    if (e.target == modal[i]) {
      modal[i].classList.toggle('hide');
    }
  }
});