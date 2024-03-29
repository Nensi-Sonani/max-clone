import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../style/Home.css';
import { Navigation } from 'swiper/modules';
import { useSelector } from 'react-redux';
import '../style/media.css'

const Home = () => {
  let user = useSelector((stor) => stor.Reducer)
  console.log(user)
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  // };
  return (
    <>

      {/* slider section    */}
      <section className='slider'>
        <div className="container">
          <div className="slider-img">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://b37db184fa09e5ba0292-662caecad9dd967cd19824f80fb1538c.ssl.cf5.rackcdn.com/MAX-Friday/MAX2.O/desktop-department-11modularblock-oneBythree-A-Women-04JAN24.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://b37db184fa09e5ba0292-662caecad9dd967cd19824f80fb1538c.ssl.cf5.rackcdn.com/MAX-Friday/MAX2.O/MAX-Banner6-desktop-COMMONPONGAL-02JAN24A.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://b37db184fa09e5ba0292-662caecad9dd967cd19824f80fb1538c.ssl.cf5.rackcdn.com/MAX-Friday/MAX2.O/MAX-Banner5-desktop-Women-02JAN24.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://b37db184fa09e5ba0292-662caecad9dd967cd19824f80fb1538c.ssl.cf5.rackcdn.com/MAX-Friday/MAX2.O/MAX-Banner4-desktop-Women-02JAN24.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://b37db184fa09e5ba0292-662caecad9dd967cd19824f80fb1538c.ssl.cf5.rackcdn.com/MAX-Friday/MAX2.O/MAX-Banner3-desktopp-Women-02JAN24.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://b37db184fa09e5ba0292-662caecad9dd967cd19824f80fb1538c.ssl.cf5.rackcdn.com/MAX-Friday/MAX2.O/MAX-Banner1-desktopp-Women-02JAN24.png" alt="" />
        </SwiperSlide>
      </Swiper>

          </div>
        </div>
      </section>

      {/* Trending section  */}
      <section className='trend1'>
        <div className="container">
          <h4>Trending Now </h4>
          {/* <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className='d-block w-100' src='../images/banner1.jpeg' text="First slide" alt='img1' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src='../images/banner2.png' text="Second slide" alt='img-2'/>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src='../images/banner3.png' text="Third slide" alt='img-3'/>
      </Carousel.Item>
    </Carousel> */}

          
          <img src="../images/trending.png" alt="" />
        </div>
      </section>

      {/* top seller section  */}
      <section className='t-sell'>
        <div className="container">
          <h4>Top Seller</h4>
          <img src="../images/t-seller.gif" alt="" />
        </div>
      </section>

      {/* top category section  */}
      <section className='category'>
        <div className="container">
          <h4>Top Categories</h4>
          <div className="row d-flex">
            <div className="l-section col-2">
              <h6>Women</h6>
              <h6>Girls</h6>
              <h6>Boys</h6>
              <h6>Men</h6>
            </div>
            <div className="r-section col-10">
              <h4>Women</h4>
              <div className="r-section-img">
                <img src="../images/women1.png" alt="" />
                <img src="../images/women-2.png" alt="" />
                <img src="../images/women-3.png" alt="" />
                <img src="../images/women-4.png" alt="" />
                <img src="../images/women-5.png" alt="" />
                <img src="../images/women-6.png" alt="" />
                <img src="../images/women-7.png" alt="" />
                <img src="../images/women-8.png" alt="" />
                <img src="../images/women-9.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* choice section  */}
      <section className='choice'>
        <div className="container">
          <h4>2X Your Choices!</h4>
          <img src="../images/choice.jpeg" alt="" />
        </div>
      </section>

      {/* trend section  */}
      <section className='trend'>
        <div className="container">
          <h4>Trend Radar</h4>
          <div className="trend-img">
            <img src="../images/trend-1.jpeg" alt="" />
            <img src="../images/trend-2.jpeg" alt="" />
            <img src="../images/trend-3.jpeg" alt="" />
            <img src="../images/trend-4.jpeg" alt="" />
          </div>
        </div>
      </section>

      {/* must have section  */}
      <section className='must'>
        <div className="container">
          <h4>Must Have</h4>
          <div className="must-img">
            <img src="../images/must-1.jpeg" alt="" />
            <img src="../images/must-2.jpeg" alt="" />
            <img src="../images/must-3.jpeg" alt="" />
            <img src="../images/must-4.jpeg" alt="" />
          </div>
        </div>
      </section>

      {/* character zone section */}
      <section className='character'>
        <div className="container">
          <h4>Character Zone</h4>
          <div className="character-img">
            <img src="../images/character-1.png" alt="" />
            <img src="../images/character-2.png" alt="" />
            <img src="../images/character-3.png" alt="" />
            <img src="../images/character-4.png" alt="" />
          </div>
          <div className="char-img">
            <img src="../images/gift-card.jpeg" alt="" />
          </div>
        </div>
      </section>

      {/* kids section  */}
      <section className='kid'>
        <div className="container">
          <h4>Kids' Shop By Age</h4>
          <div className="kid-img">
            <img src="../images/kid-1.png" alt="" />
            <img src="../images/kid-2.png" alt="" />
            <img src="../images/kid-3.png" alt="" />
            <img src="../images/kid-4.png" alt="" />
          </div>
        </div>
      </section>

      {/* winter section  
    <section className='winter'>
      <div className="container">
      <h4>Winter Must Haves</h4>
      <div className="winter-img">
        <img src="../images/winter-1.jpeg" alt="" />
        <img src="../images/winter-2.jpeg" alt="" />
        <img src="../images/winter-3.png" alt="" />
        <img src="../images/winter-4.jpeg" alt="" />
      </div>
      </div>
    </section>*/}

      {/* top store section  */}
      <section className='top'>
        <div className="container">
          <h4>Top Store</h4>
          <img src="../images/top.png" alt="" />
        </div>
      </section>

      {/* max style min price section  */}
      <section className='style'>
        <div className="container">
          <h4>Max Style. Min Price</h4>
          <div className="style-img">
            <img src="../images/style-1.jpeg" alt="" />
            <img src="../images/style-2.jpeg" alt="" />
            <img src="../images/style-3.png" alt="" />
            <img src="../images/style-4.png" alt="" />
          </div>
        </div>
      </section>

      {/* our benefit section  */}
      <section className='benefit'>
        <div className="container">
          <h4>Our Benefit</h4>
          <div className="benefit-img">
            <img src="../images/benefit-1.png" alt="" />
            <img src="../images/benefit-2.png" alt="" />
            <img src="../images/benefit-3.png" alt="" />
          </div>
        </div>
        {/*<div className="container benefit-1">
     <div className="row d-flex p-4">
      <div className="section-1 col-4">
        <p>This section is personalised for you. View your live order details or pending cart details here.</p>
        <p>Add items in your cart or make a purchase to view  these details.</p>
        </div>
        <div className="section-2 col-4">
          <img src="../images/benefit.svg" alt="" />
        </div>
  </div>
  </div>*/}
      </section>

      {/* subscribe section  */}
      <section className='subscribe'>
        <div className="container">
        </div>
      </section>

    </>
  )
}

export default Home