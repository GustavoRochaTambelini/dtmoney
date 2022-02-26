
import { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from "./components/Deshboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionProvider } from './hooks/useTransactions';
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isNewtransactionModalOpen, setIsNewtransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewtransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewtransactionModalOpen(false);
  }

  return (
    <TransactionProvider>
      <Header onTrasactionModalOpen = { handleOpenNewTransactionModal }/>
      <Dashboard />
      <NewTransactionModal isOpen={isNewtransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
      <GlobalStyle />
    </TransactionProvider>
  );
}
