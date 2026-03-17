import { useState } from 'react';
import { ShoppingCart, Star, ChefHat, Check } from 'lucide-react';
import { menuItems } from '../data/menuData';

function formatPrice(price) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
}

export default function MenuSection({ onAddToCart }) {
  const [added, setAdded] = useState({});

  const handleAdd = (item) => {
    onAddToCart(item);
    setAdded((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => setAdded((prev) => ({ ...prev, [item.id]: false })), 1500);
  };

  return (
    <section id="menu" className="py-24 bg-cream-50 dark:bg-espresso-900 bg-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 bg-leaf-50 dark:bg-leaf-900/20 border border-leaf-200 dark:border-leaf-800 rounded-full px-4 py-1.5 mb-4">
            <ChefHat className="w-3.5 h-3.5 text-leaf-600" />
            <span className="text-leaf-700 dark:text-leaf-400 text-xs font-body font-medium uppercase tracking-wider">Menu Pilihan Kami</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-espresso-800 dark:text-cream-100 mb-4">
            Sajian <span className="text-gradient italic">Istimewa</span>
          </h2>
          <p className="font-body text-base text-bark-600 dark:text-cream-200/60 max-w-lg mx-auto leading-relaxed">
            Setiap hidangan dibuat dari bahan-bahan segar pilihan dengan bumbu kacang rahasia yang telah kami sempurnakan selama lebih dari satu dekade.
          </p>
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-8 h-0.5 bg-bark-300" />
            <div className="w-2 h-2 bg-bark-400 rounded-full" />
            <div className="w-16 h-0.5 bg-bark-300" />
            <div className="w-2 h-2 bg-bark-400 rounded-full" />
            <div className="w-8 h-0.5 bg-bark-300" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {menuItems.map((item, i) => (
            <div
              key={item.id}
              className={`menu-card bg-white dark:bg-espresso-800 rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-cream-200 dark:border-espresso-700 reveal`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-30`} />
                <div className="absolute top-3 right-3">
                  <span className={`inline-block bg-gradient-to-r ${item.color} text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm`}>
                    {item.badge}
                  </span>
                </div>
                {/* <div className="absolute bottom-3 left-3 flex items-center gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3 h-3 text-cream-300 fill-cream-300" />
                  ))}
                </div> */}
              </div>

              <div className="p-5">
                <h3 className="font-display text-base font-bold text-espresso-800 dark:text-cream-100 mb-2">
                  {item.name}
                </h3>
                <p className="font-body text-xs text-bark-600 dark:text-cream-200/60 leading-relaxed mb-4">
                  {item.desc}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs text-bark-400 dark:text-bark-500">Harga</div>
                    <div className="font-display font-bold text-lg text-gradient">
                      {formatPrice(item.price)}
                    </div>
                  </div>
                  <button
                    onClick={() => handleAdd(item)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      added[item.id]
                        ? 'bg-leaf-500 text-white scale-95'
                        : 'bg-bark-50 dark:bg-espresso-700 text-bark-700 dark:text-cream-200 hover:bg-bark-500 hover:text-white'
                    }`}
                  >
                    {added[item.id] ? (
                      <><Check className="w-3.5 h-3.5" /><span className="text-xs">Ditambah</span></> 
                    ) : (
                      <>
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span className="text-xs">Tambah</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <a
            href="https://wa.me/6281234567890?text=Halo%2C%20saya%20mau%20pesan%20Nasi%20Pecel!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-leaf-600 to-leaf-700 hover:from-leaf-500 hover:to-leaf-600 text-white font-body font-semibold px-8 py-4 rounded-2xl shadow-lg shadow-leaf-900/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Pesan Semua via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
