import { Helmet } from 'react-helmet-async';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';
import AdvantagesSection from '../../components/AdvantagesSection/AdvantagesSection';
// import css from './HomePage.module.css'
import DeleteWaterModal from '../../components/DeleteWaterModal/DeleteWaterModal';
import LogOutModal from '../../components/LogOutModal/LogOutModal';
import { useState } from 'react';
import css from './HomePage.module.css';

const HomePage = () => {
  const [logoutModalIsOpen,setLogoutModalIsOpen] = useState(false);
  const [deleteModalOpen,setDeleteModalOpen] = useState(false);

  const openDelModal = () => {
    setDeleteModalOpen(true);
  };

  const closeDelModal = () => {
    setDeleteModalOpen(false);
  };

  const openLogModal = () => {
    setLogoutModalIsOpen(true)
  };

  const closeLogModal = () => {
    setLogoutModalIsOpen(false)
  };

  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div className={css.homePage}>
        <WelcomeSection />
        <AdvantagesSection />
        <button onClick={()=>openLogModal()}>open logout modal</button>
        <button onClick={()=>openDelModal()}>open delete modal</button>
        <LogOutModal modalIsOpen={logoutModalIsOpen} closeModal={closeLogModal}></LogOutModal>
        <DeleteWaterModal modalIsOpen={deleteModalOpen} closeModal={closeDelModal}></DeleteWaterModal>

      </div>
    </>
  );
};

export default HomePage;
