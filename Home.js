import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'
function Home() {
  return (
    <div className='home'>
        <Banner />
        <div className='home__section'>
            <Card
             src="https://images1.apartments.com/i2/uCtH9zimxpY-YNxoEsBFKOa0lFIGECsFu0HTAYzW590/117/century-town-center-gainesville-fl-building-photo.jpg"
             title="Apartment a with nice pool "
             description="This place has a pool"
             price={'$120 / night'}/>
            <Card src="https://a0.muscache.com/im/pictures/d014dcaa-69ed-4d33-bc67-9daf0695ee17.jpg?im_w=720"
                title="Quiet getaway"
                description="Located in a quiet neighborhood not to far from the city"
                price={'$99 / night'}/>
            <Card src="https://rentpath-res.cloudinary.com/$img_current/t_3x2_jpg_xl/eeee9fab37e63bb1eaebae54fc04c389"
                title="Luxary apartments"
                description="Fancy getaway with a spa and a pool"
                price={'$100 / night'}/>
        </div>
        <div className='home__section'>
            <Card src="https://www.trimarkproperties.com/gainesville/savion-park/luxury-apartments/gallery/4-bedroom-apartments-in-Gainesville-FL-8.jpg"
                title="Savion Apartments by the water"
                description="With a view of a lake and near the UF campus"
                price={'$145 / night'}   />
            <Card src="https://images.squarespace-cdn.com/content/v1/54bd0b7ae4b0b2f2e3662275/1438031367368-F6EFJ2P2Y9WQT83C7LDZ/Picture1.jpg?format=1500w"
                title="Savion town homes"
                description="Comes with basic household amenities"
                price={'$135 / night'}   />
            <Card src="https://images.squarespace-cdn.com/content/v1/5f982ae6d02d2667f5aae11a/8b1dbc4b-e21b-4cda-8cf7-97edfa9accae/project-rendering.jpg"
                title="Luxury apartments"
                description="Located near the shopping center and in a quiet neighborhood"
                price={'$125 / night'}   />

            </div>
    </div>
  )
}

export default Home