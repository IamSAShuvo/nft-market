import React from 'react'
import { Button } from '../FormFields/Index'
import style from './sell.module.css'
import avater from '../../../public/user.png'
import avater2 from '../../../public/user2.png'
import bgImg from "../../../public/landing.png"
import bgImg2 from "../../../public/bg2.png"


export default function Index() {

  return (
    <div className={style.sellNFT}>
       <div className={style.leftSell}>
            <div className={style.sellImg}>
                <img src={bgImg.src} alt="image"/>
                <img className={style.absoluteClass} src={avater2.src} alt="avater"/>
            </div>
            <div className={style.sellImg}>
                <img src={bgImg.src} className={style.sellImgLast} alt="image"/>
                <img className={style.absoluteClass} src={avater2.src} alt="avater"/>
            </div>
       </div>
       <div className={style.leftSell}>
            <div className={style.sellImg}>
                <img src={bgImg2.src} alt="image"/>
                <img className={style.absoluteClass} src={avater2.src} alt="avater"/>
            </div>
       </div>
       <div className={style.leftSellText}>
            <h3>Create and sell your NFTs</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi ac phasellus placerat a pellentesque tellus sed egestas. Et tristique dictum sit tristique sed non. Lacinia lorem id consectetur pretium diam ut. Pellentesque eu sit blandit fringilla risus faucibus.</p>
            <Button className='exploreBtn' type='button' buttonText="Sign Up Now" clickHander={() => console.log('text')}/>

       </div>
    </div>
  )
}
