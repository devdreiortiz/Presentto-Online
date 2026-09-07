document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.site-header nav .active')?.setAttribute('aria-current', 'page');

  const animated = document.querySelectorAll(
    '.section, .proof, .final-cta, .work-card, .demo-card, .service-card, .faq-card, .process-card, .reference-grid article'
  );

  animated.forEach((element, index) => {
    element.classList.add('reveal');
    element.style.transitionDelay = `${Math.min(index * 45, 300)}ms`;
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    animated.forEach((element) => observer.observe(element));
  } else {
    animated.forEach((element) => element.classList.add('visible'));
  }

  document.querySelectorAll('img').forEach((image) => {
    image.addEventListener('error', () => {
      image.classList.add('image-fallback');
      image.alt = `${image.alt || 'Imagen'} no disponible`;
    });
  });

  const filters = document.querySelectorAll('[data-filter]');
  const demos = document.querySelectorAll('[data-demo]');
  const filterGroup = document.querySelector('.demo-filters');
  if (filters.length && demos.length && filterGroup) {
    const filterStatus = document.createElement('p');
    filterStatus.className = 'filter-status';
    filterStatus.setAttribute('aria-live', 'polite');
    filterGroup.appendChild(filterStatus);

    const updateFilter = (selected) => {
      let visibleCount = 0;
      demos.forEach((demo) => {
        const visible = selected === 'all' || demo.dataset.category === selected;
        demo.hidden = !visible;
        if (visible) visibleCount += 1;
      });
      filterStatus.textContent = `${visibleCount} ${visibleCount === 1 ? 'demo disponible' : 'demos disponibles'}`;
    };

    filters.forEach((filter) => {
      filter.setAttribute('aria-pressed', filter.classList.contains('is-active') ? 'true' : 'false');
      filter.addEventListener('click', () => {
        filters.forEach((button) => {
          const active = button === filter;
          button.classList.toggle('is-active', active);
          button.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        updateFilter(filter.dataset.filter);
      });
    });
    updateFilter(filterGroup.querySelector('.is-active')?.dataset.filter || 'all');
  }

  const faqCards = document.querySelectorAll('[data-faq]');
  if (faqCards.length) {
    const modal = document.createElement('div');
    modal.className = 'faq-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'faqModalTitle');
    modal.setAttribute('aria-describedby', 'faqModalAnswer');
    modal.hidden = true;
    modal.innerHTML = '<div class="faq-modal-backdrop" data-faq-close></div><div class="faq-modal-panel" role="document"><button class="faq-modal-close" type="button" aria-label="Cerrar respuesta" data-faq-close>×</button><span class="eyebrow">RESPUESTA RÁPIDA</span><h2 id="faqModalTitle"></h2><p id="faqModalAnswer"></p></div>';
    document.body.appendChild(modal);

    let lastTrigger = null;
    const closeModal = () => {
      modal.hidden = true;
      document.body.classList.remove('modal-open');
      if (lastTrigger) lastTrigger.focus();
    };

    faqCards.forEach((card) => {
      const trigger = card.querySelector('.faq-trigger');
      if (!trigger) return;
      trigger.addEventListener('click', () => {
        lastTrigger = trigger;
        modal.querySelector('#faqModalTitle').textContent = card.dataset.question || '';
        modal.querySelector('#faqModalAnswer').textContent = card.dataset.answer || '';
        modal.hidden = false;
        document.body.classList.add('modal-open');
        modal.querySelector('.faq-modal-close').focus();
      });
    });

    modal.querySelectorAll('[data-faq-close]').forEach((element) => {
      element.addEventListener('click', closeModal);
    });

    modal.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeModal();
        return;
      }
      if (event.key !== 'Tab') return;
      const focusable = [...modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
  }

  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const status = document.getElementById('formStatus');
      const button = form.querySelector('button[type="submit"]');
      if (!status || !button) return;

      button.disabled = true;
      status.className = '';
      status.textContent = 'Enviando…';

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });
        if (!response.ok) throw new Error('send');
        form.reset();
        status.className = 'form-status';
        status.textContent = 'En breve uno de nuestros asesores te va a contactar para solucionar tus dudas o entender más sobre Presentto.';
      } catch (error) {
        status.className = 'form-status form-error';
        status.textContent = 'No pudimos enviar tus datos. Revisa tu conexión e inténtalo de nuevo.';
      } finally {
        button.disabled = false;
      }
    });
  }

  const cookieKey = 'presentto-cookie-consent';
  let cookieConsent = null;
  try {
    cookieConsent = window.localStorage.getItem(cookieKey);
  } catch (error) {
    // Algunos navegadores bloquean el almacenamiento; la web sigue funcionando.
  }

  if (!cookieConsent) {
    const box = document.createElement('aside');
    box.className = 'cookie-box';
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-label', 'Preferencias de cookies');
    box.innerHTML = '<p>Usamos cookies técnicas para recordar tus preferencias y mejorar tu navegación. <a href="cookies.html">Conoce más</a>.</p><div class="cookie-actions"><button type="button" data-cookie="accept">Aceptar</button><button type="button" data-cookie="reject">Rechazar</button></div>';
    document.body.appendChild(box);

    box.querySelectorAll('[data-cookie]').forEach((button) => {
      button.addEventListener('click', () => {
        try {
          window.localStorage.setItem(cookieKey, button.dataset.cookie);
        } catch (error) {
          // La preferencia se mantiene durante la sesión si el almacenamiento falla.
        }
        box.remove();
      });
    });
  }
});
