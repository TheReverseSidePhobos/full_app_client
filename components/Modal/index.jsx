import React from 'react';
import style from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModalAC } from '../../redux/actions/task_actions';
import { Formik, Field, Form, useField } from 'formik';
import {
  saveTask,
  addName,
  addText,
  setPriority
} from './../../redux/actions/task_actions';

const Modal = () => {
  const { taskName, textTask, taskStatus, taskPriority } = useSelector(
    (state) => state.task
  );
  const { task__arr } = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(toggleModalAC());
  };

  const handeNameChanged = (e) => {
    dispatch(addName(e.target.value));
  };
  const handeTextChanged = (e) => {
    dispatch(addText(e.target.value));
  };

  const handePriorityChanged = (e) => {
    debugger;
    console.log(e.target.value);
    dispatch(setPriority(e.target.value));
  };

  return (
    <div className={style.modal}>
      <h1>Make New Task</h1>
      <span onClick={handleCloseModal} className={style.closeModal}>
        X
      </span>
      <Formik
        initialValues={{
          taskName: '',
          textTask: ''
        }}
        onSubmit={(values) => {
          debugger;
          console.log('priority: ', taskPriority);
          let date = new Date();
          dispatch(
            saveTask(taskName, textTask, task__arr.length, taskPriority, date)
          );
          handleCloseModal();
        }}
      >
        <Form className="form">
          <Field
            autocomplete="off"
            id="taskName"
            name="taskName"
            className={style.field__item}
            placeholder="task name..."
            value={taskName}
            onChange={(e) => handeNameChanged(e)}
          ></Field>
          <br />
          <select
            id="priority"
            name="priority"
            className={style.select__item}
            value={taskPriority}
            onChange={(e) => handePriorityChanged(e)}
          >
            <option value="lowest">Lowest</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="highest">Highest</option>
          </select>
          <br />

          <textarea
            name="textTask"
            rows="6"
            value={textTask}
            onChange={(e) => handeTextChanged(e)}
            className={style.field__item}
            placeholder="text name..."
          ></textarea>
          <br />
          <button className={style.field__itemBtn} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Modal;
