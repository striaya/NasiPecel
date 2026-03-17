import { X, ShoppingBag, Trash2, Plus, Minus, UtensilsCrossed } from 'lucide-react';

function formatPrice(price) {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);
}

export default function CartModal({ isOpen, onClose, cart, onUpdate, onRemove }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const waMessage = cart.map(i => `${i.name} x${i.qty}`).join(', ');
  const waLink = `https://wa.me/6285781573040?text=Halo%20Pecel%20Mamah%20Satria%2C%20saya%20mau%20pesan%3A%20${encodeURIComponent(waMessage)}%20%0ATotal%3A%20${formatPrice(total)}`;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full sm:max-w-md bg-white dark:bg-espresso-800 rounded-t-3xl sm:rounded-3xl shadow-2xl p-6 max-h-[80vh] flex flex-col z-10">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-bark-600" />
            <h3 className="font-display font-bold text-lg text-espresso-800 dark:text-cream-100">Keranjang Pesanan</h3>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-xl hover:bg-cream-100 dark:hover:bg-espresso-700 text-bark-600 dark:text-cream-300">
            <X className="w-4 h-4" />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-14 h-14 bg-cream-100 dark:bg-espresso-700 rounded-2xl flex items-center justify-center mx-auto mb-3"><UtensilsCrossed className="w-7 h-7 text-bark-400" /></div>
            <p className="font-body text-sm text-bark-500">Keranjang masih kosong</p>
            <p className="font-body text-xs text-bark-400 mt-1">Yuk pilih menu favoritmu!</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto space-y-3 mb-5">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-3 bg-cream-50 dark:bg-espresso-700 rounded-2xl p-3">
                  <img src={item.img} alt={item.name} className="w-14 h-14 object-cover rounded-xl flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-body font-semibold text-xs text-espresso-800 dark:text-cream-100 truncate">{item.name}</div>
                    <div className="font-display text-sm font-bold text-gradient">{formatPrice(item.price)}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => onUpdate(item.id, -1)} className="w-6 h-6 bg-white dark:bg-espresso-600 rounded-lg flex items-center justify-center shadow-sm">
                      <Minus className="w-3 h-3 text-bark-600 dark:text-cream-200" />
                    </button>
                    <span className="font-body font-bold text-xs text-espresso-800 dark:text-cream-100 w-4 text-center">{item.qty}</span>
                    <button onClick={() => onUpdate(item.id, 1)} className="w-6 h-6 bg-bark-500 rounded-lg flex items-center justify-center shadow-sm">
                      <Plus className="w-3 h-3 text-white" />
                    </button>
                    <button onClick={() => onRemove(item.id)} className="w-6 h-6 bg-red-50 dark:bg-red-900/20 rounded-lg flex items-center justify-center">
                      <Trash2 className="w-3 h-3 text-red-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-cream-200 dark:border-espresso-600 pt-4 mb-4">
              <div className="flex justify-between items-center">
                <span className="font-body text-sm text-bark-600 dark:text-cream-300">Total Pesanan</span>
                <span className="font-display font-bold text-lg text-gradient">{formatPrice(total)}</span>
              </div>
            </div>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-leaf-600 to-leaf-700 hover:from-leaf-500 hover:to-leaf-600 text-white font-body font-semibold py-3.5 rounded-2xl shadow-lg transition-all duration-300"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Pesan via WhatsApp
            </a>
          </>
        )}
      </div>
    </div>
  );
}
