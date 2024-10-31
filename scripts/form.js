document.addEventListener('DOMContentLoaded', () => {
    const productArray = [
        { id: 'fc-1888', name: 'floor rug' },
        { id: 'fc-2050', name: 'painted floor pot' },
        { id: 'fs-1987', name: 'wall decorative rug' },
        { id: 'ac-2000', name: 'Ceiling lights' },
        { id: 'jj-1969', name: 'glow in the dark stars' }
    ];

    const productNameSelect = document.getElementById('productName');
    if (productNameSelect) {
        productArray.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            productNameSelect.appendChild(option);
        });
    } else {
        console.error('Element with id "productName" not found.');
    }

    const lastModifiedSpan = document.getElementById('lastModified');
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    } else {
        console.error('Element with id "lastModified" not found.');
    }

    let reviewCount = localStorage.getItem('reviewCount');
    if (reviewCount === null) {
        reviewCount = '0';
    }
    let reviewCountNumber = parseInt(reviewCount);
    localStorage.setItem('reviewCount', (reviewCountNumber + 1).toString());
});