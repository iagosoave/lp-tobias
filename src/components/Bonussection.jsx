import { motion } from 'framer-motion';

const BonusSection = () => {
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
        padding: '120px 20px'
      }}
    >
      {/* Content Container */}
      <div 
        style={{
          position: 'relative',
          maxWidth: '1000px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '70px'
        }}
      >
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            textAlign: 'center',
            maxWidth: '800px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px'
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: '300',
              color: '#F0CFB6',
              fontFamily: "'Poppins', sans-serif",
              margin: 0,
              lineHeight: '1.15',
              letterSpacing: '-0.02em'
            }}
          >
            Achou que tinha acabado?{' '}
            <span style={{ 
              color: '#EF5A07',
              fontWeight: '600',
              display: 'block',
              marginTop: '8px'
            }}>
              Achou errado
            </span>
          </h2>

          <div 
            style={{
              width: '80px',
              height: '2px',
              backgroundColor: '#EF5A07',
              margin: '0 auto'
            }}
          />

          <p
            style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
              fontWeight: '300',
              color: '#C1A191',
              fontFamily: "'Poppins', sans-serif",
              margin: 0,
              lineHeight: '1.6'
            }}
          >
            O ebook também possui um conteúdo extra para turbinar seu aprendizado
          </p>
        </motion.div>

        {/* Bonus Content Grid */}
        <div 
          style={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}
        >
          
          {/* Bonus Item 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            style={{
              position: 'relative',
              padding: '50px 40px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              borderLeft: '3px solid #EF5A07'
            }}
          >
            <span 
              style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#EF5A07',
                fontFamily: "'Poppins', sans-serif",
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}
            >
              Bônus 01
            </span>

            <h3
              style={{
                fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                fontWeight: '600',
                color: '#F0CFB6',
                fontFamily: "'Poppins', sans-serif",
                margin: 0,
                lineHeight: '1.3'
              }}
            >
              Ferramentas dos Poliglotas
            </h3>
            
            <p
              style={{
                fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                fontWeight: '300',
                color: '#C1A191',
                fontFamily: "'Poppins', sans-serif",
                margin: 0,
                lineHeight: '1.7'
              }}
            >
              Ferramentas usadas por mim e pelos poliglotas mais conhecidos no mundo para acelerar a aquisição de idiomas.
            </p>
          </motion.div>

          {/* Bonus Item 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            style={{
              position: 'relative',
              padding: '50px 40px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              borderLeft: '3px solid #20514D'
            }}
          >
            <span 
              style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#20514D',
                fontFamily: "'Poppins', sans-serif",
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}
            >
              Bônus 02
            </span>

            <h3
              style={{
                fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                fontWeight: '600',
                color: '#F0CFB6',
                fontFamily: "'Poppins', sans-serif",
                margin: 0,
                lineHeight: '1.3'
              }}
            >
              Biblioteca de Podcasts
            </h3>
            
            <p
              style={{
                fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                fontWeight: '300',
                color: '#C1A191',
                fontFamily: "'Poppins', sans-serif",
                margin: 0,
                lineHeight: '1.7'
              }}
            >
              Recomendação de podcasts em italiano, francês, espanhol, inglês e até mesmo grego e norueguês para você começar agora mesmo.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;