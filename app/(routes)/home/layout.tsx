import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div>
      home
      {children}
    </div>
  );
};

export default layout;
