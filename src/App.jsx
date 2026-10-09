import { useState } from 'react';
import { Code2, Github, Linkedin, Moon, Sun, MapPin, Mail, FileText, UserRound, FolderOpen, GraduationCap, Send, ChevronRight, BriefcaseBusiness, Clock3, CarFront, Languages } from 'lucide-react';
import { projects, technologies, experiences } from './data';

const nav = ['Inicio', 'Sobre mí', 'Proyectos', 'Experiencias', 'Formación', 'Tecnologías', 'Contacto'];

function SectionTitle({ icon: Icon, title, subtitle }) {
  return <div className="section-title"><Icon size={27} /><div><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div></div>;
}

function App() {
  const [lightMode, setLightMode] = useState(false);

  return <div className={`app${lightMode ? ' light-mode' : ''}`}>
    <header className="nav-wrap">
      <nav className="nav container">
        <a className="brand" href="#inicio"><Code2 /><span>Facundo Fernandez</span></a>
        <div className="nav-links">{nav.map((item, index) => <a className={index === 0 ? 'active' : ''} href={`#${item.toLowerCase().replace(' ', '-')}`} key={item}>{item}</a>)}</div>
        <div className="social"><a href="https://github.com/Facundofer" aria-label="GitHub"><Github /></a><a href="https://www.linkedin.com/in/facundo-fernandez-9a16ba212" aria-label="LinkedIn"><Linkedin /></a><button aria-label={lightMode ? 'Activar modo oscuro' : 'Activar modo claro'} onClick={() => setLightMode(mode => !mode)}>{lightMode ? <Sun /> : <Moon />}</button></div>
      </nav>
    </header>

    <main>
      <section id="inicio" className="hero">
        <div className="hero-overlay" />
        <div className="container hero-content">
          <p className="eyebrow">Hola, soy</p>
          <h1>Facundo <span>Fernandez</span></h1>
          <h3>Estudiante de Licenciatura en Sistemas de Información</h3>
          <p className="university">UNLu <i /> 2022 - Actualidad</p>
          <p className="intro">Me interesa el desarrollo de software, especialmente el backend,<br />las bases de datos y la resolución de problemas.</p>
          <div className="hero-actions"><a className="button primary" href="https://github.com/Facundofer"><Github /> Ver mi GitHub</a><a className="button secondary" href={`${import.meta.env.BASE_URL}CV-Facundo-Fernandez.pdf`} download="CV-Facundo-Fernandez.pdf"><FileText /> Descargar CV</a></div>
        </div>
      </section>

      <section id="sobre-mí" className="about container">
        <div className="about-bio">
          <SectionTitle icon={UserRound} title="Sobre mí" />
          <p>Estudiante de la Licenciatura en Sistemas con perfil orientado al desarrollo Backend. Cuento con experiencia técnica práctica en mantenimiento de hardware, diagnóstico de fallas y administración de entornos Linux y Windows. He desarrollado proyectos en C, Java y Python (FastAPI), aplicando arquitectura de APIs REST, gestión de memoria y estructuras de datos. Apasionado por la resolución de problemas y el funcionamiento interno de los sistemas, busco mi primera oportunidad laboral en IT para aportar valor en desarrollo backend o soporte técnico avanzado.</p>
        </div>
        <div className="about-facts">
          <div className="about-fact"><Clock3 /><span>Disponibilidad: Full time</span></div>
          <div className="about-fact"><CarFront /><span>Movilidad propia</span></div>
          <div className="about-fact"><Languages /><span>Español nativo · Inglés B2 · Portugués B1</span></div>
        </div>
      </section>

      <section id="proyectos" className="container projects-section"><SectionTitle icon={FolderOpen} title="Proyectos destacados" subtitle="Algunos de los proyectos en los que trabajé durante la carrera." /><div className="project-grid">{projects.map(project => <article className="project-card" key={project.title}><img src={project.image} alt="" /><h3>{project.title}</h3><p>{project.description}</p><p className="project-learning"><strong>Aprendizajes:</strong> {project.learning}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="card-links"><a href={project.repo} target="_blank" rel="noreferrer"> <Github /> Ver repositorio <ChevronRight /></a></div></article>)}</div></section>

      <section id="experiencias" className="container experience-section">
        <SectionTitle icon={BriefcaseBusiness} title="Experiencia laboral" subtitle="Experiencias profesionales y tareas que formaron mi recorrido." />
        <div className="experience-list">{experiences.map(experience => <article className="experience-card" key={experience.role}>
          <div className="experience-heading"><div><h3>{experience.role}</h3>{experience.company && <p className="experience-company">{experience.company}</p>}</div><span className="experience-period">{experience.period}</span></div>
          <ul>{experience.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
        </article>)}</div>
      </section>

      <section id="formación" className="container education-section">
        <SectionTitle icon={GraduationCap} title="Formación" />
        <div className="education-list">
          <article className="education-item education-primary"><h3>Licenciatura en Sistemas de Información</h3><p>Universidad Nacional de Luján</p><span>2022 – Actualidad</span></article>
          <article className="education-item"><h3>Abogacía</h3><p>Universidad de Buenos Aires (UBA)</p><span>2018 – 2022</span></article>
        </div>
      </section>

      <section id="tecnologías" className="container tech-section"><SectionTitle icon={Code2} title="Tecnologías" subtitle="Herramientas y lenguajes que utilizo y estoy aprendiendo." /><div className="tech-list">{technologies.map((tech, index) => <span key={tech}><b>{['◈','🐍','♨','▤','▰','▱','JS','php'][index]}</b>{tech}</span>)}</div></section>

      <section id="contacto" className="container footer-info"><div><SectionTitle icon={Mail} title="Contacto" /><p>Podés contactarme por cualquiera de estos medios.</p><div className="footer-social"><a href="https://github.com/Facundofer"><Github /> GitHub</a><a href="https://www.linkedin.com/in/facundo-fernandez-9a16ba212"><Linkedin /> LinkedIn</a><a href="mailto:facundo.fernandezfn@gmail.com"><Send /> Email</a></div></div></section>
    </main>
    <footer>Gracias por visitar mi portfolio <i /> Facundo Fernandez <i /> © 2025</footer>
  </div>;
}

export default App;
