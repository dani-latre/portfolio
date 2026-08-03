const CV_DATA = {
    experiencia: [
        { role: "Auxiliar de montaje en espectáculos", place: "Penny Wise Iber. Zaragoza", dates: "2018-2022" },
        { role: "Prácticas profesionales en escenografía y construcción de decorados", place: "Architécnica Creativos. Zaragoza", dates: "2021" },
        { role: "Personal de sala en exposiciones", place: "Veta Galería. Madrid", dates: "2023" },
    ],
    formacion: [
        { role: "Grado en Bellas Artes", place: "Universidad de Castilla-La Mancha. Cuenca", dates: "2021-2025" },
        { role: "Beca Erasmus", place: "Escola Superior Artística do Porto", dates: "2023-2024" },
        { role: "SICUE", place: "Universidad del País Vasco. Bilbao", dates: "2024-2025" },
        { role: "Grado Superior en Escultura aplicada al Espectáculo", place: "Escuela de Arte de Zaragoza", dates: "2019-2021" },
        { role: "Bachillerato en Artes Plásticas", place: "Escuela de Arte de Zaragoza", dates: "2017-2019" },
    ],
    herramientas: [
        "Paquete Adobe", "Modelado 3D", "Vibe Coding", "Linux", "Carpintería básica",
        "Electricidad básica", "Video Mapping", "Fotografía", "Paquete Office", "HTML/CSS", "ComfyUI"
    ],
    idiomas: [
        { idioma: "Castellano", nivel: "nativo" },
        { idioma: "Inglés", nivel: "medio" },
        { idioma: "Portugués", nivel: "básico" },
        { idioma: "Catalán", nivel: "comprensión" },
    ],
    actividad: [
        { role: "Beca a la producción artística", place: "Can Felipa Barcelona", dates: "2025 - Actualidad" },
        { role: "Exposición colectiva", place: "Espacio Espiral / Pluto Valencia", dates: "2026" },
        { role: "Residente", place: "Residencias Artísticas Reinosa Cantabria", dates: "2023" },
    ]
};


// 1. DEFINE TUS TEXTOS AQUÍ UNA SOLA VEZ

const TEXTOS = {
    

    vacio: "",

    postt:"ilustraciones gráficas realizadas para el periodico The Posttraumatic, en el que se muestran diferentes ilustraciones gráficas y mockups de diseño. Estas ilustraciones reflejan la creatividad y el estilo visual del periódico, destacando elementos de diseño gráfico y composición visual. Cada imagen representa un aspecto único del contenido del periódico, desde ilustraciones conceptuales hasta representaciones visuales de artículos y noticias.",

    SOPA:"SOPA fue una editorial ficticia de posters que nunca se llegaron a imprimir",

    romance:"Aquello que haya podido necesitar @digital.romance.tt para promocionar su trabajo en los viajes que realizado para tatuar. Diseño gráfico, edicion de video y dirección estética.",

    breiner:"The Last Breiner fue una fiesta organizada por un grupo de dj's. Mi parte consistió en diseñar la parte visual. Tanto las publicaciones en redes como los visuales que acompañaron la sesión.",

    farola:"Y después... me casé con una farola. formó parte de la exposición making things, ESAP, Oporto, 2024. Trabajo editorial y preimpresión digital. Maquetación de textos y edición de fotografías. ",
    
    sassy:"Sassy Colective es un proyecto de diseño gráfico que celebra la diversidad y la creatividad a través de una serie de imágenes y videos. El proyecto busca transmitir un mensaje de empoderamiento y autoexpresión, utilizando técnicas de diseño gráfico para crear contenido visual que inspire y conecte con el público objetivo.",

    
}




// 1.b TÍTULOS CORTOS PARA LA ESQUINA INFERIOR IZQUIERDA
// Añade aquí una entrada por cada "ref" que uses en mediaItems
const TITULOS = {
    postt: "The Posttraumatic",
    beach: "Beach",
    romance: "Digital Romance",
    breiner: "The Last Breiner",
    farola: "Y después... me casé con una farola",
    sassy: "Sassy colective",
    vacio: "",
}
 

                
                
                const mediaItems = [
                  // Ejemplo con pie de foto
                  
                
                 
                   // {src: "grafico_diseño/periodico.avif", ref: "postt"},
                   // {src: "grafico_diseño/periodico_1.png", ref: "postt"},
                   // {src: "grafico_diseño/mockup cold hug.png", ref: "beach"},
                   {src: "grafico_diseño/111.png", ref: "farola", tools: "Indesign_Photoshop"},
                    {src: "grafico_diseño/222.png", ref: "farola", tools: "Indesign_Photoshop"},
                    {src: "grafico_diseño/333.png", ref: "farola", tools: "Indesign_Photoshop"},
                    {src: "grafico_diseño/farola_construirlominimo_9.jpg", ref: "farola", tools: "Lightroom"},
                    

                    {src: "grafico_diseño/digital_romance_logo.png", ref: "romance", tools: "Illustrator_Photoshop"},
                    {src: "grafico_diseño/REFELCTANTE OPTIMIZADO.mp4", x: 190, y: 8000, type: "video", ref: "romance", tools: "Pixel 4a 5g"},
                    {src: "grafico_diseño/romance_recortado.mp4", x: 190, y: 8000, type: "video", ref: "romance", tools: "Blender_Premiere"},
                    {src: "grafico_diseño/digital_romance_suiza.png", ref: "romance", tools: "Blender_Illustrator_Photoshop"},

                    {src: "grafico_diseño/breiner_mockup_inclinado.png", ref: "breiner", tools: "Illustrator_Photoshop(mockup)"},
                    {src: "grafico_diseño/breiner_reel_bueno_1.mp4", x: 190, y: 8000, type: "video", ref: "breiner", tools: "Cinema 4D_After Effects_Premiere"},
                    {src: "grafico_diseño/breiner_video.mp4", x: 190, y: 8000, type: "video", ref: "breiner", tools: "Resolume Arena_Premiere"},

                    {src: "grafico_diseño/sopa_mockup_1.png", ref: "SOPA", tools: "Blender_Photoshop_Figma"},
                    {src: "grafico_diseño/sopa_mockup_2.png", ref: "SOPA", tools: "Photoshop_Figma"},
                    {src: "grafico_diseño/sopa_mockup_3.png", ref: "SOPA", tools: "Photoshop_Figma"},

                  //  {src: "grafico_diseño/pecata_1.png", ref: "pecata"},
                   // {src: "https://dani-latre.xyz/media/Fuegos%20.mp4",  type: "video", caption: "Fuegos - Movimiento"},

                ];
                
                
                
                
                
                
                
                
                
                
                    
                   
                   
                    
                    //{src: "https://dani-latre.xyz/media/Ruta%20Modelo.mp4", x: 1000, y: 5000, type: "video"},
                
                
                
                
                


// Ítem actualmente abierto en el modal (para poder navegar con flechas)
let currentModalItem = null;

function initGallery() {
    const imageSpace = document.getElementById("imageSpace");
    if (!imageSpace) return;
    imageSpace.innerHTML = "";

    const groups = [];
    mediaItems.forEach((item, index) => {
        item.originalIndex = index;
        if (groups.length > 0 && groups[groups.length - 1].ref === item.ref) {
            groups[groups.length - 1].items.push(item);
        } else {
            groups.push({ ref: item.ref, caption: TEXTOS[item.ref] || "", items: [item] });
        }
    });

    groups.forEach(group => {
        // Guardamos en cada item una referencia a los demás items de su grupo
        // y su posición dentro de él, para poder navegar con las flechas del modal.
        group.items.forEach((item, i) => {
            item.groupItems = group.items;
            item.indexInGroup = i;
        });

        const groupContainer = document.createElement("div");
        groupContainer.className = "group-container";
        groupContainer.dataset.ref = group.ref; // <-- usado por el título fijo de sección

        const mediaList = document.createElement("div");
        mediaList.className = "media-list";

        group.items.forEach(item => {
            const mediaWrapper = document.createElement("div");
            mediaWrapper.className = "media-wrapper";
            let media = (item.type === "video" || item.src.endsWith('.mp4')) 
                ? document.createElement("video") 
                : document.createElement("img");
            media.src = item.src;
            if(item.type === "video" || item.src.endsWith('.mp4')){
                media.loop = true; media.muted = true; media.autoplay = true; media.playsInline = true;
            }
            media.dataset.index = item.originalIndex;

            const toolsText = item.tools;
            if (toolsText) {
                media.dataset.info = toolsText;
            }

            mediaWrapper.appendChild(media);
            mediaList.appendChild(mediaWrapper);
                mediaWrapper.addEventListener('click', (e) => {
        // Solo si estamos en móvil (ancho menor a 768px)
        if (window.innerWidth <= 768) {
            const parentGroup = mediaWrapper.closest('.group-container');
            
            // Alternamos la clase para mostrar/ocultar el pie
            parentGroup.classList.toggle('active-mobile');
            
            // Cerramos los otros pies de página que pudieran estar abiertos
            document.querySelectorAll('.group-container').forEach(g => {
                if (g !== parentGroup) g.classList.remove('active-mobile');
            });
        }
    });
        });

        const captionWrapper = document.createElement("div");
        captionWrapper.className = "caption-wrapper";
        
        const stickyContent = document.createElement("div");
        stickyContent.className = "sticky-content";
        
        const captionText = document.createElement("p");
        captionText.className = "image-caption";
        wrapTextIntoWordSpans(captionText, group.caption);
        
        stickyContent.appendChild(captionText);
        captionWrapper.appendChild(stickyContent);
        groupContainer.appendChild(mediaList);
        groupContainer.appendChild(captionWrapper);
        imageSpace.appendChild(groupContainer);

       // SUSTITUYE EL BLOQUE QUE ME HAS PASADO POR ESTE:
const firstMedia = mediaList.querySelector("img, video");

// Ya no calculamos el offsetHeight / 2. 
// Simplemente nos aseguramos de que el contenedor empiece arriba del todo.
captionWrapper.style.paddingTop = "0px"; 

// Opcional: Si quieres que el texto tenga un margen de cortesía 
// para no estar pegado al borde superior del grupo:
// captionWrapper.style.paddingTop = "20px";
    });
    document.querySelectorAll('.media-wrapper').forEach(wrapper => {
        wrapper.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                // Alterna la clase en el BODY, así afecta a todos los grupos
                document.body.classList.toggle('show-captions-mobile');
            }
        });
    });

    function setupCaptionBehavior() {
    function apply() {
        const isMobile = window.innerWidth <= 768;

        document.querySelectorAll('.group-container').forEach(group => {
            const mediaList = group.querySelector('.media-list');
            const stickyContent = group.querySelector('.sticky-content');
            if (!mediaList || !stickyContent) return;

            if (isMobile) {
                stickyContent.classList.remove('sticky-static');
                return;
            }

            const imagesHeight = mediaList.offsetHeight;
            const neededForSticky = window.innerHeight;

            // Si el grupo no tiene suficiente altura de imágenes para que el efecto
            // "pegado" tenga recorrido, el texto se coloca fijo abajo de forma estática
            // (sin animación), en vez de forzar hueco extra artificial en el grupo.
            stickyContent.classList.toggle('sticky-static', imagesHeight < neededForSticky);
        });
    }

    apply();
    window.addEventListener('load', apply);
    window.addEventListener('resize', apply);
}

setupModal();
    setupSectionTitle();
    setupTooltips();
    setupIntroScreen();
    setupCVModal();
    setupCaptionBehavior();
} 


function setupIntroScreen() {
    const intro = document.getElementById('introScreen');
    if (!intro) {
        // No hay intro en esta página: avisamos igualmente para que
        // setupSectionTitle() no se quede esperando el evento.
        document.dispatchEvent(new Event('introFinished'));
        return;
    }

    document.body.classList.add('intro-active');

    setTimeout(() => {
        intro.classList.add('intro-hidden');
        document.body.classList.remove('intro-active');
        document.dispatchEvent(new Event('introFinished')); // 👈 añadido

        setTimeout(() => {
            intro.remove();
        }, 1000);
    }, 1500);
}
// Divide el texto de un párrafo en <span> por palabra, para poder luego
// saber en qué línea (ya renderizada) cae cada una.
function wrapTextIntoWordSpans(el, text) {
    el.innerHTML = '';
    if (!text) return;
    const words = text.split(/\s+/).filter(Boolean);
    words.forEach((word, i) => {
        const span = document.createElement('span');
        span.className = 'caption-word';
        span.textContent = word + (i < words.length - 1 ? ' ' : '');
        el.appendChild(span);
    });
}


function ensureModalStructure() {
    const container = document.getElementById("modalMediaContainer");
    if (document.getElementById('modalMediaWrapper')) return;

    container.innerHTML = '';

    const wrapper = document.createElement('div');
    wrapper.id = 'modalMediaWrapper';
    wrapper.className = 'modal-media-wrapper';

    const inner = document.createElement('div');
    inner.id = 'modalMediaInner';
    inner.className = 'modal-media-inner';

    const zoneLeft = document.createElement('div');
    zoneLeft.id = 'modalZoneLeft';
    zoneLeft.className = 'modal-nav-zone modal-nav-zone-left';
    zoneLeft.addEventListener('click', (e) => { e.stopPropagation(); showModalStep(-1); });

    const zoneRight = document.createElement('div');
    zoneRight.id = 'modalZoneRight';
    zoneRight.className = 'modal-nav-zone modal-nav-zone-right';
    zoneRight.addEventListener('click', (e) => { e.stopPropagation(); showModalStep(1); });

    wrapper.appendChild(inner);
    wrapper.appendChild(zoneLeft);
    wrapper.appendChild(zoneRight);
    container.appendChild(wrapper);

    // Flecha personalizada que sigue al ratón (con mix-blend-mode)
    let cursorArrow = document.getElementById('modalCursorArrow');
    if (!cursorArrow) {
        cursorArrow = document.createElement('div');
        cursorArrow.id = 'modalCursorArrow';
        cursorArrow.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12H20"/><path d="M10 6L4 12L10 18"/></svg>';
        document.body.appendChild(cursorArrow);
    }

    function moveArrow(e, flip) {
        cursorArrow.style.display = 'block';
        cursorArrow.style.left = e.clientX + 'px';
        cursorArrow.style.top = e.clientY + 'px';
        cursorArrow.style.transform = flip
            ? 'translate(-50%, -50%) scaleX(-1)'
            : 'translate(-50%, -50%) scaleX(1)';
    }

    zoneLeft.addEventListener('mousemove', (e) => moveArrow(e, false));
    zoneRight.addEventListener('mousemove', (e) => moveArrow(e, true));
    [zoneLeft, zoneRight].forEach(zone => {
        zone.addEventListener('mouseleave', () => { cursorArrow.style.display = 'none'; });
    });
}

function openModalItem(item) {
    currentModalItem = item;
    ensureModalStructure();
    const modal = document.getElementById("mediaModal");
    const inner = document.getElementById("modalMediaInner");
    inner.innerHTML = (item.type === "video" || item.src.endsWith('.mp4'))
        ? `<video src="${item.src}" controls autoplay></video>`
        : `<img src="${item.src}">`;
    modal.style.display = "flex";
    updateModalNavVisibility();
}

function updateModalNavVisibility() {
    const zoneLeft = document.getElementById('modalZoneLeft');
    const zoneRight = document.getElementById('modalZoneRight');
    const total = currentModalItem && currentModalItem.groupItems ? currentModalItem.groupItems.length : 0;
    const enabled = total > 1;
    [zoneLeft, zoneRight].forEach(zone => {
        if (!zone) return;
        zone.classList.toggle('zone-disabled', !enabled);
    });
}

function showModalStep(direction) {
    if (!currentModalItem || !currentModalItem.groupItems) return;
    const items = currentModalItem.groupItems;
    const total = items.length;
    if (total <= 1) return;
    const newIndex = (currentModalItem.indexInGroup + direction + total) % total;
    openModalItem(items[newIndex]);
}

function closeModal() {
    const modal = document.getElementById("mediaModal");
    modal.style.display = "none";
    const inner = document.getElementById("modalMediaInner");
    if (inner) inner.innerHTML = "";
    currentModalItem = null;
}

function setupModal() {
    // Si es móvil, no configuramos el modal
    if (window.innerWidth <= 768) return;

    const modal = document.getElementById("mediaModal");

    document.querySelectorAll(".media-wrapper img, .media-wrapper video").forEach(el => {
        el.addEventListener("click", (e) => {
            const idx = e.target.dataset.index;
            const item = mediaItems[idx];
            openModalItem(item);
        });
    });

    modal.onclick = (e) => {
        // No cerrar si el click viene de las zonas de navegación sobre la imagen
        if (e.target.closest && e.target.closest('.modal-nav-zone')) return;
        closeModal();
    };

    // Solo registramos el listener de teclado una vez
    if (!document.body.dataset.modalKeysBound) {
        document.body.dataset.modalKeysBound = 'true';
        document.addEventListener('keydown', (e) => {
            if (modal.style.display !== 'flex') return;
            if (e.key === 'ArrowRight') showModalStep(1);
            else if (e.key === 'ArrowLeft') showModalStep(-1);
            else if (e.key === 'Escape') closeModal();
        });
    }
}

// TÍTULO FIJO DE SECCIÓN (esquina inferior izquierda)
function setupSectionTitle() {
    let titleEl = document.getElementById('sectionTitleFixed');
    if (!titleEl) {
        titleEl = document.createElement('div');
        titleEl.id = 'sectionTitleFixed';
        titleEl.className = 'section-title-fixed';
        document.body.appendChild(titleEl);
    }

    const groupContainers = document.querySelectorAll('.group-container');
    if (!groupContainers.length) return;

    const intro = document.getElementById('pageIntro');
    const footer = document.getElementById('pageFooter');

    titleEl.textContent = '';
    titleEl.style.opacity = '0';

    let currentRef = null;

    function updateTitleFor(ref) {
        if (document.body.classList.contains('intro-active')) return;
        titleEl.textContent = TITULOS[ref] || ref || '';
        titleEl.style.opacity = titleEl.textContent ? '1' : '0';
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const visibleRatio = entry.intersectionRect.height / window.innerHeight;
            if (visibleRatio <= 0.5) return;

            if (entry.target.classList.contains('group-container')) {
                currentRef = entry.target.dataset.ref;
                updateTitleFor(currentRef);
            } else {
                // Estamos en el header o en el footer: ocultar título
                currentRef = null;
                titleEl.style.opacity = '0';
            }
        });
    }, {
        root: null,
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    });

    groupContainers.forEach(group => observer.observe(group));
    if (intro) observer.observe(intro);
    if (footer) observer.observe(footer);

    document.addEventListener('introFinished', () => updateTitleFor(currentRef), { once: true });
}

function attachTooltip(el, text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'custom-tooltip';
    tooltip.textContent = text;
    document.body.appendChild(tooltip);

    el.addEventListener('mouseenter', () => {
        tooltip.style.opacity = '1';
    });

    el.addEventListener('mousemove', (e) => {
        const offset = 14;
        const rect = tooltip.getBoundingClientRect();
        let left = e.clientX + offset;
        let top = e.clientY + offset;

        if (left + rect.width + 8 > window.innerWidth) left = e.clientX - rect.width - offset;
        if (top + rect.height + 8 > window.innerHeight) top = e.clientY - rect.height - offset;

        tooltip.style.left = left + 'px';
        tooltip.style.top = top + 'px';
    });

    el.addEventListener('mouseleave', () => {
        tooltip.style.opacity = '0';
    });
}

function setupTooltips() {
    if (window.innerWidth <= 768) return;
    document.querySelectorAll('.media-wrapper [data-info]').forEach(el => {
        attachTooltip(el, el.dataset.info);
    });
}

function renderCV() {
    const body = document.getElementById('cvBody');
    if (!body) return;

    const entryHTML = (e) => `
        <div class="cv-entry">
            <span class="cv-role">${e.role}</span>
            <span class="cv-meta">${e.place} · ${e.dates}</span>
        </div>`;

    let html = '';
    html += '<div class="cv-section-title">Experiencia profesional</div>' + CV_DATA.experiencia.map(entryHTML).join('');
    html += '<div class="cv-section-title">Formación</div>' + CV_DATA.formacion.map(entryHTML).join('');
    html += '<div class="cv-section-title">Herramientas y habilidades</div><ul class="cv-skills-list">' +
        CV_DATA.herramientas.map(h => `<li>${h}</li>`).join('') + '</ul>';
    html += '<div class="cv-section-title">Idiomas</div><ul class="cv-lang-list">' +
        CV_DATA.idiomas.map(i => `<li>${i.idioma}: ${i.nivel}</li>`).join('') + '</ul>';
    html += '<div class="cv-section-title">Actividad artística</div>' + CV_DATA.actividad.map(entryHTML).join('');

    body.innerHTML = html;
}

function setupCVModal() {
    const link = document.getElementById('cvLink');
    const modal = document.getElementById('cvModal');
    const closeBtn = document.getElementById('cvCloseBtn');
    if (!link || !modal) return;

    renderCV();

    link.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('cv-modal-open');
    });

    const close = () => modal.classList.remove('cv-modal-open');

    if (closeBtn) closeBtn.addEventListener('click', close);
    modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('cv-modal-open')) close();
    });
}

document.addEventListener("DOMContentLoaded", initGallery);
