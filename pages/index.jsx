import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { BsCheckLg } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import 'react-calendar/dist/Calendar.css';
import Layout from '../components/Layout';
import DatePicker from 'react-datepicker';
import Modal from '../components/Modal';
import ModalDetailed from '../components/ModalDetailed';
import Cookie from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux';
import {
  toggleModalAC,
  infoToggleModalAC,
  changeStatus,
  delete_item,
  changePriority,
  loadDataForInfo,
  saveArr
} from '../redux/actions/task_actions';

import 'react-datepicker/dist/react-datepicker.css';

export default function Home() {
  const [startDate, setStartDate] = useState(new Date());
  const [day, setDay] = useState('Today');
  const [tomorrow, setTomorrow] = useState(false);
  const dispatch = useDispatch();
  const { modal_show, info_modal_show } = useSelector((state) => state.task);
  const { taskName, textTask, taskStatus } = useSelector((state) => state.task);
  let { task__arr } = useSelector((state) => state.task);

  const toggleModal = () => {
    dispatch(toggleModalAC());
  };

  const handleNextBtn = (item) => {
    if (item.status == 'new') {
      dispatch(changeStatus(item.id, 'progress', task__arr));
    } else if (item.status == 'progress') {
      dispatch(changeStatus(item.id, 'done', task__arr));
    }
  };
  const handlePrevBtn = (item) => {
    if (item.status == 'done') {
      dispatch(changeStatus(item.id, 'progress', task__arr));
    } else if (item.status == 'progress') {
      dispatch(changeStatus(item.id, 'new', task__arr));
    }
  };

  const handeDeleteBtn = (id, task__arr) => {
    let taskIndex = task__arr.findIndex((item) => item.id == id);
    if (taskIndex !== -1) {
      task__arr.splice(taskIndex, 1);
    }
    let newJson = JSON.stringify(task__arr);
    Cookie.set('obj', newJson);
    dispatch(delete_item(id, task__arr));
  };

  const handleEditClick = (id, task__arr) => {
    setPrioritySelected(!prioritySelected);
  };

  const handlePriorityOff = (e, item, task__arr) => {
    dispatch(changePriority(e.target.value, item, task__arr));
    setPrioritySelected(false);
  };

  useEffect(() => {
    let obj = Cookie.get('obj');
    if (obj) {
      let jsonObj = JSON.parse(obj);
      dispatch(saveArr(jsonObj));
    }
  }, []);

  const [prioritySelected, setPrioritySelected] = useState(false);

  const handleInfoModalShow = (id) => {
    dispatch(loadDataForInfo(id, task__arr));
    dispatch(infoToggleModalAC());
  };
  const [convertDate, setConvertDate] = useState(null);

  const convertDateFunc = (date) => {
    let newDate = Date.parse(date);
    let d = new Date(newDate);
    let type = typeof d;
    let yaer = d.getFullYear();
    let month = d.getMonth() + 1;
    let day = d.getDate();
    let stringCorrectDate = `${day} : ${month} : ${yaer}`;
    return stringCorrectDate;
  };

  return (
    <div>

      {modal_show && <Modal dateFromDataPicker={startDate} />}
      {info_modal_show && <ModalDetailed />}
      <Layout>
        {
          <div
            className={
              modal_show ? 'wrapper low_opacity container' : 'wrapper container'
            }
          >
            <div className="sidebar">
              <DatePicker
                className="main_dp"
                selected={startDate}
                inline
                onChange={(date) => setStartDate(date)}
              />
              <button onClick={toggleModal} className="makeTaskBtn">
                Make New Task
              </button>
            </div>
            <div className="main">
              <div className="table">
                <div className="new_request">
                  <div className="title new_request_title">New Requests</div>
                  <div className="cards">
                    {task__arr &&
                      task__arr.map((item) =>
                        item && item.status == 'new' ? (
                          <div className="card" key={item.id}>
                            <span
                              onClick={(e) =>
                                handeDeleteBtn(item.id, task__arr)
                              }
                              className="close"
                            >
                              X
                            </span>

                            <div className="date">{item.date}</div>
                            <h5
                              className={
                                item.taskPriority == 'lowest'
                                  ? 'priority green'
                                  : item.taskPriority == 'low'
                                  ? 'priority green'
                                  : item.taskPriority == 'medium'
                                  ? 'priority blue'
                                  : item.taskPriority == 'high'
                                  ? 'priority red'
                                  : item.taskPriority == 'highest'
                                  ? 'priority red'
                                  : 'priority'
                              }
                            >
                              {!prioritySelected ? (
                                <div>
                                  {item.taskPriority}
                                  <AiOutlineEdit onClick={handleEditClick} />
                                </div>
                              ) : (
                                <div className="prioritySelect">
                                  <select
                                    onBlur={(e) =>
                                      handlePriorityOff(e, item, task__arr)
                                    }
                                    onChange={(e) =>
                                      handlePriorityOff(e, item, task__arr)
                                    }
                                  >
                                    <option value="lowest">LOWEST</option>
                                    <option value="low">LOW</option>
                                    <option value="medium">MEDIUM</option>
                                    <option value="high">HIGH</option>
                                    <option value="highest">HIGHEST</option>
                                  </select>
                                </div>
                              )}
                            </h5>

                            <h3 className="item_title">{item.name}</h3>
                            <br />
                            <div className="item_text">
                              {item.text.length >= 20
                                ? item.text.slice(0, 20) + '...'
                                : item.text}
                            </div>
                            <div className="buttons">
                              <button className="card__btn"> Prev</button>
                              <button
                                className="card__btn"
                                onClick={() => handleNextBtn(item)}
                              >
                                Next
                              </button>
                            </div>
                            <div className="date">
                              <span>Creation date: </span>
                              {convertDateFunc(item.dateTime)}
                              <br />
                              <span>Must be complited: </span>
                              <span
                                className={
                                  item.compliteDate < item.dateTime
                                    ? 'red'
                                    : 'green'
                                }
                              >
                                {convertDateFunc(item.compliteDate)}
                              </span>{' '}
                              <div
                                onClick={() => handleInfoModalShow(item.id)}
                                className="detailed"
                              >
                                show details
                              </div>
                            </div>
                          </div>
                        ) : null
                      )}
                  </div>
                </div>

                <div className="in_progress">
                  <div className="title in_progress_title">In Progress</div>
                  <div className="cards">
                    {task__arr &&
                      task__arr.map((item) =>
                        item && item.status == 'progress' ? (
                          <div className="card" key={item.id}>
                            <span
                              onClick={(e) =>
                                handeDeleteBtn(item.id, task__arr)
                              }
                              className="close"
                            >
                              X
                            </span>
                            <h5
                              className={
                                item.taskPriority == 'lowest'
                                  ? 'priority green'
                                  : item.taskPriority == 'low'
                                  ? 'priority green'
                                  : item.taskPriority == 'medium'
                                  ? 'priority blue'
                                  : item.taskPriority == 'high'
                                  ? 'priority red'
                                  : item.taskPriority == 'highest'
                                  ? 'priority red'
                                  : 'priority'
                              }
                            >
                              {!prioritySelected ? (
                                <div>
                                  {item.taskPriority}
                                  <AiOutlineEdit onClick={handleEditClick} />
                                </div>
                              ) : (
                                <div className="prioritySelect">
                                  <select
                                    onBlur={(e) =>
                                      handlePriorityOff(e, item, task__arr)
                                    }
                                    onChange={(e) =>
                                      handlePriorityOff(e, item, task__arr)
                                    }
                                  >
                                    <option value="lowest">LOWEST</option>
                                    <option value="low">LOW</option>
                                    <option value="medium">MEDIUM</option>
                                    <option value="high">HIGH</option>
                                    <option value="highest">HIGHEST</option>
                                  </select>
                                </div>
                              )}
                            </h5>
                            <h3 className="item_title">{item.name}</h3>
                            <br />
                            <div className="item_text">
                              {item.text.length >= 20
                                ? item.text.slice(0, 20) + '...'
                                : item.text}
                            </div>
                            <div className="buttons">
                              <button
                                className="card__btn"
                                onClick={() => handlePrevBtn(item)}
                              >
                                {' '}
                                Prev
                              </button>
                              <button
                                className="card__btn"
                                onClick={() => handleNextBtn(item)}
                              >
                                {' '}
                                Next
                              </button>
                            </div>
                            <div className="date">
                              <span>Creation date: </span>
                              {convertDateFunc(item.dateTime)}
                              <br />
                              <span>Must be complited: </span>
                              <span
                                className={
                                  item.compliteDate < item.dateTime
                                    ? 'red'
                                    : 'green'
                                }
                              >
                                {convertDateFunc(item.compliteDate)}
                              </span>{' '}
                              <div
                                onClick={() => handleInfoModalShow(item.id)}
                                className="detailed"
                              >
                                show details
                              </div>
                            </div>
                          </div>
                        ) : null
                      )}
                  </div>
                </div>
                <div className="done">
                  <div className="title done_title">Done</div>
                  <div className="cards">
                    {task__arr &&
                      task__arr.map((item) =>
                        item && item.status == 'done' ? (
                          <div className="card" key={item.id}>
                            <span
                              onClick={(e) =>
                                handeDeleteBtn(item.id, task__arr)
                              }
                              className="close"
                            >
                              X
                            </span>
                            <h5
                              className={
                                item.taskPriority == 'lowest'
                                  ? 'priority green'
                                  : item.taskPriority == 'low'
                                  ? 'priority green'
                                  : item.taskPriority == 'medium'
                                  ? 'priority blue'
                                  : item.taskPriority == 'high'
                                  ? 'priority red'
                                  : item.taskPriority == 'highest'
                                  ? 'priority red'
                                  : 'priority'
                              }
                            >
                              {!prioritySelected ? (
                                <div>
                                  {item.taskPriority}
                                  <AiOutlineEdit onClick={handleEditClick} />
                                </div>
                              ) : (
                                <div className="prioritySelect">
                                  <select
                                    onBlur={(e) =>
                                      handlePriorityOff(e, item, task__arr)
                                    }
                                    onChange={(e) =>
                                      handlePriorityOff(e, item, task__arr)
                                    }
                                  >
                                    <option value="lowest">LOWEST</option>
                                    <option value="low">LOW</option>
                                    <option value="medium">MEDIUM</option>
                                    <option value="high">HIGH</option>
                                    <option value="highest">HIGHEST</option>
                                  </select>
                                </div>
                              )}
                            </h5>
                            <h3 className="item_title">{item.name}</h3>
                            <br />
                            <div className="item_text">
                              {item.text.length >= 20
                                ? item.text.slice(0, 20) + '...'
                                : item.text}
                            </div>
                            <div className="buttons">
                              <button
                                className="card__btn"
                                onClick={() => handlePrevBtn(item)}
                              >
                                {' '}
                                Prev
                              </button>
                              <button
                                className="card__btn"
                                onClick={() => handleNextBtn(item)}
                              >
                                {' '}
                                Next
                              </button>
                            </div>
                            <div className="date">
                              <span>Creation date: </span>
                              {convertDateFunc(item.dateTime)}
                              <br />
                              <span>Must be complited: </span>
                              <span
                                className={
                                  item.compliteDate < item.dateTime
                                    ? 'red'
                                    : 'green'
                                }
                              >
                                {convertDateFunc(item.compliteDate)}
                              </span>{' '}
                              <div
                                onClick={() => handleInfoModalShow(item.id)}
                                className="detailed"
                              >
                                show details
                              </div>
                            </div>
                          </div>
                        ) : null
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </Layout>
    </div>
  );
}
