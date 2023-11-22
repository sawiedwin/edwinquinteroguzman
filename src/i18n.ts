import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        title: 'Multi-language app',
        parrafoinicio:'Software engineer',
        parrafoiniciodos:'Here you will find information about my profile, my work experiences, my studies, my projects and how to contact me.',
        parrafoperfil:'My profile',
        parrafoperfildos:'About me',
        parrafoperfiltres:'Hello! I am Edwin Quintero Guzman, a passionate Software Engineer with solid technical competencies and a distinctive focus on responsibility, respect and dedication. My comprehensive performance in my duties is reflected in my commitment to continuous improvement and staying up to date with the latest trends and technologies in my field.',
        parrafoperfilcuatro:'a little more...',
        parrafoperfilcinco:'My interests',
        parrafoperfilseis:'Outside of the software world, I find my escape and fun in different activities. I am a video game enthusiast, exploring virtual worlds and challenging my skills. Electronic music is another of my great passions; I find inspiration and energy in its captivating rhythms. Additionally, I enjoy immersing myself in the excitement and adrenaline of horror movies.',
        parrafoperfilsiete:'Download CV',
        parrafoexp:'Repair Technician',
        parrafoexpdos:'Aprevious',
        parrafoexptres:'2 years',
        parrafoexpcuatro:'Site Link',
        parrafoexpcinco:'Support Assistant TIC',
        parrafoexpseis:'now',
        parrafoexpsiete:'9 years',
        parrafoexpocho:'Site Link',
        parrafocontac:'Send me a message!',
        parrafocontacdos:'If you have a question, or just want to say Hello!, write to me.',
        parrafocontactres:'Your name',
        parrafocontaccuatro:'Enter your name',
        parrafocontaccinco:'Your email',
        parrafocontacseis:'Enter your email',
        parrafocontacsiete:'Your message',
        parrafocontacocho:'Enter your message...',
        parrafocontacnueve:'Send',
      },
    },
    es: {
      translation: {
        title: 'Aplicación en varios idiomas',
        parrafoinicio:'Ingeniero de Software',
        parrafoiniciodos: 'Aquí encontrarás información sobre mi perfil, mis experiencias laborales, mis estudios, mis proyectos y cómo contactarme.',
        parrafoperfil:'Mi perfil',
        parrafoperfildos:'Acerca de mi',
        parrafoperfiltres:'¡Hola! Soy Edwin Quintero Guzmán, un apasionado Ingeniero de Software con competencias técnicas sólidas y un enfoque distintivo en la responsabilidad, el respeto y la dedicación. Mi desempeño integral en mis funciones se refleja en mi compromiso con la mejora continua y en mantenerme actualizado con las últimas tendencias y tecnologías en mi campo.',
        parrafoperfilcuatro:'un poco mas...',
        parrafoperfilcinco:'Mis intereses',
        parrafoperfilseis:'Fuera del mundo del software, encuentro mi escape y diversión en diferentes actividades. Soy un entusiasta de los videojuegos, explorando mundos virtuales y desafiando mis habilidades. La música electrónica es otra de mis grandes pasiones; encuentro inspiración y energía en sus ritmos cautivadores. Además, disfruto sumergirme en la emoción y la adrenalina de las películas de terror.',
        parrafoperfilsiete:'Descargar CV',
        parrafoexp:'Tecnico de Reparación',
        parrafoexpdos:'Anterior',
        parrafoexptres:'2 años',
        parrafoexpcuatro:'Enlace Sitio',
        parrafoexpcinco:'Auxiliar Soporte TIC',
        parrafoexpseis:'actualmente',
        parrafoexpsiete:'9 años',
        parrafoexpocho:'Enlace Sitio',
        parrafocontac:'Envíame un mensaje!',
        parrafocontacdos:'Si tienes una pregunta, o solo deseas decir Hola!, escríbeme.',
        parrafocontactres:'Tu nombre',
        parrafocontaccuatro:'Ingresa tu nombre',
        parrafocontaccinco:'Tu E-mail',
        parrafocontacseis:'Ingresa tu email',
        parrafocontacsiete:'Tu mensaje',
        parrafocontacocho:'Ingresa tu mansaje...',
        parrafocontacnueve:'Enviar',

      },
    },
  },
});

export default i18n;
