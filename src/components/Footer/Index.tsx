import React from "react";
import style from "./footer.module.css";
import { InputFields } from "../FormFields/Index";
import facebook from "../../../public/facebook.svg";
import twitter from "../../../public/twitter.svg";
import linkedIn from "../../../public/linkedin.svg";

const MarketPlace = [
  {
    title: "All NFTs",
    url: "",
  },
  {
    title: "Art",
    url: "",
  },
  {
    title: "Music",
    url: "",
  },
  {
    title: "Domain Names",
    url: "",
  },
  {
    title: "Virtual Worlds",
    url: "",
  },
  {
    title: "Trading Cards",
    url: "",
  },
];

const MyAccount = [
  {
    title: "My Profile",
    url: "",
  },
  {
    title: "Favorites",
    url: "",
  },
];

export default function Index() {
  const [searchText, setSearchText] = React.useState<string>("");

  const ChangeHandler = (e: any) => {
    setSearchText(e.target.value);
  };

  return (
    <>
      <div className={style.footerArea}>
        <div className={style.footerItem}>
          <div className={style.footerLogo}>NFters</div>
          <p>
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>
          <div className={style.footerMenu}>
            <ul>
              <li>
                <a href="#">
                  <img src={facebook.src} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={twitter.src} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={linkedIn.src} alt="Facebook" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={style.footerItem}>
          <h3>Market Place</h3>
          <ul>
            {MarketPlace &&
              MarketPlace.map((item, index) => (
                <li key={index}>
                  <a href={item.url}>{item.title}</a>
                </li>
              ))}
          </ul>
        </div>
        <div className={style.footerItem}>
          <h3>My Account</h3>
          <ul>
            {MyAccount &&
              MyAccount.map((item, index) => (
                <li key={index}>
                  <a href={item.url}>{item.title}</a>
                </li>
              ))}
          </ul>
        </div>
        <div className={style.footerItem}>
          <h3>Stay in the loop</h3>
          <p>
            Join our mailing list to stay in the loop with our newest feature
            releases, NFT drops, and tips and tricks for navigating NFTs.
          </p>
          <form action="#" className="relative">
            <InputFields
              type="text"
              icon={false}
              placeholder="Enter your Email Address.."
              value={searchText}
              onchangeHandler={(e) => ChangeHandler(e)}
            />
            <button type="submit">Subscribe Now</button>
          </form>
        </div>
      </div>
      <div className={style.footerBottom}>
        <p>Copyright © 2023 Salman Aziz</p>
      </div>
    </>
  );
}
