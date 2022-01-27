import React from 'react';

const Colomn = ({task__arr, name, title}) => {
  return (
    <>
      <div className={name}>
        <div className={`title ${name}_title`}>{title}</div>
        <div className="cards">
          {task__arr &&
            task__arr.map((item) =>
              item && item.status == 'progress' ? (
                <div className="card" key={item.id}>
                  <span
                    onClick={(e) => handeDeleteBtn(item.id, task__arr)}
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
                          onBlur={(e) => handlePriorityOff(e, item, task__arr)}
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
                    {item.text.length >= 30 && item.text.slice(0, 30) + '...'}
                  </div>
                  <div className="buttons">
                    <button
                      className="card__btn"
                      onClick={() => handlePrevBtn(item)}
                    >
                      {' '}
                      Previous
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
                    <span>{item.dateTime.getDate()}</span> :
                    <span> {item.dateTime.getMonth() + 1}</span> :
                    <span> {item.dateTime.getFullYear()}</span> <br />
                    <span>Must be complited: </span>
                    <span
                      className={
                        item.compliteDate < item.dateTime ? 'red' : 'green'
                      }
                    >
                      {item.compliteDate.getDate()}
                    </span>{' '}
                    :
                    <span
                      className={
                        item.compliteDate < item.dateTime ? 'red' : 'green'
                      }
                    >
                      {' '}
                      {item.compliteDate.getMonth() + 1}
                    </span>{' '}
                    :
                    <span
                      className={
                        item.compliteDate < item.dateTime ? 'red' : 'green'
                      }
                    >
                      {' '}
                      {item.compliteDate.getFullYear()}
                    </span>{' '}
                    <br />
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
    </>
  );
};

export default Colomn;
