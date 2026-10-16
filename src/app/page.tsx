import { ArrowRight, CheckCircle2, Shield, Zap, Star, Sparkles, Globe, Layers, MessageCircle, Phone } from "lucide-react";

export default function Home() {
  const whatsappUrl = "https://wa.me/5594992392558?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.";
  const displayPhone = "(94) 99239-2558";

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-white relative">
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              MinhaLanding
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">Recursos</a>
            <a href="#beneficios" className="hover:text-white transition-colors">Vantagens</a>
            <a href="#contato" className="hover:text-white transition-colors">Contato</a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-md shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{displayPhone}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[140px] pointer-events-none rounded-full" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-300 text-xs font-medium mb-8 backdrop-blur-sm">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span>Atendimento Rápido pelo WhatsApp: {displayPhone}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Lance sua Landing Page <br className="hidden sm:inline" />
            com <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200 bg-clip-text text-transparent">alta conversão</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed">
            Estrutura moderna, rápida e otimizada para capturar clientes direto no seu WhatsApp. Entre em contato agora e tire seu projeto do papel.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-xl shadow-emerald-600/30 flex items-center justify-center gap-2 group transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chamar no WhatsApp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#features"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 transition-all"
            >
              Conhecer recursos
            </a>
          </div>

          {/* Social Proof Badges */}
          <div className="mt-14 pt-10 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-8 text-slate-400 text-sm">
            <div className="flex items-center gap-1.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
              <span className="text-slate-300 ml-1 font-medium">5.0 de avaliação</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% Responsivo</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Deploy Contínuo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-900/40 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">
              Tudo o que você precisa para decolar
            </h2>
            <p className="text-slate-400">
              Desenvolvido com o que há de mais moderno no ecossistema Node.js e React para garantir máxima velocidade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Carregamento Ultrarrápido</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Next.js com Server Components e Turbopack garante notas máximas no Google PageSpeed Insights.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Deploy Automático na Vercel</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                A cada atualização enviada para o GitHub, uma nova versão é publicada automaticamente em segundos.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Estilização com Tailwind CSS</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Facilidade total para trocar cores, fontes e espaçamentos com classes utilitárias modernas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-b from-emerald-950/60 to-slate-900 border border-emerald-500/30 shadow-2xl relative overflow-hidden">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white">
              Pronto para colocar sua ideia no ar?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto mb-4 text-base">
              Fale diretamente conosco pelo WhatsApp e tire suas dúvidas agora mesmo.
            </p>
            <p className="text-emerald-400 font-semibold text-lg mb-8 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              <span>{displayPhone}</span>
            </p>
            <div className="flex justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-all shadow-xl shadow-emerald-500/30 flex items-center gap-2 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Conversar no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl shadow-emerald-500/50 hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-500" />
        <span className="hidden sm:inline font-semibold text-sm text-slate-950">WhatsApp</span>
      </a>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-900 text-center text-sm text-slate-500">
        <p className="mb-2">WhatsApp: <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">{displayPhone}</a></p>
        <p>© 2026 MinhaLanding. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
