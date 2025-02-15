import PageHeader from '../components/PageHeader';
import { FaClipboardList, FaUsers, FaTools } from 'react-icons/fa';

export default function Dashboard() {
  const handleSearch = (term) => {
    console.log('Searching for:', term);
  };

  return (
    <div>
      <PageHeader title="Dashboard" onSearch={handleSearch} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-md border border-white/50">
          <div className="flex items-center gap-3 mb-2">
            <FaClipboardList className="text-2xl text-blue-600" />
            <h3 className="text-lg font-semibold">Pedidos Pendentes</h3>
          </div>
          <p className="text-3xl font-bold text-blue-600">12</p>
        </div>
        
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-md border border-white/50">
          <div className="flex items-center gap-3 mb-2">
            <FaUsers className="text-2xl text-green-600" />
            <h3 className="text-lg font-semibold">Clientes Ativos</h3>
          </div>
          <p className="text-3xl font-bold text-green-600">48</p>
        </div>
        
        <div className="bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-md border border-white/50">
          <div className="flex items-center gap-3 mb-2">
            <FaTools className="text-2xl text-purple-600" />
            <h3 className="text-lg font-semibold">Serviços do Dia</h3>
          </div>
          <p className="text-3xl font-bold text-purple-600">5</p>
        </div>
      </div>
    </div>
  );
}