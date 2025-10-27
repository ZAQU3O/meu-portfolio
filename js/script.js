// Menu Mobile Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const body = document.body;

// Criar botão do menu mobile se não existir
if (!mobileMenuBtn) {
    const menuBtn = document.createElement('button');
    menuBtn.className = 'mobile-menu-btn';
    menuBtn.innerHTML = '<i class="ri-menu-line"></i>';
    document.querySelector('nav').appendChild(menuBtn);
}

// Toggle menu mobile
document.addEventListener('click', (e) => {
    if (e.target.closest('.mobile-menu-btn')) {
        navLinks.classList.toggle('active');
        const icon = e.target.closest('.mobile-menu-btn').querySelector('i');
        icon.className = navLinks.classList.contains('active') ? 'ri-close-line' : 'ri-menu-line';
        body.classList.toggle('menu-open');
    }
});

// Fechar menu ao clicar em um link
navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navLinks.classList.remove('active');
        document.querySelector('.mobile-menu-btn i').className = 'ri-menu-line';
        body.classList.remove('menu-open');
    }
});

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
    const elementsToAnimate = document.querySelectorAll('.about .item, .projects .item, .hero .left-section, .hero img');
    elementsToAnimate.forEach(el => observer.observe(el));
    
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

document.querySelector('nav button').addEventListener('click', () => {
    window.open('https://github.com/ZAQU3O', '_blank'); // Substitua pelo seu GitHub
});

// Funcionalidade do formulário de contato
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.querySelector('.submit-btn');
    
    // Mostrar loading
    submitBtn.innerHTML = '<span>Enviando...</span><i class="ri-loader-4-line"></i>';
    submitBtn.disabled = true;
    
    try {
        // Simular envio (substitua por sua implementação real)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Sucesso
        formStatus.className = 'form-status success';
        formStatus.textContent = 'Mensagem enviada com sucesso! Entrarei em contato em breve.';
        formStatus.style.display = 'block';
        
        // Resetar formulário
        e.target.reset();
        
        // Ocultar status após 5 segundos
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
        
    } catch (error) {
        // Erro
        formStatus.className = 'form-status error';
        formStatus.textContent = 'Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente.';
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