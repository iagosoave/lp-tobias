import { motion } from 'framer-motion';
import depo1 from './depo1.png';
import depo2 from './depo2.png';
import depo3 from './depo3.png';
import depo4 from './depo4.png';
import depo5 from './depo5.png';
import depo6 from './depo6.png';
import depo7 from './depo7.png';
import depo8 from './depo8.png';
import depo9 from './depo9.png';

const TestimonialsSection = () => {
  const testimonials = [
    { id: 1, src: depo1, alt: 'Depoimento 1' },
    { id: 2, src: depo2, alt: 'Depoimento 2' },
    { id: 3, src: depo3, alt: 'Depoimento 3' },
    { id: 4, src: depo4, alt: 'Depoimento 4' },
    { id: 5, src: depo5, alt: 'Depoimento 5' },
    { id: 6, src: depo6, alt: 'Depoimento 6' },
    { id: 7, src: depo7, alt: 'Depoimento 7' },
    { id: 8, src: depo8, alt: 'Depoimento 8' },
    { id: 9, src: depo9, alt: 'Depoimento 9' }
  ];

  // Dividir em duas linhas: 5 na primeira, 4 na segunda
  const firstRow = testimonials.slice(0, 5);
  const secondRow = testimonials.slice(5, 9);

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
        padding: 'clamp(80px, 15vw, 120px) 0',
        overflow: 'hidden'
      }}
    >
      {/* Background gradient */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, #0F0819, #1D1225, #0F0819)'
        }}
      />

      {/* Animated gradient orb */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.03, 0.06, 0.03],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(300px, 80vw, 600px)',
          height: 'clamp(300px, 80vw, 600px)',
          background: '#EF5A07',
          borderRadius: '50%',
          filter: 'blur(150px)'
        }}
      />

      {/* Content */}
      <div 
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%'
        }}
      >
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto clamp(50px, 12vw, 80px)',
            padding: '0 20px'
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 6vw, 4rem)',
              fontWeight: '700',
              color: '#F0CFB6',
              fontFamily: "'Poppins', sans-serif",
              margin: '0 0 clamp(16px, 3vw, 24px) 0',
              lineHeight: '1.2'
            }}
          >
            O que dizem sobre o <span style={{ color: '#EF5A07' }}>método</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(0.9375rem, 2vw, 1.375rem)',
              fontWeight: '300',
              color: '#C1A191',
              fontFamily: "'Poppins', sans-serif",
              margin: 0,
              lineHeight: '1.6'
            }}
          >
            Depoimentos de quem transformou o aprendizado de idiomas
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(24px, 5vw, 30px)'
          }}
        >
          
          {/* First Row - Moving Right */}
          <div style={{ position: 'relative' }}>
            {/* Fade gradients */}
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                left: 0,
                width: 'clamp(60px, 12vw, 160px)',
                background: 'linear-gradient(to right, #0F0819 0%, rgba(15, 8, 25, 0.8) 50%, transparent 100%)',
                zIndex: 10,
                pointerEvents: 'none'
              }}
            />
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                right: 0,
                left: 'auto',
                width: 'clamp(60px, 12vw, 160px)',
                background: 'linear-gradient(to left, #0F0819 0%, rgba(15, 8, 25, 0.8) 50%, transparent 100%)',
                zIndex: 10,
                pointerEvents: 'none'
              }}
            />

            <div style={{ display: 'flex', overflow: 'hidden' }}>
              {/* First set */}
              <motion.div
                style={{
                  display: 'flex',
                  gap: 'clamp(20px, 4vw, 30px)',
                  flexShrink: 0
                }}
                animate={{ x: [0, -3500] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
              >
                {firstRow.map((image) => (
                  <motion.div
                    key={`first-1-${image.id}`}
                    whileHover={{ rotate: 2, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: 'relative',
                      flexShrink: 0,
                      width: 'clamp(320px, 85vw, 550px)'
                    }}
                  >
                    <div 
                      style={{
                        borderRadius: 'clamp(12px, 2vw, 16px)',
                        overflow: 'hidden',
                        border: '1px solid rgba(193, 161, 145, 0.2)',
                        backgroundColor: 'rgba(29, 18, 37, 0.5)',
                        backdropFilter: 'blur(10px)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        style={{
                          width: '100%',
                          height: 'auto',
                          display: 'block',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Second set (duplicate) */}
              <motion.div
                style={{
                  display: 'flex',
                  gap: 'clamp(20px, 4vw, 30px)',
                  flexShrink: 0
                }}
                animate={{ x: [0, -3500] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
              >
                {firstRow.map((image) => (
                  <motion.div
                    key={`first-2-${image.id}`}
                    whileHover={{ rotate: 2, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: 'relative',
                      flexShrink: 0,
                      width: 'clamp(320px, 85vw, 550px)'
                    }}
                  >
                    <div 
                      style={{
                        borderRadius: 'clamp(12px, 2vw, 16px)',
                        overflow: 'hidden',
                        border: '1px solid rgba(193, 161, 145, 0.2)',
                        backgroundColor: 'rgba(29, 18, 37, 0.5)',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        style={{
                          width: '100%',
                          height: 'auto',
                          display: 'block',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Second Row - Moving Left */}
          <div style={{ position: 'relative' }}>
            {/* Fade gradients */}
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                left: 0,
                width: 'clamp(60px, 12vw, 160px)',
                background: 'linear-gradient(to right, #0F0819 0%, rgba(15, 8, 25, 0.8) 50%, transparent 100%)',
                zIndex: 10,
                pointerEvents: 'none'
              }}
            />
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                right: 0,
                left: 'auto',
                width: 'clamp(60px, 12vw, 160px)',
                background: 'linear-gradient(to left, #0F0819 0%, rgba(15, 8, 25, 0.8) 50%, transparent 100%)',
                zIndex: 10,
                pointerEvents: 'none'
              }}
            />

            <div style={{ display: 'flex', overflow: 'hidden' }}>
              {/* First set */}
              <motion.div
                style={{
                  display: 'flex',
                  gap: 'clamp(20px, 4vw, 30px)',
                  flexShrink: 0
                }}
                animate={{ x: [-3000, 0] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
              >
                {secondRow.map((image) => (
                  <motion.div
                    key={`second-1-${image.id}`}
                    whileHover={{ rotate: -2, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: 'relative',
                      flexShrink: 0,
                      width: 'clamp(320px, 85vw, 550px)'
                    }}
                  >
                    <div 
                      style={{
                        borderRadius: 'clamp(12px, 2vw, 16px)',
                        overflow: 'hidden',
                        border: '1px solid rgba(193, 161, 145, 0.2)',
                        backgroundColor: 'rgba(29, 18, 37, 0.5)',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        style={{
                          width: '100%',
                          height: 'auto',
                          display: 'block',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Second set (duplicate) */}
              <motion.div
                style={{
                  display: 'flex',
                  gap: 'clamp(20px, 4vw, 30px)',
                  flexShrink: 0
                }}
                animate={{ x: [-3000, 0] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                  },
                }}
              >
                {secondRow.map((image) => (
                  <motion.div
                    key={`second-2-${image.id}`}
                    whileHover={{ rotate: -2, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: 'relative',
                      flexShrink: 0,
                      width: 'clamp(320px, 85vw, 550px)'
                    }}
                  >
                    <div 
                      style={{
                        borderRadius: 'clamp(12px, 2vw, 16px)',
                        overflow: 'hidden',
                        border: '1px solid rgba(193, 161, 145, 0.2)',
                        backgroundColor: 'rgba(29, 18, 37, 0.5)',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        style={{
                          width: '100%',
                          height: 'auto',
                          display: 'block',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;