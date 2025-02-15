import SearchBar from './SearchBar';

export default function PageHeader({ title, onSearch }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
      <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
      <div className="w-full md:w-96">
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
}