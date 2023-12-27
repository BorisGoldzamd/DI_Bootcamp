let radiusInput = document.querySelector('#radius');
let volumeInput = document.querySelector('#volume');

function calcVolumeFromRadius(r) {
    return (4 / 3) * Math.PI * Math.pow(r, 3);
}

document.getElementById('MyForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let radiusValue = parseFloat(radiusInput.value);

    if (!isNaN(radiusValue)) {
        let calculatedVolume = calcVolumeFromRadius(radiusValue);
        volumeInput.value = calculatedVolume.toFixed(2);
    } else {
        alert("Please, insert a valid value for radius");
    }
});