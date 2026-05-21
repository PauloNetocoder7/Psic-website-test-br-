import React, { useState } from 'react';
import { 
  User, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronDown, 
  ChevronUp,
  Check, 
  Menu, 
  X, 
  ArrowRight, 
  Award, 
  ShieldCheck, 
  Star,
  Users,
  Compass,
  MessageSquare,
  HelpCircle,
  Sparkles,
  Heart
} from 'lucide-react';

// Define the services data matching requirements exactly in Portuguese (Portugal)
interface Service {
  id: string;
  emoji: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: "individual",
    emoji: "👤",
    title: "Terapia Individual",
    description: "Oferecemos um espaço acolhedor, seguro e estritamente confidencial para ajudar você a superar crises pessoais, aliviar o estresse e ressignificar traumas do passado. Nossa abordagem terapêutica personalizada apoia você na construção de estratégias práticas para fortalecer o bem-estar interior e a estabilidade emocional a longo prazo."
  },
  {
    id: "teen",
    emoji: "🌱",
    title: "Terapia para Adolescentes",
    description: "Crescer nos dias de hoje traz desafios complexos, tanto para adolescentes quanto para suas famílias. Propomos um acompanhamento empático e dinâmico para apoiar os jovens na construção de sua identidade, fortalecimento da autoestima e desenvolvimento de habilidades para lidar com as pressões escolares e sociais."
  },
  {
    id: "family",
    emoji: "🏡",
    title: "Terapia Familiar",
    description: "Trabalhamos em parceria com as famílias para harmonizar as relações, solucionar conflitos de forma construtiva e aprimorar a comunicação no dia a dia. Nossas sessões conjuntas são planejadas para promover a escuta ativa, o respeito mútuo e a união do lar."
  },
  {
    id: "trauma",
    emoji: "💫",
    title: "Terapia de Trauma e TEPT",
    description: "Um evento traumático pode deixar a sensação de angústia paralisante ou manter o corpo em alerta constante. Utilizamos métodos clínicos validados e específicos para traumas, ajudando você a integrar memórias dolorosas de forma inteiramente segura, recuperando sua autonomia e qualidade de vida."
  },
  {
    id: "anxiety",
    emoji: "🌊",
    title: "Terapia de Ansiedade e Depressão",
    description: "A ansiedade constante, crises de pânico e o desânimo persistente afetam profundamente o seu dia a dia. Disponibilizamos abordagens estruturadas e cientificamente validadas para quebrar o ciclo de pensamentos automáticos disfuncionais e resgatar o entusiasmo pela vida."
  },
  {
    id: "grief",
    emoji: "🕊️",
    title: "Acompanhamento de Luto e Perda",
    description: "O luto é uma jornada profundamente singular que não segue prazos rígidos. Oferecemos um espaço acolhedor e seguro para você acolher a complexidade das suas emoções, honrar sua perda e reconstruir sua caminhada passo a passo."
  }
];

// Define therapeutic approaches data in Portuguese
interface Approach {
  title: string;
  subtitle: string;
  description: string;
}

const approaches: Approach[] = [
  {
    title: "Terapia Cognitivo-Comportamental (TCC)",
    subtitle: "Orientada a objetivos e clinicamente validada",
    description: "Um método de tratamento estruturado e cientificamente validado, focado na conexão entre seus pensamentos, suas emoções e seus comportamentos. Ajudamos você ativamente a identificar padrões de pensamento limitantes e a substituí-los por estratégias de ação positivas no seu dia a dia."
  },
  {
    title: "Psicoterapia baseada em Atenção Plena (Mindfulness)",
    subtitle: "Presença atenta e ancoragem emocional",
    description: "Ao combinar abordagens cognitivas clássicas com exercícios de atenção plena, você aprende a observar seus pensamentos e emoções intensas sem julgamento. Esta prática reduz o estresse fisiológico, regula as flutuações emocionais e reforça sua resiliência global."
  },
  {
    title: "Terapia de Aceitação e Compromisso (ACT)",
    subtitle: "Ação orientada por valores e desenvolvimento pessoal",
    description: "Uma abordagem moderna e humanista que incentiva você a acolher suas vivências internas, em vez de se esgotar em uma luta estéril contra elas. Acompanhamos você na definição clara de seus valores de vida e no desenvolvimento de ações concretas para uma existência plena e engajada."
  }
];

// Define FAQs data in Portuguese
interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Como posso saber se a terapia psicológica é o caminho indicado para minha situação?",
    answer: "A psicoterapia é indicada caso você esteja enfrentando transições desafiadoras, conflitos interpessoais, ansiedade, estresse crônico ou sintomas de desânimo. Se você sente necessidade de organizar suas ideias e sentimentos, nosso consultório oferece um ambiente acolhedor, profissional e seguro para encontrar novas perspectivas e desenvolver estratégias saudáveis de enfrentamento."
  },
  {
    question: "Vocês oferecem consultas na modalidade online (teleconsulta)?",
    answer: "Sim, realizamos sessões online por videochamada através de ambiente confiável e criptografado. Nosso atendimento segue as diretrizes éticas e de privacidade mais rígidas, proporcionando o mesmo nível de acolhimento, escuta atenta e total confidencialidade do formato presencial, no conforto e segurança do seu lar."
  },
  {
    question: "Qual é a duração média de um processo psicoterapêutico?",
    answer: "A duração da psicoterapia é altamente personalizada segundo os seus objetivos e contexto singular. Demandas mais pontuais podem se beneficiar de abordagens focadas em soluções em curto prazo (média de 8 a 12 sessões). Para dores mais antigas ou padrões comportamentais consolidados, geralmente orienta-se um acompanhamento contínuo e a longo prazo. Avaliamos a evolução do processo de forma conjunta e regular."
  },
  {
    question: "Como funciona o reembolso por convênio ou plano de saúde?",
    answer: "Atendemos exclusivamente de forma particular. Essa modalidade garante total privacidade, agilidade na marcação de consultas e completa independência técnica no processo terapêutico. Fornecemos recibos e notas fiscais de serviços de psicologia detalhadas após cada atendimento, facilitando que você solicite o reembolso parcial ou integral junto ao seu convênio, plano de saúde ou seguradora (por exemplo, CNS em Luxemburgo)."
  },
  {
    question: "Como funciona a primeira sessão de acolhimento?",
    answer: "Nossa primeira sessão é focada no acolhimento mútuo e na compreensão detalhada de suas queixas atuais e da sua história de vida pessoal. É uma oportunidade para desenharmos juntos seus objetivos, esclarecer dúvidas e dar o pontapé inicial às bases do plano de acompanhamento, assegurando que você se sinta seguro e confortável."
  }
];

export default function App() {
  // Navigation states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Accordion active index state
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(null);

  // Contact form submission state
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const toggleFaq = (index: number) => {
    if (activeFaqIndex === index) {
      setActiveFaqIndex(null);
    } else {
      setActiveFaqIndex(index);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setContactSubmitting(false);
      setContactSuccess(true);
      // Clear form
      setContactData({ name: '', email: '', phone: '', message: '' });
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-brand-black text-brand-text font-sans relative overflow-x-hidden luxury-noise selection:bg-brand-gold/30 selection:text-white">
      
      {/* Top Disclaimer Banner */}
      <div className="sticky top-0 z-[100] w-full bg-amber-100 text-amber-950 font-semibold px-4 py-2.5 border-b border-amber-200 shadow-md flex items-center justify-center gap-2 text-xs uppercase tracking-widest text-center transition-all duration-300">
        <span>SITE DE TESTE PARA PSICÓLOGOS</span>
      </div>

      {/* Navigation Bar */}
      <nav className="sticky top-[38px] z-50 w-full bg-brand-black/90 backdrop-blur-md border-b border-brand-border/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full border border-brand-gold flex items-center justify-center text-brand-gold text-[10px] tracking-tighter uppercase font-serif group-hover:scale-105 duration-300 shadow-gold-glow shrink-0">
              Ψ
            </div>
            <img src="https://flagcdn.com/w40/br.png" alt="Brazil Flag" className="w-5 h-3.5 object-cover rounded-[1px] opacity-95 border border-white/15 select-none self-center shadow-md shrink-0" referrerPolicy="no-referrer" />
            <span className="font-serif font-semibold text-lg lg:text-xl tracking-tight text-white group-hover:text-brand-gold transition-colors duration-300">
              Site de Teste <span className="text-brand-gold font-normal lg:font-light">para Psicólogos</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8 font-sans text-sm uppercase tracking-widest font-medium">
            <a href="#about" className="text-brand-muted hover:text-white transition-colors duration-200 text-xs font-semibold">Sobre</a>
            <a href="#services" className="text-brand-muted hover:text-white transition-colors duration-200 text-xs font-semibold">Serviços</a>
            <a href="#approach" className="text-brand-muted hover:text-white transition-colors duration-200 text-xs font-semibold">Abordagem Terapêutica</a>
            <a href="#faq" className="text-brand-muted hover:text-white transition-colors duration-200 text-xs font-semibold">Perguntas Frequentes</a>
            <a href="#contact" className="text-brand-muted hover:text-white transition-colors duration-200 text-xs text-brand-gold hover:underline underline-offset-4 font-semibold">Contato</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-brand-gold p-1 focus:outline-none transition-colors duration-300 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[70px] left-0 w-full bg-brand-charcoal border-b border-brand-border py-8 px-6 flex flex-col gap-6 shadow-2xl animate-fade-in">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-text hover:text-brand-gold uppercase tracking-widest text-sm font-medium transition-colors"
            >
              Sobre
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-text hover:text-brand-gold uppercase tracking-widest text-sm font-medium transition-colors"
            >
              Serviços
            </a>
            <a 
              href="#approach" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-text hover:text-brand-gold uppercase tracking-widest text-sm font-medium transition-colors"
            >
              Abordagem Terapêutica
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-text hover:text-brand-gold uppercase tracking-widest text-sm font-medium transition-colors"
            >
              Perguntas Frequentes
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-gold font-semibold uppercase tracking-widest text-sm transition-colors"
            >
              Contato
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 md:pt-36 md:pb-44 flex items-center justify-center border-b border-brand-border/40 overflow-hidden bg-brand-black">
        
        {/* Background Image with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/xtTB6YrY/Whats-App-Image-2026-05-19-at-20-54-18.jpg" 
            alt="Atmosfera do Consultório no Luxemburgo" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-75 filter brightness-95 contrast-100"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/40 to-brand-black/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black/60 via-transparent to-brand-black/60" />
        </div>

        {/* Subtle decorative gold light flare */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none z-0" />

        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative z-10 flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 border border-brand-gold/30 px-3.5 py-1.5 mb-8 bg-brand-charcoal/50 backdrop-blur-sm">
            <Sparkles size={14} className="text-brand-gold animate-pulse" />
            <span className="text-brand-gold uppercase tracking-widest text-[9.5px] font-semibold font-mono">Apoio clínico especializado e baseado em evidências científicas</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 max-w-4xl leading-[1.12]">
            Você merece se sentir bem — <span className="italic font-normal text-brand-gold block mt-2 sm:inline sm:mt-0">e é possível trilhar esse caminho.</span>
          </h1>
          
          <p className="font-sans text-brand-text/90 text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-3xl mb-12">
            Psicoterapia acolhedora e cientificamente fundamentada para adultos, adolescentes e famílias. Seu bem-estar conduzido por profissionais extremamente qualificados.
          </p>

          <div className="flex justify-center w-full max-w-xs">
            <a 
              href="#about"
              className="w-full px-8 py-4 bg-white text-black font-semibold text-xs tracking-widest uppercase hover:bg-brand-gold hover:border-brand-gold transition-all duration-300 gold-glow-button border border-white flex items-center justify-center gap-2 cursor-pointer shadow-gold-glow"
            >
              Saiba mais <ArrowRight size={14} />
            </a>
          </div>

          {/* Quick validation markers below hero */}
          <div className="mt-20 flex flex-wrap justify-center items-center gap-x-10 gap-y-4 text-xs font-mono text-brand-muted border-t border-brand-border/40 pt-8 w-full">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-brand-gold" /> Psicólogos clínicos e psicoterapeutas habilitados
            </span>
            <span className="flex items-center gap-1.5">
              <LockIcon size={14} /> Atendimento criptografado com total sigilo e confidencialidade
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-brand-gold" /> Agendamento flexível de sessões
            </span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 border-b border-brand-border bg-brand-charcoal/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Visual Brand Statement */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="relative mb-6 group overflow-hidden border border-brand-border p-2 bg-brand-charcoal shadow-2xl">
                <div className="absolute top-4 left-4 z-10 bg-brand-black/90 border border-brand-gold/30 px-3 py-1 text-[9px] uppercase font-mono tracking-widest font-semibold text-brand-gold">
                  Atendimento profissional humanizado
                </div>
                <img 
                  src="https://i.ibb.co/B2Dkrq1k/Whats-App-Image-2026-05-19-at-20-37-56.jpg" 
                  alt="Compartilhamento terapêutico no consultório" 
                  referrerPolicy="no-referrer"
                  className="w-full h-64 md:h-80 object-cover filter brightness-90 contrast-105 hover:brightness-100 transition-all duration-700 ease-out"
                />
              </div>

              <div className="relative mb-8 group overflow-hidden border border-brand-border p-2 bg-brand-charcoal shadow-2xl">
                <div className="absolute top-4 left-4 z-10 bg-brand-black/90 border border-brand-gold/30 px-3 py-1 text-[9px] uppercase font-mono tracking-widest font-semibold text-brand-gold">
                  Ambiente acolhedor e aconchegante
                </div>
                <img 
                  src="https://i.ibb.co/6cLZLN0f/Whats-App-Image-2026-05-19-at-20-36-08.jpg" 
                  alt="Atmosfera acolhedora em nosso consultório particular" 
                  referrerPolicy="no-referrer"
                  className="w-full h-64 md:h-80 object-cover filter brightness-90 contrast-105 hover:brightness-100 transition-all duration-700 ease-out"
                />
              </div>

              <div className="w-12 h-px bg-brand-gold mb-6" />
              <span className="text-brand-gold uppercase tracking-widest text-xs font-semibold mb-3">Nossa Filosofia</span>
              <h2 className="font-serif text-3xl md:text-4.5xl leading-tight text-white mb-6 font-semibold">
                A psicoterapia contemporânea: centrada no ser humano, guiada pela ética e excelência clínica.
              </h2>
              <p className="text-brand-muted text-base font-light leading-relaxed mb-8">
                Acreditamos que o acolhimento psicológico qualificado, ético e livre de julgamentos é o alicerce para uma saúde mental sólida e duradoura. Rompendo barreiras rígidas e fundamentando nossa prática nas melhores evidências científicas, construímos travessias únicas para reatar seu equilíbrio e impulsionar seu crescimento pessoal.
              </p>
              
              <div className="bg-brand-charcoal/80 p-6 border border-brand-border/80 flex items-start gap-4 shadow-xl">
                <span className="text-2xl text-brand-gold pt-1">💡</span>
                <div>
                  <h4 className="font-serif text-white font-medium mb-1">Compromisso inegociável com a qualidade</h4>
                  <p className="text-xs text-brand-muted leading-relaxed">
                    Trabalhamos apenas com protocolos clínicos baseados em evidências robustas, totalmente adaptados de forma cuidadosa à sua realidade biopsicossocial.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Key details */}
            <div className="lg:col-span-7 bg-brand-charcoal p-8 md:p-12 border border-brand-border shadow-2xl relative">
              
              <div className="absolute top-0 right-12 -translate-y-1/2 bg-brand-black border border-brand-border px-4 py-1.5 text-brand-gold text-[10px] uppercase font-mono tracking-widest font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold inline-block animate-pulse"></span>
                Informações Práticas
              </div>

              <span className="text-xs text-brand-gold font-mono tracking-widest uppercase block mb-2">Nosso Consultório</span>
              <h3 className="font-serif text-2xl md:text-3xl text-white font-medium mb-6">
                Bem-vindo ao "Site de Teste para Psicólogos"
              </h3>
              
              <p className="text-brand-text/90 text-base md:text-lg leading-relaxed font-light mb-8">
                Somos uma equipe dedicada de psicólogos clínicos e psicoterapeutas devidamente credenciados em Luxemburgo. Acompanhamos você com elevado rigor clínico, acolhimento sincero e profundo respeito ético para atravessar as fases mais sensíveis do seu caminho. Nosso compromisso é ajudar você a reconectar-se com seus próprios recursos internos.
              </p>

              <hr className="border-brand-border mb-8" />

              {/* Robust Key Metrics Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="border-l-2 border-brand-gold pl-5">
                  <div className="text-2xl md:text-3.5xl font-serif text-white font-bold mb-1">15+ anos</div>
                  <div className="text-xs uppercase tracking-wider text-brand-muted font-medium">de comprovada experiência clínica</div>
                </div>

                <div className="border-l-2 border-brand-gold pl-5">
                  <div className="text-2xl md:text-3.5xl font-serif text-white font-bold mb-1">5 000+</div>
                  <div className="text-xs uppercase tracking-wider text-brand-muted font-medium">atendimentos realizados com sucesso</div>
                </div>

                <div className="border-l-2 border-brand-gold pl-5">
                  <div className="text-2xl md:text-3.5xl font-serif text-white font-bold mb-1">Luxemburgo</div>
                  <div className="text-xs uppercase tracking-wider text-brand-muted font-medium">clínica com prática autorizada e credenciada</div>
                </div>
                
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 border-b border-brand-border bg-brand-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="w-12 h-px bg-brand-gold mx-auto mb-6" />
            <span className="text-brand-gold uppercase tracking-widest text-[11px] font-mono block mb-3 font-semibold">Especialidades e Áreas de Atuação</span>
            <h2 className="font-serif text-3xl md:text-4.5xl text-white mb-6 font-semibold">
              Atendimento clínico especializado e baseado em evidências
            </h2>
            <p className="text-brand-muted text-base md:text-lg font-light leading-relaxed">
              Cada desafio de saúde mental merece um olhar individualizado, ético e especializado. Atendemos sob protocolos terapêuticos personalizados e estruturados de acordo com as diretrizes clínicas globais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-brand-charcoal p-8 border border-brand-border gold-glow-card relative group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 bg-brand-black border border-brand-border/80 flex items-center justify-center text-3xl mb-8 group-hover:border-brand-gold/60 transition-colors duration-300">
                    {service.emoji}
                  </div>
                  
                  <h3 className="font-serif text-lg md:text-xl text-white font-medium mb-3 group-hover:text-brand-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs md:text-sm text-brand-muted leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>
                </div>

                <a 
                  href="#contact"
                  className="mt-4 flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-brand-gold group-hover:underline underline-offset-4 font-semibold text-left w-fit cursor-pointer animate-pulse"
                >
                  Agendar consulta <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Therapeutic Approach Section */}
      <section id="approach" className="py-24 md:py-32 border-b border-brand-border bg-brand-charcoal/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column Description */}
            <div className="lg:col-span-4 sticky top-28">
              <div className="w-12 h-px bg-brand-gold mb-6" />
              <span className="text-brand-gold uppercase tracking-widest text-xs font-mono block mb-3 font-semibold">Nossa Metodologia</span>
              <h2 className="font-serif text-3xl md:text-4.5xl text-white leading-tight mb-6 font-semibold">
                Uma abordagem integrada focada inteiramente em você.
              </h2>
              <p className="text-brand-muted text-sm md:text-base font-light leading-relaxed mb-8">
                Evitamos fórmulas prontas e rotulações simplistas. Sob a perspectiva de uma psicologia integrativa contemporânea, combinamos diferentes ferramentas psicoterápicas cientificamente consagradas para corresponder exatamente à sua verdade e tempo de processo.
              </p>
              
              <div className="flex flex-col gap-4 border-t border-brand-border pt-8 font-serif italic text-brand-gold text-sm">
                <span>"O rigor científico é a nossa base segura; a empatia compassiva é o nosso caminho."</span>
              </div>
            </div>

            {/* Right Column: Method Details */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              {approaches.map((appr, idx) => (
                <div 
                  key={idx}
                  className="bg-brand-charcoal hover:bg-brand-charcoal/80 p-8 md:p-10 border border-brand-border hover:border-brand-gold/40 transition-all duration-300 relative group"
                >
                  <div className="absolute top-8 right-8 font-serif text-5xl md:text-6xl text-brand-border group-hover:text-brand-gold/10 font-bold select-none transition-colors duration-300">
                    0{idx + 1}
                  </div>
                  
                  <span className="text-brand-gold font-mono text-[10px] uppercase tracking-widest font-semibold block mb-2">
                    {appr.subtitle}
                  </span>
                  
                  <h3 className="font-serif text-xl md:text-2xl text-white font-medium mb-4">
                    {appr.title}
                  </h3>
                  
                  <p className="text-brand-text/90 text-sm md:text-base leading-relaxed font-light max-w-2xl">
                    {appr.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 md:py-32 border-b border-brand-border bg-brand-charcoal/20">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <div className="w-12 h-px bg-brand-gold mx-auto mb-6" />
            <span className="text-brand-gold uppercase tracking-widest text-[11px] font-mono block mb-3 font-semibold">Perguntas Frequentes</span>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 font-semibold">
              Respostas para suas Dúvidas
            </h2>
            <p className="text-brand-muted text-sm md:text-base font-light max-w-xl mx-auto">
              Esclareça suas principais dúvidas sobre o andamento das consultas, recibos para reembolso de convênios/plano de saúde e como transcorre a primeira consulta de acolhimento.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaqIndex === index;
              return (
                <div 
                  key={index}
                  className={`border border-brand-border transition-all duration-300 ${isOpen ? 'bg-brand-charcoal border-brand-gold/30 shadow-gold-glow' : 'bg-brand-charcoal/40 hover:bg-brand-charcoal/80'}`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-6 py-5 md:py-6 flex items-center justify-between gap-4 font-serif text-base md:text-lg text-white font-medium hover:text-brand-gold transition-colors focus:outline-none cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="text-brand-gold flex-shrink-0 transition-transform duration-300">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>

                  {/* Pure JS/CSS accordion simulation */}
                  <div 
                    className="overflow-hidden transition-all duration-300"
                    style={{ 
                      maxHeight: isOpen ? '450px' : '0px',
                      opacity: isOpen ? '1' : '0'
                    }}
                  >
                    <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-brand-text/80 leading-relaxed font-light border-t border-brand-border/40">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 border-b border-brand-border bg-brand-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="w-12 h-px bg-brand-gold mx-auto mb-6" />
            <span className="text-brand-gold uppercase tracking-widest text-xs font-mono block mb-3 font-semibold">Primeiro Contato e Agendamento</span>
            <h2 className="font-serif text-3xl md:text-4xl text-white leading-tight mb-6 font-semibold">
              Dê o primeiro passo rumo ao bem-estar.
            </h2>
            <p className="text-brand-muted text-sm md:text-base font-light leading-relaxed">
              Sinta-se à vontade para nos enviar um e-mail ou fazer uma ligação de forma totalmente descompromissada. Respondemos a todas as mensagens com o mais estrito sigilo dentro do prazo máximo de 24 horas úteis.
            </p>
          </div>
            
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start justify-center">
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-gold flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <h4 className="font-serif text-white text-sm font-medium">Endereço do consultório</h4>
                  <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                    Parkring 12, Suite 200,<br />2011 Luxemburgo (Endereço de Demonstração)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-gold flex-shrink-0">
                  <Phone size={16} />
                </div>
                <div>
                  <h4 className="font-serif text-white text-sm font-medium">Telefone</h4>
                  <p className="text-xs text-brand-muted mt-1">
                    +352 26 555-1234
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-gold flex-shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <h4 className="font-serif text-white text-sm font-medium">Endereço de e-mail</h4>
                  <p className="text-xs text-brand-muted mt-1 hover:text-brand-gold transition-colors">
                    office@testwebsite4psychologists.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full border border-brand-border flex items-center justify-center text-brand-gold flex-shrink-0">
                  <Clock size={16} />
                </div>
                <div>
                  <h4 className="font-serif text-white text-sm font-medium">Horário de funcionamento</h4>
                  <p className="text-xs text-brand-muted mt-1">
                    Segunda – Sexta, 9:00 – 18:00
                  </p>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-12 p-5 border-l-2 border-brand-gold/60 bg-brand-charcoal/20 text-[11px] text-brand-muted tracking-wide leading-relaxed font-mono text-center mx-auto max-w-xl">
            Toda a comunicação enviada por este canal é estritamente confidencial, protegida conforme as regras do sigilo profissional (Código de Ética do Psicólogo) e as normas da LGPD em vigor.
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-brand-black py-12 md:py-20 border-t border-brand-border/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          
          <div className="text-center md:text-left">
            <div className="font-serif font-bold text-lg tracking-wider text-white uppercase mb-2 flex flex-wrap items-center justify-center md:justify-start gap-1.5">
              <span>Ψ SITE DE TESTE <span className="text-brand-gold font-light font-serif">PARA PSICÓLOGOS</span></span>
              <img src="https://flagcdn.com/w40/br.png" alt="Brazil Flag" className="w-5 h-3.5 object-cover rounded-[2px] opacity-90 border border-white/5 select-none self-center ml-2" referrerPolicy="no-referrer" />
            </div>
            <p className="text-[11px] text-brand-muted max-w-sm leading-relaxed mx-auto md:mx-0 font-light">
              Este é um projeto de demonstração fictício com finalidades exclusivamente demonstrativas. Todos os serviços clínicos oferecidos, contatos profissionais e localizações representam elementos de simulação.
            </p>
          </div>

          {/* Repeat Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 font-mono text-[10px] uppercase tracking-widest font-medium text-brand-muted">
            <a href="#about" className="hover:text-white transition-colors">Sobre</a>
            <a href="#services" className="hover:text-white transition-colors">Serviços</a>
            <a href="#approach" className="hover:text-white transition-colors">Abordagem Terapêutica</a>
            <a href="#faq" className="hover:text-white transition-colors">Perguntas Frequentes</a>
            <a href="#contact" className="hover:text-brand-gold transition-colors text-brand-gold">Contato</a>
          </div>

        </div>

        {/* Real Bottom License bar */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-8 border-t border-brand-border/40 text-center flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11.5px] text-brand-muted font-light">
            © 2025 Site de Teste para Psicólogos — Website de demonstração fictício.
          </p>
          <p className="text-[11.5px] text-brand-muted/80 flex items-center gap-1 font-mono">
            Inspirado por padrões clínicos de excelência <Heart size={10} className="text-brand-gold inline" /> Acompanhamento centrado no paciente
          </p>
        </div>
      </footer>

    </div>
  );
}

// Custom lock icon to preserve look
function LockIcon({ size }: { size: number }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="text-brand-gold"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
