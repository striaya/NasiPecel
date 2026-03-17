import { Leaf, Heart, Award, Users, Trophy } from 'lucide-react';

const features = [
  { icon: Leaf, title: 'Bahan Segar', desc: 'Sayuran dipilih setiap pagi dari pasar lokal' },
  { icon: Heart, title: 'Resep Turun-Temurun', desc: 'Warisan kuliner tiga generasi keluarga' },
  { icon: Award, title: 'Kualitas Terjamin', desc: 'Higienis, lezat, dan terpercaya sejak 2014' },
  { icon: Users, title: 'Dicintai Ribuan', desc: 'Lebih dari 500 pelanggan setia per hari' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-espresso-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative reveal">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-bark-200/30 dark:shadow-espresso-900/50">
                <img
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80"
                  alt="Dapur Pecel Nusantara"
                  className="w-full h-80 lg:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/40 to-transparent rounded-3xl" />
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-espresso-700 rounded-2xl shadow-xl p-4 border border-cream-200 dark:border-espresso-600 max-w-40">
                <div className="w-8 h-8 bg-gradient-to-br from-bark-400 to-bark-600 rounded-xl flex items-center justify-center mb-2"><Trophy className="w-4 h-4 text-white" /></div>
                <div className="font-display font-bold text-sm text-espresso-800 dark:text-cream-100">UMKM Terbaik</div>
                <div className="font-body text-xs text-bark-500">Kota Malang 2023</div>
              </div>

              <div className="absolute -top-6 -left-6 bg-gradient-to-br from-leaf-600 to-leaf-700 rounded-2xl shadow-xl p-4 max-w-36">
                <div className="font-display font-bold text-2xl text-white">10+</div>
                <div className="font-body text-xs text-cream-200">Tahun Pengalaman</div>
              </div>

              <div className="absolute top-1/2 -right-12 w-24 h-24 bg-cream-200 dark:bg-espresso-700 rounded-full opacity-40 blur-2xl" />
            </div>
          </div>

          <div className="reveal">
            <div className="inline-flex items-center gap-2 bg-bark-50 dark:bg-bark-900/20 border border-bark-200 dark:border-bark-800 rounded-full px-4 py-1.5 mb-5">
              <span className="text-bark-600 dark:text-bark-400 text-xs font-body font-medium uppercase tracking-wider">Cerita Kami</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-4xl font-bold text-espresso-800 dark:text-cream-100 leading-tight mb-5">
              Dari Dapur Keluarga ke{' '}
              <span className="text-gradient italic">Meja Anda</span>
            </h2>

            <div className="w-16 h-1 bg-gradient-to-r from-bark-400 to-bark-600 rounded-full mb-6" />

            <p className="font-body text-sm text-bark-600 dark:text-cream-200/60 leading-relaxed mb-4">
              Pecel Nusantara lahir dari kecintaan mendalam terhadap kuliner tradisional Indonesia. Pada tahun 2014, Ibu Sari memulai perjalanannya dengan berjualan di teras rumah menggunakan resep bumbu kacang warisan neneknya.
            </p>
            <p className="font-body text-sm text-bark-600 dark:text-cream-200/60 leading-relaxed mb-8">
              Hari ini, kami hadir untuk membawa kenangan rasa itu langsung ke hadapan Anda — dengan konsistensi rasa, bahan-bahan segar berkualitas, dan semangat yang sama seperti saat pertama kali kami memasak untuk tetangga tercinta.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div key={feat.title} className="flex items-start gap-3 p-3 rounded-2xl bg-cream-50 dark:bg-espresso-700 border border-cream-100 dark:border-espresso-600">
                    <div className="w-8 h-8 bg-gradient-to-br from-leaf-500 to-leaf-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="font-body font-semibold text-xs text-espresso-800 dark:text-cream-100">{feat.title}</div>
                      <div className="font-body text-xs text-bark-500 dark:text-cream-300/60 mt-0.5">{feat.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-bark-500 to-bark-700 hover:from-bark-400 hover:to-bark-600 text-white font-body font-semibold px-6 py-3 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
