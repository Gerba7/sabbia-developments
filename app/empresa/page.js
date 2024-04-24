import PageCover from '../ui/components/Common/PageCover/PageCover';
import WhoWeAreCover from '../../public/images/whoWeAre.jpg';
import Header from '../ui/components/Common/Header/Header';
import PageCover2 from '../ui/components/Common/PageCover/PageCover2';



const WhoWeAre = () => {
  return (
    <div>
      {/* <PageCover img={WhoWeAreCover} />
      <Header title={'QUIENES SOMOS'} /> */}
      <PageCover2 title={'EMPRESA'} />
      <div style={{height: '50vh'}}></div>
    </div>
  )
}

export default WhoWeAre
