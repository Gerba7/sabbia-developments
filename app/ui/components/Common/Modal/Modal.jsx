'use client'

import styles from './modal.module.css';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MiniSlider from '../../Projects/MiniSlider/MiniSlider';





export default function BasicModal({content, project}) {

  const [open, setOpen] = useState(false);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  

  return (
     <>
      <div onClick={handleOpen} style={{width: '100%'}}>{content}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{outline: 'none'}}
      >
        <div className={styles.box}>
            <div className={styles.closeButton} onClick={handleClose}>
                <CloseIcon color='inherit' /> 
            </div>
            <div className={styles.left}>
              <div className={styles.textContainer}>
                <div style={{marginBottom: '10px'}}>
                    <h1 className={styles.title}>{project?.title}</h1>
                    <div className={styles.hr}></div>
                </div>
                {project?.subtitle ? <h2 className={styles.subtitle}>{project?.subtitle}</h2> : <></>}
                <p className={styles.text}>
                    {project?.text}
                </p>
              </div>
            </div>
            <div className={styles.right}>
                <MiniSlider items={project} />
            </div>
        </div>
      </Modal>
      </>
  );
}

