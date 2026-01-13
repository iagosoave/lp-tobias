import { motion } from 'framer-motion';

const ChaptersSection = () => {
  const chapters = [
    {
      number: "00",
      title: "Conhecimentos prévios",
      description: "Tudo o que você precisa saber sobre aquisição de linguagem e input compreensível para começar a adquirir qualquer idioma"
    },
    {
      number: "01",
      title: "Os melhores materiais para começar um novo idioma",
      description: "Aprenda a selecionar aplicativos, podcasts e vídeos que facilitam a aquisição natural do idioma, sem foco na gramática."
    },
    {
      number: "02",
      title: "O segredo da aquisição",
      description: "Descubra como utilizar sites, aplicativos e mídias sociais para expandir seu vocabulário de forma eficaz."
    },
    {
      number: "03",
      title: "Como montar uma rotina de estudos durante a semana",
      description: "Combine o método natural, técnicas de repetição espaçada e o método de tradução de Luca Lampariello para estruturar uma rotina de estudos efetiva."
    },
    {
      number: "04",
      title: "Aprendendo gramática naturalmente e sem esforço",
      description: "Entenda como o cérebro identifica padrões linguísticos automaticamente, facilitando a aprendizagem sem foco inicial em gramática."
    },
    {
      number: "05",
      title: "Como o treino mental pode ajudar diretamente na conversação",
      description: "Aprenda técnicas de visualização e prática mental que podem melhorar sua habilidade de produção no idioma alvo."
    },
    {
      number: "06",
      title: "A hora certa para procurar um professor de conversação",
      description: "Saiba quando é o momento ideal para procurar um parceiro de conversação ou professor, e como escolher a pessoa certa."
    },
    {
      number: "07",
      title: "Como treinar a conversação",
      description: "Descubra estratégias e exercícios para praticar a conversação de forma eficaz, mesmo estudando sozinho."
    },
    {
      number: "08",
      title: "Como a leitura pode nos ajudar a sair do nível intermediário",
      description: "Veja como escolher materiais de leitura apropriados e utilizar a leitura para aprimorar sua compreensão e produção escrita."
    }
  ];

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
        padding: 'clamp(60px, 12vw, 100px) clamp(16px, 4vw, 20px)'
      }}
    >
      {/* Decorative elements */}
      <div 
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: 'clamp(200px, 40vw, 300px)',
          height: 'clamp(200px, 40vw, 300px)',
          background: 'radial-gradient(circle, rgba(239, 90, 7, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: 'clamp(250px, 50vw, 400px)',
          height: 'clamp(250px, 50vw, 400px)',
          background: 'radial-gradient(circle, rgba(32, 81, 77, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }}
      />

      {/* Container */}
      <div 
        style={{
          position: 'relative',
          maxWidth: '1400px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'clamp(50px, 10vw, 80px)'
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
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(16px, 3vw, 20px)',
            padding: '0 clamp(16px, 4vw, 20px)'
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(0.875rem, 2.5vw, 1.5rem)',
              fontWeight: '700',
              color: '#EF5A07',
              fontFamily: "'Poppins', sans-serif",
              margin: 0,
              textTransform: 'uppercase',
              letterSpacing: 'clamp(1px, 0.3vw, 2px)'
            }}
          >
            COMO APRENDER UM IDIOMA | O MÉTODO POLIGLOTA
          </h2>
          
          <h3
            style={{
              fontSize: 'clamp(1.75rem, 5vw, 3.5rem)',
              fontWeight: '700',
              color: '#F0CFB6',
              fontFamily: "'Poppins', sans-serif",
              margin: 0,
              lineHeight: '1.2'
            }}
          >
            O que você encontrará no livro?
          </h3>
        </motion.div>

        {/* Chapters Grid */}
        <div 
          style={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(24px, 5vw, 40px)',
            padding: '0'
          }}
        >
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              style={{
                position: 'relative',
                backgroundColor: 'rgba(29, 18, 37, 0.6)',
                border: '1px solid rgba(193, 161, 145, 0.15)',
                borderRadius: 'clamp(12px, 2vw, 16px)',
                padding: 'clamp(24px, 4vw, 32px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(12px, 2vw, 16px)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
            >
              {/* Chapter Number */}
              <div 
                style={{
                  position: 'absolute',
                  top: 'clamp(16px, 3vw, 20px)',
                  right: 'clamp(16px, 3vw, 20px)',
                  fontSize: 'clamp(2rem, 8vw, 3rem)',
                  fontWeight: '900',
                  color: 'rgba(239, 90, 7, 0.15)',
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: '1'
                }}
              >
                {chapter.number}
              </div>

              {/* Chapter Label */}
              <span 
                style={{
                  fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
                  fontWeight: '600',
                  color: '#EF5A07',
                  fontFamily: "'Poppins', sans-serif",
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                Capítulo {chapter.number}
              </span>

              {/* Chapter Title */}
              <h4 
                style={{
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                  fontWeight: '600',
                  color: '#F0CFB6',
                  fontFamily: "'Poppins', sans-serif",
                  margin: 0,
                  lineHeight: '1.3',
                  paddingRight: 'clamp(40px, 10vw, 60px)'
                }}
              >
                {chapter.title}
              </h4>

              {/* Chapter Description */}
              <p 
                style={{
                  fontSize: 'clamp(0.8125rem, 1.8vw, 1rem)',
                  fontWeight: '300',
                  color: '#C1A191',
                  fontFamily: "'Poppins', sans-serif",
                  margin: 0,
                  lineHeight: '1.6'
                }}
              >
                {chapter.description}
              </p>

              {/* Decorative line */}
              <div 
                style={{
                  width: 'clamp(50px, 12vw, 60px)',
                  height: 'clamp(2px, 0.5vw, 3px)',
                  backgroundColor: '#EF5A07',
                  borderRadius: '2px',
                  marginTop: 'clamp(6px, 1.5vw, 8px)'
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChaptersSection;