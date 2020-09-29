/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback } from 'react';

import Modal from '..';
import { Container } from './styles';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  editingTask: any;
}

const TaskModal: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  editingTask,
}) => {
  const handleClose = useCallback(() => {
    setIsOpen();
  }, [setIsOpen]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <h1>Tarefa</h1>
        <h2>Nome da Tarefa</h2>

        <h1>Data de entrega</h1>
        <h2>11/12/2020</h2>

        <h1>Prazo final</h1>
        <h2>12/12/2020</h2>

        <button type="button" onClick={handleClose}>
          Fechar
        </button>
      </Container>
    </Modal>
  );
};

export default TaskModal;
