// Variáveis globais para o menu
let mobileMenuBtn;
let navLinks;
let navOverlay;
let isMenuOpen = false;

// Inicializar menu mobile quando o DOM estiver carregado
function initMobileMenu() {
    navLinks = document.querySelector('.nav-links');
    navOverlay = document.querySelector('.nav-overlay');
    mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    
    if (!navLinks || !navOverlay || !mobileMenuBtn) {
        console.error('Elementos de navegação não encontrados');
        return;
    }
    
    // Garantir estado inicial correto
    isMenuOpen = false;
    navLinks.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.classList.remove('menu-open');
    
    // Event listeners
    setupMenuEventListeners();
}

// Configurar event listeners
function setupMenuEventListeners() {
    if (!mobileMenuBtn || !navLinks || !navOverlay) return;
    
    // Click no botão do menu
    mobileMenuBtn.addEventListener('click', toggleMenu);
    
    // Click nos links do menu
    const menuLinks = navLinks.querySelectorAll('a');
    for (const link of menuLinks) {
        link.addEventListener('click', (e) => {
            // Só fechar menu se estivermos em mobile
            if (window.innerWidth <= 768) {
                closeMenu();
            }
        });
    }
    
    // Click no overlay
    navOverlay.addEventListener('click', closeMenu);
    
    // Tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isMenuOpen) {
            closeMenu();
        }
    });
    
    // Redimensionamento da janela
    window.addEventListener('resize', () => {
        const width = window.innerWidth;
        console.log('Largura atual:', width);
        
        // Fechar menu se mudou para desktop
        if (width > 768 && isMenuOpen) {
            console.log('Fechando menu - mudou para desktop');
            closeMenu();
        }
        
        // Debug para iPhone XR
        if (width <= 414) {
            console.log('Dispositivo detectado: iPhone XR ou similar');
        }
    });
}

// Alternar menu
function toggleMenu(e) {
    e.preventDefault();
    e.stopPropagation();
    
    if (isMenuOpen) {
        closeMenu();
    } else {
        openMenu();
    }
}

// Abrir menu
function openMenu() {
    if (!navLinks || !mobileMenuBtn || !navOverlay) return;
    
    navLinks.classList.add('active');
    navOverlay.classList.add('active');
    document.body.classList.add('menu-open');
    
    const icon = mobileMenuBtn.querySelector('i');
    if (icon) {
        icon.className = 'ri-close-line';
    }
    
    mobileMenuBtn.setAttribute('aria-label', 'Fechar Menu');
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
    
    isMenuOpen = true;
}

// Fechar menu
function closeMenu() {
    if (!navLinks || !mobileMenuBtn || !navOverlay) return;
    
    navLinks.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.classList.remove('menu-open');
    
    const icon = mobileMenuBtn.querySelector('i');
    if (icon) {
        icon.className = 'ri-menu-line';
    }
    
    mobileMenuBtn.setAttribute('aria-label', 'Abrir Menu');
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
    
    isMenuOpen = false;
}

// Navegação suave
function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        const navHeight = document.querySelector('nav').offsetHeight;
        const elementPosition = element.offsetTop - navHeight - 20;
        
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Event listeners para navegação
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        if (target !== '#') {
            smoothScroll(target);
        }
    });
});

// Destacar link ativo na navegação
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section, .hero, .about, .projects, .contact');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id') || section.className.split(' ')[0];
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Animações de entrada
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observar elementos para animação
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar menu mobile
    initMobileMenu();
    
    const elementsToAnimate = document.querySelectorAll('.about .item, .projects .item, .hero .left-section, .hero img');
    for (const el of elementsToAnimate) {
        observer.observe(el);
    }
    
    // Lazy loading das imagens
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Melhorar performance com debounce para scroll
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(updateActiveNavLink, 10);
    });
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section, .hero, .about, .projects, .contact');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id') || section.className.split(' ')[0];
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Funcionalidade dos botões sociais
document.querySelectorAll('.icons i').forEach(icon => {
    icon.addEventListener('click', () => {
        const iconClass = icon.className;
        let url = '';
        
        if (iconClass.includes('whatsapp')) {
            url = 'https://wa.me/5511999999999'; // Substitua pelo seu número
        } else if (iconClass.includes('instagram')) {
            url = 'https://instagram.com/seu_usuario'; // Substitua pelo seu usuário
        } else if (iconClass.includes('discord')) {
            url = 'https://discord.gg/seu_servidor'; // Substitua pelo seu servidor
        }
        
        if (url) {
            window.open(url, '_blank');
        }
    });
});

// Funcionalidade dos botões principais
document.querySelector('.hero .buttons .doc').addEventListener('click', () => {
    smoothScroll('#contact');
});

document.querySelector('.hero .buttons .git').addEventListener('click', () => {
    window.open('https://github.com/ZAQU3O', '_blank'); // Substitua pelo seu GitHub
});

document.querySelector('nav .nav-github-btn').addEventListener('click', () => {
    window.open('https://github.com/ZAQU3O', '_blank'); // Substitua pelo seu GitHub
});

// Configuração EmailJS
const EMAILJS_SERVICE_ID = 'service_zfft89v';
const EMAILJS_TEMPLATE_ID = 'template_rclgdrf';

// Funcionalidade do formulário de contato
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.querySelector('.submit-btn');
    
    // Verificar se o EmailJS está carregado
    if (typeof emailjs === 'undefined') {
        formStatus.className = 'form-status error';
        formStatus.textContent = 'Erro: EmailJS não carregado. Verifique sua conexão com a internet.';
        formStatus.style.display = 'block';
        console.error('EmailJS não está carregado');
        return;
    }
    
    // Mostrar loading
    submitBtn.innerHTML = '<span>Enviando...</span><i class="ri-loader-4-line"></i>';
    submitBtn.disabled = true;
    
    try {
        // Preparar dados do formulário
        const templateParams = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            budget: document.getElementById('budget').value || 'Não especificado',
            message: document.getElementById('message').value
        };
        
        console.log('Enviando email com os dados:', templateParams);
        
        // Enviar email via EmailJS
        const response = await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams
        );
        
        console.log('Email enviado com sucesso:', response);
        
        if (response.status === 200) {
            // Sucesso
            formStatus.className = 'form-status success';
            formStatus.textContent = 'Mensagem enviada com sucesso! Entrarei em contato em breve.';
            formStatus.style.display = 'block';
            
            // Resetar formulário
            form.reset();
            
            // Ocultar status após 5 segundos
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        } else {
            throw new Error('Erro ao enviar email');
        }
        
    } catch (error) {
        console.error('Erro ao enviar email:', error);
        console.error('Detalhes do erro:', error.text || error.message);
        
        // Erro
        formStatus.className = 'form-status error';
        formStatus.textContent = `Erro: ${error.text || error.message || 'Verifique sua conexão e tente novamente.'}`;
        formStatus.style.display = 'block';
    } finally {
        // Restaurar botão
        submitBtn.innerHTML = '<span>Enviar Mensagem</span><i class="ri-send-plane-line"></i>';
        submitBtn.disabled = false;
    }
});

// Validação em tempo real
document.querySelectorAll('#contactForm input, #contactForm select, #contactForm textarea').forEach(field => {
    field.addEventListener('blur', () => {
        if (field.hasAttribute('required') && !field.value.trim()) {
            field.style.borderColor = '#dc3545';
        } else {
            field.style.borderColor = '#dedede';
        }
    });
    
    field.addEventListener('input', () => {
        if (field.style.borderColor === 'rgb(220, 53, 69)') {
            field.style.borderColor = '#dedede';
        }
    });
});