import React, { useEffect, useRef, useState } from 'react';
import style from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModalAC } from '../../redux/actions/task_actions';
import DatePicker from 'react-datepicker';
import { Formik, Field, Form } from 'formik';

import {
  saveTask,
  addName,
  addText,
  setPriority
} from './../../redux/actions/task_actions';

const Modal = ({ dateFromDataPicker }) => {
  const {isAuth, user} = useSelector((state) => state.auth);

  const { taskName, textTask, taskPriority } = useSelector(
    (state) => state.task
  );
  const { task__arr, tasks__new_req } = useSelector((state) => state.task);

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(toggleModalAC());
  };

  const handeNameChanged = (e) => {
    dispatch(addName(e.target.value));
  };
  const handeTextChanged = (e) => {
    dispatch(addText(e.target.value));
    if (!e.target.value) {
      setTemp(false);
    } else {
      setTemp(true);
    }
  };

  const handePriorityChanged = (e) => {
    dispatch(setPriority(e.target.value));
  };

  const [startDate, setStartDate] = useState(new Date());

  const [temp, setTemp] = useState(true);
  const handleTouched = (e) => {
    if (!e.target.value) {
      setTemp(false);
    } else {
      setTemp(true);
    }
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
          priority: '',
          dp: '',
          textTask: ''
        }}
        onSubmit={(values) => {
          debugger
          dispatch(
            saveTask(
              user.id,
              taskName,
              textTask,
              task__arr.length,
              taskPriority,
              new Date(dateFromDataPicker).toString(),
              new Date(startDate).toString(),
              task__arr,
              tasks__new_req
            )
          );

          handleCloseModal();
        }}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <div className={style.form_container}>
              <Field
                autocomplete="off"
                id="taskName"
                name="taskName"
                className={style.field__item}
                placeholder="task name..."
                value={taskName}
                onChange={(e) => handeNameChanged(e)}
              />
              {touched.taskName && !taskName ? (
                <div className="warning">is required</div>
              ) : null}
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
              <DatePicker
                name="dp"
                className={style.dp}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
              <textarea
                id="textTask"
                name="textTask"
                rows="6"
                value={textTask}
                onChange={(e) => handeTextChanged(e)}
                className={style.field__item}
                placeholder="text name..."
                onBlur={(e) => handleTouched(e)}
              />
              {!temp ? <div className="warning">is required</div> : null}
              <button
                className={
                  !textTask || !taskName
                    ? style.field__itemBtn__disabled
                    : style.field__itemBtn
                }
                type="submit"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Modal;
