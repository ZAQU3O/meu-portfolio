# Meu Portfólio Moderno – Zaqueu

## ✨ Destaques do Projeto

### Funcionalidade e Visual
- **Menu responsivo**: Hambúrguer mobile, navegação suave e conectada.
- **Layout moderno**: Hero, métricas, depoimentos, cards de projetos reais online.
- **Animações**: Elementos animados com Intersection Observer.
- **Imagens otimizadas**: Lazy loading e personalização.
- **Formulário de contato**: Validação, integração EmailJS (ou Netlify Forms).

### Conteúdo e Personalização
- **Seções**: Hero, Sobre, Projetos, Métricas, Depoimentos, Contato.
- **Projetos reais**: Cards com links para projetos online.
- **Imagens e textos**: Totalmente personalizáveis.
- **Links sociais**: WhatsApp, Instagram, Discord, GitHub.

### Performance e SEO
- **Meta tags completas**: Description, Open Graph, Twitter Cards.
- **HTML5 semântico**: Estrutura otimizada para indexação.
- **Responsividade**: Desktop, tablet e mobile.

## ⚙️ Como Personalizar

### Links Sociais (js/script.js)
Edite os links para seus perfis reais:
```javascript
// ...existing code...
if (iconClass.includes('whatsapp')) {
    url = 'https://wa.me/SEU_NUMERO';
} else if (iconClass.includes('instagram')) {
    url = 'https://instagram.com/SEU_USUARIO';
} else if (iconClass.includes('discord')) {
    url = 'https://discord.gg/SEU_SERVIDOR';
}
```

### Links dos Projetos
Atualize os cards de projetos com URLs reais e imagens.

### Meta Tags (index.html)
Edite as URLs nas meta tags:
```html
<meta property="og:url" content="https://SEU-DOMINIO.com/">
<meta property="og:image" content="https://SEU-DOMINIO.com/imgs/sua-imagem.jpg">
```

### Formulário de Contato
O formulário pode ser integrado com:
- **EmailJS** (já configurado)
- **Netlify Forms** (se hospedado no Netlify)
- **Formspree**
- **Backend próprio** (Node.js, Express)

### Configuração Final do EmailJS (Validada)

No JavaScript, o projeto usa dois templates:

```javascript
const EMAILJS_SERVICE_ID = 'service_zfft89v';
const EMAILJS_TEMPLATE_ID = 'template_rclgdrf';          // notificacao para voce
const EMAILJS_AUTOREPLY_TEMPLATE_ID = 'template_q98lxkg'; // resposta automatica para cliente
```

Variáveis enviadas no formulário:

```javascript
{
    name,
    email,
    to_email,
    subject,
    budget,
    message
}
```

No template de auto-resposta do EmailJS:
- **To Name**: `{{name}}`
- **To Email**: `{{email}}` (ou `{{to_email}}`)

Isso garante que a auto-resposta seja enviada para o cliente, e não para seu próprio email.

### Proteção Anti-Spam Simples (Já Aplicada)

O formulário possui duas proteções leves:
- **Honeypot**: campo oculto (`company`) para bloquear bots.
- **Tempo mínimo de envio**: bloqueia envios feitos em menos de 4 segundos após abrir a página.

Essas medidas reduzem spam sem prejudicar a experiência de usuários reais.

## 📁 Estrutura do Projeto

```
meu-portfolio/
├── index.html        # Página principal
├── css/
│   └── style.css     # Estilos e responsividade
├── js/
│   └── script.js     # Funcionalidades JS
└── imgs/
    ├── ...           # Imagens do site
```

## 🚦 Próximos Passos

### Imediatos
1. Atualizar links e imagens dos projetos reais
2. Configurar backend do formulário (EmailJS ou Netlify Forms)
3. Testar responsividade em todos os dispositivos

### Curto Prazo
1. Otimizar imagens (WebP)
2. Implementar Google Analytics
3. Melhorar acessibilidade

### Médio Prazo
1. Modo escuro
2. Blog integrado
3. Sistema de comentários
4. PWA (Progressive Web App)

## 🛠️ Correções e Melhorias

- Estrutura HTML semântica
- Responsividade aprimorada
- Navegação funcional
- Formulário de contato completo
- Envio com dois templates EmailJS (notificação + auto-resposta)
- Proteção anti-spam (honeypot + tempo mínimo)
- Meta tags para SEO
- Cards de projetos reais online
- Métricas e depoimentos
- Visual moderno (bordas, sombras, gradientes)

## 📱 Teste de Responsividade

O site é totalmente responsivo:
- **Desktop**: Layout completo e visual moderno
- **Tablet**: Adaptação automática
- **Mobile**: Menu hambúrguer, layout otimizado, cards ajustados

## 🧪 Como Testar

1. Abra o `index.html` no navegador
2. Navegue entre as seções
3. Teste o menu mobile (redimensione a janela)
4. Teste o formulário de contato
5. Verifique os links sociais e projetos

## 🚀 Deploy

Para publicar seu portfólio:
1. **Netlify**: Fácil deploy, suporte a formulários
2. **GitHub Pages**: Simples e gratuito
3. **Vercel**: Ótimo para projetos estáticos
4. **Hospedagem tradicional**: Qualquer servidor web

---

---

**Desenvolvido com ❤️ para criar uma experiência profissional, moderna e responsiva**