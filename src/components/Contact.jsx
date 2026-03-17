import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-cream-50 dark:bg-espresso-900 bg-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <div className="inline-flex items-center gap-2 bg-leaf-50 dark:bg-leaf-900/20 border border-leaf-200 dark:border-leaf-800 rounded-full px-4 py-1.5 mb-4">
            <MapPin className="w-3.5 h-3.5 text-leaf-600" />
            <span className="text-leaf-700 dark:text-leaf-400 text-xs font-body font-medium uppercase tracking-wider">Temukan Kami</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso-800 dark:text-cream-100 mb-4">
            Hubungi & <span className="text-gradient italic">Kunjungi</span>
          </h2>
          <p className="font-body text-sm text-bark-600 dark:text-cream-200/60 max-w-md mx-auto">
            Kami siap melayani pesanan Anda setiap hari. Datang langsung atau pesan via WhatsApp!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4 reveal">
            <div className="bg-white dark:bg-espresso-800 rounded-3xl p-6 border border-cream-200 dark:border-espresso-700 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-leaf-500 to-leaf-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-body font-semibold text-sm text-espresso-800 dark:text-cream-100 mb-1">Alamat</div>
                  <div className="font-body text-xs text-bark-600 dark:text-cream-200/60 leading-relaxed">
                    Jl. Otista 1A<br />
                    Kelurahan Bidara Cina<br />
                    DKI Jakarta, Jakarta Timur 13330
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-espresso-800 rounded-3xl p-6 border border-cream-200 dark:border-espresso-700 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-bark-500 to-bark-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-body font-semibold text-sm text-espresso-800 dark:text-cream-100 mb-1">Telepon / WhatsApp</div>
                  <div className="font-body text-xs text-bark-600 dark:text-cream-200/60">+62 857-8157-3040</div>
                  <a
                    href="https://wa.me/6285781573040?text=Halo%20Pecel%20Mamah%20Satria%2C%20saya%20mau%20pesan!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 text-xs font-medium text-leaf-600 dark:text-leaf-400 hover:underline"
                  >
                    <MessageCircle className="w-3 h-3" />
                    Chat di WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-espresso-800 rounded-3xl p-6 border border-cream-200 dark:border-espresso-700 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-espresso-700 to-espresso-900 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Clock className="w-5 h-5 text-cream-200" />
                </div>
                <div>
                  <div className="font-body font-semibold text-sm text-espresso-800 dark:text-cream-100 mb-2">Jam Operasional</div>
                  <div className="space-y-1">
                    {[
                      { day: 'Senin – Jumat', hours: '9.00 – 17.00 WIB' },
                      { day: 'Sabtu – Minggu', hours: '9.00 – 19.00 WIB' },
                    ].map((h) => (
                      <div key={h.day} className="flex justify-between gap-4">
                        <span className="font-body text-xs text-bark-600 dark:text-cream-200/60">{h.day}</span>
                        <span className="font-body text-xs font-medium text-espresso-800 dark:text-cream-100">{h.hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 mt-2">
                    <span className="w-2 h-2 bg-leaf-500 rounded-full animate-pulse" />
                    <span className="font-body text-xs text-leaf-600 font-medium">Buka Sekarang</span>
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/6285781573040?text=Halo%20Pecel%20Mamah%20Satria%2C%20saya%20mau%20pesan!%20Bisa%20bantu%20saya%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-leaf-600 to-leaf-700 hover:from-leaf-500 hover:to-leaf-600 text-white font-body font-semibold py-4 rounded-2xl shadow-lg shadow-leaf-900/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Pesan Sekarang via WhatsApp
            </a>
          </div>

          <div className="lg:col-span-3 reveal">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-cream-200 dark:border-espresso-700 h-full min-h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d991.5710385480269!2d106.86462975440813!3d-6.226216024322459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1773748259876!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Pecel Nusantara"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
