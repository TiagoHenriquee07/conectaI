// Students data
const studentsData = [
    {
        id: 0,
        name: "Tiago",
        photo: "../fotos-alunos/titi.jpg",
        description: "Entusiasta da tecnologia e futuro desenvolvedor.",
        fullBio: "Tiago é um aluno dedicado com grande interesse em desenvolvimento web. Ele busca constantemente aprender novas tecnologias e aplicar seus conhecimentos em projetos práticos. Sonha em criar soluções inovadoras que impactem positivamente a sociedade.",
        skills: ["HTML", "CSS", "JavaScript", "Resolução de Problemas"],
        goals: "Tornar-se um desenvolvedor full-stack e contribuir para projetos de código aberto."
    },
    {
        id: 0,
        name: "Pedro Soto",
        photo: "../fotos-alunos/des.png",
        description: "Entusiasta da tecnologia e futuro desenvolvedor.",
        fullBio: "Fábio é um aluno dedicado com grande interesse em desenvolvimento web. Ele busca constantemente aprender novas tecnologias e aplicar seus conhecimentos em projetos práticos. Sonha em criar soluções inovadoras que impactem positivamente a sociedade.",
        skills: ["HTML", "CSS", "JavaScript", "Resolução de Problemas"],
        goals: "Tornar-se um desenvolvedor full-stack e contribuir para projetos de código aberto."
    },
    {
        id: 1,
        name: "Fabio",
        photo: "../fotos-alunos/des.png",
        description: "Entusiasta da tecnologia e futuro desenvolvedor.",
        fullBio: "Fábio é um aluno dedicado com grande interesse em desenvolvimento web. Ele busca constantemente aprender novas tecnologias e aplicar seus conhecimentos em projetos práticos. Sonha em criar soluções inovadoras que impactem positivamente a sociedade.",
        skills: ["HTML", "CSS", "JavaScript", "Resolução de Problemas"],
        goals: "Tornar-se um desenvolvedor full-stack e contribuir para projetos de código aberto."
    },
    {
        id: 2,
        name: "Stefani",
        photo: "../fotos-alunos/des.png",
        description: "Apaixonada por design e experiência do usuário.",
        fullBio: "Stephany tem um olhar apurado para o design e uma paixão por criar interfaces intuitivas e agradáveis. Ela acredita que a tecnologia deve ser acessível e fácil de usar para todos, e dedica-se a aprimorar suas habilidades em UX/UI.",
        skills: ["UI/UX Design", "Figma", "CSS", "Pensamento Criativo"],
        goals: "Trabalhar como designer de produto e criar experiências digitais memoráveis."
    },
    {
        id: 3,
        name: "Alana",
        photo: "../fotos-alunos/des.png",
        description: "Focada em lógica de programação e análise de dados.",
        fullBio: "Alana é uma pensadora analítica, com forte aptidão para lógica de programação e análise de dados. Ela gosta de desvendar problemas complexos e encontrar soluções eficientes, sempre buscando aprimorar suas habilidades em algoritmos e estruturas de dados.",
        skills: ["Lógica de Programação", "Python", "SQL", "Análise de Dados"],
        goals: "Atuar como cientista de dados ou engenheira de software, resolvendo desafios complexos."
    },
    {
        id: 4,
        name: "Lavínia",
        photo: "../fotos-alunos/des.png",
        description: "Comunicação e desenvolvimento de software.",
        fullBio: "Lavínia se destaca pela sua excelente comunicação e habilidade de trabalhar em equipe. Ela vê a programação como uma ferramenta para transformar ideias em realidade e está sempre disposta a colaborar e aprender com os colegas.",
        skills: ["Comunicação", "Trabalho em Equipe", "JavaScript", "HTML"],
        goals: "Integrar equipes de desenvolvimento ágil e criar aplicações que facilitem a vida das pessoas."
    },
    {
        id: 5,
        name: "Medelen",
        photo: "../fotos-alunos/des.png",
        description: "Curioso e com sede de conhecimento em novas tecnologias.",
        fullBio: "Medellin é um aluno extremamente curioso, sempre em busca de novas tecnologias e tendências do mercado. Ele adora experimentar e colocar a mão na massa, transformando cada desafio em uma oportunidade de aprendizado e crescimento.",
        skills: ["Pesquisa", "Adaptabilidade", "Front-end", "Back-end"],
        goals: "Explorar diferentes áreas da tecnologia e se especializar em desenvolvimento de sistemas distribuídos."
    },
    {
        id: 6,
        name: "Ana Clara",
        photo: "../fotos-alunos/des.png",
        description: "Organizada e detalhista em seus projetos.",
        fullBio: "Ana Clara é conhecida por sua organização e atenção aos detalhes, qualidades essenciais para o desenvolvimento de software de alta qualidade. Ela se dedica a escrever códigos limpos e eficientes, sempre buscando as melhores práticas.",
        skills: ["Organização", "Atenção aos Detalhes", "CSS", "JavaScript"],
        goals: "Tornar-se uma engenheira de software focada em qualidade e manutenção de código."
    },
    {
        id: 7,
        name: "Gabriel",
        photo: "../fotos-alunos/des.png",
        description: "Pensador crítico e solucionador de problemas.",
        fullBio: "Gabriel possui uma mente analítica e uma paixão por resolver problemas complexos. Ele aborda cada desafio com uma perspectiva crítica, buscando as raízes dos problemas para desenvolver soluções robustas e escaláveis.",
        skills: ["Pensamento Crítico", "Algoritmos", "Python", "Estrutura de Dados"],
        goals: "Trabalhar com desenvolvimento de inteligência artificial ou machine learning."
    },
    {
        id: 8,
        name: "Matheus Fantuzo",
        photo: "../fotos-alunos/des.png",
        description: "Criativo e inovador no desenvolvimento de aplicações.",
        fullBio: "Matheus é um aluno criativo que adora inovar e pensar fora da caixa. Ele se sente motivado a criar aplicações que não apenas funcionem, mas que também ofereçam uma experiência única e diferenciada aos usuários.",
        skills: ["Criatividade", "Inovação", "JavaScript", "Node.js"],
        goals: "Liderar equipes de desenvolvimento de produtos e lançar startups de tecnologia."
    },
    {
        id: 9,
        name: "Weverton",
        photo: "../fotos-alunos/des.png",
        description: "Focado em back-end e otimização de sistemas.",
        fullBio: "Weverton tem um forte interesse em desenvolvimento back-end, dedicando-se a construir sistemas robustos e eficientes. Ele busca otimizar o desempenho das aplicações e garantir a segurança dos dados, sempre com foco na escalabilidade.",
        skills: ["Back-end", "Node.js", "APIs REST", "Banco de Dados"],
        goals: "Tornar-se um especialista em arquitetura de sistemas e desenvolvimento de APIs."
    },
    {
        id: 10,
        name: "Vinicius",
        photo: "../fotos-alunos/des.png",
        description: "Entusiasta de novas linguagens de programação.",
        fullBio: "Vinicius é um entusiasta de novas linguagens de programação e frameworks. Ele adora explorar diferentes paradigmas de programação e está sempre em busca de ferramentas que possam aprimorar seu fluxo de trabalho e a qualidade de seu código.",
        skills: ["Aprendizado Contínuo", "Java", "Python", "Frameworks"],
        goals: "Dominar diversas linguagens e atuar em projetos de grande escala e complexidade."
    },
    {
        id: 11,
        name: "Teraoka",
        photo: "../fotos-alunos/des.png",
        description: "Habilidades em front-end e usabilidade.",
        fullBio: "Teraoka demonstra grande habilidade no desenvolvimento front-end, com foco em criar interfaces que sejam não apenas bonitas, mas também altamente usáveis. Ele se preocupa com a experiência do usuário e a acessibilidade das aplicações.",
        skills: ["Front-end", "React", "JavaScript", "Usabilidade"],
        goals: "Ser um desenvolvedor front-end de referência, criando interfaces inovadoras e acessíveis."
    },
    {
        id: 12,
        name: "Pietro",
        photo: "../fotos-alunos/des.png",
        description: "Focado em segurança da informação e redes.",
        fullBio: "Pietro tem um interesse profundo em segurança da informação e redes. Ele entende a importância de proteger dados e sistemas, e busca constantemente aprimorar seus conhecimentos em cibersegurança para garantir a integridade das aplicações.",
        skills: ["Segurança da Informação", "Redes", "Linux", "Criptografia"],
        goals: "Trabalhar como engenheiro de segurança ou analista de cibersegurança."
    },
    {
        id: 13,
        name: "Yasmin",
        photo: "../fotos-alunos/des.png",
        description: "Dedicada ao desenvolvimento mobile.",
        fullBio: "Yasmin é apaixonada por desenvolvimento mobile, com o objetivo de criar aplicativos que facilitem a vida das pessoas no dia a dia. Ela se dedica a aprender as melhores práticas de desenvolvimento para iOS e Android.",
        skills: ["Desenvolvimento Mobile", "Kotlin", "Swift", "UI Mobile"],
        goals: "Desenvolver aplicativos mobile inovadores e de alto impacto para grandes empresas."
    },
    {
        id: 14,
        name: "Celso",
        photo: "../fotos-alunos/celsu.jpg",
        description: "Experiência em gerenciamento de projetos e liderança.",
        fullBio: "Celso possui uma forte veia para gerenciamento de projetos e liderança. Ele gosta de organizar equipes, definir metas e garantir que os projetos sejam entregues com sucesso, sempre motivando seus colegas a alcançarem seu potencial máximo.",
        skills: ["Gerenciamento de Projetos", "Liderança", "Metodologias Ágeis", "Comunicação"],
        goals: "Atuar como gerente de projetos de tecnologia, liderando equipes de alta performance."
    },
    {
        id: 15,
        name: "Henri",
        photo: "../fotos-alunos/des.png",
        description: "Foco em inteligência artificial e aprendizado de máquina.",
        fullBio: "Henri é fascinado por inteligência artificial e aprendizado de máquina. Ele busca entender como essas tecnologias podem ser aplicadas para resolver problemas do mundo real e está sempre estudando os algoritmos e modelos mais recentes.",
        skills: ["Inteligência Artificial", "Machine Learning", "Python", "Matemática"],
        goals: "Pesquisar e desenvolver soluções inovadoras em IA, contribuindo para o avanço da área."
    },
    {
        id: 16,
        name: "Matheus",
        photo: "../fotos-alunos/des.png",
        description: "Versátil e com grande capacidade de adaptação.",
        fullBio: "Matheus Mapoko é um aluno versátil, com grande capacidade de adaptação a diferentes tecnologias e ambientes de trabalho. Ele se destaca pela sua proatividade e pela facilidade em aprender novas ferramentas e conceitos.",
        skills: ["Adaptabilidade", "Proatividade", "Full-stack", "Cloud Computing"],
        goals: "Trabalhar em empresas de tecnologia que valorizam a inovação e o desenvolvimento contínuo."
    },
    {
        id: 17,
        name: "João Pedro Fantini",
        photo: "../fotos-alunos/des.png",
        description: "Interessado em automação e otimização de processos.",
        fullBio: "João tem um grande interesse em automação e otimização de processos. Ele busca maneiras de tornar as tarefas mais eficientes e menos repetitivas, utilizando a programação para criar soluções que economizem tempo e recursos.",
        skills: ["Automação", "Scripting", "Python", "DevOps"],
        goals: "Atuar como engenheiro de automação ou DevOps, melhorando a infraestrutura de software."
    }
];

// DOM Elements
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const modal = document.getElementById("studentModal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.querySelector(".close");
const studentsGrid = document.getElementById("studentsGrid");


// Mobile Menu Toggle
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Header background on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 100) {
        header.style.background = "rgba(255, 255, 255, 0.98)";
        header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
    } else {
        header.style.background = "rgba(255, 255, 255, 0.95)";
        header.style.boxShadow = "none";
    }
});

// Animated counters
function animateCounters() {
    const counters = document.querySelectorAll(".stat-number");
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute("data-target"));
        const increment = target / 100;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                setTimeout(updateCounter, 20);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            
            // Animate counters when hero section is visible
            if (entry.target.classList.contains("hero-stats")) {
                animateCounters();
            }
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
    const animatedElements = document.querySelectorAll(".section-header, .student-card, .programa-card, .timeline-item, .equipe-card");
    
    animatedElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.6s ease-out";
        observer.observe(el);
    });
    
    // Observe hero stats
    const heroStats = document.querySelector(".hero-stats");
    if (heroStats) {
        observer.observe(heroStats);
    }
});

// Render students
function renderStudents(students = studentsData) {
    studentsGrid.innerHTML = "";
    
    students.forEach(student => {
        const studentCard = document.createElement("div");
        studentCard.className = "student-card";

        
        studentCard.innerHTML = `
            <div class="student-photo">
                <img src="${student.photo}" alt="${student.name}">
            </div>
            <h3 class="student-name">${student.name}</h3>
            <p class="student-description">${student.description}</p>
        `;
        
        studentCard.addEventListener("click", () => openStudentModal(student));
        studentsGrid.appendChild(studentCard);
    });
}



// Open student modal
function openStudentModal(student) {
    modalBody.innerHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <div style="width: 150px; height: 150px; border-radius: 50%; margin: 0 auto 1rem; overflow: hidden; border: 4px solid var(--primary-green);">
                <img src="${student.photo}" alt="${student.name}" style="width: 100%; height: 100%; object-fit: cover;">
            </div>
            <h2 style="color: var(--text-dark); margin-bottom: 0.5rem;">${student.name}</h2>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="color: var(--text-dark); margin-bottom: 1rem;">Sobre</h3>
            <p style="color: var(--text-light); line-height: 1.6;">${student.fullBio}</p>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="color: var(--text-dark); margin-bottom: 1rem;">Habilidades</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                ${student.skills.map(skill => `
                    <span style="background: var(--light-green); color: var(--white); padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.9rem;">${skill}</span>
                `).join("")}
            </div>
        </div>
        
        <div>
            <h3 style="color: var(--text-dark); margin-bottom: 1rem;">Objetivos</h3>
            <p style="color: var(--text-light); line-height: 1.6; font-style: italic;">\"${student.goals}\"</p>
        </div>
    `;
    
    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

// Close modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
});

// Hero CTA button
document.querySelector(".hero-cta").addEventListener("click", () => {
    document.querySelector("#turma").scrollIntoView({
        behavior: "smooth"
    });
});

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
    renderStudents();
    
    // Add loading animation
    setTimeout(() => {
        document.body.classList.add("loaded");
    }, 100);
});

// Parallax effect for hero section
window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector(".hero-background");
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add some interactive effects
document.addEventListener("mousemove", (e) => {
    const cards = document.querySelectorAll(".student-card, .programa-card, .equipe-card");
    
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        } else {
            card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
        }
    });
});

// Add scroll reveal animation
function revealOnScroll() {
    const reveals = document.querySelectorAll(".student-card, .programa-card, .timeline-item, .equipe-card");
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

// Add CSS for scroll reveal
const style = document.createElement("style");
style.textContent = `
    .student-card, .programa-card, .timeline-item, .equipe-card {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.6s ease-out;
    }
    
    .student-card.active, .programa-card.active, .timeline-item.active, .equipe-card.active {
        opacity: 1;
        transform: translateY(0);
    }
    
    body.loaded {
        overflow-x: hidden;
    }
`;
document.head.appendChild(style);