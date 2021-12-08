function ModalController({ modal, showModal, hideModal }) {
  return (
    <div className="view-modal-container">
      {modal && (
        <button onClick={hideModal} className="btn btn--hide-modal">
          Hide Modal
        </button>
      )}

      {!modal && (
        <button onClick={showModal} className="btn btn--show-modal">
          Show Modal
        </button>
      )}
    </div>
  );
}

export default ModalController;
