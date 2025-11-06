// Importando pacotes necessários
import React from 'react';
import { Card } from './Card';

// Definindo o tipo de dados para os cards
interface CardData {
  title: string;
  description: string;
  imageUrl: string;
}

// Dados fictícios para os cards
const cardData: CardData[] = [
  {
    title: 'Card 1',
    description: 'This is Card 1',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    title: 'Card 2',
    description: 'This is Card 2',
    imageUrl: 'https://via.placeholder.com/150'
  },
  {
    title: 'Card 3',
    description: 'This is Card 3',
    imageUrl: 'https://via.placeholder.com/150'
  }
];

// Componente funcional da tela
const CardScreen: React.FC = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4">
        {cardData.map((card, index) => (
          <Card key={index} data={card} />
        ))}
      </div>
    </div>
  );
};

export default CardScreen;

// Componente Card
interface CardProps {
  data: CardData;
}

export const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="sm:flex sm:items-center px-6 py-4">
        <img className="block mx-auto sm:mx-0 sm:flex-shrink-0" src={data.imageUrl} alt={data.title} />
        <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
          <p className="text-xl leading-tight">{data.title}</p>
          <p className="text-sm leading-tight text-gray-600">{data.description}</p>
        </div>
      </div>
    </div>
  );
};