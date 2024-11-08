import React, { useState } from 'react';
import axios from 'axios';
import Guest from '@/Layouts/GuestLayout_copy';
import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import '@/Styles/register.css';

const LoginAdmin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isProcessing, setIsProcessing] = useState(false); // État pour le traitement

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsProcessing(true); // Débute le traitement

    try {
      const response = await axios.post('/admin/login', { email, password });
      if (response.status === 200) {
        window.location.href = '/admin/dashboard';
      }
    } catch (err) {
      setError('Échec de la connexion. Veuillez vérifier vos identifiants.');
    } finally {
      setIsProcessing(false); // Terminer le traitement
    }
  };

  return (
    <Guest>
      <Head title="Administrateurs" />
      <div className="registercontainer">
        <h2 style={{textAlign: 'center', textTransform: 'uppercase', margin: '20px', color: 'red'}}>Section reservée uniquement qu'aux administrateurs</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <div className="registermain">
            <div className="mainleft">
                <img src="https://doctoriales.inphb.ci/images/doctoriales_sm.png" alt="" />
            </div>
          <form onSubmit={handleSubmit} className="mainright">
            <div className="mainrightdiv">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mainrightdiv">
              <label>Mot de passe</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-end mt-4">
                <PrimaryButton className="ms-4" type="submit" disabled={isProcessing}>
                {isProcessing ? 'Connexion...' : 'Connexion'}
                </PrimaryButton>
            </div>
          </form>
        </div>
      </div>
    </Guest>
  );
};

export default LoginAdmin;
