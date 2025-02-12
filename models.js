const carInfo = {
    ferrari: {
        name: 'Ferrari 488 GTB',
        price: '$262,647',
        performance: '3.9L V8 engine, 0-100 kmh per 3.0 sekonda'
    },
    lamborghini: {
        name: 'Lamborghini Aventador',
        price: '$393,695',
        performance: '6.5L V12 engine, 0-100 kmh per 2.9 sekonda'
    },
    porsche: {
        name: 'Porsche 911 Turbo',
        price: '$170,800',
        performance: '3.8L 6-cylinder engine, 0-100 kmh per 2.7 sekonda'
    },
    bugatti: {
        name: 'Bugatti Chiron',
        price: '$3,000,000',
        performance: '8.0L W16 engine, 0-100 kmh per 2.4 sekonda'
    },
    mclaren: {
        name: 'McLaren 720S',
        price: '$299,000',
        performance: '4.0L V8 engine, 0-100 kmh per 2.8 sekonda'
    }
};

function toggleDetails(car) {
    const detailsDiv = document.getElementById(car);
    if (detailsDiv.style.display === "none" || detailsDiv.style.display === "") {
        detailsDiv.style.display = "block";
        detailsDiv.innerHTML = `<h3>${carInfo[car].name}</h3>
                                <p><strong>Çmimi:</strong> ${carInfo[car].price}</p>
                                <p><strong>Performanca:</strong> ${carInfo[car].performance}</p>`;
    } else {
        detailsDiv.style.display = "none";
    }
}
