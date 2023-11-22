import { useTranslation } from "react-i18next";
const miPerfil = () => {
  const { t } = useTranslation();
  return (
    <div className='h-screen flex' style={{ backgroundImage: 'url("src/assets/alto-angulo-red-comunicacion-internet-espacio-copia.jpg")', backgroundSize: 'cover' }}>
      {/* Sección 1 */}
      <section className='flex-1 flex-col items-center justify-center text-center h-full w-1/2 mx-auto p-6 bg-opacity-75 bg-gray-200'>
        <div className='flex flex-col items-center justify-center h-full'>
          <h1 className='text-6xl font-bold text-app-gray-500 font-roboto mb-4'>{t('parrafoperfil')}</h1>
          <h1 className='text-6xl font-bold text-app-gray-500 font-roboto mb-4'>{t('parrafoperfildos')}</h1>
          <p className='text-2xl'>{t('parrafoperfiltres')}</p>
          <button className="bg-red-500 hover:bg-gray-400 text-white font-bold py-2 px-5 rounded-full inline-flex items-center mt-4">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <span>{t('parrafoperfilsiete')}</span>
          </button>
        </div>
      </section>
  
      {/* Sección 2 */}
      <section className='flex-1 flex-col items-center justify-center text-center h-full w-1/2 mx-auto p-6 bg-opacity-75 bg-gray-300'>
        <div className='flex flex-col items-center justify-center h-full'>
          <h1 className='text-6xl font-bold text-app-gray-500 font-roboto mb-4'>{t('parrafoperfilcuatro')}</h1>
          <p className='text-6xl font-bold text-app-gray-500 mb-8'>{t('parrafoperfilcinco')}</p>
          <p className='text-2xl'>{t('parrafoperfilseis')}</p>
        </div>
      </section>
    </div>
  );
  
};
export default miPerfil;