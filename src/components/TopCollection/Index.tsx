import React from 'react'
import { Button } from '../FormFields/Index'
import {Ethurm} from '../Icon'
import user from '../../../public/user.png'
import style from './topCollection.module.css'
import collectionBig from "../../../public/collectionImg.png"
import accImg from "../../../public/collectionSmall.png"
import FetrueImage from "../../../public/criptlo.png"
import verify from '../../../public/verify.png'


const placeBid = [{
    title: 'The Futr Abstr',
    icon: <Ethurm/>,
    price: '0.25 ETH',
    countData: '1 of 8',
    user: user.src,
    actualImg: accImg.src
}, {
    title: 'The Futr Abstr',
    icon: <Ethurm/>,
    price: '0.25 ETH',
    countData: '1 of 8',
    user: user.src,
    actualImg: accImg.src
},{
    title: 'The Futr Abstr',
    icon: <Ethurm/>,
    price: '0.25 ETH',
    countData: '1 of 8',
    user: user.src,
    actualImg: accImg.src
}]

const topCollection =[{
    feImage: FetrueImage.src,
    feature: true,
    title: 'CryptoFunks',
    ion: <Ethurm/>,
    price: '19,767.89',
    percantage: '+37%',
    avg: false
},{
    feImage: FetrueImage.src,
    feature: false,
    title: 'CryptoFunks',
    ion: <Ethurm/>,
    price: '19,767.89',
    percantage: '+10%',
    avg: true
},{
    feImage: FetrueImage.src,
    feature: false,
    title: 'CryptoFunks',
    ion: <Ethurm/>,
    price: '19,767.89',
    percantage: '+37%',
    avg: false
},{
    feImage: FetrueImage.src,
    feature: true,
    title: 'CryptoFunks',
    ion: <Ethurm/>,
    price: '19,767.89',
    percantage: '+7%',
    avg: true
},{
    feImage: FetrueImage.src,
    feature: false,
    title: 'CryptoFunks',
    ion: <Ethurm/>,
    price: '19,767.89',
    percantage: '+37%',
    avg: false
}]

export default function Index() {

  const exploreHandler = () => {
    console.log('explore')
  }
  return (
    <div className={style.topCollection}>
        <div className={style.collectionLeft}>
            <img src={collectionBig.src} className="w-full" alt="collection"/>
            <div className={style.theFuture}>
                <div className={style.stFeature}>
                    <img src={user.src} alt="user" />
                    <div>
                        <h3>The Future Abstract</h3>
                        <p>10 in the stock</p>
                    </div>
                </div>
                <div className={style.Eturam}>
                    <p>Highest Bid</p>
                    <div className={style.currentBid}>
                        <Ethurm/>
                        <p>0.25 ETH</p>
                    </div>
                </div>
            </div>
        </div>
        <div className={style.collectionMiddle}>
            {placeBid.map((item, index) => (
                <div key={index} className={style.collects}>
                    <img src={item.actualImg} alt={item.title}></img>
                    <div>
                        <h3>{item.title}</h3>
                        <span>
                            <img src={item.user} alt={item.title}/>
                            <button className={style.smallbtn}>
                                {item.icon}
                                {item.price}
                            </button>
                            <p>{item.countData}</p>
                        </span>
                        <Button type='button' buttonText='Place a bid' className='placeBid' clickHander={()=> console.log('click')}/>
                    </div>
                </div>
            ))} 
        </div>
        <div className={style.collectionRight}>
            <h3>Top Collection Over</h3>
            <h5>Last 7 days</h5>
            <div className={style.lastDays}>
                {topCollection.map((topItem, q) => (
                    <div key={q}>
                        <span>{q + 1}</span>
                        <div className={style.accImg}>
                            <img src={topItem.feImage} alt={topItem.title}/>
                            {topItem.feature &&
                            <div>
                                <img src={verify.src} alt="verify" />
                            </div>}
                        </div>
                        <div className={style.cryptoTile}>
                            <h4>{topItem.title}</h4>
                            <span>{topItem.ion} {topItem.price}</span>
                        </div>
                        <div className={`${style.percentage} ${topItem.avg && style.redPercentage}`}>{topItem.percantage}</div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
