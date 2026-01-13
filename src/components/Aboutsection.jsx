import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import backgroundImage from './about.png';
import mobileBackgroundImage from './mobile.png';

const AboutSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section 
      style={{ 
        position: 'relative',
        minHeight: '100vh',
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundImage: `url(${isMobile ? mobileBackgroundImage : backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#0F0819',
        fontFamily: "'Poppins', sans-serif",
        overflow: 'hidden'
      }}
    >
      {/* Content Container - Top Positioned */}
      <div 
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: isMobile ? '100%' : '520px',
          width: '100%',
          padding: isMobile ? '30px 20px 0' : '50px 50px 0',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(16px, 2.5vw, 22px)'
        }}
      >
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: '700',
            color: '#F0CFB6',
            fontFamily: "'Poppins', sans-serif",
            margin: 0,
            lineHeight: '1.1'
          }}
        >
          Sobre <span style={{ color: '#EF5A07' }}>mim</span>
        </motion.h2>

        {/* Name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          style={{
            fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
            fontWeight: '600',
            color: '#EF5A07',
            fontFamily: "'Poppins', sans-serif",
            margin: 0,
            lineHeight: '1.2'
          }}
        >
          Tobias Prandini
        </motion.p>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}
        >
          <p
            style={{
              fontSize: 'clamp(0.8125rem, 1.5vw, 0.9375rem)',
              fontWeight: '300',
              color: '#C1A191',
              fontFamily: "'Poppins', sans-serif",
              margin: 0,
              lineHeight: '1.5'
            }}
          >
            É um entusiasta de idiomas e amante de Psicologia da Aprendizagem, formado em Psicologia pelo Mackenzie em 2024.
          </p>

          <p
            style={{
              fontSize: 'clamp(0.8125rem, 1.5vw, 0.9375rem)',
              fontWeight: '300',
              color: '#C1A191',
              fontFamily: "'Poppins', sans-serif",
              margin: 0,
              lineHeight: '1.5'
            }}
          >
            É um pesquisador ávido de métodos que facilitem a aprendizagem e aquisição de idiomas, além de ter uma paixão por entender como o cérebro aprende e aplicar isso no aprendizado de línguas estrangeiras.
          </p>

          <p
            style={{
              fontSize: 'clamp(0.8125rem, 1.5vw, 0.9375rem)',
              fontWeight: '300',
              color: '#C1A191',
              fontFamily: "'Poppins', sans-serif",
              margin: 0,
              lineHeight: '1.5'
            }}
          >
            Tem experiência no ensino da língua inglesa desde 2017 e já trabalhou com crianças, adolescentes e adultos. Já trabalhou em empresas como <strong style={{ color: '#F0CFB6', fontWeight: '500' }}>UPTIME</strong>, <strong style={{ color: '#F0CFB6', fontWeight: '500' }}>Red Balloon</strong> e <strong style={{ color: '#F0CFB6', fontWeight: '500' }}>Idiomus</strong>.
          </p>

          <p
            style={{
              fontSize: 'clamp(0.8125rem, 1.5vw, 0.9375rem)',
              fontWeight: '300',
              color: '#C1A191',
              fontFamily: "'Poppins', sans-serif",
              margin: 0,
              lineHeight: '1.5'
            }}
          >
            Em 2018 fez um intercâmbio para a Alemanha para estudar alemão em Berlim na escola <strong style={{ color: '#F0CFB6', fontWeight: '500' }}>DID - Die Deutsch-Institut</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;