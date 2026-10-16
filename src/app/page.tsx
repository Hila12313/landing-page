import { ArrowRight, CheckCircle2, Shield, Zap, Star, Sparkles, Globe, Layers } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-violet-400 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              MinhaLanding
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-white transition-colors">Recursos</a>
            <a href="#stats" className="hover:text-white transition-colors">Depoimentos</a>
            <a href="#pricing" className="hover:text-white transition-colors">Planos</a>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#cta"
              className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-md shadow-indigo-600/30 transition-all hover:scale-105 active:scale-95"
            >
              Começar Agora
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/15 blur-[140px] pointer-events-none rounded-full" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/40 text-indigo-300 text-xs font-medium mb-8 backdrop-blur-sm">
            <Zap className="w-3.5 h-3.5 text-indigo-400" />
            <span>Configurado com Next.js + Tailwind + Vercel</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
            Lance sua Landing Page <br className="hidden sm:inline" />
            com <span className="bg-gradient-to-r from-indigo-400 via-violet-300 to-indigo-200 bg-clip-text text-transparent">alta conversão</span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 mb-10 leading-relaxed">
            Uma estrutura moderna, rápida e otimizada para SEO. Pronta para ser customizada, conectada ao GitHub e publicada instantaneamente na Vercel.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#cta"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 group transition-all"
            >
              Criar meu projeto
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
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Carregamento Ultrarrápido</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                Next.js com Server Components e Turbopack garante notas máximas no Google PageSpeed Insights.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Deploy Automático na Vercel</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                A cada `git push` no seu repositório GitHub, uma nova versão é publicada automaticamente em segundos.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
      <section id="cta" className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="p-12 rounded-3xl bg-gradient-to-b from-indigo-950/60 to-slate-900 border border-indigo-500/30 shadow-2xl relative overflow-hidden">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-white">
              Pronto para colocar sua ideia no ar?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto mb-8 text-base">
              Personalize o texto, adicione as fotos do seu produto e envie para a Vercel com apenas um comando.
            </p>
            <div className="flex justify-center">
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3.5 rounded-xl font-semibold bg-white text-slate-950 hover:bg-slate-100 transition-all shadow-lg flex items-center gap-2"
              >
                Publicar na Vercel
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-900 text-center text-sm text-slate-500">
        <p>© 2026 MinhaLanding. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
