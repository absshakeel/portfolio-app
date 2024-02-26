import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';

const CertsAndAwards = ({ data: certsAndAwardsData }) => {

    const [openModals, setOpenModals] = useState(false);

    const openModal = (modalId) => {
      setOpenModals((prevOpenModals) => ({ ...prevOpenModals, [modalId]: true }));
    };
  
    const closeModal = (modalId) => {
      setOpenModals((prevOpenModals) => ({ ...prevOpenModals, [modalId]: false }));
    };

    const certStyles = {
        width: '90px',
        height: '90px',
        float: 'left',
        margin: '5% 5% 5% 5%',
        display: 'block'
    };

    const modalContentStyle = {
        width: '800px', 
        overflow:'scroll'
    }

    function getCertsAndAwardsElements() {
        let certsAndAwardsArr = new Array();

        for (let i = 0; i < certsAndAwardsData.length; i++) {
            certsAndAwardsArr.push(
                <Box key={certsAndAwardsData[i].modalName} style={{marginRight: '10px'}}>
                    <img style={certStyles} src={certsAndAwardsData[i].modalClickImage} onClick={() => openModal(certsAndAwardsData[i].modalName)}/>
                    <Modal
                        open={openModals[certsAndAwardsData[i].modalName] == null ? false : openModals[certsAndAwardsData[i].modalName]} 
                        onClose={() => closeModal(certsAndAwardsData[i].modalName)}>

                        <ModalDialog layout="center" style={modalContentStyle}> 
                            <ModalClose />
                            <Typography align="center">{certsAndAwardsData[i].modalTitle}</Typography>
                            <Box
                                component="img"
                                src={certsAndAwardsData[i].modalContentImage} 
                                />
                        </ModalDialog>
                    </Modal>
                </Box>
            )
        }

        return certsAndAwardsArr;
    }

    return (
        <>
            {getCertsAndAwardsElements()}
        </>
    )
}

export default CertsAndAwards; 