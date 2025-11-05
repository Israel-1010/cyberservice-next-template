import React, { FC } from 'react';

type Props = {
  title: string;
};

const MyComponent: FC<Props> = ({ title }) => (
  <div className="bg-blue-500 text-white p-5 rounded">
    {title}
  </div>
);

export default MyComponent;