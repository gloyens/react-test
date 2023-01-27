import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import "../index.css"

const Task = ({ task, onDelete, onEdit }) => {
  return (
    <div>

      <div className='task'>
        <p className='taskName'>
          <span className='textBold'>Task Name:</span> {task.text}
        </p>
        <p className='taskDate'>
          <span className='textBold'>Date of Completion:</span> {task.day}
        </p>
        <div className="taskButtons">
          <p><FaPencilAlt onClick={() => onEdit(task.id)} className='editIcon' /></p>
          <p><FaTimes onClick={() => onDelete(task.id)} className='delIcon' /></p>
        </div>
      </div>

    </div>
  )
}

export default Task
