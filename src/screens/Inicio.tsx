import { useTranslation } from "react-i18next";
import fotoEdwin from '/src/assets/Foto.png'

const Dashboard = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className='flex flex-row h-full'>
        <section className='flex flex-col items-center justify-center text-center h-full w-1/2 mx-auto p-6'>
          <h1 className='text-6xl font-bold text-app-gray-500 font-roboto mb-4'>Edwin Quintero</h1>
          <p className='text-6xl font-bold text-app-gray-500 mb-8'>{t('parrafoinicio')}.</p>
          <p className='text-4xl'>{t('parrafoiniciodos')}
          </p>
        </section>

        <section className=' flex items-center justify-center h-full w-1/2 relative'>
          <img
            className='mx-auto absolute inset-0' 
            src={fotoEdwin}
          />
        </section>
    </section>
    </>
  );
};

export default Dashboard;