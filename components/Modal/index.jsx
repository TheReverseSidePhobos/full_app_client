import React from 'react';
import style from './index.module.scss';
import { useDispatch } from 'react-redux';
import { toggleModalAC } from '../../redux/actions/task_actions';

const Modal = () => {
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(toggleModalAC());
  };
  return (
    <div className={style.modal}>
      Make New Task
      <span onClick={handleCloseModal} className={style.closeModal}>
        X
      </span>
      <form className={style.forma}>
        <div>
          <input type="text" placeholder="title" />

        </div>
        <div>
          <input type="textarea" placeholder="what to do..." />

        </div>
        <div>
          <button className='subBtn'>submit</button>

        </div>
      </form>
    </div>
  );
};

export default Modal;
