import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import backgroundImage from './back_home.png';
import mobileBackgroundImage from './mobile_home.png';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const videoId = 'rOHsVDwzR-4';

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
        minHeight: isMobile ? 'auto' : '100vh',
        height: isMobile ? '100vh' : 'auto',
        width: '100%',
        display: 'flex',
        alignItems: isMobile ? 'flex-end' : 'center',
        justifyContent: isMobile ? 'center' : 'flex-end',
        backgroundImage: `url(${isMobile ? mobileBackgroundImage : backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#0F0819',
        fontFamily: "'Poppins', sans-serif"
      }}
    >
      {/* Dark Overlay */}
      <div 
        style={{
          position: 'absolute',
          top: isMobile ? 'auto' : 0,
          bottom: isMobile ? 0 : 'auto',
          left: isMobile ? 0 : 'auto',
          right: 0,
          width: isMobile ? '100%' : '50%',
          height: isMobile ? '55%' : '100%',
          background: isMobile 
            ? 'linear-gradient(to top, rgba(15, 8, 25, 0.95) 0%, rgba(15, 8, 25, 0.7) 70%, transparent 100%)'
            : 'linear-gradient(to left, rgba(15, 8, 25, 0.92) 0%, transparent 100%)',
          zIndex: 1
        }}
      />

      {/* Content Container */}
      <div 
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: isMobile ? '100%' : '1600px',
          padding: isMobile ? '0 20px 50px' : '40px 60px 40px 20px',
          marginLeft: 'auto',
          marginRight: 0
        }}
      >
        <div 
          style={{
            display: 'flex',
            justifyContent: isMobile ? 'center' : 'flex-end'
          }}
        >
          
          {/* Content */}
          <div 
            style={{
              maxWidth: isMobile ? '100%' : '580px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? '20px' : '28px'
            }}
          >
            
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1
                style={{ 
                  fontSize: isMobile ? 'clamp(1.25rem, 5vw, 1.75rem)' : 'clamp(1.5rem, 2.8vw, 2.6rem)',
                  lineHeight: '1.3',
                  color: '#F0CFB6',
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: '300',
                  letterSpacing: '-0.01em',
                  margin: 0,
                  textAlign: isMobile ? 'center' : 'left'
                }}
              >
                Você já se perguntou como alguns <span
                  style={{ 
                    color: '#EF5A07',
                    fontWeight: '600',
                    fontFamily: "'Poppins', sans-serif"
                  }}
                >
                  poliglotas
                </span> conseguem aprender idiomas muito mais <span
                  style={{ 
                    color: '#EF5A07',
                    fontWeight: '600',
                    fontFamily: "'Poppins', sans-serif"
                  }}
                >
                  rápido
                </span> do que a maioria das pessoas?
              </h1>
            </motion.div>

            {/* Video Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              {/* Video Wrapper */}
              <div 
                style={{ 
                  position: 'relative',
                  backgroundColor: '#000',
                  borderRadius: isMobile ? '8px' : '10px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)'
                }}
              >
                {/* 16:9 Aspect Ratio */}
                <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%' }}>
                  <iframe
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none'
                    }}
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&modestbranding=1&rel=0&showinfo=0&playsinline=1`}
                    title="Vídeo Introdutório"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;