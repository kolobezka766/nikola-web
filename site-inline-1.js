

    // Modal open/close
    function openModal(id) {
      const overlay = document.getElementById(id);
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      // Trap focus on close button
      const btn = overlay.querySelector('.modal__close');
      if (btn) setTimeout(() => btn.focus(), 50);
    }

    function closeModal(id) {
      const overlay = document.getElementById(id);
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    function closeModalOnBg(event, id) {
      if (event.target.id === id) closeModal(id);
    }

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal-overlay.open').forEach(m => {
          m.classList.remove('open');
          document.body.style.overflow = '';
        });
      }
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  