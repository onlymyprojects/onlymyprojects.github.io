document.addEventListener('DOMContentLoaded', function () {
var checkbox = document.querySelector('input[type="checkbox"]');
var fb = document.getElementById('fb');
var vk = document.getElementById('vk');
var fbComments = document.getElementById('fb_comments');
var vkComments = document.getElementById('vk_comments');

checkbox.addEventListener('change', function () {
if (checkbox.checked) {
vk.style.opacity = '1';
fb.style.opacity = '0.5';
vk.style.transition = '0.5s';
fb.style.transition = '0.5s';
vkComments.style.display = 'initial';
fbComments.style.display = 'none';
 console.log('Checked');
} else {
vk.style.opacity = '0.5';
fb.style.opacity = '1';
vkComments.style.display = 'none';
fbComments.style.display = 'initial';
console.log('Not checked');
}
});
});