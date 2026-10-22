import React from 'react';

function ShoppingItem({ item, onToggle, onDelete }) {
  return (
    <div
      style={{
        ...styles.itemCard,
        opacity: item.completed ? 0.6 : 1,
        backgroundColor: item.completed ? '#f1f5f9' : '#ffffff',
      }}
    >
      <div style={styles.leftGroup}>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => onToggle(item.id)}
          style={styles.checkbox}
        />
        <div>
          <div
            style={{
              ...styles.itemName,
              textDecoration: item.completed ? 'line-through' : 'none',
              color: item.completed ? '#64748b' : '#0f172a',
            }}
          >
            {item.name}
          </div>
          <div style={styles.itemPrice}>{item.price} сом</div>
        </div>
      </div>

      <button
        style={styles.deleteBtn}
        onClick={() => onDelete(item.id)}
        title="Удалить товар"
      >
        ✕
      </button>
    </div>
  );
}

const styles = {
  itemCard: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 16px',
    marginBottom: '10px',
    border: '1px solid #e2e8f0',
    borderRadius: '12px',
    transition: 'all 0.2s ease',
  },
  leftGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  checkbox: {
    width: '18px',
    height: '18px',
    accentColor: '#2563eb',
    cursor: 'pointer',
  },
  itemName: {
    fontSize: '15px',
    fontWeight: '600',
  },
  itemPrice: {
    fontSize: '13px',
    color: '#64748b',
    marginTop: '2px',
  },
  deleteBtn: {
    backgroundColor: 'transparent',
    color: '#94a3b8',
    border: 'none',
    width: '32px',
    height: '32px',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
};

export default ShoppingItem;