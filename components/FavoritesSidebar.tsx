import React from 'react';
import { X, Trash2, ShoppingBag } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import { PRODUCTS, BUSINESS_INFO } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const FavoritesSidebar: React.FC = () => {
  const { isSidebarOpen, setSidebarOpen, favorites, toggleFavorite } = useFavorites();
  const { t } = useLanguage();

  const favoriteProducts = PRODUCTS.filter(p => favorites.includes(p.id));

  if (!isSidebarOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 transition-opacity"
        onClick={() => setSidebarOpen(false)}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            {t('favorites.title')} <span className="text-froota-pink">❤</span>
          </h2>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {favoriteProducts.length === 0 ? (
            <div className="text-center py-10 text-gray-500">
              <p className="mb-4">{t('favorites.empty')}</p>
              <p className="text-sm">{t('favorites.empty_desc')}</p>
            </div>
          ) : (
            favoriteProducts.map(product => (
              <div key={product.id} className="flex gap-4 p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-20 h-20 object-cover rounded-lg bg-gray-100"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-gray-900 text-sm">{product.name}</h3>
                    <button 
                      onClick={() => toggleFavorite(product.id)}
                      className="text-gray-400 hover:text-red-500 p-1"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <p className="text-froota-green font-bold text-sm mt-1">{product.price}</p>
                  <p className="text-xs text-gray-500 mt-2 truncate max-w-[150px]">{product.category}</p>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t border-gray-100 bg-gray-50 space-y-3">
          <p className="text-xs text-center text-gray-500 mb-2">
            {t('favorites.ready')}
          </p>
          <a 
            href={BUSINESS_INFO.woltUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition-colors"
          >
            {t('nav.wolt')}
          </a>
          <a 
            href={BUSINESS_INFO.glovoUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold rounded-xl transition-colors"
          >
            {t('nav.glovo')}
          </a>
        </div>
      </div>
    </>
  );
};

export default FavoritesSidebar;