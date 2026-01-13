import { motion } from 'framer-motion';
import ebookImage from './ebook.jpg';

const EbookPresentation = () => {
  return (
    <section 
      style={{ 
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1D1225',
        fontFamily: "'Poppins', sans-serif",
        padding: '80px 20px'
      }}
    >
      {/* Container */}
      <div 
        style={{
          maxWidth: '1200px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '60px'
        }}
      >
        
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            lineHeight: '1.2',
            color: '#F0CFB6',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '600',
            margin: 0,
            textAlign: 'center',
            maxWidth: '900px'
          }}
        >
          O livro que vai mudar totalmente sua forma de{' '}
          <span style={{ color: '#EF5A07' }}>aprender um idioma</span>
        </motion.h2>

        {/* Ebook Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          style={{
            width: '100%',
            maxWidth: '280px',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <img 
            src={ebookImage} 
            alt="Ebook Poliglotas"
            style={{
              width: '100%',
              height: 'auto',
              filter: 'drop-shadow(0 20px 60px rgba(239, 90, 7, 0.3))',
              borderRadius: '8px'
            }}
          />
        </motion.div>

        {/* Content */}
        <div 
          style={{
            maxWidth: '800px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '32px',
            textAlign: 'center'
          }}
        >
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              lineHeight: '1.7',
              color: '#C1A191',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: '300',
              margin: 0
            }}
          >
            Neste livro você vai encontrar um passo a passo de como começar a adquirir um idioma do zero, desde a escolha do material até como criar uma rotina de estudos de 15 minutos por dia. Além disso, você aprenderá os métodos usados pelos poliglotas mais conhecidos no mundo como Luca Lampariello, Steve Kauffman e o professor e linguista Stephen Krashen.
          </motion.p>

          {/* Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              alignItems: 'center'
            }}
          >
            <p 
              style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: '600',
                color: '#F0CFB6',
                margin: 0,
                fontFamily: "'Poppins', sans-serif"
              }}
            >
              3x de R$9,64*
            </p>
            <p 
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                fontWeight: '400',
                color: '#C1A191',
                margin: 0,
                fontFamily: "'Poppins', sans-serif"
              }}
            >
              ou R$27 à vista
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.a
            href="#comprar"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 15px 40px rgba(239, 90, 7, 0.4)'
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'inline-block',
              padding: '18px 60px',
              backgroundColor: '#20514D',
              color: '#F0CFB6',
              fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
              fontWeight: '600',
              fontFamily: "'Poppins', sans-serif",
              textDecoration: 'none',
              borderRadius: '50px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(32, 81, 77, 0.4)',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}
          >
            Comprar Agora
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default EbookPresentation;