document.addEventListener('DOMContentLoaded', function() {
    const svgSelect = document.getElementById('svg-select');
    const svgIframe = document.getElementById('svg-iframe');

    // Cargar el archivo JSON
    fetch('markmaps/list.json')
        .then(response => response.json())
        .then(data => {
            // Generar las opciones del dropdown
            data.svgs.forEach(svg => {
                const option = document.createElement('option');
                option.value = `${svg.file}`; // Ruta completa al archivo HTML
                option.textContent = svg.name; // Nombre que se muestra en el dropdown
                svgSelect.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });

    // Manejar el cambio de selección
    svgSelect.addEventListener('change', function() {
        const selectedHtml = this.value;

        if (selectedHtml) {
            svgIframe.src = selectedHtml; // Cargar el archivo HTML en el iframe
        } else {
            svgIframe.src = ''; // Limpiar el iframe si no hay selección
        }
    });
});