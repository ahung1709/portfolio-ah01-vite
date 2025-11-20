import { FiSun, FiMoon } from 'react-icons/fi';
import './ThemeSwitch.css';

const ThemeSwitch = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      className={`theme-switch ${darkMode ? 'dark' : ''}`}
      onClick={toggleDarkMode}
      aria-label='Toggle dark mode'
    >
      <span className='switch-icon sun'>
        <FiSun />
      </span>

      <span className='switch-knob'></span>

      <span className='switch-icon moon'>
        <FiMoon />
      </span>
    </button>
  );
};

export default ThemeSwitch;
