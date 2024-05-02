import React, { useState } from 'react';
import './js/tryy.css'

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className='h-[400vh]'>
      <button onClick={openModal}  className=' top-[600px] text-stone-500 absolute translate-y-[-97px]'>Open Modal</button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={closeModal}>Close Modal</button>
            <p>This is the modal content</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
