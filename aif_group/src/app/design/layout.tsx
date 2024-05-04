'use client';
import { store } from '@/states/store';
import '@/styles/globals.css';
import { Provider } from 'react-redux';

const designLayout = ({ children, modal }: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) => {
  return (
    <>
      <Provider store={store}>
        <div>{children}</div>
        <div>{modal}</div>
      </Provider>
    </>
  );
};

export default designLayout;
