document.addEventListener('DOMContentLoaded', function () {
  const slider = document.getElementById('custom-slider');
  const sliderLabel = document.getElementById('slider-label');
  const gifs = document.querySelectorAll('.gif');

  slider.addEventListener('input', function () {
    const value = this.value;
    sliderLabel.textContent = value + '%';

    // Hide all gifs
    gifs.forEach(gif => {
      gif.style.display = 'none';
    });

    // Show the gif corresponding to the slider value
    const gifToShow = document.getElementById(`gif-${value}`);
    if (gifToShow) {
      gifToShow.style.display = 'block';
    }
  });
});
