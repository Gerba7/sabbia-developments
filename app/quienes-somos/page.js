import PageCover from '../ui/components/Common/PageCover/PageCover';
import WhoWeAreCover from '../../public/images/whoWeAre.jpg';
import Header from '../ui/components/Common/Header/Header';



const WhoWeAre = () => {
  return (
    <div>
      <PageCover img={WhoWeAreCover} />
      <Header title={'QUIENES SOMOS'} />
    </div>
  )
}

export default WhoWeAre
