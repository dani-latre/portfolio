const CV_DATA = {
    ubicacion:"Barcelona",
    experiencia: [
        { role: "Auxiliar de montaje en espectáculos", place: "Penny Wise Iber. Zaragoza", dates: "2018-2022" },
        { role: "Prácticas profesionales en escenografía y construcción de decorados", place: "Architécnica Creativos. Zaragoza", dates: "2021" },
        { role: "Personal de sala en exposiciones", place: "Veta Galería. Madrid", dates: "2023" },
    ],
    formacion: [
        { role: "Grado en Bellas Artes", place: "Universidad de Castilla-La Mancha. Cuenca", dates: "2021-2025" },
        { role: "SICUE", place: "Universidad del País Vasco. Bilbao", dates: "2024-2025" },
        { role: "Beca Erasmus", place: "Escola Superior Artística do Porto", dates: "2023-2024" },
        { role: "Grado Superior en Escultura aplicada al Espectáculo", place: "Escuela de Arte de Zaragoza", dates: "2019-2021" },
        { role: "Bachillerato en Artes Plásticas", place: "Escuela de Arte de Zaragoza", dates: "2017-2019" },
    ],
    herramientas: [
         "Paquete Adobe","Blender", "Zbrush","HTML/CSS", "ComfyUI", "Resolume Arena",  "Paquete Office", "Modelado 3D", "Vibe Coding", "Linux", "Carpintería básica", "Video Mapping", "Fotografía", "Ilustración", 
    ],
    idiomas: [
        { idioma: "Castellano", nivel: "nativo" },
        { idioma: "Inglés", nivel: "medio" },
        { idioma: "Catalán", nivel: "comprensión" },
    ],
    actividad: [
        { role: "Beca de producción artística", place: "Can Felipa. Barcelona", dates: "2025 - Actualidad" },
        { role: "Colaborador", place: "Residencia de John Mark Hill. Tabakalera, Donosti", dates: "2026" },
        { role: "Exposición colectiva", place: "Espacio Espiral / Pluto. Valencia", dates: "2025" },
        { role: "Residente", place: "Residencias Artísticas Reinosa. Cantabria", dates: "2023" },
    ]
    
};

const TEXTOS = {
    vacio: "",
    postt: "2024\n_ilustración\n_modelado 3D\nIlustraciones gráficas realizadas para el periódico The Posttraumatic...",
    SOPA: "SOPA fue una editorial ficticia de posters que nunca se llegaron a imprimir.",
    romance: "2024/2025\n_dirección estética\n_diseño gráfico\n_edición de vídeo\nConjunto de piezas gráficas y audiovisuales para acompañar el trabajo de @digital.romance.tt como tatuadora",
    breiner: "2024\n_motion graphics\n_diseño gráfico\n_videomapping\n_visuales(imágenes de @allahimsenicokseviyorum_2)\nCartelería, visuales y contenido para redes para el último evento del colectivo de DJs Badelbow & friends",
    farola: "2024\n_editorial\n_preimpresión digital\nMaquetación de la publicación realizada para la exposición Making Things (ESAP, Oporto)",

    lyricVideo: "2026\nUnofficial lyric video de la canción 'Square Heart' 7038634357\nrealizado con John Mark Hill en Tabakalera, Donosti",
};

const TITULOS = {
    postt: "The Posttraumatic",
    beach: "Beach",
    romance: "Digital Romance",
    breiner: "The Last Breiner",
    farola: "Y después...\nme casé con una farola",
    sassy: "Sassy Colective",
    lyricVideo: "Lyric Video 7038634357",
    vacio: ""
};

const mediaItems = [
    { src: "grafico_diseño/digital_romance_patron.png", ref: "romance", tools: "fotografía_Pixel 4a 5g" },
    { src: "grafico_diseño/digital_romance_logo 1.png", ref: "romance", tools: "Illustrator_Photoshop" },
    { src: "grafico_diseño/digital_romance_suiza.png", ref: "romance", tools: "Blender_Illustrator_Photoshop" },
    { src: "grafico_diseño/romance_opt.mp4", type: "video", ref: "romance", tools: "video_Pixel 4a 5g" },
    { src: "grafico_diseño/romance_recortado.mp4", type: "video", ref: "romance", size: "size-s",tools: "Blender_Premiere" },
    { src: "grafico_diseño/d.png", ref: "romance", tools: "fotografia_Pixel 4a 5g" },

    { src: "grafico_diseño/111.png",size: "size-m", ref: "farola", tools: "Indesign_Photoshop" },
    { src: "grafico_diseño/222.png", size: "size-m", ref: "farola", tools: "Indesign_Photoshop" },
    { src: "grafico_diseño/333.png", size: "size-m", ref: "farola", tools: "Indesign_Photoshop" },

    { src: "grafico_diseño/breiner_mockup_inclinado.png", ref: "breiner", tools: "Illustrator_Photoshop(mockup)" },
    { src: "grafico_diseño/breiner_video_1.mp4", type: "video", ref: "breiner", tools: "Resolume Arena_Premiere" },
    { src: "grafico_diseño/breiner_reel_bueno_1.mp4", type: "video", ref: "breiner", size:"size-s", tools: "Cinema 4D_After Effects_Premiere" },
    { src: "grafico_diseño/breiner_video_2.mp4", type: "video", ref: "breiner", tools: "Resolume Arena_Premiere" },

    { src: "grafico_diseño/SQUARE_HEART.jpg", ref: "lyricVideo", size: "size-m", tools: "tela_reflectante_corte láser" },
    { src: "grafico_diseño/square_heart_opt.mp4", type: "video", ref: "lyricVideo", tools: "tela_reflectante_corte_ láser" },
    

    { src: "grafico_diseño/periodico_2.JPG", ref: "postt", tools: "Zbrush_Blender_Illustrator" },
    { src: "grafico_diseño/instrucciones5.jpg", ref: "postt", tools: "Zbrush_Blender_Illustrator" },
    { src: "grafico_diseño/periodico_3_mosca.png", ref: "postt", tools: "Illustrator" },
    { src: "grafico_diseño/periodico_1.png", ref: "postt", tools: "Illustrator" },

];

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
        group.items.forEach((item, i) => {
            item.groupItems = group.items;
            item.indexInGroup = i;
        });

        const groupContainer = document.createElement("div");
        groupContainer.className = "group-container";
        groupContainer.dataset.ref = group.ref;

        const mediaList = document.createElement("div");
        mediaList.className = "media-list";

        group.items.forEach(item => {
            const mediaWrapper = document.createElement("div");
            mediaWrapper.className = "media-wrapper";
            if (item.size) mediaWrapper.classList.add(item.size);

            const isVideo = item.type === "video" || item.src.endsWith('.mp4');
            const media = document.createElement(isVideo ? "video" : "img");
            media.src = item.src;
            
     if (isVideo) {
    media.loop = true;
    media.muted = true;
    media.autoplay = true;
    media.playsInline = true;
    media.preload = 'metadata';

    media.addEventListener('loadedmetadata', () => {
        media.currentTime = media.duration / 2;
    }, { once: true });
}
            media.dataset.index = item.originalIndex;

            if (item.tools) {
                media.dataset.info = item.tools;
            }

            mediaWrapper.appendChild(media);
            mediaList.appendChild(mediaWrapper);

            // Handler táctil/móvil centralizado
            mediaWrapper.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    groupContainer.classList.toggle('active-mobile');
                    document.querySelectorAll('.group-container').forEach(g => {
                        if (g !== groupContainer) g.classList.remove('active-mobile');
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
    });

    setupModal();
    setupSectionTitle();
    setupTooltips();
    setupIntroScreen();
    setupCVModal();
    setupCaptionBehavior();
     setupNavIcon();
}

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
            stickyContent.classList.toggle('sticky-static', imagesHeight < neededForSticky);
        });
    }

    apply();
    window.addEventListener('resize', apply, { passive: true });
}

function setupIntroScreen() {
    const intro = document.getElementById('introScreen');
    if (!intro) {
        document.dispatchEvent(new Event('introFinished'));
        return;
    }

    document.body.classList.add('intro-active');

    setTimeout(() => {
        intro.classList.add('intro-hidden');
        document.body.classList.remove('intro-active');
        document.dispatchEvent(new Event('introFinished'));

        setTimeout(() => intro.remove(), 1000);
    }, 1500);
}

function wrapTextIntoWordSpans(el, text) {
    el.textContent = text || '';
}

function ensureModalStructure() {
    const container = document.getElementById("modalMediaContainer");
    if (!container || document.getElementById('modalMediaWrapper')) return;

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
        cursorArrow.style.transform = flip ? 'translate(-50%, -50%) scaleX(-1)' : 'translate(-50%, -50%) scaleX(1)';
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
    if (!modal || !inner) return;

    const isVideo = item.type === "video" || item.src.endsWith('.mp4');
    inner.innerHTML = isVideo
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
        if (zone) zone.classList.toggle('zone-disabled', !enabled);
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
    if (modal) modal.style.display = "none";
    const inner = document.getElementById("modalMediaInner");
    if (inner) inner.innerHTML = "";
    currentModalItem = null;
}

function setupModal() {
    if (window.innerWidth <= 768) return;

    const modal = document.getElementById("mediaModal");
    if (!modal) return;

    document.querySelectorAll(".media-wrapper img, .media-wrapper video").forEach(el => {
        el.addEventListener("click", (e) => {
            const idx = e.target.dataset.index;
            const item = mediaItems[idx];
            if (item) openModalItem(item);
        });
    });

    modal.onclick = (e) => {
        if (e.target.closest && e.target.closest('.modal-nav-zone')) return;
        closeModal();
    };

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

    let currentRef = null;

    function updateTitleFor(ref) {
        if (document.body.classList.contains('intro-active')) return;
        titleEl.textContent = TITULOS[ref] || ref || '';
        titleEl.style.opacity = titleEl.textContent ? '1' : '0';
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                currentRef = entry.target.dataset.ref;
                updateTitleFor(currentRef);
            }
        });
    }, { rootMargin: "-40% 0px -40% 0px" });

    groupContainers.forEach(group => observer.observe(group));
    document.addEventListener('introFinished', () => updateTitleFor(currentRef), { once: true });
}

function attachTooltip(el, text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'custom-tooltip';
    tooltip.textContent = text;
    document.body.appendChild(tooltip);

    let ticking = false;

    el.addEventListener('mouseenter', () => { tooltip.style.opacity = '1'; });
    el.addEventListener('mousemove', (e) => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const offset = 14;
                const rect = tooltip.getBoundingClientRect();
                let left = e.clientX + offset;
                let top = e.clientY + offset;

                if (left + rect.width + 8 > window.innerWidth) left = e.clientX - rect.width - offset;
                if (top + rect.height + 8 > window.innerHeight) top = e.clientY - rect.height - offset;

                tooltip.style.left = left + 'px';
                tooltip.style.top = top + 'px';
                ticking = false;
            });
            ticking = true;
        }
    });

    el.addEventListener('mouseleave', () => { tooltip.style.opacity = '0'; });
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
            <span class="cv-dates">${e.dates}</span>
            <span class="cv-role">${e.role}</span>
            <span class="cv-meta">${e.place}</span>
        </div>`;

    const section = (title, content) => `
        <section class="cv-section">
            <h2 class="cv-section-title">${title}</h2>
            <div class="cv-section-body">${content}</div>
        </section>`;

body.innerHTML =
'       <section class="cv-section"><div></div><div class="cv-section-body"><div class="cv-entry"><span     class="cv-role">' + CV_DATA.ubicacion + '</span></div></div></section>'+
    section('Experiencia profesional', CV_DATA.experiencia.map(entryHTML).join('')) +
    section('Formación', CV_DATA.formacion.map(entryHTML).join('')) +
    section('Actividad artística', CV_DATA.actividad.map(entryHTML).join('')) +
    section('Herramientas y habilidades',
        '<ul class="cv-skills-list">' + CV_DATA.herramientas.map(h => `<li>${h}</li>`).join('') + '</ul>') +
    section('Idiomas',
        '<ul class="cv-lang-list">' + CV_DATA.idiomas.map(i => `<li>${i.idioma}: ${i.nivel}</li>`).join('') + '</ul>') 
            
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
    modal.addEventListener('click', close);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('cv-modal-open')) close();
    });
}

function setupNavIcon() {
    const icon = document.querySelector('.nav-icon');
    if (!icon) return;

    icon.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            document.body.classList.toggle('texts-hidden');
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
}

document.addEventListener("DOMContentLoaded", initGallery);