// Função para adicionar vídeo de fundo
function addBackgroundVideo() {
    // Criar elemento de vídeo
    const video = document.createElement('video');
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.id = 'background-video';
    
    // Estilizar o vídeo
    video.style.position = 'fixed';
    video.style.top = '0';
    video.style.left = '0';
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'cover';
    video.style.zIndex = '-3';
    
    // Adicionar fonte do vídeo
    const source = document.createElement('source');
    source.src = 'https://video.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/f704cba9-9eb2-4d08-ba91-0f9342df6349/mp4';
    source.type = 'video/mp4';
    
    // Montar e adicionar ao documento
    video.appendChild(source);
    document.body.prepend(video);
}

// Executar quando o documento estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addBackgroundVideo);
} else {
    addBackgroundVideo();
} 
