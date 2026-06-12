// ==========================================
// CONFIGURAÇÕES E INICIALIZAÇÃO
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initScrollSuave();
    initContadores();
    initValidacaoFormulario();
    initAnimacaoScroll();
});

// ==========================================
// 1. ROLAGEM SUAVE (SMOOTH SCROLL)
// ==========================================
function initScrollSuave() {
    const linksInternos = document.querySelectorAll('nav a[href^="#"]');
    
    linksInternos.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const href = link.getAttribute('href');
            const targetSection = document.querySelector(href);
            
            if (targetSection) {
                // Calcula a altura do cabeçalho para não cobrir o título da seção
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// 2. CONTADORES DE IMPACTO (ANIMAÇÃO NUMÉRICA)
// ==========================================
// Simulando dados que viriam do banco PostGIS (ex: mudas plantadas, CO2 retido)
const dadosImpacto = {
    mudas: 14250,
    co2: 350, // em toneladas
    voluntarios: 1840
};

function initContadores() {
    // Cria dinamicamente uma barra de conquistas/impacto antes da seção de objetivos
    const objetivosSecao = document.querySelector('#objetivos');
    
    if (objetivosSecao) {
        const dadosContainer = document.createElement('div');
        dadosContainer.
