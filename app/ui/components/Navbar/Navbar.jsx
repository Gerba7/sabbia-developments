'use client'

import { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import Link from "next/link";
import Image from 'next/image';
import Logo from '../../../../public/images/logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { usePathname, useRouter } from 'next/navigation';






const Navbar = () => {

    const [navHeight, setNavHeight] = useState(false);
    const [displayMenu, setDisplayMenu] = useState(true);

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
                  <h1 className={styles.title}>Book IT</h1>
                  <Image src={Logo} alt='logo Sabbia' width={150} height={150} priority />
              </Link>
          </div>
          <div className={`${styles.right} ${displayMenu ? styles.rightDisplay : ''}`}>
              <Link href='/quienes-somos' style={{width: 'max-content'}}>Quiénes Somos</Link>
              <Link href='/servicios'>Servicios</Link>
              <Link href='/proyectos'>Proyectos</Link>
              <Link href='/contacto'>Contacto</Link>
          </div>
        </div>
      </div>
    )
}

export default Navbar
