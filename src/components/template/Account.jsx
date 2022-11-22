import React from 'react'
import './Account.css'
import Avatar from 'react-avatar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useSelector } from 'react-redux'

function Account() {
    // ToggleMenu //
    const toggleMenuValue = useSelector((state) => state.setToggleMenu.toggleMenuValue)

    return (
        <section className={`c-accountContainer ${toggleMenuValue === true ? 'toggleMenuTrue' : ''}`} >
            <div className="c-accountContainer__accountTextContainer p-2">
                <h2 className='m-0 p-0 fs-6 text-uppercase fw-bold'>Usuário</h2>
            </div>

            <div className="c-accountContainer__avatarContainer p-0">
                <Avatar className='c-accountContainer__avatar' name="Skrrith Wellson" size='50' />
                <div className="c-accountContainer__nameAccount">
                    <span className='c-accountContainer__span'>Nome da conta</span>
                    <span className='c-accountContainer__spanFunction'>
                        Função
                    </span>
                </div>
                <FontAwesomeIcon className='c-accountContainer__icon' icon='fa-ellipsis' />
            </div>

            <div className="c-logout">
                <FontAwesomeIcon className='c-logout__icon' icon="fa-right-from-bracket" />
                <span className='c-logout__span'>Log out</span>
            </div>
        </section>
    )
}

export default Account