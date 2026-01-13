import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ebookImage from './ebook.jpg';

const FinalCTA = () => {
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
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0F0819',
        fontFamily: "'Poppins', sans-serif",
        padding: 'clamp(60px, 10vw, 100px) 20px'
      }}
    >
      {/* Content Container */}
      <div 
        style={{
          position: 'relative',
          maxWidth: '1100px',
          width: '100%',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '40px' : '60px',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(24px, 4vw, 32px)',
            flex: isMobile ? 'none' : '1',
            order: isMobile ? 2 : 1,
            textAlign: isMobile ? 'center' : 'left',
            maxWidth: isMobile ? '100%' : '550px'
          }}
        >
          
          {/* Title */}
          <h2
            style={{
              fontSize: 'clamp(1.625rem, 4.5vw, 2.5rem)',
              fontWeight: '700',
              color: '#F0CFB6',
              fontFamily: "'Poppins', sans-serif",
              margin: 0,
              lineHeight: '1.25'
            }}
          >
            Rolou a página até aqui e ainda não garantiu sua chance de adquirir aquele tão sonhado{' '}
            <span style={{ color: '#EF5A07' }}>idioma</span>?
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              fontWeight: '300',
              color: '#C1A191',
              fontFamily: "'Poppins', sans-serif",
              margin: 0,
              lineHeight: '1.7'
            }}
          >
            Garanta agora mesmo o ebook{' '}
            <strong style={{ color: '#F0CFB6', fontWeight: '600' }}>"Como adquirir um idioma"</strong> e comece sua jornada rumo à fluência, pois ele transformará totalmente sua maneira de estudar e aprender idiomas!
          </p>

          {/* CTA Button */}
          <motion.a
            href="#comprar"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(32, 81, 77, 0.5)'
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(16px, 3vw, 20px) clamp(32px, 6vw, 50px)',
              backgroundColor: '#20514D',
              color: '#F0CFB6',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              fontWeight: '700',
              fontFamily: "'Poppins', sans-serif",
              textDecoration: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(32, 81, 77, 0.4)',
              transition: 'all 0.3s ease',
              alignSelf: isMobile ? 'stretch' : 'flex-start',
              textAlign: 'center'
            }}
          >
            Garantir meu ebook agora
          </motion.a>
        </motion.div>

        {/* Ebook Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          style={{
            flex: isMobile ? 'none' : '0 0 auto',
            order: isMobile ? 1 : 2,
            width: isMobile ? '220px' : 'clamp(280px, 35vw, 380px)',
            maxWidth: isMobile ? '220px' : '380px'
          }}
        >
          <img 
            src={ebookImage}
            alt="Ebook Como Adquirir um Idioma"
            style={{
              width: '100%',
              height: 'auto',
              filter: 'drop-shadow(0 25px 50px rgba(239, 90, 7, 0.3))',
              borderRadius: '4px'
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;