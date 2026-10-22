import React, { useState } from 'react';
import ShoppingItem from './ShoppingItem';

function App() {
  const [items, setItems] = useState([]);
  const [nameInput, setNameInput] = useState('');
  const [priceInput, setPriceInput] = useState('');

  // Добавление товара
  const handleAddItem = (e) => {
    e.preventDefault();

    if (!nameInput.trim() || !priceInput || Number(priceInput) <= 0) {
      alert('Введите название и корректную цену!');
      return;
    }

    const newItem = {
      id: Date.now(),
      name: nameInput.trim(),
      price: parseFloat(priceInput),
    };

    setItems([...items, newItem]);
    setNameInput('');
    setPriceInput('');
  };

  // Удаление товара
  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Подсчёт общей стоимости
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.subtitle}>МОЙ БЮДЖЕТ</div>
        <h1 style={styles.title}>Список покупок</h1>
        <p style={styles.desc}>Считаем расходы до перехода к кассе</p>

        {/* Форма добавления */}
        <form onSubmit={handleAddItem} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Что нужно купить?</label>
            <input
              type="text"
              placeholder="Например, хлеб"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Цена (сом)</label>
            <input
              type="number"
              placeholder="Например, 150"
              value={priceInput}
              onChange={(e) => setPriceInput(e.target.value)}
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.addBtn}>
            + В корзину
          </button>
        </form>

        {/* Секция списка */}
        <div style={styles.sectionHeader}>
          <span>Товары</span>
          <span style={styles.badge}>{items.length}</span>
        </div>

        {items.length === 0 ? (
          <div style={styles.emptyBox}>
            <div style={styles.emptyIcon}>🛒</div>
            <div style={styles.emptyTitle}>Корзина пока пуста</div>
            <div style={styles.emptyDesc}>Добавь первый товар с помощью формы выше.</div>
          </div>
        ) : (
          <div style={styles.listContainer}>
            {items.map((item) => (
              <ShoppingItem key={item.id} item={item} onDelete={handleDeleteItem} />
            ))}
          </div>
        )}

        {/* Итоговый блок */}
        <div style={styles.totalBox}>
          <div>
            <div style={styles.totalLabel}>Примерный чек</div>
            <div style={styles.totalCount}>Всего товаров: {items.length}</div>
          </div>
          <div style={styles.totalSum}>
            {totalPrice} <span style={styles.currency}>сом</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#f1f5f9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  card: {
    width: '100%',
    maxWidth: '520px',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    padding: '32px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
  },
  subtitle: {
    fontSize: '11px',
    fontWeight: '700',
    color: '#64748b',
    letterSpacing: '0.05em',
    marginBottom: '6px',
  },
  title: {
    fontSize: '26px',
    fontWeight: 'bold',
    color: '#0f172a',
    margin: '0 0 6px 0',
  },
  desc: {
    fontSize: '14px',
    color: '#64748b',
    marginBottom: '24px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginBottom: '28px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#334155',
  },
  input: {
    padding: '12px 14px',
    fontSize: '14px',
    border: '1px solid #cbd5e1',
    borderRadius: '10px',
    outline: 'none',
    backgroundColor: '#f8fafc',
  },
  addBtn: {
    marginTop: '4px',
    padding: '14px',
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    border: 'none',
    borderRadius: '10px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '15px',
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: '14px',
  },
  badge: {
    backgroundColor: '#e2e8f0',
    color: '#475569',
    padding: '2px 8px',
    borderRadius: '12px',
    fontSize: '12px',
  },
  emptyBox: {
    textAlign: 'center',
    padding: '30px 20px',
    border: '2px dashed #e2e8f0',
    borderRadius: '14px',
    marginBottom: '24px',
  },
  emptyIcon: {
    fontSize: '32px',
    marginBottom: '8px',
  },
  emptyTitle: {
    fontSize: '15px',
    fontWeight: '600',
    color: '#334155',
    marginBottom: '4px',
  },
  emptyDesc: {
    fontSize: '13px',
    color: '#94a3b8',
  },
  listContainer: {
    maxHeight: '220px',
    overflowY: 'auto',
    marginBottom: '24px',
  },
  totalBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '18px 20px',
    backgroundColor: '#f8fafc',
    borderRadius: '14px',
    border: '1px solid #e2e8f0',
  },
  totalLabel: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#334155',
  },
  totalCount: {
    fontSize: '12px',
    color: '#64748b',
    marginTop: '2px',
  },
  totalSum: {
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#3b82f6',
  },
  currency: {
    fontSize: '16px',
    fontWeight: '600',
  },
};

export default App;