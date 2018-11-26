document.addEventListener('DOMContentLoaded', function () {
var checkbox = document.querySelector('input[type="checkbox"]');

checkbox.addEventListener('change', function () {
if (checkbox.checked) {
document.getElementById('tw').style.opacity = '1';
document.getElementById('fb').style.opacity = '0.5';
document.getElementById('tw').style.transition = '0.5s';
document.getElementById('fb').style.transition = '0.5s';
 console.log('Checked');
} else {
document.getElementById('tw').style.opacity = '0.5';
document.getElementById('fb').style.opacity = '1';
console.log('Not checked');
}
});
});