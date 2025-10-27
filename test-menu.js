console.log('🔍 Testando Menu Mobile');

// Verificar se os elementos existem
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM carregado');
    
    const elements = {
        navLinks: document.querySelector('.nav-links'),
        mobileMenuBtn: document.querySelector('.mobile-menu-btn'),
        navOverlay: document.querySelector('.nav-overlay'),
        nav: document.querySelector('nav')
    };
    
    console.log('Elementos encontrados:', elements);
    
    // Verificar se todos os elementos existem
    const allElementsExist = Object.values(elements).every(el => el !== null);
    console.log('Todos os elementos existem:', allElementsExist);
    
    // Testar click no botão
    if (elements.mobileMenuBtn) {
        elements.mobileMenuBtn.addEventListener('click', () => {
            console.log('Botão clicado!');
        });
    }
    
    // Verificar classes CSS
    setTimeout(() => {
        console.log('Verificando estilos aplicados...');
        if (elements.mobileMenuBtn) {
            const styles = window.getComputedStyle(elements.mobileMenuBtn);
            console.log('Display do botão mobile:', styles.display);
        }
        
        if (elements.navLinks) {
            const styles = window.getComputedStyle(elements.navLinks);
            console.log('Position dos nav-links:', styles.position);
            console.log('Right dos nav-links:', styles.right);
        }
    }, 1000);
});