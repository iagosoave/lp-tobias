import { motion } from 'framer-motion';

const PersonalExperience = () => {
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
            maxWidth: '900px'
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '700',
              color: '#F0CFB6',
              fontFamily: "'Poppins', sans-serif",
              margin: 0,
              lineHeight: '1.2',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            Minha própria experiência aplicando o{' '}
            <span style={{ color: '#EF5A07' }}>método</span> deste livro
          </h2>
        </motion.div>

        {/* Italian Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            alignItems: 'center'
          }}
        >
          <p
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              fontWeight: '400',
              color: '#C1A191',
              fontFamily: "'Poppins', sans-serif",
              margin: 0,
              lineHeight: '1.7',
              textAlign: 'center',
              maxWidth: '800px'
            }}
          >
            Apenas <strong style={{ color: '#EF5A07', fontWeight: '600' }}>quatro meses</strong> após começar a adquirir o italiano
          </p>

          {/* Video Container */}
          <div 
            style={{
              width: '100%',
              maxWidth: '800px',
              backgroundColor: '#000',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
            }}
          >
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
                src="https://www.youtube.com/embed/lId4hRKKiLM?start=32"
                title="Italiano após 4 meses"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>

        {/* Divider Line */}
        <div 
          style={{
            width: '100px',
            height: '2px',
            background: 'linear-gradient(to right, transparent, #EF5A07, transparent)'
          }}
        />

        {/* Greek Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            alignItems: 'center'
          }}
        >
          <p
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              fontWeight: '400',
              color: '#C1A191',
              fontFamily: "'Poppins', sans-serif",
              margin: 0,
              lineHeight: '1.7',
              textAlign: 'center',
              maxWidth: '800px'
            }}
          >
            Em 2021 eu decidi aplicar o mesmo método para adquirir o grego e depois de <strong style={{ color: '#EF5A07', fontWeight: '600' }}>seis meses</strong> eu gravei o vídeo abaixo
          </p>

          {/* Video Container */}
          <div 
            style={{
              width: '100%',
              maxWidth: '800px',
              backgroundColor: '#000',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
            }}
          >
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
                src="https://www.youtube.com/embed/vrwJzugDE9w"
                title="Grego após 6 meses"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>

        {/* Final Note - With Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          style={{
            width: '100%',
            maxWidth: '850px',
            marginTop: '40px',
            textAlign: 'center'
          }}
        >
          <p
            style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.625rem)',
              fontWeight: '400',
              color: '#C1A191',
              fontFamily: "'Poppins', sans-serif",
              margin: 0,
              lineHeight: '1.7'
            }}
          >
            Alguns meses depois de ter gravado esse vídeo eu consegui sustentar uma{' '}
            <strong style={{ color: '#EF5A07', fontWeight: '700' }}>conversa em grego</strong> com uma amiga nativa por{' '}
            <strong style={{ color: '#EF5A07', fontWeight: '700' }}>quarenta minutos</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonalExperience;