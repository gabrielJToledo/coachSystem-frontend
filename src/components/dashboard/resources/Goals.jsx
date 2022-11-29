import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { changedPlusIconGoal } from '../../../redux/actions/menuActions'
import ModalGoal from './ModalGoal';
import './Goals.css'

function Goals() {
    const dispatch = useDispatch()
    const [goalDB, setGoalDB] = useState([])
    const [currentGoal, setCurrentGoal] = useState()
    const [goalPercentage, setGoalPercentage] = useState()
    const [currentPercentage, setCurrentPercentage] = useState()
    const [unitMeasurement, setUnitMeasurement] = useState()
    const [startData, setStartData] = useState()
    const [endData, setEndData] = useState()
    const [obs, setObs] = useState()
    const [modalValue, setModalValue] = useState(false)

    const currentUser = useSelector((state) => state.setUserPayload.userPayload)
    const plusGoalValue = useSelector((state) => state.setPlusGoalValue.plusGoalValue)

    const setGoal = (e) => {
        setCurrentGoal(e.target.value)
    }
    const setFormGoalPercentage = (e) => {
        setGoalPercentage(e.target.value)
    }
    const setFormCurrentPercentage = (e) => {
        setCurrentPercentage(e.target.value)
    }
    const setFormUnit = (e) => {
        setUnitMeasurement(e.target.value)
    }
    const setFormStartData = (e) => {
        setStartData(e.target.value)
    }
    const setFormEndData = (e) => {
        setEndData(e.target.value)
    }
    const setFormObs = (e) => {
        setObs(e.target.value)
    }

    const clearState = () => {
        setCurrentGoal('')
        setGoalPercentage('')
        setCurrentPercentage('')
        setUnitMeasurement('')
        setStartData('')
        setEndData('')
        setObs('')
    }

    useEffect(() => {
        axios.get(`http://localhost:5000/goals/${currentUser.email}`).then((res) => {
            setGoalDB(res.data)
        })
    }, [])

    const handleClickModal = () => {
        if (modalValue === false && plusGoalValue === false) {
            setModalValue(true)
            dispatch(changedPlusIconGoal(true))
        } else {
            setModalValue(false)
            dispatch(changedPlusIconGoal(false))
        }
    }

    // Submit Form
    const handleClickGoalForm = () => {
        axios.post('http://localhost:5000/goals', {
            goal: currentGoal,
            goalPercentage: goalPercentage,
            currentPercentage: currentPercentage,
            unitMeasurement: unitMeasurement,
            startData: startData,
            endData: endData,
            obs: obs,
            email: currentUser.email
        }).then(() => {

            clearState()

            toast('Meta SMART Cadastrada com Sucesso!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            setTimeout(() => {
                window.location.reload(false)
            }, 3000)

        }).catch((err) => {
            console.log(err)
        })
    }

    // Porcentage Funcionality
    const calculatePercentage = (totalPercentage = 100, desiredPercentage, currentPercentage, percentageAchieved) => {
        percentageAchieved = (totalPercentage * currentPercentage) / desiredPercentage

        return parseInt(percentageAchieved)
    }

    if (!goalDB || goalDB.length === 0) {
        return (
            <div className="goalsWithoutDB__container h-100">
                <div onClick={handleClickModal} className="goalsWithoutDB__click w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                    <h3 className='text-center grey'>Adicione uma meta para você acompanhar!</h3>
                </div>

                <ModalGoal/>
            </div>
        )
    } else {
        return (
            <div className="goalsDB__container bg-info h-100">
                {goalDB.map((goalDB, index) => {
                    return <div className="goal__content p-2 px-3 border rounded m-2 bg-white shadow-sm">
                        <h3 className='h6 text-center'>{goalDB.goal}</h3>
                        <ProgressBar className='my-2' animated now={calculatePercentage(100, goalDB.goalPercentage, goalDB.currentPercentage)} label={`${calculatePercentage(100, goalDB.goalPercentage, goalDB.currentPercentage)}%`} />
                        <div className="d-flex my-2">
                            <div className="d-flex flex-column align-items-center my-2 w-50">
                                <p className='m-0 my-1'>Data de Início: {goalDB.startData}</p>
                                <p className='m-0 my-1'>Data de Início: {goalDB.endData}</p>
                            </div>

                            <div className="d-flex justify-content-center align-items-center w-50">
                                <button type="button" className="btn btn-primary btn-sm">Acessar Meta Inteira</button>
                            </div>
                        </div>
                    </div>
                })}

                <ModalGoal/>
            </div>
        )
    }


}

export default Goals