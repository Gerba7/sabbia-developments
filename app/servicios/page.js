import PageCover from '../ui/components/Common/PageCover/PageCover';
import ServiceCover from '../../public/images/serviceCover.jpeg';
import Header from '../ui/components/Common/Header/Header';



const Services = () => {
  return (
    <div>
      <PageCover img={ServiceCover} />
      <Header title={'SERVICIOS'} />
    </div>
  )
}

export default Services
