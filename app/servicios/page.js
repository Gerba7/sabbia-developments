import PageCover from '../ui/components/Common/PageCover/PageCover';
import ServiceCover from '../../public/images/serviceCover.jpeg';
import Header from '../ui/components/Common/Header/Header';
import PageCover2 from '../ui/components/Common/PageCover/PageCover2';



const Services = () => {
  return (
    <div>
      {/* <PageCover img={ServiceCover} />
      <Header title={'SERVICIOS'} /> */}
      <PageCover2 title={'SERVICIOS'} />
      <div style={{height: '50vh'}}></div>
    </div>
  )
}

export default Services
