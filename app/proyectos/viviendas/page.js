import styles from '../../ui/components/Projects/projectsHouses.module.css';
import ProjectsTitle from '@/app/ui/components/Projects/ProjectsTitle/ProjectsTitle';
import PageCover2 from '@/app/ui/components/Common/PageCover/PageCover2';
import ModalProject from '@/app/ui/components/Projects/ModalProject/ModalProject';
import Casa1a from '../../../public/images/casas/Casa1a.jpeg';
import Casa1b from '../../../public/images/casas/Casa1b.jpeg';
import Casa1c from '../../../public/images/casas/Casa1c.jpeg';
import Casa1d from '../../../public/images/casas/Casa1d.jpeg';
import Casa1e from '../../../public/images/casas/Casa1e.jpg';
import Casa1f from '../../../public/images/casas/Casa1f.jpg';
import Casa1g from '../../../public/images/casas/Casa1g.jpg';
import Casa2a from '../../../public/images/casas/Casa2a.jpg';
import Casa2b from '../../../public/images/casas/Casa2b.jpg';
import Casa2c from '../../../public/images/casas/Casa2c.jpg';
import Casa2d from '../../../public/images/casas/Casa2d.jpg';
import Casa2e from '../../../public/images/casas/Casa2e.jpg';
import Casa2f from '../../../public/images/casas/Casa2f.jpg';
import Casa2g from '../../../public/images/casas/Casa2g.jpg';
import Casa2h from '../../../public/images/casas/Casa2h.jpg';
import Casa2i from '../../../public/images/casas/Casa2i.jpg';
import Casa2j from '../../../public/images/casas/Casa2j.jpg';
import Casa2k from '../../../public/images/casas/Casa2k.jpg';
import Casa2l from '../../../public/images/casas/Casa2l.jpg';


const projects = [
  {
    id: 0,
    title: 'VIVIENDA 1',
    img: [Casa2b, Casa1a, Casa1b, Casa1c, Casa1d, Casa1e, Casa1f, Casa1g, Casa2a, Casa2c, Casa2d, Casa2e, Casa2f],
    text: 
    <>
      -  Sus superficies  de 700 a 750 m2 cubiertos respectivamente. <br/>
      -  Ambas de 5 ambientes con dependencia de servicio y baños en suite. <br/>
      -  Playroom , quincho con pileta cubierta y descubierta.<br/>
      -  Losa radiante más equipos de A/A central. <br/>
      -  Ventanas de pvc / aluminio DVH. <br/>
      -  Diseño de volúmenes, techos planos y líneas rectas.<br/>
      -  Construcción tradicional de H° / mampostería , terminaciones
      en yeso , madera y piedra.
    </>,
    left: false
  },
  {
    id: 1,
    title: 'VIVIENDA 2',
    img: [Casa2g, Casa2h, Casa2i, Casa2j, Casa2k, Casa2l],
    text:
    <>
      -  Sus superficies  de 800 a 850 m2 cubiertos respectivamente. <br/>
      -  Ambas de 5 ambientes con dependencia de servicio y baños en suite. <br/>
      -  Playroom , quincho con pileta cubierta y descubierta.<br/>
      -  Losa radiante más equipos de A/A central. <br/>
      -  Ventanas de pvc / aluminio DVH. <br/>
      -  Diseño de volúmenes, techos planos y líneas rectas.<br/>
      -  Construcción tradicional de H° / mampostería , terminaciones
      en yeso , madera y piedra.
    </>,
    left: true
  }
]



const ProjectsHouses = () => {




  return (
    <div style={{overflowX: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <PageCover2 title={'PROYECTOS'} />
      <ProjectsTitle title={'VIVIENDAS'} subtitle={'UNIFAMILIARES'} />
      <div className={styles.gridContainer}>
        {projects.map((project, index) => {
          return(
            <ModalProject key={project.id} project={project} />
          )
        })}
      </div>
    </div>
  )
}

export default ProjectsHouses
