// Progress bar animation on load
  window.addEventListener('load', () => {
    // Build day pips
    const pipsContainer = document.getElementById('dayPips');
    for (let i = 0; i < 30; i++) {
      const pip = document.createElement('div');
      pip.className = 'day-pip';
      pipsContainer.appendChild(pip);
    }

    // Animate fill + pips
    setTimeout(() => {
      document.getElementById('heroFill').style.width = '100%';
      const pips = document.querySelectorAll('.day-pip');
      pips.forEach((pip, i) => {
        setTimeout(() => { pip.classList.add('active'); }, i * 65);
      });
    }, 400);
  });

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
