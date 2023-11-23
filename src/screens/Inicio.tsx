import { useTranslation } from "react-i18next";
import fotoEdwin from '/src/assets/Foto.png';

const Dashboard = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className='flex flex-col md:flex-row h-full'>
        <nav className='md:w-1/4 p-4'>
        </nav>

        <section className='flex flex-col md:flex-row h-full md:w-3/4'>
          <section className='flex flex-col items-center justify-center text-center md:w-1/2 mx-auto p-6'>
            <h1 className='text-4xl md:text-6xl font-bold text-app-gray-500 font-roboto mb-4'>
              Edwin Quintero
            </h1>
            <p className='text-2xl md:text-4xl font-bold text-app-gray-500 mb-8'>
              {t('parrafoinicio')}
            </p>
            <p className='text-lg md:text-4xl'>{t('parrafoiniciodos')}</p>
          </section>

          <section className='flex items-center justify-center h-full w-full md:w-1/2 relative'>
            <img className='mx-auto h-auto md:h-full' src={fotoEdwin} alt='Foto de Edwin' />
          </section>
        </section>
      </section>
    </>
  );
};

export default Dashboard;
