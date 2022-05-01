import React from 'react';
import Nav from "../componentes/nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { useWeb3React } from '@web3-react/core';
import { connector } from '../config/web3';
import { Link } from 'react-router-dom'


const handleTelegram = () => {
  window.location.href = 'https://web.telegram.org/z/'
}
const handleBsc = () => {
  window.location.href = 'https://bscscan.com/'
}
const handleTwitter = () => {
  window.location.href = 'https://www.twitter.com'
}



const Homepage = () => {

  const { activate } = useWeb3React();

  const connect = () => {
    activate(connector);
  }

 
  return (
    <div >
      <div className="general">
        <Nav />
        <div className="contenedor">
          <img onClick={connect} className='metamask' src='/metamask.png'></img>

          <div>
            <img className='toad' src='/Moneytoad.jpg'></img>

            <Link to="https://web.telegram.org/z/"  target="_blank" >
            <FontAwesomeIcon onClick={handleTelegram} className='telegram' icon={faTelegram} />
            </Link>

            <Link to="https://bscscan.com/" target="_blank">
            <img onClick={handleBsc} className='bsc' src="/bsc.jpg" alt="" />
            </Link>

            <Link to="https://twitter.com/" target="_blank">
            <FontAwesomeIcon onClick={handleTwitter} className='twitter' icon={faTwitter} />
            </Link>

            <img onClick={connect} className='responsive-metamask' src='/metamask.png'></img>
            <h2>The BNB Reward Pool with the tastiest daily return and lowest dev fee</h2>
          </div>


          <div className="card-token">

            <div className="content-card">
              <p>Contract</p>
              <h3>0 BNB</h3>
            </div>

            <div className="content-card">
              <p>Contract</p>
              <h3>0 BNB</h3>
            </div>

            <div className="content-card">
              <p>Contract</p>
              <h3>0 BNB</h3>
            </div>

            <div className="content-card">
              <input type="number" min="0" max="0" class="value-token" ></input>
              <p className="text-p">BNB</p>
            </div>

            <div className="content-card2">
              <button className="boton-compra">Pet Money Toad</button>
            </div>

            <div className="barra"></div>

            <div className="content-cards">
              <p>Your Rewards</p>
              <h3>0 BNB</h3>
            </div>

            <div className="content-button">

              <div className="contenido-button">
                <button className="button">Re-Pet</button>
              </div>

              <div className="contenido-button">
                <button className="button">Get Blessed</button>
              </div>

            </div>

          </div>

          <section>

            <div className="parte-section">
              <h3>Nutrition Facts</h3>

              <div className="contenedor-section">

                <div className="contenido-section">
                  <h4>Daily Return</h4>
                  <p>8%</p>
                </div>

                <div className="contenido-section">
                  <h4>APR</h4>
                  <p>2,920%</p>
                </div>

                <div className="contenido-section">
                  <h4 className='fee'>Dev Fee</h4>
                  <p className='fee'>3%</p>
                </div>

              </div>

            </div>

          </section>

          <article>

            <div className="contenido-article">
              <h5 className="referral-text">Referral</h5>
              <input type="text" placeholder="Referral Link"></input>
              <p>Earn 12% of the BNB used to bake beans from anyone who uses your referral link</p>
            </div>

          </article>

        </div>

      </div>

    </div>
  )
}

export default Homepage