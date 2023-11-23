import { useTranslation } from 'react-i18next';
import { FaPython, FaJava, FaJs, FaAngular, FaReact, FaFigma, FaCss3Alt } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa6';


const backgroundImageUrl = 'url("src/assets/alto-angulo-red-comunicacion-internet-espacio-copia.jpg")';

const Habilidades = () => {
  
  const {t} = useTranslation();

  const iconColor = '#f6403d';
  const sectionStyle = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: 'cover',
    height: '100vh',
    background: 'url("src/assets/alto-angulo-red-comunicacion-internet-espacio-copia.jpg") center/cover no-repeat',
  };
  return (
    <section style={sectionStyle} className='flex flex-col items-center justify-center h-full space-y-4'>
      <h1 className='text-red-500 text-4xl font-semibold mb-4'>{t('parrafohabil')}</h1>
      <div className="flex space-x-4">
        <SkillIcon icon={<FaPython size={100} color={iconColor} />} text="Python" />
        <SkillIcon icon={<FaJava size={100} color={iconColor} />} text="Java" />
        <SkillIcon icon={<FaJs size={100} color={iconColor} />} text="JavaScript" />
        <SkillIcon icon={<FaAngular size={100} color={iconColor} />} text="Angular" />
        <SkillIcon icon={<FaReact size={100} color={iconColor} />} text="React" />
        <SkillIcon icon={<FaFigma size={100} color={iconColor} />} text="Figma" />
        <SkillIcon icon={<FaCss3Alt size={100} color={iconColor} />} text="Tailwind CSS" />
        <SkillIcon icon={<FaGithub size={100} color={iconColor} />} text="GitHub" />
      </div>
    </section>
  );
};

const SkillIcon = ({ icon, text }: { icon: React.ReactNode, text: string }) => {
  return (
    <div className="flex flex-col items-center">
      {icon}
      <p className="text-lg text-red-500 font-roboto font-semibold">{text}</p>
    </div>
  );
};

export default Habilidades;
