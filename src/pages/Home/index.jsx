import Banner from '../../components/Banner'
import Card from '../../components/Card'
import banner from '../../assets/banner.png'

function Home() {
  return (
    <div>
      <Banner picture={banner} text='Chez vous, partout et ailleurs' />
      <Card />
    </div>
  );
}

export default Home
