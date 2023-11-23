import { FaLinkedin, FaWhatsapp, FaFacebook } from 'react-icons/fa'; 
import { useTranslation } from 'react-i18next';
const backgroundImageUrl = 'url("src/assets/4302864.jpg")';

const Contact = () => {
  const {t} = useTranslation();
return (
    <>
      <div className='flex md:flex-row flex-col h-full w-full'>
      <section
        className='flex flex-row items-center order-2 justify-center h-full relative'
        style={{
          height:'100%',
          background: backgroundImageUrl,
          backgroundSize: 'cover',
          backgroundPosition: 'center', 
          
        }}
      >

        {/* <div style={{ background: 'white', padding: '20px', textAlign: 'center' }}> */}
            <section className='w-full mx-40 '>
                <a href="https://www.linkedin.com/in/edwin-quintero-guzman-8b7151bb/">
                  <div className='rounded-full items-center justify-center' style={{color:'#f6403d', background: 'white', padding: '2px', margin: '10px',  border: '1px solid #ccc', display: 'flex', alignItems: 'center', }}>
                    <FaLinkedin size={30} style={{ marginRight: '10px' }} />
                    <p>Linkedin</p>
                  </div></a>


            <a href="https://wa.me/+573154167285">
              <div className='rounded-full  items-center justify-center' style={{color:'#f6403d', background: 'white', padding: '2px', margin: '10px', border: '1px solid #ccc', display: 'flex', alignItems: 'center' }}>
                <FaWhatsapp size={30} style={{ marginRight: '10px' }} />
                <p>Whatsapp</p>
              </div></a>
            
            
            <a href="https://www.facebook.com/edwin.quinterogu">
            <div className='rounded-full  items-center justify-center' style={{color:'#f6403d', background: 'white', padding: '2px', margin: '10px', border: '1px solid #ccc', display: 'flex', alignItems: 'center' }}>
              <FaFacebook size={30} style={{ marginRight: '10px' }} />
              <p>Facebook</p>
            </div></a>
          </section>


          </section> {/* aqui termina la section de el lado derecho*/}

            <section className="bg-white dark:bg-gray-900 h-screen flex md:order-2 items-center justify-center">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md flex flex-col items-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-red-500 dark:text-white">{t('parrafocontac')}</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">{t('parrafocontacdos')}</p>

          <form action="#" className="space-y-8 w-full">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-red-500 dark:text-gray-500">{t('parrafocontactres')}</label>
              <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-red-500 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder={t('parrafocontaccuatro')} required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-red-500 dark:text-gray-500">{t('parrafocontaccinco')}</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-red-500 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder={t('parrafocontacsiete')} required />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-red-500 dark:text-gray-500">{t('parrafocontacsiete')}</label>
              <textarea id="message" className="block p-2.5 w-full text-sm text-red-500 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder={t('parrafocontacocho')}></textarea>
            </div>
            <button type="submit" className="py-3 px-6 text-sm font-medium text-center text-white rounded-full bg-red-500 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">{t('parrafocontacnueve')}</button>
          </form>
        </div>
      </section>

      </div>                                                                                                                                               
    </>
  );
};

export default Contact;
