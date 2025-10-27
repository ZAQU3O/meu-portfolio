# 🔧 Guia de Teste - Menu Mobile iPhone XR

## 📱 Problema Identificado
O iPhone XR tem 414px de largura, que deveria ativar o menu mobile, mas pode estar havendo conflitos de CSS.

## ✅ Correções Aplicadas

### 1. **CSS Mais Específico**
```css
/* Mobile - até 768px */
@media screen and (max-width: 768px) {
    nav .nav-links {
        position: fixed !important;
        right: -100% !important; /* Oculto por padrão */
    }
    
    nav .nav-links.active {
        right: 0 !important; /* Visível quando ativo */
    }
}

/* iPhone XR específico - até 414px */
@media screen and (max-width: 414px) {
    .nav-links {
        width: 250px !important;
        max-width: 75vw !important;
    }
}
```

### 2. **Meta Viewport Otimizado**
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

### 3. **JavaScript com Debug**
- Console logs para identificar problemas
- Detecção específica de largura do dispositivo

## 🧪 Como Testar

### **Opção 1: Simulador no Desktop**
1. Abra o site no Chrome/Firefox
2. Pressione F12 (DevTools)
3. Clique no ícone de dispositivo móvel 📱
4. Selecione "iPhone XR" ou defina 414x896
5. Recarregue a página (F5)
6. Verifique se o botão hambúrguer aparece
7. Teste clicando no botão

### **Opção 2: Dispositivo Real**
1. Abra o site no iPhone XR
2. Abra o console (Safari > Desenvolver > Console)
3. Verifique as mensagens de debug:
   - "Largura: 414px"
   - "Media query mobile (768px) ativa"
   - "Media query iPhone XR (414px) ativa"

## 🔍 Debug Incluído

O arquivo `debug-mobile.js` foi temporariamente incluído e mostra:
- Largura atual do dispositivo
- Estado dos elementos do menu
- Quais media queries estão ativas
- Estilos CSS aplicados

## 📋 Checklist de Verificação

- [ ] Largura detectada: 414px
- [ ] Botão hambúrguer visível
- [ ] Menu oculto por padrão (right: -100%)
- [ ] Clique no botão abre o menu (right: 0)
- [ ] Overlay escuro aparece
- [ ] Clique no overlay fecha o menu

## 🚨 Se Ainda Não Funcionar

1. **Limpe o cache do navegador**
2. **Verifique no console se há erros JavaScript**
3. **Teste em modo privado/incógnito**
4. **Verifique se o CSS está sendo carregado**

## 🗑️ Remover Debug

Após confirmar que funciona, remova esta linha do HTML:
```html
<script src="debug-mobile.js"></script>
```