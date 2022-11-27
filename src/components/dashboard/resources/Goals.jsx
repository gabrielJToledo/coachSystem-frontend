import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import './Goals.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function Goals() {
    const [goalDB, setGoalDB] = useState()
    const [currentGoal, setCurrentGoal] = useState()
    const [goalPercentage, setGoalPercentage] = useState()
    const [currentPercentage, setCurrentPercentage] = useState()
    const [unitMeasurement, setUnitMeasurement] = useState()
    const [startData, setStartData] = useState()
    const [endData, setEndData] = useState()
    const [obs, setObs] = useState()
    const [modalValue, setModalValue] = useState(false)

    const currentUser = useSelector((state) => state.setUserPayload.userPayload)

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
        if (modalValue === false) {
            setModalValue(true)
        } else {
            setModalValue(false)
        }
    }

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
            toast.success('Meta SMART criada com sucesso!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            clearState()

            window.location.reload(false)

        }).catch((err) => {
            console.log(err)
        })
    }

    if (!goalDB) {
        return (
            <div className="goalsWithoutDB__container h-100">
                <div onClick={handleClickModal} className="goalsWithoutDB__click w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                    <h3 className='text-center grey'>Adicione uma meta para você acompanhar!</h3>
                </div>

                <Modal
                    size='lg'
                    centered
                    show={modalValue}
                    onHide={handleClickModal}
                >
                    <Modal.Header closeButton={handleClickModal}>
                        <Modal.Title id="contained-modal-title-vcenter">
                            <h3>Preencha sua meta SMART</h3>
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <form action="" className='d-flex flex-column'>
                            <label className='my-1' htmlFor="">Qual é o objetivo?</label>
                            <input onChange={setGoal} className='p-2 outline-none py-1' type="text" required value={currentGoal} />

                            <label className='my-1' htmlFor="">Qual é a meta?</label>
                            <input onChange={setFormGoalPercentage} className='p-2 outline-none py-1' type="text" required value={goalPercentage} />

                            <label className='my-1' htmlFor="">Qual é o estado atual da meta?</label>
                            <input onChange={setFormCurrentPercentage} className='p-2 outline-none py-1' type="text" required value={currentPercentage} />

                            <label className='my-1' htmlFor="">Qual é a unidade de medida da meta?</label>
                            <input onChange={setFormUnit} className='p-2 outline-none py-1' type="text" required value={unitMeasurement} />

                            <div className="d-flex">
                                <div className="d-flex flex-column w-25">
                                    <label className='my-1' htmlFor="">Qual a data de início?</label>
                                    <input onChange={setFormStartData} className='p-2 outline-none py-1' type="text" required value={startData} />
                                </div>

                                <div className="d-flex flex-column w-25 mx-3">
                                    <label className='my-1' htmlFor="">Qual é a data final?</label>
                                    <input onChange={setFormEndData} className='p-2 outline-none py-1' type="text" required value={endData} />
                                </div>
                            </div>

                            <label className='my-1' htmlFor="">Observação:</label>
                            <textarea onChange={setFormObs} className='p-2 outline-none' cols="30" rows="10" value={obs} />
                        </form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={handleClickGoalForm}>Enviar</Button>
                        <Button onClick={handleClickModal}>Close</Button>
                    </Modal.Footer>
                    <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"
                    />
                </Modal>
            </div>
        )
    } else {
        return (
            <div className="ola">
                ioasjdioas
            </div>
        )
    }


}

export default Goals