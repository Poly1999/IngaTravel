const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  slidesPerView: 3,
  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',

    dynamicBullets: true,
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Tur

document.querySelectorAll('.form-number').forEach(block => {
  const minusBtn = block.querySelector('.minus');
  const plusBtn = block.querySelector('.plus');
  const input = block.querySelector('.input-tur');

  minusBtn.addEventListener('click', () => {
    let value = parseInt(input.value);
    if (value > parseInt(input.min)) input.value = value - 1;
  });

  plusBtn.addEventListener('click', () => {
    let value = parseInt(input.value);
    input.value = value + 1;
  });
});

//Form

const form = document.getElementById('contactForm');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await fetch('https://formspree.io/f/mwprokyn', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      alert('Спасибо!Ваша заявка отправлена.');
      form.reset();
    } else {
      const data = await response.json();
      alert(data.error || 'Произошла ошибка при отправке формы.');
    }
  } catch (error) {
    alert('Произошла ошибка. Попробуйте позже.');
    console.error(error);
  }
});
