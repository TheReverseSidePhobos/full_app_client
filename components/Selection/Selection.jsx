import React from 'react';
import { useSelector } from 'react-redux';

const Selection = ({id}) => {

  const { task__arr, tasks__new_req, tasks__In_Prg, tasks__Done } = useSelector((state) => state.task);

  const handleByImportance = () => {
    if (id == 'new') {
      debugger
      tasks__new_req = task__arr.filter(item => item.status == 'new')
    }
    console.log(task__arr);
    console.log(id);
  };
  return (
    <>
      <section>
        <select onChange={handleByImportance} className="my_select">
          <option className="my_option">By Importance</option>
          <option className="my_option">By Date</option>
        </select>
      </section>
    </>
  );
};

export default Selection;
