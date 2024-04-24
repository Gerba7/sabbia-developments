'use client'

import styles from './modal.module.css';
import CloseIcon from '@mui/icons-material/Close';




const style = {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 300,
    bgcolor: '#216E8C',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
  
    '@media (max-width: 768px)': { 
      width: '70%',
     
    }
};




export default function ProjectModal({isOpen, handleCloseModal}) {

  
    return (
        <dialog className={styles.container}>
            <div className={styles.boxContainer}>
                <div className={styles.wrapper}>
                        <h3 className={styles.paragraph}>
                        3 cuotas sin interés / 15% de descuento en efectivo y transferencia.
                        <br/>
                        <br/>
                        Todos los productos son de elaboración artesanal. El tiempo de entrega es de 15 a 20 días hábiles.
                        </h3>
                </div>
            </div>
            <button className={styles.closeButton} onClick={handleCloseModal}><CloseIcon /></button>
        </dialog>
    );
}