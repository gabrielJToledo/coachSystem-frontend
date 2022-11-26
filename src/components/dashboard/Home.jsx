import React from 'react'
import './Home.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Home() {
  return (
    <div className="dashboard__container d-flex flex-column flex-wrap w-100 h-100 p-3">
      <div className="col-12 d-flex">
        <div className="dash__cards-small bg-white rounded m-2">
          <div className="cards__h2 d-flex align-items-center">
            <FontAwesomeIcon icon="fa-solid fa-rocket" />
            <h2 className='h5 m-0 px-2'>Metas</h2>
          </div>

          <div className="goals__container">

          </div>
        </div>

        <div className="dash__cards-small bg-white rounded m-2">
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