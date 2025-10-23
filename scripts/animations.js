/*button.addEventListener('click', function (e) {
  e.preventDefault(); // stoppar att länken navigerar direkt

  const ripple = document.createElement('span');
  ripple.classList.add('ripple');

  const rect = button.getBoundingClientRect();
  ripple.style.left = (e.clientX - rect.left) + 'px';
  ripple.style.top = (e.clientY - rect.top) + 'px';

  button.appendChild(ripple);

  ripple.addEventListener('animationend', () => {
    ripple.remove();
    window.location.href = button.href; // navigerar till sidan efter animationen
  });
});
*/
