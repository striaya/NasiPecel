import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/menuData';

export default function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-espresso-800 to-espresso-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-64 h-64 bg-leaf-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-bark-500/10 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-4">
            <Star className="w-3.5 h-3.5 text-cream-300 fill-cream-300" />
            <span className="text-cream-200 text-xs font-body font-medium uppercase tracking-wider">Kata Pelanggan Kami</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Mereka{' '}
            <span className="text-bark-300 italic">Sudah Merasakannya</span>
          </h2>
          <p className="font-body text-sm text-cream-200/60 max-w-md mx-auto">
            Ratusan pelanggan puas telah menjadi bukti nyata cita rasa autentik Pecel Nusantara.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="reveal bg-white/10 backdrop-blur-sm border border-white/15 rounded-3xl p-6 hover:bg-white/15 transition-all duration-400 hover:-translate-y-1 hover:shadow-xl"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-bark-400/40 mb-4" />

              <div className="flex items-center gap-1 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 text-cream-300 fill-cream-300" />
                ))}
              </div>

              <p className="font-body text-sm text-cream-200/80 leading-relaxed mb-5 italic">
                "{t.review}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-body font-semibold text-sm text-white">{t.name}</div>
                  <div className="font-body text-xs text-cream-300/60">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center reveal">
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-4">
            <div>
              <div className="font-display text-4xl font-bold text-white">4.9</div>
              <div className="font-body text-xs text-cream-300/70">/ 5.0</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div>
              <div className="flex gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-cream-300 fill-cream-300" />
                ))}
              </div>
              <div className="font-body text-xs text-cream-300/70">Ulasan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
