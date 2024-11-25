document.addEventListener("DOMContentLoaded", function () {
  const departmentSelect = document.getElementById("departmentSelect");
  const citySelect = document.getElementById("citySelect");

  // Datos de ciudades por departamento
  const cities = {
    norteDeSantander: [
      "Abrego",
      "Arboledas",
      "Bochalema",
      "Bucarasica",
      "Cachirí",
      "Cácota",
      "Chinácota",
      "Chitagá",
      "Convención",
      "Cúcuta",
      "Durania",
      "El Carmen de Chucurí",
      "El Playón",
      "El Tarra",
      "El Zulia",
      "Gramalote",
      "Hacarí",
      "Herrán",
      "La Esperanza",
      "La Playa",
      "Labateca",
      "Los Patios",
      "Lourdes",
      "Mutiscua",
      "Ocaña",
      "Pamplona",
      "Pamplonita",
      "Puerto Santander",
      "Ragonvalia",
      "Salazar de las Palmas",
      "San Calixto",
      "San Cayetano",
      "Santiago",
      "Sardinata",
      "Silos",
      "Teorama",
      "Tibú",
      "Toledo",
      "Villa Caro",
      "Villa del Rosario",
    ],
    cundinamarca: [
      "Agua de Dios",
      "Albán",
      "Anapoima",
      "Anolaima",
      "Arbeláez",
      "Beltrán",
      "Bituima",
      "Bojacá",
      "Cabrera",
      "Cachipay",
      "Cajicá",
      "Caparrapí",
      "Cáqueza",
      "Carmen de Carupa",
      "Chaguaní",
      "Chía",
      "Chipaque",
      "Choachí",
      "Chocontá",
      "Cogua",
      "Cota",
      "Cucunubá",
      "El Colegio",
      "El Peñón",
      "El Rosal",
      "Facatativá",
      "Fómeque",
      "Fosca",
      "Funza",
      "Fusagasuga",
      "Gachalá",
      "Gachancipá",
      "Gachetá",
      "Gama",
      "Girardot",
      "Granada",
      "Guachetá",
      "Guaduas",
      "Guasca",
      "Guataquí",
      "Guatavita",
      "Guayabal de Síquima",
      "Guayabetal",
      "Gutiérrez",
      "Jerusalén",
      "Junín",
      "La Calera",
      "La Mesa",
      "La Palma",
      "La Peña",
      "La Vega",
      "Machetá",
      "Madrid",
      "Manta",
      "Medina",
      "Mosquera",
      "Nariño",
      "Nemocón",
      "Nilo",
      "Nimaima",
      "Nocaima",
      "Pacho",
      "Paime",
      "Pandi",
      "Paratebueno",
      "Pasca",
      "Puerto Salgar",
      "Pulí",
      "Quebradanegra",
      "Quetame",
      "Quipile",
      "Ricaurte",
      "San Antonio del Tequendama",
      "San Bernardo",
      "San Cayetano",
      "San Francisco",
      "San Juan de Río Seco",
      "Sasaima",
      "Sesquilé",
      "Sibaté",
      "Silvania",
      "Simijaca",
      "Soacha",
      "Sopó",
      "Subachoque",
      "Suesca",
      "Supatá",
      "Susa",
      "Sutatausa",
      "Tabio",
      "Tausa",
      "Tena",
      "Tenjo",
      "Tibacuy",
      "Tibirita",
      "Tocaima",
      "Tocancipá",
      "Topaipí",
      "Ubalá",
      "Ubaque",
      "Ubaté",
      "Une",
      "Útica",
      "Venecia",
      "Vergara",
      "Viani",
      "Villagómez",
      "Villapinzón",
      "Villeta",
      "Viotá",
      "Yacopí",
      "Zipacón",
      "Zipaquirá",
    ],
    antioquia: [
      "Medellin",
      "Bello",
      "Itagüí",
      "Envigado",
      "Sabaneta",
      "La Estrella",
      "Copacabana",
      "Girardota",
      "Barbosa",
      "Caldas",
      "Amagá",
      "Santa Bárbara",
      "Fredonia",
      "Venecia",
      "Titiribí",
      "Andes",
      "Jardín",
      "Jericó",
      "Urrao",
      "Abejorral",
      "Santa Fe de Antioquia",
      "San Jerónimo",
      "Sopetrán",
      "Ebéjico",
      "Heliconia",
      "Liborina",
      "Olaya",
      "Cañasgordas",
      "Dabeiba",
      "Frontino",
      "Uramita",
      "Peque",
      "Caucasia",
      "Zaragoza",
      "El Bagre",
      "Nechí",
      "Tarazá",
      "Valdivia",
      "Ituango",
      "Toledo",
      "San Andrés de Cuerquia",
      "Briceño",
      "Yarumal",
      "Angostura",
      "Campamento",
      "Carolina del Príncipe",
      "Gómez Plata",
      "Santa Rosa de Osos",
    ],
    atlantico: [
      "Barranquilla",
      "Baranoa",
      "Campo de la Cruz",
      "Candelaria",
      "Galapa",
      "Juan de Acosta",
      "Luruaco",
      "Malambo",
      "Manatí",
      "Palmar de Varela",
      "Piojó",
      "Polonuevo",
      "Ponedera",
      "Puerto Colombia",
      "Repelón",
      "Sabanalarga",
      "Sabanagrande",
      "Santa Lucía",
      "Santo Tomás",
      "Soledad",
      "Suan",
      "Tubará",
      "Usiacurí",
    ],
    boyaca: [
      "Arcabuco",
      "Boyacá",
      "Chivatá",
      "Cómbita",
      "Cucaita",
      "Cuítiva",
      "Gámeza",
      "Guachetá",
      "Guateque",
      "Guayatá",
      "Labranzagrande",
      "Moniquirá",
      "Motavita",
      "Oicatá",
      "Paipa",
      "Pasea",
      "Paulino",
      "Pesca",
      "Sogamoso",
      "Sora",
      "Sotaquirá",
      "Susacón",
      "Tenza",
      "Tibasosa",
      "Tinjacá",
      "Tunja",
      "Tuta",
      "Ventaquemada",
      "Chitaraque",
      "Gachantivá",
      "La Capilla",
      "Somondoco",
      "Sora",
      "Soracá",
      "Toca",
      "Chiquinquirá",
      "Coper",
      "Otanche",
      "Pauna",
      "Saboyá",
      "Sutamarchán",
      "Chita",
      "El Cocuy",
      "El Espino",
      "Güicán",
      "Panqueba",
      "Páramo",
      "Ciénega",
      "Jenesano",
      "Nuevo Colón",
      "Ramiriquí",
      "Rondón",
      "Tibaná",
      "Samacá",
      "Santa Sofía",
      "Santana",
      "Boavita",
      "Chíquiza",
      "Chivor",
      "Cocuy",
      "Covarrubias",
      "La Uvita",
      "Mongua",
      "Nobsa",
      "Puerto Boyacá",
      "Quipama",
      "Soatá",
      "Socha",
      "Sugamuxi",
      "Aquitania",
      "Firavitoba",
      "Duitama",
      "Betéitiva",
      "Maripí",
      "Caparrapí",
      "Santander de Quilichao",
      "Pácora",
      "Palestina",
      "La Palma",
    ],
    amazonas: ["Leticia"],
    arauca: [
      "arauca",
      "arauquita",
      "cravo norte",
      "fortul",
      "puerto Rondon",
      "Saravena",
      "Tame",
    ],
    caldas: [
      "Manizales",
      "Chinchiná",
      "La Dorada",
      "Riosucio",
      "Villamaría",
      "Aguadas",
      "Salamina",
      "Anserma",
      "Neira",
      "Pensilvania",
      "Supía",
      "Viterbo",
      "Filadelfia",
      "Pácora",
      "Palestina",
      "Marulanda",
    ],
    caqueta: [
      "Florencia",
      "San Vicente del Caguán",
      "Puerto Rico",
      "El Doncello",
      "Cartagena del Chairá",
      "Solano",
      "Curillo",
      "Valparaíso",
      "Morelia",
      "Belén de los Andaquíes",
      "La Montañita",
      "Milán",
      "Albania",
    ],
    casanare: [
      "Yopal",
      "Aguazul",
      "Villanueva",
      "Maní",
      "Paz de Ariporo",
      "Monterrey",
      "Tauramena",
      "Orocué",
      "Hato Corozal",
      "Sabanalarga",
      "Tame",
      "La Salina",
      "Nunchía",
      "Recetor",
      "Chámeza",
      "Pore",
      "Trinidad",
      "Sácama",
      "San Luis de Palenque",
    ],
    cauca: [
      "Popayán",
      "Santander de Quilichao",
      "Puerto Tejada",
      "El Tambo",
      "Piendamó",
      "Corinto",
      "Caldono",
      "Suárez",
      "Guapí",
      "Miranda",
      "Toribío",
      "Totoró",
      "Puracé",
      "Inzá",
      "Cajibío",
      "Buenos Aires",
      "La Vega",
      "Mercaderes",
      "San Sebastián",
      "Páez",
      "Jambaló",
    ],
    cesar: [
      "Valledupar",
      "Aguachica",
      "Bosconia",
      "Codazzi",
      "Curumaní",
      "El Copey",
      "Chimichagua",
      "Pelaya",
      "San Alberto",
      "San Diego",
      "Chiriguaná",
      "Astrea",
      "Manaure",
      "Río de Oro",
      "Becerril",
      "La Jagua de Ibirico",
      "Gamarra",
      "Pailitas",
      "La Paz",
      "Tamalameque",
      "El Paso",
      "Pueblo Bello",
    ],

    magdalena: [
      "Algarrobo",
      "Aracataca",
      "Ariguaní",
      "Cerro de San Antonio",
      "Chibolo",
      "Ciénaga",
      "Concordia",
      "El Banco",
      "El Piñón",
      "El Retén",
      "Fundación",
      "Guamal",
      "Nueva Granada",
      "Pedraza",
      "Pijiño del Carmen",
      "Pivijay",
      "Plato",
      "Puebloviejo",
      "Remolino",
      "Sabanas de San Ángel",
      "Salamina",
      "San Sebastián de Buenavista",
      "Santa Ana",
      "Santa Bárbara de Pinto",
      "Santa Marta",
      "San Zenón",
      "Sitionuevo",
      "Tenerife",
      "Zapayán",
      "Zona Bananera",
    ],
    bolivar: [
      "Achí",
      "Altos del Rosario",
      "Arenal",
      "Arjona",
      "Arroyohondo",
      "Barranco de Loba",
      "Calamar",
      "Cantagallo",
      "Cartagena",
      "Cicuco",
      "Clemencia",
      "Córdoba",
      "El Carmen de Bolívar",
      "El Guamo",
      "El Peñón",
      "Hatillo de Loba",
      "Magangué",
      "Mahates",
      "María La Baja",
      "Margarita",
      "Mompós",
      "Montecristo",
      "Morales",
      "Norosí",
      "Pinillos",
      "Regidor",
      "Río Viejo",
      "San Cristóbal",
      "San Estanislao",
      "San Fernando",
      "San Jacinto",
      "San Jacinto del Cauca",
      "San Juan Nepomuceno",
      "San Martín de Loba",
      "San Pablo",
      "Santa Catalina",
      "Santa Rosa",
      "Santa Rosa del Sur",
      "Simití",
      "Soplaviento",
      "Talaigua Nuevo",
      "Tiquisio",
      "Turbaco",
      "Turbaná",
      "Villanueva",
      "Zambrano",
    ],
    santander: [
      "Aguada",
      "Albania",
      "Aratoca",
      "Barbosa",
      "Barichara",
      "Barrancabermeja",
      "Betulia",
      "Bolívar",
      "Bucaramanga",
      "Cabrera",
      "California",
      "Capitanejo",
      "Carcasí",
      "Cepitá",
      "Cerrito",
      "Charalá",
      "Charta",
      "Chima",
      "Chipatá",
      "Cimitarra",
      "Concepción",
      "Confines",
      "Coromoro",
      "Curití",
      "El Carmen de Chucurí",
      "El Guacamayo",
      "El Peñón",
      "El Playón",
      "Encino",
      "Floridablanca",
      "Galán",
      "Gámbita",
      "Girón",
      "Guaca",
      "Guapotá",
      "Guavatá",
      "Güepsa",
      "Hato",
      "Jesús María",
      "Jordán",
      "La Belleza",
      "Landázuri",
      "Lebrija",
      "Los Santos",
      "Macaravita",
      "Málaga",
      "Matanza",
      "Mogotes",
      "Molagavita",
      "Ocamonte",
      "Oiba",
      "Onzaga",
      "Palmar",
      "Palmas del Socorro",
      "Palmira",
      "Paramo",
      "Piedecuesta",
      "Pinchote",
      "Puente Nacional",
      "Puerto Parra",
      "Puerto Wilches",
      "Rionegro",
      "Sabana de Torres",
      "San Andrés",
      "San Benito",
      "San Gil",
      "San Joaquín",
      "San José de Miranda",
      "San Miguel",
      "Santa Bárbara",
      "Santa Helena del Opón",
      "Santander de Quilichao",
      "Sapuyes",
      "Socorro",
      "Suaita",
      "Sucre",
      "Suratá",
      "Tona",
      "Valle de San José",
      "Vélez",
      "Vetas",
      "Villanueva",
      "Zapatoca",
    ],
  };

  // Función para actualizar las ciudades en función del departamento seleccionado
  departmentSelect.addEventListener("change", function () {
    const selectedDepartment = departmentSelect.value;
    const citiesList = cities[selectedDepartment] || [];
    citySelect.innerHTML = '<option value="">Selecciona una ciudad</option>'; // Resetea las opciones de ciudad

    citiesList.forEach(function (city) {
      const option = document.createElement("option");
      option.value = city.toLowerCase().replace(/ /g, "-"); // Reemplaza espacios con guiones
      option.textContent = city;
      citySelect.appendChild(option);
    });
  });

  // Funcionalidad para el boton de busqueda
  document
    .getElementById("searchButton")
    .addEventListener("click", function () {
      const department = departmentSelect.value;
      const city = citySelect.value;
      const profession = document.getElementById("professionSelect").value;

      // lógica para manejar la búsqueda
      console.log(
        `Busqueda: Departamento=${department}, Ciudad=${city}, Profesión=${profession}`
      );
    });

  // Funcionalidad para el modal de inicio de sesión
  const loginModal = document.getElementById("loginModal");
  const loginButton = document.getElementById("loginButton");
  document
    .querySelector("#loginModal form")
    .addEventListener("submit", (event) => {
      event.preventDefault(); // Evitar comportamiento por defecto
      alert("¡Se ha iniciado sesión exitosamente!");
      loginModal.style.display = "none"; // Cerrar el modal
    });

  const closeLoginModal = document.getElementById("closeLoginModal");

  loginButton.onclick = function () {
    loginModal.style.display = "block";
  };

  closeLoginModal.onclick = function () {
    loginModal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === loginModal) {
      loginModal.style.display = "none";
    }
  };

  // Funcionalidad para el modal de registro
  const registerModal = document.getElementById("registerModal");
  const registerButton = document.getElementById("registerButton");
  //Evento de Registro exitoso
  document
    .querySelector("#registerModal form")
    .addEventListener("submit", (event) => {
      event.preventDefault(); // Evitar comportamiento por defecto
      alert("¡Se ha registrado exitosamente!");
      registerModal.style.display = "none"; // Cerrar el modal
    });

  const closeRegisterModal = document.getElementById("closeRegisterModal");

  registerButton.onclick = function () {
    registerModal.style.display = "block";
  };

  closeRegisterModal.onclick = function () {
    registerModal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === registerModal) {
      registerModal.style.display = "none";
    }
  };
  // Funcionalidad para el modal de información
  const infoModal = document.getElementById("infoModal");
  const infoButton = document.getElementById("infoButton");
  const closeInfoModal = document.getElementById("closeInfoModal");

  infoButton.onclick = function () {
    infoModal.style.display = "block";
  };

  closeInfoModal.onclick = function () {
    infoModal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === infoModal) {
      infoModal.style.display = "none";
    }
  };
  // Mostrar/Ocultar el menú de filtros
  const filtersButton = document.getElementById("filtersButton");
  const filtersMenu = document.getElementById("filtersMenu");

  filtersButton.addEventListener("click", () => {
    // Cambia entre mostrar y ocultar el menú de filtros
    if (
      filtersMenu.style.display === "none" ||
      filtersMenu.style.display === ""
    ) {
      filtersMenu.style.display = "block";
    } else {
      filtersMenu.style.display = "none";
    }
  });
  // Obtener el botón de alertas
  const alertsButton = document.getElementById("alertsButton");

  // Mostrar una alerta al hacer clic en el botón
  alertsButton.addEventListener("click", () => {
    alert(
      "¡Suscrito a las alertas de nuevas ofertas! Recibirás notificaciones sobre las últimas oportunidades."
    );
  });
  // Obtener el botón y el menú de "Más Contenido"
  const moreContentButton = document.getElementById("moreContentButton");
  const moreContentMenu = document.getElementById("moreContentMenu");

  moreContentMenu.addEventListener("click", (event) => {
    event.preventDefault(); // Evitar comportamiento por defecto
    const contentId = event.target.id;
    const professionalsDiv = document.getElementById("professionals"); // Asegúrate de tener este contenedor.

    if (moreContentData[contentId]) {
      professionalsDiv.innerHTML = moreContentData[contentId];
    } else {
      console.warn("No se encontró contenido para el ID:", contentId);
    }
  });

  // Contenido para cada opción
  const moreContentData = {
    guides:
      "<h2>Guías y Consejos</h2><h3> Aprende a Como Hacerlo </h3><p>Descubre cómo aprovechar al máximo CiudadPRO con nuestros prácticos consejos y guías detalladas. Aprende a buscar profesionales, filtrar resultados según tus necesidades y sacar partido a las funcionalidades avanzadas como las calificaciones, agenda de citas y pagos en línea.</p> <p> CiudadPRO es la plataforma perfecta para encontrar profesionales calificados en diversas áreas. Sigue estos sencillos pasos para aprovechar al máximo todas sus funcionalidades:Para empezar, crea tu cuenta en CiudadPRO. Dirígete al botón de (Registrarse) y proporciona tus datos básicos como nombre, correo electrónico y una contraseña segura. Al completar el registro, recibirás un correo de confirmación.Una vez registrado, puedes comenzar a buscar profesionales. Usa el buscador de la página principal, donde podrás filtrar por <em>profesión</em>, <em>ubicación</em> y <em>especialidades</em>. Esto te permitirá encontrar a los expertos más cercanos a tus necesidades.Cada profesional tiene un perfil detallado que incluye su experiencia, calificaciones, comentarios de clientes anteriores y tarifas. Es importante revisar estos detalles antes de tomar una decisión.Si encuentras el profesional adecuado, puedes agendar una cita directamente desde su perfil. Elige la fecha y la hora que mejor te convengan, y no olvides activar las notificaciones para recordar tu cita.CiudadPRO permite realizar pagos de forma segura a través de varios métodos, como tarjeta de crédito, débito y billeteras digitales. El pago se efectúa una vez confirmada la cita.En el día de tu cita, el profesional estará listo para ofrecerte el servicio acordado. Si tienes alguna duda o necesitas ayuda adicional, puedes comunicarte a través de los canales de contacto disponibles en la plataforma.Con estos sencillos pasos, podrás utilizar CiudadPRO para encontrar al profesional ideal y gestionar tus citas de manera eficiente. ¡Empieza a disfrutar de los servicios que necesitas hoy mismo!</p>",
    successStories:
      "<h2>Historias de Éxito</h2><h3> Importante Resaltar Nuestro Casos de Exitos en las Busquedas Laborales. </h3><p>Hace algunos años, Laura comenzó su carrera como freelance en el mundo del diseño gráfico. Al principio, los desafíos parecían abrumadores: conseguir clientes, gestionar su tiempo y establecer precios competitivos. Sin embargo, nunca perdió la fe en su habilidad para ofrecer diseños únicos y creativos. Con el tiempo, gracias a su dedicación y esfuerzo, comenzó a recibir recomendaciones, lo que le permitió construir una sólida red de clientes fieles. Hoy, Laura es reconocida en la industria como una de las diseñadoras más destacadas, habiendo trabajado con marcas globales y alcanzado sus objetivos más ambiciosos. Su historia es un recordatorio de que el éxito no llega de la noche a la mañana, sino a través de la perseverancia y la pasión por lo que uno hace.</p><p>    Javier comenzó su emprendimiento en el mundo de la tecnología con una idea simple: crear soluciones de software accesibles para pequeñas empresas. Al principio, enfrentó muchas dificultades, desde la falta de fondos hasta la competencia feroz. Sin embargo, su pasión por la tecnología y su enfoque en resolver problemas específicos lo mantuvieron motivado. Después de meses de trabajo arduo, lanzó su primer producto, un software de gestión empresarial intuitivo y económico. La respuesta fue positiva, y rápidamente obtuvo su primer cliente importante. Hoy, Javier dirige una exitosa empresa que ayuda a cientos de pequeñas empresas a optimizar sus operaciones, y su historia demuestra que la perseverancia, la innovación y la visión pueden transformar un sueño en una realidad próspera.</p><p>Conoce historias reales de personas y empresas que encontraron soluciones en CiudadPRO.</p>",
    corporateBlog:
      "<h2>Blog Corporativo</h2><p>Explora artículos y actualizaciones sobre tendencias y novedades de CiudadPRO.</p><p>    Bienvenidos al Blog de CiudadPRO, tu plataforma de confianza para encontrar profesionales altamente calificados en diversos campos. En este espacio, compartimos noticias, actualizaciones y consejos útiles para maximizar tu experiencia en nuestra plataforma.</p><p><strong>Innovación y Tecnología al Servicio de Todos</strong><br>    En CiudadPRO, estamos comprometidos con ofrecerte una solución moderna y eficiente para conectar con los mejores profesionales en diferentes áreas. Nuestra plataforma se actualiza constantemente con nuevas funciones, mejorando la usabilidad y la seguridad para ofrecer una experiencia excepcional.</p><p>    <strong>¿Por Qué Elegir CiudadPRO?</strong><br>    CiudadPRO no solo te ofrece una amplia variedad de servicios, sino también la confianza de trabajar con profesionales verificados y con calificaciones de otros usuarios. Ya sea que necesites un plomero, mecánico, técnico en sistemas, o un experto en belleza, nuestra plataforma te ayuda a encontrar lo que buscas de manera rápida y segura.</p><p>    <strong>Consejo del Mes:</strong><br>    Asegúrate de revisar las reseñas y calificaciones de los profesionales antes de reservar tus servicios. Esto te permitirá tomar decisiones informadas y encontrar a los mejores expertos en tu área. ¡Tu satisfacción es nuestra prioridad!</p><p>   <strong>Últimas Actualizaciones:    En los próximos meses, lanzaremos nuevas funcionalidades como pagos en línea más rápidos, un sistema de notificaciones mejorado y más opciones de filtros para facilitar la búsqueda de profesionales. ¡Mantente atento a nuestras novedades!</p><p>    Gracias por seguir nuestro blog. Estamos emocionados de acompañarte en tu experiencia de encontrar los mejores servicios profesionales a través de CiudadPRO.</p>",
    faq: "<h2>Preguntas Frecuentes</h2><p>Resuelve tus dudas con nuestra sección de preguntas frecuentes.</p><p>    <strong>Respuestas a las PQR:</strong><br><ul>        <li>Gracias por tu comentario. Estamos trabajando para mejorar nuestros servicios y tomaremos en cuenta tu sugerencia.</li><li>Te pedimos disculpas por los inconvenientes. Nuestro equipo de soporte está revisando tu queja y nos pondremos en contacto contigo lo antes posible.</li><li>Tu solicitud ha sido recibida. Estaremos procesando tu reclamo y te informaremos sobre el estado de tu caso en breve.</li><li>Gracias por tu pregunta. Un miembro de nuestro equipo te responderá dentro de las próximas 24 horas.</li><li>Hemos recibido tu PQR. Actualmente, estamos investigando el asunto y te proporcionaremos una actualización en cuanto tengamos más información.</li></ul></p>",
  };
  // Función para actualizar los resultados de búsqueda
  const updateResults = (content) => {
    professionalsDiv.innerHTML = content;
  };

  // Manejar clics en el menú de "Más Contenido"
  moreContentMenu.addEventListener("click", (event) => {
    event.preventDefault(); // Evitar comportamiento por defecto
    const contentId = event.target.id;
    if (moreContentData[contentId]) {
      updateResults(moreContentData[contentId]);
    } else {
      console.warn("No se encontró contenido para el ID:", contentId);
    }
  });

  // Alternar la visibilidad del menú al hacer clic en el botón
  moreContentButton.addEventListener("click", () => {
    moreContentMenu.style.display =
      moreContentMenu.style.display === "none" ||
      moreContentMenu.style.display === ""
        ? "block"
        : "none";
  });

  // Cerrar el menú si se hace clic fuera de él
  window.addEventListener("click", (event) => {
    if (
      !moreContentButton.contains(event.target) &&
      !moreContentMenu.contains(event.target)
    ) {
      moreContentMenu.style.display = "none";
    }
  });
  function searchProfessionals() {
    // Obtiene los valores seleccionados y normalízalos
    const department = document
      .getElementById("departmentSelect")
      .value.toLowerCase()
      .trim();
    const city = document
      .getElementById("citySelect")
      .value.toLowerCase()
      .trim();
    const profession = document
      .getElementById("professionSelect")
      .value.toLowerCase()
      .trim();

    // Contenedor para resultados
    const resultsContainer = document.getElementById("professionList");
    resultsContainer.innerHTML = ""; // Limpia resultados previos

    // Filtra los datos en función de la selección del usuario
    const results = professionalsData.filter(
      (prof) =>
        (!department || prof.department.toLowerCase() === department) &&
        (!city || prof.city.toLowerCase() === city) &&
        (!profession || prof.profession.toLowerCase() === profession)
    );

    // Verifica si hay resultados
    if (results.length > 0) {
      results.forEach((prof) => {
        // Crea un elemento <li> para cada resultado
        const profileItem = document.createElement("li");
        profileItem.innerHTML = `
          <h3>${prof.name}</h3>
          <p><strong>Departamento:</strong> ${prof.department}</p>
          <p><strong>Ciudad:</strong> ${prof.city}</p>
          <p><strong>Profesión:</strong> ${prof.profession}</p>
          <p><strong>Experiencia:</strong> ${prof.details.experience}</p>
          <p><strong>Calificación:</strong> ${prof.details.rating}</p>
          <p><strong>Descripción:</strong> ${prof.details.description}</p>
        `;
        resultsContainer.appendChild(profileItem);
      });
    } else {
      // Si no se encuentran resultados
      const noResultsMessage = document.createElement("li");
      noResultsMessage.textContent =
        "No existen profesionales que coincidan con tu búsqueda.";
      resultsContainer.appendChild(noResultsMessage);
    }
  }

  // Evento del botón de búsqueda
  document
    .getElementById("searchButton")
    .addEventListener("click", searchProfessionals);
  const professionalsData = [
    {
      name: "Ana Sofía Martínez",
      department: "Amazonas",
      city: "Leticia",
      profession: "Enfermeria",
      details: {
        experience: "5 años",
        contacto: "321-330-2214",
        rating: "⭐⭐⭐⭐⭐ (4.8/5)",
        description:
          "Enfermera profesional con experiencia en cuidados intensivos y emergencias.",
      },
    },
    {
      name: "Carlos Pérez",
      department: "Antioquia",
      city: "Medellin",
      profession: "Desarrollo Web",
      details: {
        experience: "3 años",
        contacto: "311-567-8912",
        rating: "⭐⭐⭐⭐ (4.5/5)",
        description:
          "Desarrollador web especializado en e-commerce y aplicaciones dinámicas.",
      },
    },
    {
      name: "Lucía Gómez",
      department: "Cundinamarca",
      city: "Anapoima",
      profession: "Diseno Grafico",
      details: {
        experience: "7 años",
        contacto: "315-678-1234",
        rating: "⭐⭐⭐⭐⭐ (4.9/5)",
        description:
          "Diseñadora gráfica con experiencia en branding y diseño publicitario.",
      },
    },
    {
      name: "Luis Alfonso perez Gómez",
      department: "Arauca",
      city: "arauca",
      profession: "auxiliarEnfermeria",
      details: {
        experience: "7 años",
        contacto: "315-678-1234",
        rating: "⭐⭐⭐⭐⭐ (4.9/5)",
        description:
          "Diseñadora gráfica con experiencia en branding y diseño publicitario.",
      },
    },
  ];
  document.getElementById("resetButton").addEventListener("click", () => {
    // Limpia los resultados de búsqueda
    const resultsContainer = document.getElementById("professionList");
    resultsContainer.innerHTML = "";

    // Reinicia los menús desplegables al valor inicial
    document.getElementById("departmentSelect").value = "";
    document.getElementById("citySelect").innerHTML =
      '<option value="">Selecciona una ciudad</option>';
    document.getElementById("professionSelect").value = "";
  });
});
