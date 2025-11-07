'use client';
import { useState } from 'react';
import { useNavigate } from 'next/navigation';

const FormComponent = () => {
  const [formData, setFormData] = useState({name: "", email: ""});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    navigate('/success');
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <input 
        type="text" 
        value={formData.name} 
        onChange={e => setFormData({...formData, name: e.target.value})} 
        className="border-2 border-gray-200 p-2 rounded-md" 
        placeholder="Name"
      />
      <input 
        type="email" 
        value={formData.email} 
        onChange={e => setFormData({...formData, email: e.target.value})} 
        className="border-2 border-gray-200 p-2 rounded-md" 
        placeholder="Email"
      />
      <button 
        type="submit" 
        className="bg-blue-500 text-white p-2 rounded-md"
      >Submit</button>
    </form>
  );
};

export default FormComponent;