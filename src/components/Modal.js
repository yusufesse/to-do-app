import "./Modal.css";

function Modal({ children }) {
  return (
    <>
      <p className="modal-title">About Me</p>
      <div className="modal-container">{children}</div>
    </>
  );
}

export default Modal;
