import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';

// Professional Certification Data. 
import awsContent from '../../assets/Certifications-Resume/Certifications/AWSCertifiedDA.jpg';
import androidContent from '../../assets/Certifications-Resume/Certifications/Coursera Android.jpg';
import ocpjpContent from '../../assets/Certifications-Resume/Certifications/OCPJP.jpg';
import ocwcdContent from '../../assets/Certifications-Resume/Certifications/OW.jpg';

// Professional Certifications Badges Data. 
import androidBadge from '../../assets/Badges/Coursera - Android Badge - Custom Made.png';
import ocwcdBadge from '../../assets/Badges/Oracle University - Custom Badge.png';
import ocpjpBadge from '../../assets/Badges/Oracle-Certification-badge_OC-Professional.png';
import awsBadge from '../../assets/Badges/awsAssociateDeveloper.png';

// Awards Data. 
import apexon2022Award from '../../assets/Certifications-Resume/Certifications/Apexon.Performance.Award.2022.jpg';
import deepskillAwardIBM from '../../assets/Certifications-Resume/Certifications/Deep Skill.PNG';
import managerChoiceAwardIBM from '../../assets/Certifications-Resume/Certifications/mgrChoice.PNG';

// Awards Badges Data. 
import apexon2022AwardBadge from '../../assets/Badges/Apexon.Award.Badge.png';
import deepSkillAwardBadge from '../../assets/Badges/Deep Skill - Full Badge.png';
import managerChoiceAwardIBMBadge from '../../assets/Badges/Manager\'s Choice Award - Transparent - Final.png';

// Import css. 
import './certsAndAwards.css';

const CertsAndAwards = () => {

    // Eventually this will be retrieved from backend. 
    const certsAndAwardsData = [
        {
            id: 7,
            modalContentImage: ocpjpContent,
            modalClickImage: ocpjpBadge,
            modalTitle: 'Oracle Certified Professional Java Programmer SE 6.',
            modalName: 'OCPJPSE6'
        },
        {
            id: 8,
            modalContentImage: ocwcdContent,
            modalClickImage: ocwcdBadge,
            modalTitle: 'Oracle Certified Web Component Developer.',
            modalName: 'OCWCD'
        },
        {
            id: 9,
            modalContentImage: androidContent,
            modalClickImage: androidBadge,
            modalTitle: 'Coursera Android Application Development.',
            modalName: 'CourseraAndroid'
        },
        {
            id: 10,
            modalContentImage: awsContent,
            modalClickImage: awsBadge,
            modalTitle: 'Amazon Developer Associate.',
            modalName: 'AWSDA'
        },
        {
            id: 11,
            modalContentImage: managerChoiceAwardIBM,
            modalClickImage: managerChoiceAwardIBMBadge,
            modalTitle: 'IBM Manager\'s Choice Award.',
            modalName: 'IBMMGRAward'
        },
        {
            id: 12,
            modalContentImage: deepskillAwardIBM,
            modalClickImage: deepSkillAwardBadge,
            modalTitle: 'IBM Deep Skill Award.',
            modalName: 'IBMDSAward'
        },
        {
            id: 13,
            modalContentImage: apexon2022Award,
            modalClickImage: apexon2022AwardBadge,
            modalTitle: 'Apexon 2022 Performance Award.',
            modalName: 'ApexonAward'
        }
    ]

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
        width: '700px',
        overflow: 'scroll'
    }

    function getCertsAndAwardsElements() {
        let certsAndAwardsArr = []; 

        for (let i = 0; i < certsAndAwardsData.length; i++) {
            certsAndAwardsArr.push(
                <Box key={certsAndAwardsData[i].modalName} style={{ marginRight: '10px' }}>
                    <img style={certStyles} src={certsAndAwardsData[i].modalClickImage} onClick={() => openModal(certsAndAwardsData[i].modalName)} />
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
            <Box id="profCertsAwards" component={Paper}>
                <Typography variant='h6' align="center">
                    PROFESSIONAL CERTIFICATIONS &amp; AWARDS
                </Typography>
                <div id="profCertsAwardsDiv">
                    {getCertsAndAwardsElements()}
                </div>
                <br />
            </Box>
        </>
    )
}

export default CertsAndAwards; 