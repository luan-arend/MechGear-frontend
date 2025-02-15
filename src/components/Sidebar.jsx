import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaBars, 
  FaTimes, 
  FaUsers, 
  FaClipboardList, 
  FaBoxes,
  FaTools,
  FaChartLine,
  FaSignOutAlt,
  FaCog
} from 'react-icons/fa';
import { useAuth } from '../context/LoginContext';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { icon: FaChartLine, text: 'Dashboard', path: '/' },
    { icon: FaUsers, text: 'Clientes', path: '/clientes' },
    { icon: FaClipboardList, text: 'Pedidos', path: '/pedidos' },
    { icon: FaBoxes, text: 'Estoque', path: '/estoque' },
    { icon: FaTools, text: 'Serviços', path: '/servicos' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 text-white transition-all duration-300 flex flex-col ${isOpen ? 'w-64' : 'w-20'}`}>
      <div className="p-4 flex items-center justify-between border-b border-blue-500/30">
        {isOpen && (
          <div className="flex items-center gap-2">
            <FaCog className="text-2xl animate-spin-slow" />
            <h2 className="text-xl font-bold">MechGear</h2>
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg hover:bg-blue-700/50 transition-colors"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      <nav className="mt-8 flex-1">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="flex items-center gap-4 px-4 py-3 hover:bg-blue-700/50 transition-colors"
          >
            <item.icon size={24} />
            {isOpen && <span>{item.text}</span>}
          </Link>
        ))}
      </nav>

      <button
        onClick={handleLogout}
        className="flex items-center gap-4 px-4 py-4 hover:bg-blue-700/50 transition-colors border-t border-blue-500/30 mt-auto"
      >
        <FaSignOutAlt size={24} />
        {isOpen && <span>Sair</span>}
      </button>
    </div>
  );
}