import { ChevronDown, Star, CheckCircle } from 'lucide-react';
import herobg from '../assets/warungmamahsatria.jpeg';


export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={herobg}
          alt="Nasi Pecel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-900/90 via-espresso-800/70 to-espresso-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/60 via-transparent to-transparent" />
      </div>

      <div className="absolute top-20 right-20 w-64 h-64 bg-leaf-600/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-40 w-48 h-48 bg-bark-500/10 rounded-full blur-2xl" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
            <Star className="w-3.5 h-3.5 text-cream-300 fill-cream-300" />
            <span className="text-cream-200 text-xs font-body font-medium tracking-wider uppercase">
              Cita Rasa Yang Berselera
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 animate-fade-up">
            Nasi Pecel
            <span className="block text-bark-300 italic font-normal">
              Mamah Satria
            </span>
            <span className="block text-cream-100">
              Rasa Autentik
            </span>
          </h1>

          <div className="flex items-center gap-3 mb-6 animate-fade-up delay-200">
            <div className="w-12 h-0.5 bg-bark-400" />
            <div className="w-2 h-2 bg-bark-400 rounded-full" />
            <div className="w-4 h-0.5 bg-bark-400" />
          </div>

          <p className="font-body text-base sm:text-lg text-cream-200/80 leading-relaxed mb-8 max-w-lg animate-fade-up delay-300">
            Dari dapur UMKM kami dengan resep turun-temurun — bumbu kacang segar, sayuran pilihan, dan cita rasa Indonesia yang tak terlupakan.
          </p>

          <div className="flex items-center gap-6 mb-10 animate-fade-up delay-400">
            {[
              { value: '10±', label: 'Tahun Berdiri' },
              // { value: '500+', label: 'Pelanggan Harian' },
              { value: '4.9', label: 'Rating Bintang' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-xl font-bold text-bark-300">{stat.value}</div>
                <div className="font-body text-xs text-cream-300/70 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 animate-fade-up delay-500">
            <a
              href="#menu"
              className="group flex items-center gap-2 bg-gradient-to-r from-bark-500 to-bark-600 hover:from-bark-400 hover:to-bark-500 text-white font-body font-semibold px-7 py-3.5 rounded-2xl shadow-lg shadow-bark-900/30 hover:shadow-xl hover:shadow-bark-900/40 transition-all duration-300 hover:-translate-y-0.5"
            >
              Lihat Menu
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="https://wa.me/6285781573040?text=Halo%20Pecel%20Mamah%20Satria%2C%20saya%20mau%20pesan!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-body font-medium px-7 py-3.5 rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Pesan via WhatsApp
            </a>
          </div>
        </div>

        <div className="absolute bottom-24 right-8 hidden lg:block animate-float">
          <div className="bg-white/15 backdrop-blur-md border border-white/25 rounded-2xl p-4 shadow-xl w-48">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 bg-leaf-600 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-white text-xs font-semibold">Pesanan Baru</div>
                <div className="text-cream-300 text-xs">2 menit lalu</div>
              </div>
            </div>
            <div className="text-cream-200 text-xs">Nasi Pecel Komplit x2</div>
            <div className="text-bark-300 text-xs font-semibold mt-1">Rp 70.000</div>
          </div>
        </div>
      </div>

      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" className="fill-cream-50 dark:fill-espresso-900"/>
      </svg>
    </section>
  );
}
