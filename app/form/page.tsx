import React from 'react';
import { useForm } from 'react-hook-form';

type FormInputs = {
  firstName: string;
  lastName: string;
  email: string;
};

export default function Formulario6() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/3 p-4 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">Formulário 6</h2>

        <div className="mb-4">
          <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-600">
            Primeiro Nome
          </label>
          <input
            type="text"
            id="firstName"
            {...register('firstName', { required: 'Este campo é obrigatório' })}
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-900"
          />
          {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-600">
            Sobrenome
          </label>
          <input
            type="text"
            id="lastName"
            {...register('lastName', { required: 'Este campo é obrigatório' })}
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-900"
          />
          {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName.message}</p>}
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'Este campo é obrigatório' })}
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-900"
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
        </div>

        <button type="submit" className="w-full py-2 px-4 text-center bg-indigo-500 rounded-md text-white text-sm hover:bg-indigo-600 focus:outline-none">
          Enviar
        </button>
      </form>
    </div>
  );
}