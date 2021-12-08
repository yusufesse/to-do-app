import { useState } from "react";
import "./App.css";
import ModalController from "./components/ModalController";
import Card from "./components/Card";
import Form from "./components/Form";
import ToDo from "./components/ToDo";
import Modal from "./components/Modal";
import ModalContent from "./components/ModalContent";
import Overlay from "./components/Overlay";

function App() {
  const [tasks, setTasks] = useState([]);
  const [modal, setModal] = useState(false);
  console.log(modal);
  const addTasks = (toDo) => {
    setTasks((prevTasks) => {
      return [...prevTasks, toDo];
    });
  };

  const deleteToDo = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => id !== task.id);
    });
  };

  const showModal = () => setModal(true);
  const hideModal = () => setModal(false);

  return (
    <>
      <ModalController
        modal={modal}
        showModal={showModal}
        hideModal={hideModal}
      />
      <h1 className="heading">Keep track of your tasks</h1>
      <div className="container">
        <p className="subtitle">Created by Yusuf</p>
        <Card>
          <Form addTasks={addTasks} />
        </Card>
        <Card>
          <ToDo deleteToDo={deleteToDo} tasks={tasks} />
        </Card>

        {modal && (
          <div className="modal-center">
            <Card>
              <Modal>
                <ModalContent />
              </Modal>
            </Card>
          </div>
        )}
        {modal && <Overlay />}
      </div>
    </>
  );
}

export default App;
