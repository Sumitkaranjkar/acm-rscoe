import React from 'react'
import { useEffect } from 'react';
import "../App.css"
import Aos from 'aos';
import "aos/dist/aos.css"

const Profile = () => {
    useEffect(() => {
        Aos.init({duration:2000})
   },[])
  return (
      <>

   <div className='profile-card-div'>
     
<div className='profile-card' data-aos="zoom-out">
    <div className='photo-div'>
<img className="profile-photo" src='./Images/team/shashankbhosagi.jpeg'></img>
</div>
<div className='total-info'>
<div className="photo-info-div">
<a href='https://www.linkedin.com/in/shashank-bhosagi-8b9432206/'><ion-icon name="logo-linkedin" style={{padding:0,fontSize:25,color:"cornflowerblue"}} ></ion-icon></a>
<p className='name'>Shashank Bhosagi</p>
</div>
<p className='post'>Chair</p>
</div>

</div>

<div className='profile-card'  data-aos="zoom-out">
    <div className='photo-div'>
<img className="profile-photo" src='./Images/team/akankshalugade.jpg'></img>
</div>
<div className='total-info'>
<div className="photo-info-div">
<a href='www.linkedin.com/in/AkankshaLugade2710'><ion-icon name="logo-linkedin"  style={{padding:0,fontSize:25,color:"cornflowerblue"}}></ion-icon></a>
<p className='name'>Akanksha Lugade</p>
</div>
<p className='post'>Vice Chair</p>
</div>
</div>

<div className='profile-card'  data-aos="zoom-out">
    <div  className='photo-div'>
<img className="profile-photo" src='./Images/team/pratiksha.jpeg'></img>
</div>
<div className='total-info'>
<div className="photo-info-div">
<a href='https://www.linkedin.com/in/shashank-bhosagi-8b9432206/'><ion-icon name="logo-linkedin"  style={{padding:0,fontSize:25,color:"cornflowerblue"}}></ion-icon></a>
<p className='name'>Pratiksha Patil</p>
</div>
<p className='post'>Secretary</p>
</div>
</div>

<div className='profile-card'  data-aos="zoom-out">
    <div className='photo-div'>
<img className="profile-photo" src='./Images/team/aryanchipkar.png'></img>
</div>
<div className='total-info'>
<div className="photo-info-div">
<a href='https://www.linkedin.com/in/aaryan-chipkar-667a95207'><ion-icon name="logo-linkedin"  style={{padding:0,fontSize:25,color:"cornflowerblue"}}></ion-icon></a>
<p className='name'>Aryan Chipkar</p>
</div>
<p className='post'>Treasurer</p>
</div>
</div>

<div className='profile-card'  data-aos="zoom-out">
    <div className='photo-div'>
<img className="profile-photo" src='./Images/team/shubhamasbe.jpeg'></img>
</div>
<div className='total-info'>
<div className="photo-info-div">
<a href='https://www.linkedin.com/in/shubham-asbe-346153199/'><ion-icon name="logo-linkedin"  style={{padding:0,fontSize:25,color:"cornflowerblue"}}></ion-icon></a>
<p className='name'>Shubham Asbe</p>
</div>
<p className='post'>Support Team</p>
</div>
</div>

<div className='profile-card'  data-aos="zoom-out">
    <div className='photo-div'>
<img className="profile-photo" src='./Images/team/abhishekbhonde.jpg'></img>
</div>
<div className='total-info'>
<div className="photo-info-div">
<a href='https://www.linkedin.com/in/abhishek-bhonde-ba501a22a/'><ion-icon name="logo-linkedin"  style={{padding:0,fontSize:25,color:"cornflowerblue"}}></ion-icon></a>
<p className='name'>Abhishek Bhonde </p>
</div>
<p className='post'>Web Team Head</p>
</div>
</div>


<div className='profile-card'  data-aos="zoom-out">
    <div className='photo-div'>
<img className="profile-photo" src='./Images/team/vaibhavikulkarni.jpg'></img>
</div>
<div className='total-info'>
<div className="photo-info-div">
<a href='https://www.linkedin.com/in/vaibhavikulkarni25/'><ion-icon name="logo-linkedin"  style={{padding:0,fontSize:25,color:"cornflowerblue"}}></ion-icon></a>
<p className='name'>Vaibhavi Kulkarni </p>
</div>
<p className='post'>Documentation Team Head</p>
</div>
</div>

<div className='profile-card'  data-aos="zoom-out">
    <div className='photo-div'>
<img className="profile-photo" src='https://media.licdn.com/dms/image/D4E03AQEsdYalxzWdTg/profile-displayphoto-shrink_400_400/0/1665230888211?e=1699488000&v=beta&t=fWBzP3Q6Jifaa5OhBvb-qAeWdC3nLnY0nO4hgLzoOYs'></img>
</div>
<div className='total-info'>
<div className="photo-info-div">
<a href='https://www.linkedin.com/in/pavan-kulkarni-77507b253/'><ion-icon name="logo-linkedin"  style={{padding:0,fontSize:25,color:"cornflowerblue"}}></ion-icon></a>
<p className='name'>Pawan Kulkarni</p>
</div>
<p className='post'>Social Media Team Head</p>
</div>
</div>

<div className='profile-card'  data-aos="zoom-out">
    <div className='photo-div'>
<img className="profile-photo" src='./Images/team/sumitkaranjkar.JPG'></img>
</div>
<div className='total-info'>
<div className="photo-info-div">
<a href='https://www.linkedin.com/in/sumit-karanjkar-6285a0229/'><ion-icon name="logo-linkedin"  style={{padding:0,fontSize:25,color:"cornflowerblue"}}></ion-icon></a>
<p className='name'>Sumit Karanjkar</p>
</div>
<p className='post'>Web Team Co-Head</p>
</div>
</div>

<div className='profile-card'  data-aos="zoom-out">
    <div className='photo-div'>
<img className="profile-photo" src='./Images/team/dipalibhalerao.jpeg'></img>
</div>
<div className='total-info'>
<div className="photo-info-div">
<a href='https://www.linkedin.com/in/dipali-bhalerao-777b71239/'><ion-icon name="logo-linkedin"  style={{padding:0,fontSize:25,color:"cornflowerblue"}}></ion-icon></a>
<p className='name'>Dipali Bhalerao</p>
</div>
<p className='post'>Desgin Team Head</p>
</div>
</div>

<div className='profile-card'  data-aos="zoom-out">
           <div className='photo-div'>
       <img className="profile-photo" src='./Images/team/DheemahiGupta.jpeg'></img>
       </div>
       <div className='total-info'>
       <div className="photo-info-div">
       <a href='https://www.linkedin.com/in/dheemahi-g-89774424b/'><ion-icon name="logo-linkedin" style={{padding:0,fontSize:25,color:"cornflowerblue"}}></ion-icon></a>
       <p className='name'>Dheemahi Gupta</p>
       </div>
       <p className='post'>Web Team</p>
       </div>
       </div>

       <div className='profile-card'  data-aos="zoom-out">
           <div className='photo-div'>
       <img className="profile-photo" src='./Images/team/AnandDhadiwal.jpeg'></img>
       </div>
       <div className='total-info'>
       <div className="photo-info-div">
       <a href='https://www.linkedin.com/in/anand-dhadiwal-027076231/'><ion-icon name="logo-linkedin" style={{padding:0,fontSize:25,color:"cornflowerblue"}}></ion-icon></a>
       <p className='name'>Anand Dhadiwal</p>
       </div>
       <p className='post'>Design Team</p>
       </div>
       </div>

       <div className='profile-card'  data-aos="zoom-out">
           <div className='photo-div'>
       <img className="profile-photo" src='./Images/team/PratikKatkar.jpeg'></img>
       </div>
       <div className='total-info'>
       <div className="photo-info-div">
       <a href='https://www.linkedin.com/in/pratik-katkar-74609a24a/'><ion-icon name="logo-linkedin" style={{padding:0,fontSize:25,color:"cornflowerblue"}}></ion-icon></a>
       <p className='name'>Pratik Katkar</p>
       </div>
       <p className='post'>Documentation Team</p>
       </div>
       </div>


       <div className='profile-card'  data-aos="zoom-out">
           <div className='photo-div'>
       <img className="profile-photo" src='./Images/team/YashLondhe.jpeg'></img>
       </div>
       <div className='total-info'>
       <div className="photo-info-div">
       <a href='https://www.linkedin.com/in/yashlondhe-/'><ion-icon name="logo-linkedin" style={{padding:0,fontSize:25,color:"cornflowerblue"}}></ion-icon></a>
       <p className='name'>Yash Londhe</p>
       </div>
       <p className='post'>Social Media Team</p>
       </div>
       </div>

       <div className='profile-card'  data-aos="zoom-out">
           <div className='photo-div'>
       <img className="profile-photo" src='./Images/team/artik.png'></img>
       </div>
       <div className='total-info'>
       <div className="photo-info-div">
       <a href='https://www.linkedin.com/in/arti-kalhapure-93869424b/'><ion-icon name="logo-linkedin" style={{padding:0,fontSize:25,color:"cornflowerblue"}}></ion-icon></a>
       <p className='name'>Arti Kalahapure</p>
       </div>
       <p className='post'>Documentation Team</p>
       </div>
       </div>

<div className='profile-card'  data-aos="zoom-out">
           <div className='photo-div'>
       <img className="profile-photo" src='./Images/team/abhishekdhanke.png'></img>
       </div>
       <div className='total-info'>
       <div className="photo-info-div">
       <a href='https://www.linkedin.com/in/abhishek-dhanke-226354216/'><ion-icon name="logo-linkedin" style={{padding:0,fontSize:25,color:"cornflowerblue"}}></ion-icon></a>
       <p className='name'>Abhishek Dhanke</p>
       </div>
       <p className='post'>Web Team</p>
       </div>
       </div>







       <div className='profile-card'  data-aos="zoom-out">
           <div className='photo-div'>
       <img className="profile-photo" src='./Images/team/jayshinde.jpg'></img>
       </div>
       <div className='total-info'>
       <div className="photo-info-div">
       <a href='https://www.linkedin.com/in/jay-shinde-5a827317b'><ion-icon name="logo-linkedin" style={{padding:0,fontSize:25,color:"cornflowerblue"}}></ion-icon></a>
       <p className='name'>Jay Shinde</p>
       </div>
       <p className='post'>Web Team</p>
       </div>
       </div>

       
        
       <div className='profile-card'  data-aos="zoom-out">
           <div className='photo-div'>
       <img className="profile-photo" src='./Images/team/yashmore.jpg'></img>
       </div>
       <div className='total-info'>
       <div className="photo-info-div">
     <a href='https://www.linkedin.com/in/yash-more-187a08229' > <ion-icon name="logo-linkedin" style={{padding:0,fontSize:25,color:"cornflowerblue"}}></ion-icon></a>
       <p className='name'>Yash More</p>
       </div>
       <p className='post'>Administration Team</p>
       </div>
       </div>
             
       <div className='profile-card'  data-aos="zoom-out">
           <div className='photo-div'>
       <img className="profile-photo" src='./Images/team/aaryanchaudhari.jpg'></img>
       </div>
       <div className='total-info'>
       <div className="photo-info-div">
       <a href='https://www.linkedin.com/in/aaryan-chaudhari-8036b5228'><ion-icon name="logo-linkedin" style={{padding:0,fontSize:25,color:"cornflowerblue"}}></ion-icon></a>
       <p className='name'>Aaryan Chaudhari</p>
       </div>
       <p className='post'>Administration Team</p>
       </div>
       </div>


       <div className='profile-card'  data-aos="zoom-out">
    <div className='photo-div'>
<img className="profile-photo" src='./Images/team/vaishnavikumbhar.jpeg'></img>
</div>
<div className='total-info'>
<div className="photo-info-div">
<a href='https://www.linkedin.com/in/vaishnavi-kumbhar-9b3959213'><ion-icon name="logo-linkedin"  style={{padding:0,fontSize:25,color:"cornflowerblue"}}></ion-icon></a>
<p className='name'>Vaishnavi Kumbhar</p>
</div>
<p className='post'>Documentation Team</p>
</div>
</div>


     

       <div className='profile-card'  data-aos="zoom-out">
    <div className='photo-div'>
<img className="profile-photo" src='./Images/team/swastirai.jpg'></img>
</div>
<div className='total-info'>
<div className="photo-info-div">
<a href='https://www.linkedin.com/in/swasti-rai-7a697b212'><ion-icon name="logo-linkedin"  style={{padding:0,fontSize:25,color:"cornflowerblue"}}></ion-icon></a>
<p className='name'>Swasti Rai</p>
</div>
<p className='post'>Support Team</p>
</div>
</div>

       <div className='profile-card'  data-aos="zoom-out">
           <div className='photo-div'>
       <img className="profile-photo" src='./Images/team/upendramaurya.jpeg'></img>
       </div>
       <div className='total-info'>
       <div className="photo-info-div">
       <ion-icon name="logo-linkedin" style={{padding:0,fontSize:25,color:"cornflowerblue"}}></ion-icon>
       <p className='name'>Upendra Maurya</p>
       </div>
       <p className='post'>Social Media Team</p>
       </div>
       </div>

       <div className='profile-card'  data-aos="zoom-out">
           <div className='photo-div'>
       <img className="profile-photo" src='./Images/team/sakshibonde.jpg'></img>
       </div>
       <div className='total-info'>
       <div className="photo-info-div">
       <a href='https://www.linkedin.com/in/sakshi-bonde-11b30522b'><ion-icon name="logo-linkedin" style={{padding:0,fontSize:25,color:"cornflowerblue"}}></ion-icon></a>
       <p className='name'>Sakshi Bonde</p>
       </div>
       <p className='post'>Content Head</p>
       </div>
       </div>

       <div className='profile-card'  data-aos="zoom-out">
           <div className='photo-div'>
       <img className="profile-photo" src='./Images/team/rushikeshsarode.jpg'></img>
       </div>
       <div className='total-info'>
       <div className="photo-info-div">
      <a href='https://www.linkedin.com/in/rushikesh-sarode-57b514226/'><ion-icon name="logo-linkedin" style={{padding:0,fontSize:25,color:"cornflowerblue"}}></ion-icon></a> 
       <p className='name'>Rushikesh Sarode</p>
       </div>
       <p className='post'>Web Team</p>
       </div>
       </div>

       <div className='profile-card'  data-aos="zoom-out">
           <div className='photo-div'>
       <img className="profile-photo" src='./Images/team/sakshideo.jpg'></img>
       </div>
       <div className='total-info'>
       <div className="photo-info-div">
      <a href='https://www.linkedin.com/in/sakshi-deo-18075a211'> <ion-icon name="logo-linkedin" style={{padding:0,fontSize:25,color:"cornflowerblue"}}></ion-icon></a>
       <p className='name'>Sakshi Deo</p>
       </div>
       <p className='post'>Content Team</p>
       </div>
       </div>

       <div className='profile-card'  data-aos="zoom-out">
           <div className='photo-div'>
       <img className="profile-photo" src='./Images/team/nishantpatil.jpg'></img>
       </div>
       <div className='total-info'>
       <div className="photo-info-div">
       <a href='https://www.linkedin.com/in/nishant-patil-063'><ion-icon name="logo-linkedin" style={{padding:0,fontSize:25,color:"cornflowerblue"}}></ion-icon></a>
       <p className='name'>Nishant Patil</p>
       </div>
       <p className='post'>Social Media Team</p>
       </div>
       </div>

       <div className='profile-card'  data-aos="zoom-out">
           <div className='photo-div'>
       <img className="profile-photo" src='./Images/team/shreyapanicker.jpg'></img>
       </div>
       <div className='total-info'>
       <div className="photo-info-div">
       <a href='https://www.linkedin.com/in/shreya-panicker-456522202'><ion-icon name="logo-linkedin" style={{padding:0,fontSize:25,color:"cornflowerblue"}}></ion-icon></a>
       <p className='name'>Shreya Panicker</p>
       </div>
       <p className='post'>Content Team</p>
       </div>
       </div>

       <div className='profile-card'  data-aos="zoom-out">
           <div className='photo-div'>
       <img className="profile-photo" src='./Images/team/sakshikhatke.jpeg'></img>
       </div>
       <div className='total-info'>
       <div className="photo-info-div">
       <a href='https://www.linkedin.com/in/sakshi-khatke-975b5a210'><ion-icon name="logo-linkedin" style={{padding:0,fontSize:25,color:"cornflowerblue"}}></ion-icon></a>
       <p className='name'>Sakshi Khatke</p>
       </div>
       <p className='post'>Publicity Team</p>
       </div>
       </div>
   </div>
      
     

</>
  )
}

export default Profile