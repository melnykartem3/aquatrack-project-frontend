import { Helmet } from 'react-helmet-async'
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection'
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection'
// import css from './HomePage.module.css'
import DeleteWaterModal from  "../../components/DeleteWaterModal/DeleteWaterModal";
import LogOutModal from "../../components/LogOutModal/LogOutModal"
import { useState } from 'react';

const HomePage = () => {
  const [modalIsOpen,setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true)
  };

  const closeModal = () => {
    setModalIsOpen(false)
  };


  return (
   <>
      <Helmet>
          <title>Home Page</title>
        </Helmet>
      <div>
        <WelcomeSection />
        <AdvantagesSection />
        <button onClick={()=>openModal()}>open modal</button>
        <LogOutModal modalIsOpen={modalIsOpen} closeModal={closeModal}></LogOutModal>
      </div>
   </>
  )
}

export default HomePage