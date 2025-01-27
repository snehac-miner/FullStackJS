
import './App.css'
import { useForm } from 'react-hook-form';
import { useState } from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

import Modal from 'react-bootstrap/Modal';

function App() {



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  let { register, handleSubmit, formState: { errors }, reset, setValue, getValues } = useForm();
  let {register:register1, handleSubmit: handleSubmit1 ,setValue:setValue1} = useForm();
  let [taskArr, setTasksArr] = useState([])
  let [modifiedTask, setModifiedTask] = useState('')

  function onFormSubmit(taskObj) {

    setTasksArr([...taskArr, taskObj.task])
    reset();
  }


  //delete a atask by index
  function deleteTaskByIndex(index) {

    //create copy of tasksArra
    let copyTasksArr = [...taskArr];
    //delete task from copy
    copyTasksArr.splice(index, 1)
    //replace orginal with copy
    setTasksArr(copyTasksArr)
  }


  //edit task
  function onEdit(task) {
    //open modal
    handleShow();
    setModifiedTask(task)
    //place task in edit form input
    setValue1('taskToEdit', task)
  }

  //save task
  function onSave(modifiedTaskObj) {
    //e.stopPropagation();
    console.log(modifiedTaskObj)
    //console.log(index)
    handleClose();
    // console.log(getValues('taskToEdit'))
    let index=taskArr.findIndex(t=>t===modifiedTask)
    console.log(index)
     taskArr.splice(index,1,modifiedTaskObj.taskToEdit)

  }


  return (
    <div className="main">
      <h1 className="display-3 text-center bg-info text-white p-4">To-do app</h1>
      <form id="form-1" className='w-50 mx-auto mt-5 bg-light p-4' onSubmit={handleSubmit(onFormSubmit)}>
        <input type="text" {...register('task', { required: true })} className='form-control mb-4' placeholder='Enter a task here...' />
        {
          errors.task?.type === 'required' && <p className='text-danger'>*Required field</p>
        }
        <button type="submit" className='btn btn-primary d-block mx-auto' form='form-1'>Add</button>
      </form>

      {/* display list of tasks */}
      <div className="w-50 mx-auto bg-success">
        {
          taskArr.map((task, index) => <div key={task} className='d-flex justify-content-between align-items-center px-3 border'>
            <span className='text-white lead fs-3 p-2 '>{task}</span>
            <span>
              <button className=' btn btn-warning me-3' onClick={() => onEdit(task)}>
                <CiEdit className='fs-3' />
              </button>
              <button className='btn btn-danger' onClick={() => deleteTaskByIndex(index)}>
                <MdDelete className='fs-3' />
              </button>
            </span>
          </div>)
        }
      </div>


      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit1(onSave)}>
            <input type="text"  {...register1('taskToEdit')} className="form-control mb-3" />
            <button className="btn btn-success" type='submit' >save</button>
          </form>

        </Modal.Body>
      </Modal>


    </div >
  )
}

export default App
