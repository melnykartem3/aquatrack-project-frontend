import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { MdOutlineLanguage } from 'react-icons/md';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [visible, setVisible] = useState(false);
  const menuRef = useRef(null);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setVisible(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      left: '20px',
      zIndex: 1000
    }}>
      <MdOutlineLanguage
        size={24}
        onClick={() => setVisible(!visible)}
        style={{
          cursor: 'pointer',
          color: '#323f47',
          transition: 'color 0.3s'
        }}
      />
      {visible && (
        <div
          ref={menuRef}
          style={{
            position: 'absolute',
            top: '30px',
            backgroundColor: '#f5f5f5',
            border: '1px solid #ddd',
            borderRadius: '10px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            zIndex: 1000,
            padding: '5px',
            transition: 'opacity 0.3s',
            opacity: visible ? 1 : 0
          }}
        >
          <div
            onClick={() => handleLanguageChange('en')}
            style={{
              padding: '8px',
              cursor: 'pointer',
              backgroundColor: '#f5f5f5',
              color: '#323f47',
              transition: 'background-color 0.3s',
              userSelect: 'none',
              outline: 'none'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
            onFocus={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
            tabIndex="0"
          >
            En
          </div>
          <div
            onClick={() => handleLanguageChange('uk')}
            style={{
              padding: '8px',
              cursor: 'pointer',
              backgroundColor: '#f5f5f5',
              color: '#323f47',
              transition: 'background-color 0.3s',
              userSelect: 'none',
              outline: 'none'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
            onFocus={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
            tabIndex="0"
          >
            Uk
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;