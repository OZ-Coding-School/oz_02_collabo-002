import Modal from '@/components/Modal';
import FormModal from '@/containers/modal/FormModal';
import { Suspense } from 'react';

function FormResultModal() {
  return (
    <Modal>
      <Suspense>
        <FormModal />
      </Suspense>
    </Modal>
  );
}

export default FormResultModal;
