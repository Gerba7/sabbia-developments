'use client'

import { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import Link from "next/link";
import Image from 'next/image';
import Sabbia_Logo from '../../../../public/images/SABBIA_LOGO_NAV.png';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { usePathname } from 'next/navigation';






const Navbar = () => {

    const [navHeight, setNavHeight] = useState(false);
    const [displayMenu, setDisplayMenu] = useState(true);
    const [dropdown, setDropdown] = useState(false);

    const pathname = usePathname();
    
    const handleScroll = () => {
        if (window.scrollY >= 80) {
            setNavHeight(true);
        } else {
            setNavHeight(false);
        }
    };

    useEffect(() => {

      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


    useEffect(() => {
      setDisplayMenu(true);
    }, [pathname]);


    const toggleMenu = (e) => {
      e.preventDefault()
      setDisplayMenu(!displayMenu)
    }

    const toggleDropdow = (e) => {
      e.preventDefault()
      setDropdown(!dropdown)
    }


    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };


    return (
      <div className={`${styles.container} ${navHeight ? styles.containerHeight : ''}`}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
              <div className={styles.burger} onClick={e => toggleMenu(e)}> 
                <div className={styles.menuItem}>
                  {displayMenu ?  <MenuIcon color="#fff" style={{fontSize: 'inherit'}} /> 
                              :  <CloseIcon color="#fff" style={{fontSize: 'inherit'}} /> }
                </div>
              </div>
              <Link href='/'>
                  <h1 className={styles.title}>Sabbia</h1>
                  <Image className={styles.logoNavbar} src={Sabbia_Logo} alt='logo Sabbia' width={navHeight ? 120 : 150} height={navHeight ? 25 : 30} priority />
              </Link>
          </div>
          <div className={`${styles.right} ${displayMenu ? styles.rightDisplay : ''}`}>
              <Link className={styles.link} href='/empresa' style={{width: 'max-content'}}>Empresa</Link>
              {/* <div className={styles.link} style={{width: 'max-content'}} onClick={() => scrollToSection("Home")}>Empresa</div> */}
              <Link className={styles.link} href='/servicios'>Servicios</Link>
              <div className={`${styles.link} ${styles.dropdown}`}>
                Proyectos
                <span className={styles.dropdownContent}>
                  <div className={styles.transparent}></div>
                  <Link className={styles.dropdownLink} href='/proyectos/emprendimientos'>Emprendimientos</Link>
                  <Link className={styles.dropdownLink} href='/proyectos/viviendas'>Viviendas</Link>
                </span>
              </div>
              <Link className={styles.link} href='/contacto'>Contacto</Link>
          </div>
        </div>
      </div>
    )
}

export default Navbar
