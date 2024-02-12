import React from 'react'
import { Button } from '../FormFields/Index'
import style from './collection.module.css'
import avater from '../../../public/user.png'
import bgImg from "../../../public/landing.png"
import sml from '../../../public/landing.png'


const collectionFeature = [{
    images: [{
        img: bgImg.src,
    },{
        img: sml.src,  
    },{
        img: sml.src,
    },{
        img: sml.src,
    }],
    title: 'Amazing Collection',
    userAvater: avater.src,
    name: 'Arkan',
    buttonText: 'Total 54 Items'
},{
    images: [{
        img: bgImg.src,
    },{
        img: bgImg.src,  
    },{
        img: bgImg.src,
    },{
        img: bgImg.src,
    }],
    title: 'Amazing Collection',
    userAvater: avater.src,
    name: 'Arkan',
    buttonText: 'Total 54 Items'
},{
    images: [{
        id: 1,
        img: bgImg.src,
    },{
        id: 2,
        img: bgImg.src,  
    },{
        id: 3,
        img: bgImg.src,
    },{
        id: 4,
        img: bgImg.src,
    }],
    title: 'Amazing Collection',
    userAvater: avater.src,
    name: 'Arkan',
    buttonText: 'Total 54 Items'
}]
export default function Index() {

  return (
    <div className={style.collectionBg}>
        <div className={style.collectionFeature}>
            <h3>Collection Featured NFTS</h3>
            <div className={style.collectionArray}>
                {collectionFeature.map((item, index) => (
                    <div key={index}>
                        <div className={style.collects}> 
                            <div className={style.bigimages}>
                                <img src={item.images[0].img} alt="image"/>
                            </div>
                            <div className={style.cloesgre}>
                                {item.images.filter((item, gs) => gs !== 0).map((imgs, q) => (
                                    <div key={q} className={style.smallImges}>
                                    <img src={imgs.img} alt="image"/>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={style.amazingGT}>
                            <h4>{item.title}</h4>
                            <div className={style.bottomGT}>
                                <div>
                                    <img src={item.userAvater} alt={item.name}/>
                                    <p>By {item.name}</p>
                                </div>
                                <Button className='smallButton' type='button' buttonText={item.buttonText} clickHander={() => console.log('text')}/>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    </div>
  )
}
