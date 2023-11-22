import { useTranslation } from "react-i18next";
const Experiencia = () => {
  const {t} = useTranslation();
  return (
    <div
      className="min-h-screen flex items-center justify-center "
      style={{ 
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("src/assets/alto-angulo-red-comunicacion-internet-espacio-copia.jpg")', 
        backgroundSize: 'cover', 
        backgroundColor: 'rgba(255)' 
      }}
    >

      <div className="flex space-x-8"> {/* Agregado space-x-8 para establecer el espacio horizontal entre las secciones */}
        <div className="bg-gray-300 p-8 rounded-lg shadow-lg bg-opacity-75">
          <div className="max-w-md mx-auto">
            <p className="text-xl text-center font-semibold mb-4">{t('parrafoexp')}</p>
            <p className="text-xl text-center font-semibold mb-4">{t('parrafoexpdos')}</p>
            <p className="text-xl text-center font-semibold mb-4">{t('parrafoexptres')}</p>          
            <img className="w-full mb-4" src="src\assets\maionet.jpg" alt="Universidad Cooperativa de Colombia" />
            <a
              href="https://www.facebook.com/mario.bedoya.982?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 items-center"
            >
              {t('parrafoexpcuatro')}
            </a>
          </div>
        </div>
  
        <div className="bg-gray-300 p-8 rounded-lg shadow-lg bg-opacity-75">
          <div className="max-w-md mx-auto">
            <p className="text-xl text-center font-semibold mb-4">{t('parrafoexpcinco')}</p>
            <p className="text-xl text-center font-semibold mb-4">{t('parrafoexpseis')}</p>
            <p className="text-xl text-center font-semibold mb-4">{t('parrafoexpsiete')}</p>          
            <img className="w-full mb-4" src="src\assets\ucc.jpg" alt="Universidad Cooperativa de Colombia" />
            <a
              href="https://ucc.edu.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 items-center"
            >
              {t('parrafoexpocho')} 
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiencia;
