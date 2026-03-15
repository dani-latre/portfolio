// 1. DEFINE TUS TEXTOS AQUÍ UNA SOLA VEZ
const TEXTOS = {
    
    guideline: "guideline | 2025  An Angelic Transmission, curated by Alejandro Alonso Díaz  still from video ",
    
    beingreen: "bein’ green | 2023  Installation and live twitch stream  ",
    beingreen2: "bein’ green | 2023",

    bluetooth: "how did we make bluetooth from this? | 2025 <br>behind the scenes motion tracking image ",
    bluetooth2: "how did we make bluetooth from this? | 2025 <br>Video <br> link:<a href='https://www.youtube.com/watch?v=vjONRRWD-7Q' target='_blank'>https://www.youtube.com/watch?v=vjONRRWD-7Q</a>",
    bluetooth3: "how did we make bluetooth from this? | 2025 <br>360 video <br> link:<a href='https://www.youtube.com/watch?v=-8B7bZAM0CM' target='_blank'>https://www.youtube.com/watch?v=-8B7bZAM0CM</a>",

    beach: "Beach | 2024 <br>Video <br> link:<a href='https://www.youtube.com/watch?v=gd0aR1-Tl3w' target='_blank'>https://www.youtube.com/watch?v=gd0aR1-Tl3w</a>",
    merendero: `Pictures from the projects 'El Merendero' (2022) and 'The Merendero Battle' (2023): Two adjoining projects that During the playable game, players and bots played together and against each other. intended to question the naturalness and specific qualities of a photogrammetry environment through the These could fall down through holes in the 'map' to the 'level of the sea': a solid virtual implementation of different levels and states of fiction elements and conditions. floor situated at the actual corresponding sea level distance.`,
    
    incal: "‘Incalculable Pesaje’ (2023-2025)is a project that consisted of carrying out a photogrammetric scan of an 8- kilometer-long area over a prolonged period of time. The color changes due to changes in sunlight ,are visible on the surface of the virtual object. ",
    
    incal_2: "Drawing for ‘Incalculable Pesaje’. Geometric simplification for placement of sea level points and general measurements.",

    poster:"from ‘ I AM CRAZY FUN TIMES’ (2023), a poster from an aerial picture hanging upside down.",


}
 

                
                
                const mediaItems = [
                  // Ejemplo con pie de foto
                  
                  // Mikel optimizadas con pies de foto
                  {src: "Mikel_optimizadas/e_mikel_003", ref: "vacio"},
                  {src: "Mikel_optimizadas/e_mikel_004", ref: "vacio"},
                  {src: "Mikel_optimizadas/e_mikel_005", ref: "vacio"},
                  {src: "Mikel_optimizadas/e_mikel_002", ref: "vacio"},
                  {src: "Mikel_optimizadas/e_mikel_001", ref: "vacio"},

                  {src: "Mikel_optimizadas/a_mikel_001", ref: "merendero"},
                  {src: "Mikel_optimizadas/a_mikel_002", ref: "merendero"},
                  {src: "Mikel_optimizadas/a_mikel_003", ref: "merendero"},
                  {src: "Mikel_optimizadas/a_mikel_004", ref: "merendero"},
                  {src: "Mikel_optimizadas/a_mikel_005", ref: "merendero"},
                  {src: "Mikel_optimizadas/a_mikel_006", ref: "merendero"},
                  
                  {src: "Mikel_optimizadas/b_mikel_001", ref: "incal"},
                  {src: "Mikel_optimizadas/b_mikel_002", ref: "incal"},
                  {src: "Mikel_optimizadas/b_mikel_003", ref: "incal"},
                  {src: "Mikel_optimizadas/b_mikel_004", ref: "incal"},
                  
                  {src: "Mikel_optimizadas/c_mikel_001", ref: "incal_2"},
                  
                  {src: "Mikel_optimizadas/d_mikel_001", ref: "poster"},
                  
  
                
                  // John optimizadas con pies de foto
                    {src: "John_optimizadas/a_john_001", ref: "guideline"},

                    {src: "John_optimizadas/b_john_001", ref: "beingreen"},
                    {src: "John_optimizadas/b_john_002", ref: "beingreen2"},

                    {src: "John_optimizadas/c_john_001", ref: "bluetooth"},
                    {src: "John_optimizadas/c_john_002", ref: "bluetooth2"},
                    {src: "John_optimizadas/c_john_003", ref: "bluetooth3"},
                    {src: "John_optimizadas/c_john_004", ref: "bluetooth3"},
                    {src: "John_optimizadas/c_john_005", ref: "bluetooth"},

                    {src: "John_optimizadas/d_john_001", ref: "beach"},
                    {src: "John_optimizadas/d_john_002", ref: "beach"},
                    
                    {src: "John_optimizadas/e_john_001", ref: "p1"},
                    {src: "John_optimizadas/e_john_002", ref: "p1"},
                    {src: "John_optimizadas/e_john_003", ref: "p1"},
                    
                    {src: "John_optimizadas/f_john_001", ref: "p1"},
                    {src: "John_optimizadas/f_john_002", ref: "p1"},
                    {src: "John_optimizadas/f_john_003", ref: "p1"},
                    {src: "John_optimizadas/f_john_004", ref: "p1"},
                    {src: "John_optimizadas/f_john_005", ref: "p1"},


                    {src: "https://dani-latre.xyz/media/Plastico-Aire-Sala-Luces.mp4",  type: "video", ref: "vacio"},
                    {src: "img_optimizada/PXL_20250303_184144172.NIGHT.RAW-01.COVER_resultado.jpg",  type: "image", ref: "vacio"},
                    {src: "img_optimizada/PXL_20250831_103101053.webp", type: "image", caption: "Paisaje - Texturas"},
                   
                    {src: "img_optimizada/PXL_20250831_103354825.webp",  type: "image", caption: "Detalle - Textura"},
                    {src: "img_optimizada/PXL_20250211_171848110.RAW-01.COVER_resultado.jpg",  type: "image", caption: "RAW - Cobertura"},
                    {src: "img_optimizada/editadas portfolio_00_5_resultado.jpg",  type: "image", caption: "Portfolio - Edición"},
                    {src: "img_optimizada/d4948c53_resultado.jpg",  type: "image", caption: "Serie - Composición"},
                    {src: "https://dani-latre.xyz/media/proyeccion_local.mp4",  type: "video", caption: "Proyección - Local"},
                    { src: "img_optimizada/PXL_20250303_183943567.RAW-01.COVER_resultado.jpg",  type: "image", caption: "RAW - Cobertura - Detalle" },
                    {src: "img_optimizada/camion esquema_resultado.jpg",  type: "image", caption: "Camión - Esquema"},
                    {src: "img_optimizada/PXL_20250114_171008335.NIGHT_resultado.jpg",  type: "image", caption: "Noche - Exterior"},
                    {src: "img_optimizada/P8090003_resultado.jpg", x: 1000, y: 9000, type: "image", caption: "Paisaje - Horizonte"},
                    {src: "https://dani-latre.xyz/media/REFELCTANTE%20OPTIMIZADO.mp4", type: "video", caption: "Reflectante - Optimizado"},
                    
                    {src: "img_optimizada/PXL_20250211_175218562.RAW-01.COVER_resultado.jpg",  type: "image", caption: "RAW - Cobertura - Textura"},
                    {src: "img_optimizada/IMG-20250113-WA0029_resultado.jpg", type: "image", caption: "WhatsApp - Compartido"},
                   
                    {src: "https://dani-latre.xyz/media/cubo_agua.mp4",  type: "video", caption: "Cubo - Agua - Reflejos"},
                    {src: "img_optimizada/PXL_20250226_171318569.RAW-01.COVER-min.jpg", type: "image", caption: "RAW - Cobertura - Minimal"},
                    {src: "img_optimizada/PXL_20250830_185121345.webp",  type: "image", caption: "Atardecer - Silueta"},
                    
                    {src: "img_optimizada/PXL_20250903_222442335.webp", type: "image", caption: "Serie Nocturna"},
                    {src: "img_optimizada/PXL_20250909_211818029.webp",  type: "image", caption: "Paisaje - Larga exposición"},
                    {src: "https://dani-latre.xyz/media/Fuegos%20.mp4",  type: "video", caption: "Fuegos - Movimiento"},

                ];
                
                
                
                
                
                
                
                
                
                
                    
                   
                   
                    
                    //{src: "https://dani-latre.xyz/media/Ruta%20Modelo.mp4", x: 1000, y: 5000, type: "video"},
                
                
                
                
                
                     //{src: "https://dani-latre.xyz/media/ruta-3d-modelo.mp4", x: 190, y: 8000, type: "video"},



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
        const groupContainer = document.createElement("div");
        groupContainer.className = "group-container";

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
        captionText.innerHTML = group.caption;
        
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

    setupModal();
}


function setupModal() {
    // Si es móvil, no configuramos el modal
    if (window.innerWidth <= 768) return;

    const modal = document.getElementById("mediaModal");
    const container = document.getElementById("modalMediaContainer");
    
    document.querySelectorAll(".media-wrapper img, .media-wrapper video").forEach(el => {
        el.addEventListener("click", (e) => {
            const idx = e.target.dataset.index;
            const item = mediaItems[idx];
            container.innerHTML = (item.type === "video" || item.src.endsWith('.mp4'))
                ? `<video src="${item.src}" controls autoplay></video>` 
                : `<img src="${item.src}">`;
            modal.style.display = "flex";
        });
    });

    modal.onclick = () => { modal.style.display = "none"; container.innerHTML = ""; };
}

document.addEventListener("DOMContentLoaded", initGallery);