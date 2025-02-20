function uploadImages() {
    const input = document.getElementById('imageInput');
    const albumContainer = document.getElementById('albumContainer');

    // Verificamos si el usuario seleccionó alguna imagen
    if (input.files && input.files.length > 0) {
        for (let i = 0; i < input.files.length; i++) {
            const file = input.files[i];
            const reader = new FileReader();

            reader.onload = function(e) {
                // Creamos un elemento img para cada imagen subida
                const img = document.createElement('img');
                img.src = e.target.result; // Establecemos la imagen
                albumContainer.appendChild(img); // Añadimos la imagen al contenedor
            }

            // Leemos la imagen seleccionada como URL
            reader.readAsDataURL(file);
        }
    } else {
        alert('Por favor, selecciona al menos una imagen.');
    }
}
