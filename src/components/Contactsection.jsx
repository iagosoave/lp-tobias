import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
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
        padding: 'clamp(80px, 12vw, 120px) clamp(20px, 5vw, 60px)',
        overflow: 'hidden'
      }}
    >
      {/* Gradient background */}
      <div 
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(32, 81, 77, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          filter: 'blur(100px)'
        }}
      />

      {/* Content Container */}
      <div 
        style={{
          position: 'relative',
          maxWidth: '1200px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: 'clamp(40px, 8vw, 80px)',
          alignItems: 'center'
        }}
      >
        
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: isMobile ? 0 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(32px, 5vw, 48px)',
            textAlign: isMobile ? 'center' : 'left',
            order: isMobile ? 2 : 1
          }}
        >
          {/* Title */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
              Ficou com <span style={{ color: '#EF5A07' }}>dúvida</span>?
            </h2>
            
            <div 
              style={{
                width: '80px',
                height: '2px',
                backgroundColor: '#EF5A07',
                margin: isMobile ? '0 auto' : '0'
              }}
            />
          </div>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              fontWeight: '300',
              color: '#C1A191',
              fontFamily: "'Poppins', sans-serif",
              margin: 0,
              lineHeight: '1.7'
            }}
          >
            Chame a minha equipe no WhatsApp e tire todas as suas dúvidas antes de garantir seu ebook!
          </p>

          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(32, 81, 77, 0.5)'
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
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
              alignSelf: isMobile ? 'stretch' : 'flex-start'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="currentColor"/>
            </svg>
            Quero falar com o suporte
          </motion.a>

          {/* Email */}
          <p
            style={{
              fontSize: 'clamp(0.9375rem, 1.8vw, 1.0625rem)',
              fontWeight: '300',
              color: '#C1A191',
              fontFamily: "'Poppins', sans-serif",
              margin: 0,
              lineHeight: '1.6'
            }}
          >
            Ou envie um 📩 e-mail para:{' '}
            <a 
              href="mailto:suporte@ometodopoliglota.com.br"
              style={{
                color: '#EF5A07',
                textDecoration: 'none',
                fontWeight: '500',
                transition: 'opacity 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              suporte@ometodopoliglota.com.br
            </a>
          </p>
        </motion.div>

        {/* iPhone Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            order: isMobile ? 1 : 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {/* iPhone Frame */}
          <div 
            style={{
              width: isMobile ? '280px' : '320px',
              height: isMobile ? '560px' : '640px',
              backgroundColor: '#1A1A1A',
              borderRadius: '50px',
              padding: '12px',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5), inset 0 2px 8px rgba(255, 255, 255, 0.1)',
              position: 'relative'
            }}
          >
            {/* Notch */}
            <div 
              style={{
                position: 'absolute',
                top: '12px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '120px',
                height: '28px',
                backgroundColor: '#000',
                borderRadius: '0 0 20px 20px',
                zIndex: 10
              }}
            />

            {/* Screen */}
            <div 
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#0D1418',
                borderRadius: '42px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* WhatsApp Header */}
              <div 
                style={{
                  backgroundColor: '#075E54',
                  padding: '50px 16px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <div 
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#C1A191',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#fff'
                  }}
                >
                  SP
                </div>
                <div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: '600', color: '#fff' }}>
                    Suporte Poliglota
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)' }}>
                    online
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div 
                style={{
                  flex: 1,
                  padding: '16px',
                  backgroundImage: 'linear-gradient(to bottom, #0D1418, #1A2228)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  overflowY: 'auto'
                }}
              >
                {/* Message from support */}
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <div 
                    style={{
                      backgroundColor: '#1F2C34',
                      padding: '10px 14px',
                      borderRadius: '8px 8px 8px 2px',
                      maxWidth: '80%'
                    }}
                  >
                    <p style={{ 
                      fontSize: '0.875rem', 
                      color: '#E9EDEF', 
                      margin: 0,
                      lineHeight: '1.4'
                    }}>
                      Olá! 👋 Como posso te ajudar?
                    </p>
                    <span style={{ fontSize: '0.625rem', color: '#667781', marginTop: '4px', display: 'block' }}>
                      10:30
                    </span>
                  </div>
                </div>

                {/* Message from user */}
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <div 
                    style={{
                      backgroundColor: '#005C4B',
                      padding: '10px 14px',
                      borderRadius: '8px 8px 2px 8px',
                      maxWidth: '80%'
                    }}
                  >
                    <p style={{ 
                      fontSize: '0.875rem', 
                      color: '#E9EDEF', 
                      margin: 0,
                      lineHeight: '1.4'
                    }}>
                      Tenho dúvidas sobre o ebook!
                    </p>
                    <span style={{ fontSize: '0.625rem', color: 'rgba(255,255,255,0.6)', marginTop: '4px', display: 'block', textAlign: 'right' }}>
                      10:31 ✓✓
                    </span>
                  </div>
                </div>

                {/* Typing indicator */}
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <div 
                    style={{
                      backgroundColor: '#1F2C34',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      display: 'flex',
                      gap: '4px'
                    }}
                  >
                    <div style={{ 
                      width: '6px', 
                      height: '6px', 
                      borderRadius: '50%', 
                      backgroundColor: '#667781',
                      animation: 'bounce 1.4s infinite ease-in-out both',
                      animationDelay: '0s'
                    }} />
                    <div style={{ 
                      width: '6px', 
                      height: '6px', 
                      borderRadius: '50%', 
                      backgroundColor: '#667781',
                      animation: 'bounce 1.4s infinite ease-in-out both',
                      animationDelay: '0.2s'
                    }} />
                    <div style={{ 
                      width: '6px', 
                      height: '6px', 
                      borderRadius: '50%', 
                      backgroundColor: '#667781',
                      animation: 'bounce 1.4s infinite ease-in-out both',
                      animationDelay: '0.4s'
                    }} />
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div 
                style={{
                  backgroundColor: '#1E2A2E',
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <div 
                  style={{
                    flex: 1,
                    backgroundColor: '#2A3942',
                    padding: '8px 12px',
                    borderRadius: '20px',
                    fontSize: '0.875rem',
                    color: '#8696A0'
                  }}
                >
                  Mensagem
                </div>
                <div 
                  style={{
                    width: '36px',
                    height: '36px',
                    backgroundColor: '#00A884',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontSize: '1.25rem'
                  }}
                >
                  🎤
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Keyframes for typing animation */}
      <style>
        {`
          @keyframes bounce {
            0%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-6px); }
          }
        `}
      </style>
    </section>
  );
};

export default ContactSection;