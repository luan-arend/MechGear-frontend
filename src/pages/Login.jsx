import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCog } from 'react-icons/fa';
import { useAuth } from '../context/LoginContext';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
  
    const success = await login(username, password);

    if (success) {
      navigate("/", { replace: true });
    } else {
      setError("Usuário ou senha incorretos");
    }
  
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-100 to-blue-50 flex items-center justify-center p-8 animate-gradient">
      <div className="w-full max-w-md">
        <div className="bg-white/90 backdrop-blur-md p-10 rounded-2xl shadow-xl border border-white/50">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaCog className="text-4xl text-blue-600 animate-spin-slow" />
              <h1 className="text-5xl font-extrabold text-blue-600 tracking-tight uppercase">
                MechGear
              </h1>
            </div>
            <p className="text-gray-500 text-sm">Entre com suas credenciais</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full px-3 py-3 bg-white/90 border-0 border-b-2 border-gray-200 focus:border-blue-600 focus:ring-0 rounded-lg transition-colors peer"
              />
              <label
                htmlFor="username"
                className="absolute left-3 top-3 text-gray-400 transition-all peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-1 peer-valid:-top-2 peer-valid:text-sm peer-valid:bg-white peer-valid:px-1"
              >
                Usuário
              </label>
            </div>

            <div className="relative">
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 py-3 bg-white/90 border-0 border-b-2 border-gray-200 focus:border-blue-600 focus:ring-0 rounded-lg transition-colors peer"
              />
              <label
                htmlFor="password"
                className="absolute left-3 top-3 text-gray-400 transition-all peer-focus:-top-2 peer-focus:text-sm peer-focus:text-blue-600 peer-focus:bg-white peer-focus:px-1 peer-valid:-top-2 peer-valid:text-sm peer-valid:bg-white peer-valid:px-1"
              >
                Senha
              </label>
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg font-medium relative overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:hover:translate-y-0"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto" />
              ) : (
                <span>Entrar</span>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}