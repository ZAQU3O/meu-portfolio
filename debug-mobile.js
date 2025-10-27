console.log('🔍 Debug Mobile - iPhone XR');

function detectDevice() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const userAgent = navigator.userAgent;
    
    console.log('Informações do dispositivo:');
    console.log('- Largura:', width + 'px');
    console.log('- Altura:', height + 'px');
    console.log('- User Agent:', userAgent);
    console.log('- É iPhone?', /iPhone/.test(userAgent));
    console.log('- É dispositivo móvel?', width <= 768);
    
    return { width, height, userAgent };
}

function checkMenuElements() {
    const elements = {
        navLinks: document.querySelector('.nav-links'),
        mobileMenuBtn: document.querySelector('.mobile-menu-btn'),
        navOverlay: document.querySelector('.nav-overlay')
    };
    
    console.log('Estado dos elementos:');
    
    Object.entries(elements).forEach(([name, element]) => {
        if (element) {
            const styles = window.getComputedStyle(element);
            console.log(`${name}:`, {
                display: styles.display,
                position: styles.position,
                right: styles.right,
                visibility: styles.visibility,
                opacity: styles.opacity
            });
        } else {
            console.log(`${name}: ELEMENTO NÃO ENCONTRADO`);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM carregado - iniciando debug mobile');
    detectDevice();
    
    setTimeout(() => {
        checkMenuElements();
        
        // Testar media queries
        if (window.matchMedia('(max-width: 768px)').matches) {
            console.log('✅ Media query mobile (768px) ativa');
        } else {
            console.log('❌ Media query mobile (768px) NÃO ativa');
        }
        
        if (window.matchMedia('(max-width: 414px)').matches) {
            console.log('✅ Media query iPhone XR (414px) ativa');
        } else {
            console.log('❌ Media query iPhone XR (414px) NÃO ativa');
        }
    }, 500);
});

// Debug ao redimensionar
window.addEventListener('resize', () => {
    console.log('Redimensionado para:', window.innerWidth + 'px');
    setTimeout(checkMenuElements, 100);
});