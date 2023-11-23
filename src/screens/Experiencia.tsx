import { useTranslation } from "react-i18next";
import fotomario from '/src/assets/maionet.jpg'
import fotoucc from '/src/assets/ucc.jpg'

const Experiencia = () => {
  const { t } = useTranslation();

  const backgroundImageUrl = 'url("/src/assets/alto-angulo-red-comunicacion-internet-espacio-copia.jpg")';

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: backgroundImageUrl,
        backgroundSize: 'cover',
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
      }}
    >
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-8">
        <div className="bg-gray-300 p-8 rounded-lg shadow-lg bg-opacity-75 mb-4 md:mb-0">
          <div className="max-w-md mx-auto">
            <p className="text-lg md:text-xl text-center font-semibold mb-4">{t('parrafoexp')}</p>
            <p className="text-lg md:text-xl text-center font-semibold mb-4">{t('parrafoexpdos')}</p>
            <p className="text-lg md:text-xl text-center font-semibold mb-4">{t('parrafoexptres')}</p>          
            <img className="w-full mb-4" src={fotomario} alt="Universidad Cooperativa de Colombia" />
            <a
              href="https://www.facebook.com/mario.bedoya.982?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 inline-flex items-center"
            >
              {t('parrafoexpcuatro')}
            </a>
          </div>
        </div>
  
        <div className="bg-gray-300 p-8 rounded-lg shadow-lg bg-opacity-75">
          <div className="max-w-md mx-auto">
            <p className="text-lg md:text-xl text-center font-semibold mb-4">{t('parrafoexpcinco')}</p>
            <p className="text-lg md:text-xl text-center font-semibold mb-4">{t('parrafoexpseis')}</p>
            <p className="text-lg md:text-xl text-center font-semibold mb-4">{t('parrafoexpsiete')}</p>          
            <img className="w-full mb-4" src={fotoucc} alt="Universidad Cooperativa de Colombia" />
            <a
              href="https://ucc.edu.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 inline-flex items-center"
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
