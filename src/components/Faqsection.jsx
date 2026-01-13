import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Qual o tempo de acesso do livro?",
      answer: "Todos possuem 1 ano de acesso, você terá o direito a todas as atualizações dos produtos enquanto estiver dentro do prazo. Os templates e materiais (e-books) devem ser salvos nos seus dispositivos, pois não poderão ser reenviados após a validade expirar."
    },
    {
      question: "Como recebo o acesso aos produtos?",
      answer: "Após a aprovação do pagamento, você receberá os dados de acesso automaticamente no e-mail cadastrado no ato da compra. Por isso, é importante que você cadastre um e-mail válido. Depois da inscrição, procure por um e-mail (pode ser que caia na sua caixa de spam) enviado pela Hotmart. Você também vai receber o nosso e-mail de boas-vindas!"
    },
    {
      question: "Onde vou poder baixar os materiais?",
      answer: "A plataforma de membros utilizada é a Hotmart Club. Pode ser acessado tanto no computador quanto em tablets e celulares através do aplicativo Hotmart Sparkle."
    },
    {
      question: "Quais as formas de pagamento?",
      answer: "Você pode parcelar no cartão de crédito (com juros proporcionais), ou pagar no PIX, boleto, saldo Hotmart, cartão Caixa e PayPal à vista."
    },
    {
      question: "E se eu não gostar?",
      answer: "Após a compra, você tem 7 dias de garantia de devolução do dinheiro caso compre por impulso ou esteja insatisfeita(o) com o produto."
    },
    {
      question: "Ainda tenho mais dúvidas, como posso entrar em contato?",
      answer: "É só clicar no WhatsApp no final da página ou enviar um e-mail para 📩 suporte@ometodopoliglota.com.br. Vamos te responder o mais breve possível 🙂"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
        padding: 'clamp(80px, 12vw, 120px) clamp(20px, 5vw, 60px)'
      }}
    >
      {/* Subtle gradient orb */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(239, 90, 7, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          filter: 'blur(80px)'
        }}
      />

      {/* Content Container */}
      <div 
        style={{
          position: 'relative',
          maxWidth: '1000px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(50px, 8vw, 70px)'
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
            gap: '16px'
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '700',
              color: '#F0CFB6',
              fontFamily: "'Poppins', sans-serif",
              margin: 0,
              lineHeight: '1.2'
            }}
          >
            Perguntas <span style={{ color: '#EF5A07' }}>frequentes</span>
          </h2>
          
          <div 
            style={{
              width: '80px',
              height: '2px',
              backgroundColor: '#EF5A07',
              margin: '0 auto'
            }}
          />
        </motion.div>

        {/* FAQ List */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              style={{
                position: 'relative'
              }}
            >
              {/* Decorative line on left */}
              <div 
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  bottom: 0,
                  width: '3px',
                  backgroundColor: openIndex === index ? '#EF5A07' : 'transparent',
                  transition: 'background-color 0.3s ease',
                  borderRadius: '0 2px 2px 0'
                }}
              />

              <div
                style={{
                  backgroundColor: 'rgba(15, 8, 25, 0.5)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: `1px solid ${openIndex === index ? 'rgba(239, 90, 7, 0.3)' : 'rgba(193, 161, 145, 0.1)'}`,
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: '100%',
                    padding: 'clamp(24px, 4vw, 32px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '24px',
                    backgroundColor: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <span
                    style={{
                      fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                      fontWeight: '600',
                      color: openIndex === index ? '#EF5A07' : '#F0CFB6',
                      fontFamily: "'Poppins', sans-serif",
                      lineHeight: '1.4',
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {faq.question}
                  </span>
                  
                  {/* Icon */}
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: openIndex === index ? '#EF5A07' : 'rgba(239, 90, 7, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '1.25rem',
                        color: openIndex === index ? '#0F0819' : '#EF5A07',
                        fontWeight: '300',
                        transition: 'transform 0.3s ease',
                        transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                        display: 'inline-block'
                      }}
                    >
                      +
                    </span>
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{
                        overflow: 'hidden'
                      }}
                    >
                      <div
                        style={{
                          padding: '0 clamp(24px, 4vw, 32px) clamp(24px, 4vw, 32px)',
                          borderTop: '1px solid rgba(239, 90, 7, 0.1)'
                        }}
                      >
                        <p
                          style={{
                            fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
                            fontWeight: '300',
                            color: '#C1A191',
                            fontFamily: "'Poppins', sans-serif",
                            margin: '24px 0 0 0',
                            lineHeight: '1.7'
                          }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;