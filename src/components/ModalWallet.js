

import React, { memo, useState } from 'react';
import Modal from './UI/Modal';


import QRCode from '../img/page/qr.png'
const ModalWallet = ({
    setOpen, open
}) => {
    
    const [qr, setQr] = useState(true);

    return (
        <Modal open={open} setOpen={setOpen} classNameName='wallet' >
            <div className="wallet">
                <h2 className="wallet__title">Connect wallet</h2>
                <div className="wallet__tabs">
                    <button  
                        onClick={() => setQr(true)}
                        className={`wallet__tabs-btn btn ${qr ? 'active' : '' }`} 
                        type="button">QR Code</button>
                    <button 
                        onClick={() => setQr(false)}
                        className={`wallet__tabs-btn btn ${!qr ? 'active' : '' }`} 
                        type="button">Desktop</button>
                </div>
                <div className={`wallet__qr wallet__item ${qr ? 'active' : '' }`}>
                    <p className="wallet__item-info">Scan QR code with a WalletConnect-compatible wallet</p>
                    <img className="wallet__qr-img" src={QRCode} alt="qr"/>
                    <p className="wallet__qr-sign">Copy to  clipboard</p>
                </div>
                <div className={`wallet__form wallet__item ${!qr ? 'active' : '' }`}>
                    <p className="wallet__item-info">your preferred wallet</p>
                    <form>
                        <label className="wallet__label">
                            <p className="wallet__label-info">Your wallet</p>
                            <textarea className="wallet__textarea" name="wallet"></textarea>
                        </label>
                        <div className="wallet__form-btn-wrap">
                            <button className="btn btn--green" type="submit">Get NFT</button>
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default memo(ModalWallet);