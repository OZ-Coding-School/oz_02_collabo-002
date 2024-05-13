'use client';
import { store } from '@/states/store';
import '@/styles/globals.css';
import { Provider } from 'react-redux';

const designLayout = ({ children, modal }: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) => {
  return (
    <Provider store={store}>
      {children}
      {modal}
    </Provider>
  );
};

export default designLayout;
