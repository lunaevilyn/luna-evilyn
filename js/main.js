// Dados da Timeline
const timelineData = [
    {
        year: '2022',
        title: 'Graduação em Medicina',
        description: 'Início do curso de Medicina na Universidade Federal do Ceará (UFC), com formação sólida em clínica geral e medicina preventiva.',
        icon: 'fa-graduation-cap'
    },
    {
        year: '2024',
        title: 'Formação em Medicina',
        description: 'Conclusão do curso de Medicina com honras acadêmicas e prêmio de melhor TCC sobre "Medicina Preventiva e Promoção da Saúde".',
        icon: 'fa-user-md'
    },
    {
        year: '2024',
        title: 'Residência Médica em Clínica Geral',
        description: 'Início da residência em Clínica Médica no Hospital Geral de Fortaleza, com formação completa em medicina interna e emergência.',
        icon: 'fa-hospital'
    },
    {
        year: '2025',
        title: 'Especialização em Medicina de Família',
        description: 'Especialização em Medicina de Família e Comunidade, com foco em atendimento integral e continuidade do cuidado.',
        icon: 'fa-users'
    },
    {
        year: 'Em Andamento',
        title: 'Pós-graduação em Medicina Preventiva',
        description: 'Especialização avançada em Medicina Preventiva e Promoção da Saúde, com ênfase em prevenção de doenças crônicas.',
        icon: 'fa-shield-alt'
    },
    {
        year: 'Em Andamento',
        title: 'Mestrado em Saúde Coletiva',
        description: 'Conclusão do mestrado com pesquisa sobre "Estratégias de Promoção da Saúde na Atenção Primária" na UFC.',
        icon: 'fa-flask'
    }
];

// Dados dos Locais de Trabalho
const workData = [
    {
        title: 'Hospital Geral de Fortaleza',
        role: 'Médica Clínica Geral',
        period: '2020 - Presente',
        description: 'Atendimento em ambulatório de clínica médica, emergência geral, realização de consultas preventivas e acompanhamento de pacientes crônicos.',
        location: {
            address: 'Rua Professor Dias da Rocha, nº 742',
            city: 'Fortaleza',
            state: 'CE',
            phone: '(85) 3101-2000'
        },
        achievements: [
            'Implementação de protocolo de medicina preventiva',
            'Liderança da equipe de clínica médica',
            'Desenvolvimento de programa de promoção da saúde'
        ]
    },
    {
        title: 'Clínica Evilyn - Medicina Integral',
        role: 'Médica Clínica Geral',
        period: '2018 - Presente',
        description: 'Atendimento em consultório particular com foco em medicina preventiva, check-ups completos, acompanhamento familiar e medicina de estilo de vida.',
        location: {
            address: 'Rua Professor Dias da Rocha, nº 742',
            city: 'Fortaleza',
            state: 'CE',
            phone: '(85) 99999-9999'
        },
        achievements: [
            'Aumento de 50% na satisfação dos pacientes',
            'Criação de programa de medicina preventiva familiar',
            'Implementação de telemedicina para consultas de rotina'
        ]
    }
];

// Dados dos Cursos
const coursesData = [
    {
        title: 'Medicina Preventiva e Promoção da Saúde',
        institution: 'Sociedade Brasileira de Medicina de Família',
        duration: '2 anos',
        level: 'Avançado',
        description: 'Especialização completa em medicina preventiva com foco em promoção da saúde, prevenção de doenças crônicas, medicina de estilo de vida e abordagem integral do paciente.',
        image: 'cursos/1-C.png',
        tags: ['Medicina Preventiva', 'Especialização', 'Presencial'],
        info: {
            students: '150',
            modules: '20',
            hours: '1600'
        }
    },
    {
        title: 'Medicina de Família e Comunidade',
        institution: 'Universidade Federal do Ceará',
        duration: '6 meses',
        level: 'Intermediário',
        description: 'Curso avançado em medicina de família com foco no atendimento integral, continuidade do cuidado, medicina baseada em evidências e abordagem biopsicossocial.',
        image: 'cursos/3-C.png',
        tags: ['Medicina de Família', 'Curso Livre', 'Híbrido'],
        info: {
            students: '100',
            modules: '15',
            hours: '360'
        }
    },
    {
        title: 'Check-up Preventivo e Medicina do Estilo de Vida',
        institution: 'Clínica Evilyn',
        duration: '4 meses',
        level: 'Básico',
        description: 'Programa completo de medicina preventiva, incluindo check-ups personalizados, orientação nutricional, prescrição de exercícios e acompanhamento de saúde integral.',
        image: 'cursos/2-C.png',
        tags: ['Medicina do Estilo de Vida', 'Curso Livre', 'Presencial'],
        info: {
            students: '80',
            modules: '10',
            hours: '180'
        }
    },
    {
        title: 'Emergência em Clínica Médica',
        institution: 'Sociedade Brasileira de Clínica Médica',
        duration: '3 meses',
        level: 'Avançado',
        description: 'Curso especializado em emergências clínicas, incluindo suporte básico de vida, manejo de urgências médicas e protocolos de atendimento emergencial atualizados.',
        image: 'cursos/4-C.png',
        tags: ['Emergência', 'Certificação', 'Híbrido'],
        info: {
            students: '60',
            modules: '12',
            hours: '280'
        }
    }
];

// Dados dos Depoimentos
const testimonialsData = [
    {
        name: 'Maria Silva',
        role: 'Paciente',
        text: 'A Dra. Luna é uma médica excepcional! Sua abordagem integral e cuidado com os pacientes são admiráveis. Me sinto muito mais confiante com meu tratamento preventivo e a melhora na minha qualidade de vida foi significativa. ✨',
        image: 'docs/1.png',
        emoji: '💖',
        rating: 5
    },
    {
        name: 'Dr. João Santos',
        role: 'Colega de Trabalho',
        text: 'Uma profissional competente e dedicada, sempre atualizada com as últimas evidências científicas. É um prazer trabalhar ao seu lado! Sua expertise em medicina preventiva e clínica geral é reconhecida por todos. 🏥',
        image: 'docs/4.png',
        emoji: '👨‍⚕️',
        rating: 5
    },
    {
        name: 'Ana Oliveira',
        role: 'Paciente',
        text: 'O atendimento da Dra. Luna é único! Ela tem uma forma especial de explicar tudo com clareza e paciência. Sua abordagem humanizada e medicina preventiva fez toda a diferença na minha saúde. Recomendo muito! 🌟',
        image: 'docs/3.png',
        emoji: '💫',
        rating: 5
    },
    {
        name: 'Roberto Almeida',
        role: 'Paciente',
        text: 'Após anos de problemas de saúde, encontrei na Dra. Luna uma médica que realmente se importa. Seu conhecimento em medicina preventiva e cuidado integral transformaram minha vida. Sou muito grato! ❤️',
        image: 'docs/2.png',
        emoji: '🙏',
        rating: 5
    }
];

// Dados da Seção Sobre
const aboutData = {
    stats: [
        {
            number: '8+',
            label: 'Anos de Experiência'
        },
        {
            number: '3000+',
            label: 'Pacientes Atendidos'
        },
        {
            number: '25+',
            label: 'Publicações Científicas'
        }
    ],
    skills: [
        'Medicina Preventiva',
        'Clínica Médica Geral',
        'Medicina de Família',
        'Check-up Preventivo',
        'Medicina do Estilo de Vida',
        'Promoção da Saúde',
        'Atenção Primária',
        'Saúde Coletiva'
    ]
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar todas as seções
    initializeParticles();
    initializeNavigation();
    initializeTimeline();
    initializeWorkSection();
    initializeCourses();
    initializeTestimonials();
    initializeContactForm();
    initializeWelcomePopup();
    initializeBackToTop();
    initializeDarkMode();
    initializeScrollAnimations();
    initializeAboutSection();

    // Garantir que as seções sejam visíveis
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '1';
        section.style.visibility = 'visible';
    });

    // Adicionar classe active ao primeiro slide dos depoimentos
    const firstTestimonial = document.querySelector('.testimonial');
    if (firstTestimonial) {
        firstTestimonial.classList.add('active');
    }

    // Inicializar o primeiro dot dos depoimentos
    const firstDot = document.querySelector('.testimonial-dot');
    if (firstDot) {
        firstDot.classList.add('active');
    }
});

// Função para garantir que as seções sejam visíveis
function ensureSectionsVisible() {
    document.querySelectorAll('section').forEach(section => {
        if (section.offsetParent === null) {
            section.style.display = 'block';
            section.style.opacity = '1';
            section.style.visibility = 'visible';
        }
    });
}

// Adicionar verificação periódica de visibilidade
setInterval(ensureSectionsVisible, 1000);

// Partículas
function initializeParticles() {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#ffffff'
            },
            shape: {
                type: 'circle'
            },
            opacity: {
                value: 0.5,
                random: true
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
}

// Navegação
function initializeNavigation() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Timeline
function initializeTimeline() {
    const timelineContainer = document.querySelector('.timeline-container');
    let delay = 0;
    
    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'}`;
        
        // Adicionar dados extras para efeitos visuais
        const progress = ((index + 1) / timelineData.length) * 100;
        
        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-icon">
                    <i class="fas ${item.icon}"></i>
                </div>
                <div class="timeline-year">${item.year}</div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="timeline-progress">
                    <div class="progress-bar" style="width: ${progress}%"></div>
                </div>
            </div>
        `;
        
        timelineContainer.appendChild(timelineItem);
        
        // Animar entrada com delay sequencial
        setTimeout(() => {
            timelineItem.classList.add('visible');
            
            // Adicionar efeito de destaque ao passar o mouse
            timelineItem.addEventListener('mouseenter', () => {
                const icon = timelineItem.querySelector('.timeline-icon');
                icon.style.transform = 'scale(1.2) rotate(10deg)';
                
                // Destacar outros itens
                document.querySelectorAll('.timeline-item').forEach(otherItem => {
                    if (otherItem !== timelineItem) {
                        otherItem.style.opacity = '0.5';
                    }
                });
            });
            
            timelineItem.addEventListener('mouseleave', () => {
                const icon = timelineItem.querySelector('.timeline-icon');
                icon.style.transform = 'scale(1) rotate(0)';
                
                // Restaurar opacidade dos outros itens
                document.querySelectorAll('.timeline-item').forEach(otherItem => {
                    otherItem.style.opacity = '1';
                });
            });
            
            // Adicionar efeito de clique
            timelineItem.addEventListener('click', () => {
                timelineItem.classList.add('active');
                setTimeout(() => {
                    timelineItem.classList.remove('active');
                }, 1000);
            });
        }, delay);
        
        delay += 300; // Incrementar delay para cada item
    });
    
    // Adicionar observador de scroll para animações
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    });
    
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });
}

// Seção de Trabalho
function initializeWorkSection() {
    const workGrid = document.querySelector('.work-grid');
    
    workData.forEach(item => {
        const workCard = document.createElement('div');
        workCard.className = 'work-card';
        
        workCard.innerHTML = `
            <h3>${item.title}</h3>
            <p class="role">${item.role}</p>
            <p class="period">${item.period}</p>
            <p class="description">${item.description}</p>
            
            <div class="achievements">
                <h4>Conquistas Principais:</h4>
                <ul>
                    ${item.achievements.map(achievement => `
                        <li>
                            <i class="fas fa-check-circle"></i>
                            ${achievement}
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="location-info">
                <i class="fas fa-map-marker-alt location-icon"></i>
                <div class="location-details">
                    <p>${item.location.address}</p>
                    <p>${item.location.city} - ${item.location.state}</p>
                    <p><i class="fas fa-phone"></i> ${item.location.phone}</p>
                </div>
            </div>
        `;
        
        workGrid.appendChild(workCard);
        
        // Adicionar efeitos de hover
        workCard.addEventListener('mouseenter', () => {
            workCard.style.transform = 'translateY(-10px)';
            workCard.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)';
        });
        
        workCard.addEventListener('mouseleave', () => {
            workCard.style.transform = 'translateY(0)';
            workCard.style.boxShadow = 'var(--shadow)';
        });
        
        // Adicionar efeito de clique
        workCard.addEventListener('click', () => {
            workCard.classList.add('active');
            setTimeout(() => {
                workCard.classList.remove('active');
            }, 1000);
        });
    });
    
    // Adicionar animações de entrada
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('.work-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        observer.observe(card);
    });
}

// Cursos
function initializeCourses() {
    const coursesGrid = document.querySelector('.courses-grid');
    
    coursesData.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        
        courseCard.innerHTML = `
            <div class="course-image">
                <img src="${course.image}" alt="${course.title}">
                <div class="course-overlay">
                    <div class="course-level">${course.level}</div>
                </div>
            </div>
            
            <div class="course-content">
                <h3 class="course-title">${course.title}</h3>
                
                <div class="course-info">
                    <div class="course-info-item">
                        <i class="fas fa-users"></i>
                        ${course.info.students} alunos
                    </div>
                    <div class="course-info-item">
                        <i class="fas fa-book"></i>
                        ${course.info.modules} módulos
                    </div>
                    <div class="course-info-item">
                        <i class="fas fa-clock"></i>
                        ${course.info.hours}h
                    </div>
                </div>
                
                <p class="course-description">${course.description}</p>
                
                <div class="course-tags">
                    ${course.tags.map(tag => `
                        <span class="course-tag">${tag}</span>
                    `).join('')}
                </div>
                
                <div class="course-footer">
                    <button class="course-button">
                        Saiba Mais
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
            
            <div class="course-progress">
                <div class="course-progress-bar"></div>
            </div>
        `;
        
        coursesGrid.appendChild(courseCard);
        
        // Adicionar efeitos de hover
        const card = courseCard;
        const image = card.querySelector('.course-image img');
        const overlay = card.querySelector('.course-overlay');
        const level = card.querySelector('.course-level');
        const progressBar = card.querySelector('.course-progress-bar');
        
        card.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.1)';
            overlay.style.opacity = '1';
            level.style.transform = 'translateY(0)';
            level.style.opacity = '1';
            progressBar.style.width = '100%';
        });
        
        card.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1)';
            overlay.style.opacity = '0';
            level.style.transform = 'translateY(-10px)';
            level.style.opacity = '0';
            progressBar.style.width = '0';
        });
        
        // Adicionar efeito de clique
        const button = card.querySelector('.course-button');
        button.addEventListener('click', () => {
            card.classList.add('active');
            setTimeout(() => {
                card.classList.remove('active');
            }, 1000);
        });
    });
    
    // Adicionar animações de entrada
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('.course-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        observer.observe(card);
    });
}

// Depoimentos
function initializeTestimonials() {
    const slider = document.querySelector('.testimonial-slider');
    const track = document.createElement('div');
    track.className = 'testimonial-track';
    slider.appendChild(track);
    
    let currentSlide = 0;
    let isAnimating = false;
    
    // Criar slides
    testimonialsData.forEach((item, index) => {
        const testimonial = document.createElement('div');
        testimonial.className = `testimonial ${index === 0 ? 'active' : ''}`;
        
        testimonial.innerHTML = `
            <div class="testimonial-content">
                <div class="testimonial-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="testimonial-emoji">${item.emoji}</div>
                <p class="testimonial-text">${item.text}</p>
                <div class="testimonial-rating">
                    ${Array(item.rating).fill('<i class="fas fa-star"></i>').join('')}
                </div>
                <div class="testimonial-author">
                    <h4>${item.name}</h4>
                    <p class="testimonial-role">${item.role}</p>
                </div>
            </div>
        `;
        
        track.appendChild(testimonial);
    });
    
    // Criar navegação
    const nav = document.createElement('div');
    nav.className = 'testimonial-nav';
    nav.innerHTML = `
        <button class="prev-btn"><i class="fas fa-chevron-left"></i></button>
        <button class="next-btn"><i class="fas fa-chevron-right"></i></button>
    `;
    slider.appendChild(nav);
    
    // Criar dots
    const dots = document.createElement('div');
    dots.className = 'testimonial-dots';
    testimonialsData.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `testimonial-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(index));
        dots.appendChild(dot);
    });
    slider.appendChild(dots);
    
    // Funções de navegação
    function goToSlide(index) {
        console.log('Ir para slide:', index);
        if (isAnimating) return;
        isAnimating = true;
        
        const testimonials = document.querySelectorAll('.testimonial');
        const dots = document.querySelectorAll('.testimonial-dot');
        
        // Mover o track para o slide correto
        track.style.transform = `translateX(-${index * 100}%)`;

        testimonials[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        
        currentSlide = index;
        
        testimonials[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
        
        // Adicionar efeito de entrada
        const emoji = testimonials[currentSlide].querySelector('.testimonial-emoji');
        emoji.style.animation = 'none';
        emoji.offsetHeight; // Forçar reflow
        emoji.style.animation = 'bounce 1s infinite';
        
        setTimeout(() => {
            isAnimating = false;
        }, 500);
    }
    
    // Event listeners para navegação
    document.querySelector('.prev-btn').addEventListener('click', () => {
        const newIndex = (currentSlide - 1 + testimonialsData.length) % testimonialsData.length;
        goToSlide(newIndex);
    });
    
    document.querySelector('.next-btn').addEventListener('click', () => {
        const newIndex = (currentSlide + 1) % testimonialsData.length;
        goToSlide(newIndex);
    });
    
    // Auto-play
    let autoplayInterval = setInterval(() => {
        const newIndex = (currentSlide + 1) % testimonialsData.length;
        goToSlide(newIndex);
    }, 5000);
    
    // Pausar auto-play no hover
    slider.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(() => {
            const newIndex = (currentSlide + 1) % testimonialsData.length;
            goToSlide(newIndex);
        }, 5000);
    });
    
    // Adicionar efeitos de hover
    document.querySelectorAll('.testimonial').forEach(testimonial => {
        testimonial.addEventListener('mouseenter', () => {
            const image = testimonial.querySelector('.testimonial-image');
            const emoji = testimonial.querySelector('.testimonial-emoji');
            const rating = testimonial.querySelector('.testimonial-rating');
            
            image.style.transform = 'scale(1.1) rotate(5deg)';
            emoji.style.transform = 'scale(1.2)';
            rating.style.transform = 'scale(1.1)';
        });
        
        testimonial.addEventListener('mouseleave', () => {
            const image = testimonial.querySelector('.testimonial-image');
            const emoji = testimonial.querySelector('.testimonial-emoji');
            const rating = testimonial.querySelector('.testimonial-rating');
            
            image.style.transform = 'scale(1) rotate(0)';
            emoji.style.transform = 'scale(1)';
            rating.style.transform = 'scale(1)';
        });
    });
}

// Formulário de Contato
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    const successMessage = document.createElement('div');
    successMessage.className = 'form-success';
    successMessage.innerHTML = '<i class="fas fa-check-circle"></i> Mensagem enviada com sucesso!';
    document.body.appendChild(successMessage);
    
    // Dados de contato
    const contactData = {
        address: 'Rua Professor Dias da Rocha, nº 742',
        city: 'Fortaleza',
        state: 'CE',
        phone: '(85) 99999-9999',
        email: 'contato@lunaevilyn.com.br',
        whatsapp: '(85) 99999-9999'
    };
    
    // Inicializar informações de contato
    const contactInfo = document.querySelector('.contact-info');
    contactInfo.innerHTML = `
        <h2>Entre em Contato</h2>
        <p>Estou à disposição para cuidar da sua saúde de forma integral e preventiva. Entre em contato através dos canais abaixo ou preencha o formulário para agendar sua consulta.</p>
        
        <div class="contact-details">
            <div class="contact-item">
                <div class="contact-icon">
                    <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="contact-text">
                    <h4>Endereço</h4>
                    <p>${contactData.address}<br>${contactData.city} - ${contactData.state}</p>
                </div>
            </div>
            
            <div class="contact-item">
                <div class="contact-icon">
                    <i class="fas fa-phone"></i>
                </div>
                <div class="contact-text">
                    <h4>Telefone</h4>
                    <p>${contactData.phone}</p>
                </div>
            </div>
            
            <div class="contact-item">
                <div class="contact-icon">
                    <i class="fas fa-envelope"></i>
                </div>
                <div class="contact-text">
                    <h4>E-mail</h4>
                    <p>${contactData.email}</p>
                </div>
            </div>
            
            <div class="contact-item">
                <div class="contact-icon">
                    <i class="fab fa-whatsapp"></i>
                </div>
                <div class="contact-text">
                    <h4>WhatsApp</h4>
                    <p>${contactData.whatsapp}</p>
                </div>
            </div>
        </div>
        
        <div class="social-links">
            <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
            <a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a>
            <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
        </div>
    `;
    
    // Adicionar efeitos de hover nos itens de contato
    document.querySelectorAll('.contact-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('.contact-icon');
            icon.style.transform = 'scale(1.1) rotate(10deg)';
        });
        
        item.addEventListener('mouseleave', () => {
            const icon = item.querySelector('.contact-icon');
            icon.style.transform = 'scale(1) rotate(0)';
        });
    });
    
    // Validação do formulário
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = form.querySelector('#name').value;
        const email = form.querySelector('#email').value;
        const message = form.querySelector('#message').value;
        
        // Validação básica
        if (!name || !email || !message) {
            showError('Por favor, preencha todos os campos.');
            return;
        }
        
        // Validação de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError('Por favor, insira um e-mail válido.');
            return;
        }
        
        // Simular envio
        const submitButton = form.querySelector('.submit-button');
        submitButton.disabled = true;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        
        setTimeout(() => {
            // Aqui você pode adicionar a lógica real de envio do formulário
            console.log('Formulário enviado:', { name, email, message });
            
            // Mostrar mensagem de sucesso
            successMessage.classList.add('show');
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 3000);
            
            // Resetar formulário
            form.reset();
            submitButton.disabled = false;
            submitButton.innerHTML = 'Enviar Mensagem';
            
            // Resetar labels
            document.querySelectorAll('.form-group label').forEach(label => {
                label.style.top = '1.2rem';
                label.style.left = '1.2rem';
                label.style.fontSize = '1rem';
                label.style.color = '#666';
            });
        }, 1500);
    });
    
    // Adicionar efeitos nos campos do formulário
    document.querySelectorAll('.form-group input, .form-group textarea').forEach(field => {
        field.addEventListener('focus', () => {
            const label = field.nextElementSibling;
            label.style.color = 'var(--primary-color)';
        });
        
        field.addEventListener('blur', () => {
            const label = field.nextElementSibling;
            if (!field.value) {
                label.style.color = '#666';
            }
        });
    });
    
    // Função para mostrar erro
    function showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-error';
        errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
        
        const existingError = form.querySelector('.form-error');
        if (existingError) {
            existingError.remove();
        }
        
        form.insertBefore(errorDiv, form.firstChild);
        
        setTimeout(() => {
            errorDiv.remove();
        }, 3000);
    }
}

// Popup de Boas-vindas
function initializeWelcomePopup() {
    const popup = document.getElementById('welcome-popup');
    const closeBtn = document.querySelector('.close-popup');
    
    // Mostrar popup após 1 segundo
    setTimeout(() => {
        popup.classList.add('active');
    }, 1000);
    
    // Fechar popup
    closeBtn.addEventListener('click', () => {
        popup.classList.remove('active');
    });
    
    // Fechar automaticamente após 5 segundos
    setTimeout(() => {
        popup.classList.remove('active');
    }, 5000);
}

// Botão Voltar ao Topo
function initializeBackToTop() {
    const backToTop = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Modo Escuro
function initializeDarkMode() {
    const darkModeToggle = document.createElement('button');
    darkModeToggle.className = 'dark-mode-toggle';
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    document.body.appendChild(darkModeToggle);
    
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = darkModeToggle.querySelector('i');
        icon.className = document.body.classList.contains('dark-mode') ? 'fas fa-sun' : 'fas fa-moon';
    });
}

// Animações no Scroll
function initializeScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                
                // Adicionar animação específica para cada tipo de elemento
                if (entry.target.classList.contains('work-card')) {
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.opacity = '1';
                } else if (entry.target.classList.contains('testimonial')) {
                    entry.target.style.transform = 'translateX(0)';
                    entry.target.style.opacity = '1';
                }
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observar todos os elementos que devem ser animados
    document.querySelectorAll('section, .work-card, .testimonial, .timeline-item').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease-out';
        observer.observe(element);
    });
}

// Inicialização da Seção Sobre
function initializeAboutSection() {
    const aboutSection = document.querySelector('.about-section');
    const statsContainer = document.querySelector('.about-stats');
    const skillsContainer = document.querySelector('.about-skills');
    
    // Adicionar estatísticas
    aboutData.stats.forEach(stat => {
        const statItem = document.createElement('div');
        statItem.className = 'stat-item';
        
        statItem.innerHTML = `
            <div class="stat-number">${stat.number}</div>
            <div class="stat-label">${stat.label}</div>
        `;
        
        statsContainer.appendChild(statItem);
        
        // Adicionar animação de contagem
        const numberElement = statItem.querySelector('.stat-number');
        const targetNumber = parseInt(stat.number);
        let currentNumber = 0;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const duration = 2000; // 2 segundos
                    const steps = 60;
                    const increment = targetNumber / steps;
                    const stepDuration = duration / steps;
                    
                    const counter = setInterval(() => {
                        currentNumber += increment;
                        if (currentNumber >= targetNumber) {
                            currentNumber = targetNumber;
                            clearInterval(counter);
                        }
                        numberElement.textContent = Math.round(currentNumber) + (stat.number.includes('+') ? '+' : '');
                    }, stepDuration);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.5
        });
        
        observer.observe(statItem);
    });
    
    // Adicionar habilidades
    aboutData.skills.forEach(skill => {
        const skillTag = document.createElement('div');
        skillTag.className = 'skill-tag';
        skillTag.innerHTML = `<span>${skill}</span>`;
        
        skillsContainer.appendChild(skillTag);
        
        // Adicionar efeito de hover
        skillTag.addEventListener('mouseenter', () => {
            skillTag.style.transform = 'translateY(-3px)';
            skillTag.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.1)';
        });
        
        skillTag.addEventListener('mouseleave', () => {
            skillTag.style.transform = 'translateY(0)';
            skillTag.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
        });
    });
    
    // Adicionar animação de entrada para a imagem
    const aboutImage = document.querySelector('.about-image');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutImage.style.opacity = '1';
                aboutImage.style.transform = 'perspective(1000px) rotateY(0deg)';
            }
        });
    }, {
        threshold: 0.2
    });
    
    aboutImage.style.opacity = '0';
    aboutImage.style.transform = 'perspective(1000px) rotateY(-20deg)';
    aboutImage.style.transition = 'all 1s ease';
    
    observer.observe(aboutImage);
    
    // Adicionar efeito parallax na imagem
    aboutSection.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = aboutSection.getBoundingClientRect();
        
        const x = (clientX - left) / width;
        const y = (clientY - top) / height;
        
        aboutImage.style.transform = `
            perspective(1000px)
            rotateY(${(x - 0.5) * 10}deg)
            rotateX(${(y - 0.5) * -10}deg)
        `;
    });
    
    aboutSection.addEventListener('mouseleave', () => {
        aboutImage.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
    });
} 