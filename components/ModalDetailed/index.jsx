import React, { useEffect, useRef, useState } from 'react';
import style from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { infoToggleModalAC } from '../../redux/actions/task_actions';
import DatePicker from 'react-datepicker';
import { Formik, Field, Form } from 'formik';

import {
  saveTask,
  addName,
  addText,
  setPriority
} from '../../redux/actions/task_actions';

const ModalDetailed = ({ name, text, priority, dateStart, dateFinish }) => {
  const { taskName, textTask, taskPriority, selectedForInfo } = useSelector(
    (state) => state.task
  );
  const { task__arr } = useSelector((state) => state.task);

  const dispatch = useDispatch();
  // console.log('selectedForInfo: ', selectedForInfo);
  const handleCloseModal = () => {
    dispatch(infoToggleModalAC());
  };

  const handeNameChanged = (e) => {
    dispatch(addName(e.target.value));
  };
  const handeTextChanged = (e) => {
    dispatch(addText(e.target.value));
    debugger;
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
    debugger;
    if (!e.target.value) {
      setTemp(false);
    } else {
      setTemp(true);
    }
  };
  useEffect(() => {
    console.log(temp);
  }, [temp]);
  return (
    <div className={style.modal}>
      <h1>Info Modal</h1>
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
          debugger;
          handleCloseModal();
        }}
      >
        <Form className="form">
          <div className={style.form_container}>
            <div className={style.info_container}>
              <div className="datePicker">
                <DatePicker
                  name="dp"
                  className={style.dp}
                  inline
                  selected={selectedForInfo.dateTime}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              <div className="otherFiled">
                <div>
                  <Field
                    autocomplete="off"
                    id="taskName"
                    name="taskName"
                    className={style.field__item}
                    placeholder="task name..."
                    value={selectedForInfo.name}
                    onChange={(e) => handeNameChanged(e)}
                  />
                </div>
                <div className={style.label}>
                  <label>{selectedForInfo.taskPriority}</label>
                </div>
                <div>
                  <textarea
                    id="textTask"
                    name="textTask"
                    rows="6"
                    value={selectedForInfo.text}
                    onChange={(e) => handeTextChanged(e)}
                    className={style.field__item}
                    placeholder="text name..."
                    onBlur={(e) => handleTouched(e)}
                  />
                </div>
                <div style={{ fontSize: '18px' }} className="dateFinish">
                  <label>Must be complited for</label>{' '}
                  <br />
                  <label>{selectedForInfo.compliteDate.getDate()} : </label>
                  <label>
                    {selectedForInfo.compliteDate.getMonth() + 1} :{' '}
                  </label>
                  <label>{selectedForInfo.compliteDate.getFullYear()}</label>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ModalDetailed;
