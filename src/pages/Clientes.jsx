import PageHeader from '../components/PageHeader';

export default function Clientes() {
  const handleSearch = (term) => {
    console.log('Searching clients:', term);
  };

  return (
    <div>
      <PageHeader title="Clientes" onSearch={handleSearch} />
      <div className="bg-white/90 backdrop-blur-md p-6 rounded-lg shadow-md border border-white/50">
        {/* Client list will go here */}
        <p className="text-gray-500">Lista de clientes será implementada aqui</p>
      </div>
    </div>
  );
}