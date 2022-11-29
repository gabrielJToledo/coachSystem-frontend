import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changedPlusIconGoal } from '../../redux/actions/menuActions'
import './Home.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import Goals from './resources/Goals'

function Home() {
  const dispatch = useDispatch()
  const [goalDB, setGoalDB] = useState([])
  const plusGoalValue = useSelector((state) => state.setPlusGoalValue.plusGoalValue)
  const currentUser = useSelector((state) => state.setUserPayload.userPayload)

  useEffect(() => {
    axios.get(`http://localhost:5000/goals/${currentUser.email}`).then((res) => {
      setGoalDB(res.data)
    })
  }, [])

  const setPlusGoalValue = () => {
    if(plusGoalValue === false) {
      dispatch(changedPlusIconGoal(true))
    } else {
      dispatch(changedPlusIconGoal(false))
    }
  }

  return (
    <div className="dashboard__container d-flex flex-column flex-wrap w-100 h-100 p-3">
      <div className="col-12 d-flex">
        <div className="dash__cards-small d-flex flex-column bg-white rounded m-2">
          <div className="cards__h2 d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon="fa-solid fa-rocket" />
              <h2 className='h5 m-0 px-2'>Metas</h2>
            </div>

            {goalDB.length != 0 && <FontAwesomeIcon onClick={setPlusGoalValue} className='plusIcon' icon="fa-solid fa-plus" />}
          </div>

          <Goals />
        </div>

        <div className="dash__cards-small d-flex flex-column bg-white rounded m-2">
          <div className="cards__h2 d-flex align-items-center">
            <FontAwesomeIcon icon="fa-solid fa-list" />
            <h2 className='h5 m-0 px-2'>Sessões</h2>
          </div>

          <div>

          </div>
        </div>
      </div>

      <div className="col-12">
        <div className="dash__cards-large m-2 rounded bg-white">
          <div className="cards__h2 d-flex align-items-center">
            <FontAwesomeIcon icon="fa-solid fa-mug-hot" />
            <h2 className='h5 m-0 px-2'>Ações & Tarefas</h2>
          </div>

          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home