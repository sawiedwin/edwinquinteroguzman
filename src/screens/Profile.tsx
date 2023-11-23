import { useTranslation } from "react-i18next";
const backgroundImageUrl = 'url("/src/assets/alto-angulo-red-comunicacion-internet-espacio-copia.jpg")';
import fotoEdwin from '/src/assets/Foto.png';

const miPerfil = () => {
  const { t } = useTranslation();
  return (
    <div className='h-screen flex flex-col md:flex-row' style={{
       backgroundImage: backgroundImageUrl, 
       backgroundSize: 'cover' }}>
      <section className='md:flex-1 flex-col items-center justify-center text-center h-full w-full md:w-1/2 p-6 bg-opacity-75 bg-gray-200'>
        <div className='flex flex-col items-center justify-center h-full'>
          <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold text-app-gray-500 font-roboto mb-4'>{t('parrafoperfil')}</h1>
          <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold text-app-gray-500 font-roboto mb-4'>{t('parrafoperfildos')}</h1>
          <p className='text-sm md:text-lg lg:text-2xl'>{t('parrafoperfiltres')}</p>
          <button className="bg-red-500 hover:bg-gray-400 text-white font-bold py-2 px-5 rounded-full inline-flex items-center mt-4">
            <svg className="fill-current w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <span className="text-sm md:text-base lg:text-lg">{t('parrafoperfilsiete')}</span>
          </button>
        </div>
      </section>
  
      <section className='md:flex-1 flex-col items-center justify-center text-center h-full w-full md:w-1/2 p-6 bg-opacity-75 bg-gray-300'>
        <div className='flex flex-col items-center justify-center h-full'>
          <h1 className='text-2xl md:text-4xl lg:text-6xl font-bold text-app-gray-500 font-roboto mb-4'>{t('parrafoperfilcuatro')}</h1>
          <p className='text-2xl md:text-4xl lg:text-6xl font-bold text-app-gray-500 mb-8'>{t('parrafoperfilcinco')}</p>
          <p className='text-sm md:text-lg lg:text-2xl'>{t('parrafoperfilseis')}</p>
        </div>
      </section>
      <section className='flex items-center justify-center h-full w-full md:w-1/2 relative'>
            <img className='mx-auto h-auto md:h-full' src={fotoEdwin} alt='Foto de Edwin' />
          </section>
    </div>
  );
};
export default miPerfil;