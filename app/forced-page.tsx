import React from 'react';
import { Card } from './Card';

const data = [
  {
    title: 'Card 1',
    description: 'This is Card 1'
  },
  {
    title: 'Card 2',
    description: 'This is Card 2'
  },
  {
    title: 'Card 3',
    description: 'This is Card 3'
  },
];

export const CardList: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-around">
      {data.map((card, index) => (
        <Card key={index} title={card.title} description={card.description} />
      ))}
    </div>
  );
};

// Card.tsx

import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

export const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="overflow-hidden rounded-lg shadow-lg">
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <p className="no-underline hover:underline text-black">
              {title}
            </p>
          </h1>
        </header>

        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <p className="ml-2 text-sm">
            {description}
          </p>
        </footer>
      </article>
    </div>
  );
};