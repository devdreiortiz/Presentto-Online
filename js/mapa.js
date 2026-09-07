/* ============================================
   Mapa de Afiliados — Presentto
   Sabana Occidental (Funza, Mosquera, Madrid, Facatativá)
   ============================================ */

const negocios = [

  // ---- FUNZA (4) ----
  {
    id: 1,
    name: 'Droguería San José',
    category: 'Farmacia',
    address: 'Cra 15 # 8-20, Funza',
    desc: 'Farmacia de barrio con atención personalizada y precios justos. Despacho de medicamentos, productos de cuidado personal y servicio de domicilios gratuitos en Funza.',
    lat: 4.7180,
    lng: -74.2140
  },
  {
    id: 2,
    name: 'Lavandería Ola Limpia',
    category: 'Lavandería',
    address: 'Calle 10 # 12-34, Funza',
    desc: 'Lavandería profesional con servicio de recogida y entrega a domicilio. Lavado, planchado y cuidado de prendas delicadas. Servicio exprés en 24 horas.',
    lat: 4.7140,
    lng: -74.2120
  },
  {
    id: 3,
    name: 'Miscelánea Doña Rosa',
    category: 'Miscelánea',
    address: 'Cra 12 # 6-40, Funza',
    desc: 'Tu tienda de barrio de confianza. Útiles escolares, papelería, regalos, artículos de hogar y mucho más. Atención amable y precios al por menor y al por mayor.',
    lat: 4.7160,
    lng: -74.2090
  },
  {
    id: 4,
    name: 'Taller de Bicicletas El Pedal',
    category: 'Ciclismo',
    address: 'Av. Centenario # 9-50, Funza',
    desc: 'Taller especializado en reparación y mantenimiento de bicicletas de todo tipo. Venta de repuestos, accesorios y lubricantes. Arreglo express mientras esperas.',
    lat: 4.7200,
    lng: -74.2170
  },

  // ---- MOSQUERA (4) ----
  {
    id: 5,
    name: 'Veterinaria San Miguel',
    category: 'Veterinaria',
    address: 'Cra 8 # 12-30, Mosquera',
    desc: 'Centro veterinario con servicios de consulta general, vacunación, esterilización y peluquería canina. Atención con cariño y profesionalismo para tu mascota.',
    lat: 4.7120,
    lng: -74.2310
  },
  {
    id: 6,
    name: 'Gimnasio FitZone Mosquera',
    category: 'Gimnasio',
    address: 'Calle 15 # 10-20, Mosquera',
    desc: 'Gimnasio de barrio con máquinas de última generación, entrenadores certificados y planes flexibles. Clases de spinning, funcional y musculación.',
    lat: 4.7090,
    lng: -74.2290
  },
  {
    id: 7,
    name: 'Papelería El Saber',
    category: 'Papelería',
    address: 'Cra 10 # 14-10, Mosquera',
    desc: 'Papelería con gran variedad de útiles escolares, materiales de oficina, impresiones y fotocopias. Envíos a domicilio en Mosquera sin recargo.',
    lat: 4.7110,
    lng: -74.2260
  },
  {
    id: 8,
    name: 'Florería Los Girasoles',
    category: 'Florería',
    address: 'Calle 12 # 8-50, Mosquera',
    desc: 'Arreglos florales para toda ocasión: cumpleaños, aniversarios, funerales y eventos. Ramos personalizados con entrega el mismo día en Sabana Occidental.',
    lat: 4.7070,
    lng: -74.2340
  },

  // ---- MADRID (4) ----
  {
    id: 9,
    name: 'Café Madrid',
    category: 'Cafetería',
    address: 'Cra 5 # 10-30, Madrid',
    desc: 'Café de especialidad tostado artesanalmente. Ambiente acogedor con Wifi gratis, catas de café y repostería artesanal. El punto de encuentro de Madrid.',
    lat: 4.7310,
    lng: -74.2630
  },
  {
    id: 10,
    name: 'Óptica Visión Clara',
    category: 'Óptica',
    address: 'Calle 8 # 6-20, Madrid',
    desc: 'Óptica con amplia variedad de monturas de marca y económicas. Examen visual gratuito, lentes de contacto y promociones en lentes progressivos.',
    lat: 4.7280,
    lng: -74.2610
  },
  {
    id: 11,
    name: 'Tienda Deportiva Energy',
    category: 'Ropa deportiva',
    address: 'Cra 7 # 12-15, Madrid',
    desc: 'Tienda de artículos deportivos con ropa, calzado y accesorios para fútbol, running, gym y ciclismo. Las mejores marcas al mejor precio del municipio.',
    lat: 4.7340,
    lng: -74.2650
  },
  {
    id: 12,
    name: 'Electrodomésticos El Hogar',
    category: 'Electrónica',
    address: 'Av. 13 # 5-40, Madrid',
    desc: 'Venta de electrodomésticos y electrónica con garantía. Neveras, lavadoras, televisores, microondas y más. Financiación directa y envío sin costo en Madrid.',
    lat: 4.7300,
    lng: -74.2590
  },

  // ---- FACATATIVÁ (3) ----
  {
    id: 13,
    name: 'Librería El Conocimiento',
    category: 'Librería',
    address: 'Calle 6 # 4-20, Facatativá',
    desc: 'Librería con catálogo de libros, textos escolares y literatura general. Espacio de lectura, café literario y eventos culturales todos los fines de semana.',
    lat: 4.8130,
    lng: -74.3630
  },
  {
    id: 14,
    name: 'Boutique La Elegancia',
    category: 'Ropa y accesorios',
    address: 'Cra 3 # 8-15, Facatativá',
    desc: 'Boutique femenina con ropa de temporada, accesorios y calzado. Prendas exclusivas con tallas para toda mujer. Asesoría de imagen personalizada.',
    lat: 4.8100,
    lng: -74.3610
  },
  {
    id: 15,
    name: 'Sala de Belleza Unisex',
    category: 'Salón de belleza',
    address: 'Calle 10 # 5-30, Facatativá',
    desc: 'Salón de belleza con servicios de corte, peinado, coloración, manicure y pedicure. Productos profesionales y atención personalizada para toda la familia.',
    lat: 4.8150,
    lng: -74.3650
  }
];

// ---- Inicializar mapa ----
function initMapa() {
  const container = document.getElementById('mapa-presentto');
  if (!container) return;

  const map = L.map('mapa-presentto', {
    center: [4.73, -74.28],
    zoom: 12,
    scrollWheelZoom: true,
    zoomControl: true
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18
  }).addTo(map);

  // Marcadores personalizados
  negocios.forEach(n => {
    const marker = L.circleMarker([n.lat, n.lng], {
      radius: 12,
      fillColor: '#f57c00',
      color: '#fff',
      weight: 3,
      opacity: 1,
      fillOpacity: 0.9
    }).addTo(map);

    marker.bindPopup(`
      <strong>${n.name}</strong><br>
      <span style="color:#888;font-size:0.85rem;">${n.category}</span>
    `);

    marker.on('click', () => abrirModal(n));
  });

  // Ajustar mapa después de cargar
  setTimeout(() => map.invalidateSize(), 300);
}

// ---- Renderizar selector (dropdown) ----
function renderSelector() {
  const select = document.getElementById('selector-negocio');
  if (!select) return;

  // Limpiar
  select.innerHTML = '<option value="">— Selecciona un negocio —</option>';

  // Agrupar por municipio
  const municipios = {
    'Funza': negocios.filter(n => n.address.includes('Funza')),
    'Mosquera': negocios.filter(n => n.address.includes('Mosquera')),
    'Madrid': negocios.filter(n => n.address.includes('Madrid')),
    'Facatativá': negocios.filter(n => n.address.includes('Facatativá'))
  };

  Object.entries(municipios).forEach(([municipio, lista]) => {
    if (lista.length === 0) return;
    // Option agrupada visualmente con guión
    lista.forEach(n => {
      const opt = document.createElement('option');
      opt.value = n.id;
      opt.textContent = `${n.name} — ${municipio}`;
      select.appendChild(opt);
    });
  });

  select.addEventListener('change', (e) => {
    const id = parseInt(e.target.value, 10);
    if (!id) {
      ocultarCard();
      return;
    }
    const negocio = negocios.find(n => n.id === id);
    if (negocio) mostrarCard(negocio);
  });
}

// ---- Mostrar card con info + botones ----
function mostrarCard(n) {
  const card = document.getElementById('afiliado-card');
  if (!card) return;

  document.getElementById('card-categoria').textContent = n.category;
  document.getElementById('card-nombre').textContent = n.name;
  document.getElementById('card-direccion').textContent = n.address;
  document.getElementById('card-descripcion').textContent = n.desc;

  const webBtn = document.getElementById('card-web');
  const waBtn = document.getElementById('card-wa');

  if (webBtn) {
    webBtn.href = 'https://presentto.online';
    webBtn.style.display = 'inline-flex';
  }
  if (waBtn) {
    waBtn.href = 'https://wa.me/573236487336?text=Hola%2C%20vi%20el%20negocio%20de%20' + encodeURIComponent(n.name) + '%20en%20el%20mapa%20de%20Presentto';
    waBtn.style.display = 'inline-flex';
  }

  card.classList.add('afiliado-card--visible');

  // Scroll suave hasta la card
  card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function ocultarCard() {
  const card = document.getElementById('afiliado-card');
  if (card) card.classList.remove('afiliado-card--visible');
}

// ---- Modal ----
function abrirModal(n) {
  document.getElementById('modal-categoria').textContent = n.category;
  document.getElementById('modal-nombre').textContent = n.name;
  document.getElementById('modal-direccion').textContent = n.address;
  document.getElementById('modal-descripcion').textContent = n.desc;

  const modalWeb = document.getElementById('modal-web');
  const modalWa = document.getElementById('modal-wa');

  if (modalWeb) {
    modalWeb.href = 'https://presentto.online';
    modalWeb.style.display = 'inline-flex';
  }
  if (modalWa) {
    modalWa.href = 'https://wa.me/573236487336?text=Hola%2C%20vi%20el%20negocio%20de%20' + encodeURIComponent(n.name) + '%20en%20el%20mapa%20de%20Presentto';
    modalWa.style.display = 'inline-flex';
  }

  document.getElementById('modal-afiliado').classList.add('modal-overlay--visible');
  document.body.style.overflow = 'hidden';
}

function cerrarModal() {
  document.getElementById('modal-afiliado').classList.remove('modal-overlay--visible');
  document.body.style.overflow = '';
}

// ---- Eventos del modal ----
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('modal-afiliado');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay || e.target.closest('.modal__close')) {
        cerrarModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') cerrarModal();
    });
  }
});

// ---- Iniciar ----
document.addEventListener('DOMContentLoaded', () => {
  initMapa();
  renderSelector();
});
