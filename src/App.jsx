import { useState } from 'react';
import { Code2, Github, Linkedin, Moon, Sun, MapPin, Mail, FileText, UserRound, FolderOpen, GraduationCap, Send, ChevronRight, BriefcaseBusiness } from 'lucide-react';
import { projects, technologies, experiences } from './data';

const nav = ['Inicio', 'Sobre mí', 'Proyectos', 'Experiencias', 'Tecnologías', 'Contacto'];

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
          <p className="intro">Apasionado por la tecnología y el desarrollo de software.<br />Me enfoco en aprender y mejorar constantemente, con interés<br />especial en el backend, las bases de datos y la resolución de problemas.</p>
          <div className="hero-actions"><a className="button primary" href="https://github.com/Facundofer"><Github /> Ver mi GitHub</a><a className="button secondary" href={`${import.meta.env.BASE_URL}cv-facundo-fernandez.pdf`} download="CV-Facundo-Fernandez.pdf"><FileText /> Descargar CV</a></div>
        </div>
      </section>

      <section id="sobre-mí" className="about container">
        <div className="about-bio"><SectionTitle icon={UserRound} title="Sobre mí" /><p>Soy estudiante de la Licenciatura en Sistemas de Información en la Universidad Nacional de Luján. Me interesa el desarrollo de software, especialmente el backend, las bases de datos y los sistemas. Disfruto aprender nuevas tecnologías y trabajar en proyectos que me permitan seguir creciendo como desarrollador.</p></div>
        <div className="contact-data"><p><a href="https://www.google.com/maps/search/?api=1&query=Pilar%2C+Buenos+Aires%2C+Argentina"><MapPin /></a> <span>Ubicación<b><a href="https://www.google.com/maps/search/?api=1&query=Pilar%2C+Buenos+Aires%2C+Argentina">Pilar, Buenos Aires, Argentina</a></b></span></p><p><Mail /> <span>Email<b><a href="mailto:facundofernandez@gmail.com">facundofernandez@gmail.com</a></b></span></p><p><Linkedin /> <span>LinkedIn<b><a href="https://www.linkedin.com/in/facundo-fernandez-9a16ba212">linkedin.com/in/facundo-fernandez-9a16ba212</a></b></span></p></div>
      </section>

      <section id="proyectos" className="container projects-section"><SectionTitle icon={FolderOpen} title="Proyectos destacados" subtitle="Algunos de los proyectos en los que trabajé durante la carrera." /><div className="project-grid">{projects.map(project => <article className="project-card" key={project.title}><img src={project.image} alt="" /><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="card-links"><a href={project.repo} target="_blank" rel="noreferrer"> <Github /> Ver repositorio <ChevronRight /></a></div></article>)}</div></section>

      <section id="experiencias" className="container experience-section">
        <SectionTitle icon={BriefcaseBusiness} title="Experiencia laboral" subtitle="Experiencias profesionales y tareas que formaron mi recorrido." />
        <div className="experience-list">{experiences.map(experience => <article className="experience-card" key={experience.role}>
          <div className="experience-heading"><div><h3>{experience.role}</h3>{experience.company && <p className="experience-company">{experience.company}</p>}</div><span className="experience-period">{experience.period}</span></div>
          <ul>{experience.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
        </article>)}</div>
      </section>

      <section id="tecnologías" className="container tech-section"><SectionTitle icon={Code2} title="Tecnologías" subtitle="Herramientas y lenguajes que utilizo y estoy aprendiendo." /><div className="tech-list">{technologies.map((tech, index) => <span key={tech}><b>{['◈','🐍','♨','▤','▰','▱','JS','php'][index]}</b>{tech}</span>)}</div></section>

      <section id="formación" className="container footer-info"><div><SectionTitle icon={GraduationCap} title="Formación" /><strong>Licenciatura en Sistemas de Información</strong><p>Universidad Nacional de Luján <i /> 2022 - Actualidad</p></div><div id="contacto"><SectionTitle icon={Mail} title="Contacto" /><p>Podés contactarme por cualquiera de estos medios.</p><div className="footer-social"><a href="https://github.com/Facundofer"><Github /> GitHub</a><a href="https://www.linkedin.com/in/facundo-fernandez-9a16ba212"><Linkedin /> LinkedIn</a><a href="mailto:facundofernandez@gmail.com"><Send /> Email</a></div></div></section>
    </main>
    <footer>Gracias por visitar mi portfolio <i /> Facundo Fernandez <i /> © 2025</footer>
  </div>;
}

export default App;
