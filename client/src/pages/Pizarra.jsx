import _ from 'lodash';


import logo from '../res/logo.svg';
import pizarraVideo from '../res/back.mp4';
import pizarraBackground from '../res/pizarra.jpg';

//LOGOS
import btc from '../res/ico/btc.svg';
import bch from '../res/ico/bch.svg';
import eth from '../res/ico/eth.svg';
import ltc from '../res/ico/ltc.svg';
import zch from '../res/ico/zch.svg';
import xrp from '../res/ico/xrp.svg';
import mnr from '../res/ico/mnr.svg';
import eos from '../res/ico/eos.svg';
import dsh from '../res/ico/dsh.svg';
import omg from '../res/ico/omg.svg';


import React, {useState, useEffect} from "react";

import '../style/stylepizarra.css';

const Pizarra = () => {

    const [getBigCoinValue, setGetBigCoinValue] = useState({
        bitcoin:{},
        ripple:{},
        litecoin:{},
        ethereum:{},
        bitcoinCash:{}
    });
    const [getLittleCoinValue, setLittleCoinValue] = useState({
        dash:{},
        iota:{},
        eos:{},
        zcash:{},
        xmr:{}
    });

    function bigCoinFunctions(url, coin) { 
    fetch(url)
    .then(response => {
        if (!response.ok) {
        throw new Error('Failed to fetch.');
        }
        return response.json();
    })
    .then(data => {
        let coinValueBid = parseFloat(data.bid);
        let coinValueAsk = parseFloat(data.ask);
        setGetBigCoinValue(prevState => {
            return {...prevState, 
            [coin]: {
                bid: parseFloat(coinValueBid+(coinValueBid*0.04)).toFixed(2),
                ask: parseFloat(coinValueAsk+(coinValueAsk*0.04)).toFixed(2),
            }}
        });
    })
    .catch(err => {
        console.log(err);
    })}

    function littleCoinFunctions(url, coin) { 
        fetch(url)
        .then(response => {
            if (!response.ok) {
            throw new Error('Failed to fetch.');
            }
            return response.json();
        })
        .then(data => {
            let littleCoinValue = parseFloat(data.ticker.price*0.004) + parseFloat(data.ticker.price);
            setLittleCoinValue(prevState => {
                return {...prevState, 
                    [coin]: {
                        bid: parseFloat(littleCoinValue).toFixed(3),
                        ask: parseFloat(littleCoinValue + (littleCoinValue*0.001)).toFixed(3),
                    }
                }
            });
        })
        .catch(err => {
            console.log(err);
        })}

    useEffect(() => {
        bigCoinFunctions('https://www.bitstamp.net/api/v2/ticker/btcusd/', 'bitcoin')
        const intervalBtc = setInterval(() => {
            bigCoinFunctions('https://www.bitstamp.net/api/v2/ticker/btcusd/', 'bitcoin')
        }, 300000);
        return () => clearInterval(intervalBtc);
    }, []);

    useEffect(() => {
        bigCoinFunctions('https://www.bitstamp.net/api/v2/ticker/xrpusd/', 'ripple')
        const intervalBtc = setInterval(() => {
            bigCoinFunctions('https://www.bitstamp.net/api/v2/ticker/xrpusd/', 'ripple')
        }, 300000);
        return () => clearInterval(intervalBtc);
    }, []);

    useEffect(() => {
        bigCoinFunctions('https://www.bitstamp.net/api/v2/ticker/ltcusd/', 'litecoin')
        const intervalBtc = setInterval(() => {
            bigCoinFunctions('https://www.bitstamp.net/api/v2/ticker/ltcusd/', 'litecoin')
        }, 300000);
        return () => clearInterval(intervalBtc);
    }, []);

    useEffect(() => {
        bigCoinFunctions('https://www.bitstamp.net/api/v2/ticker/ethusd/', 'ethereum')
        const intervalBtc = setInterval(() => {
            bigCoinFunctions('https://www.bitstamp.net/api/v2/ticker/ethusd/', 'ethereum')
        }, 300000);
        return () => clearInterval(intervalBtc);
    }, []);

    useEffect(() => {
        bigCoinFunctions('https://www.bitstamp.net/api/v2/ticker/bchusd/', 'bitcoinCash')
        const intervalBtc = setInterval(() => {
            bigCoinFunctions('https://www.bitstamp.net/api/v2/ticker/bchusd/', 'bitcoinCash')
        }, 300000);
        return () => clearInterval(intervalBtc);
    }, []);

    useEffect(() => {
        littleCoinFunctions('https://www.cryptonator.com/api/ticker/dash-usd/', 'dash')
        const intervalBtc = setInterval(() => {
            littleCoinFunctions('https://www.cryptonator.com/api/ticker/dash-usd/', 'dash')
        }, 300000);
        return () => clearInterval(intervalBtc);
    }, []);

    useEffect(() => {
        littleCoinFunctions('https://www.cryptonator.com/api/ticker/omg-usd/', 'iota')
        const intervalBtc = setInterval(() => {
            littleCoinFunctions('https://www.cryptonator.com/api/ticker/omg-usd/', 'iota')
        }, 300000);
        return () => clearInterval(intervalBtc);
    }, []);

    useEffect(() => {
        littleCoinFunctions('https://www.cryptonator.com/api/ticker/eos-usd/', 'eos')
        const intervalBtc = setInterval(() => {
            littleCoinFunctions('https://www.cryptonator.com/api/ticker/eos-usd/', 'eos')
        }, 300000);
        return () => clearInterval(intervalBtc);
    }, []);

    useEffect(() => {
        littleCoinFunctions('https://www.cryptonator.com/api/ticker/zec-usd/', 'zcash')
        const intervalBtc = setInterval(() => {
            littleCoinFunctions('https://www.cryptonator.com/api/ticker/zec-usd/', 'zcash')
        }, 300000);
        return () => clearInterval(intervalBtc);
    }, []);

    useEffect(() => {
        littleCoinFunctions('https://www.cryptonator.com/api/ticker/xmr-usd/', 'xmr')
        const intervalBtc = setInterval(() => {
            littleCoinFunctions('https://www.cryptonator.com/api/ticker/xmr-usd/', 'xmr')
        }, 300000);
        return () => clearInterval(intervalBtc);
    }, []);

    return (
        <div>
            <div id="videocont" className="videoback">
                <video id="video" src={pizarraVideo} type="video/mp4" autoPlay loop muted poster={pizarraBackground}>
                </video>
            </div>

            <div className="backcolor"></div>

            <div className="rotacion">
                <div className="cabezal">
                    <div className="logo"><img src={logo} alt='logocrypto' className="logoH" /></div>
                    <div className="colA">COMPRA</div>
                    <div className="colB">VENTA</div>
                </div>
                {
                    !_.isEmpty(getBigCoinValue.bitcoin) &&
                        <div id="mod1" className="moduloA">
                            <div className="col1"><img src={btc} alt='bitcoin' className="logoH" /></div>
                            <div className="col2">BITCOIN</div>
                            <div className="col3">{getBigCoinValue.bitcoin.bid}</div>
                            <div className="col4">{getBigCoinValue.bitcoin.ask}</div>
                        </div>
                }
                {
                    !_.isEmpty(getBigCoinValue.bitcoinCash) &&    
                    <div id="mod2" className="moduloB">
                        <div className="col1"><img src={bch} alt='bitcoinCash' className="logoH" /></div>
                        <div className="col2">BITCOIN CASH</div>
                        <div className="col3">{getBigCoinValue.bitcoinCash.bid}</div>
                        <div className="col4">{getBigCoinValue.bitcoinCash.ask}</div>
                    </div>
                }
                {
                    !_.isEmpty(getBigCoinValue.ethereum) &&
                    <div id="mod3" className="moduloA">
                        <div className="col1"><img src={eth} alt='ethereum' className="logoH" /></div>
                        <div className="col2">ETHEREUM</div>
                        <div className="col3">{getBigCoinValue.ethereum.bid}</div>
                        <div className="col4">{getBigCoinValue.ethereum.ask}</div>
                    </div>
                }
                
                {
                    !_.isEmpty(getBigCoinValue.litecoin) &&
                    <div id="mod4" className="moduloB">
                        <div className="col1"><img src={ltc} alt='litecoin' className="logoH" /></div>
                        <div className="col2">LITECOIN</div>
                        <div className="col3">{getBigCoinValue.litecoin.bid}</div>
                        <div className="col4">{getBigCoinValue.litecoin.ask}</div>
                    </div>
                }
                
                {
                    !_.isEmpty(getBigCoinValue.ripple) &&
                    <div id="mod5" className="moduloA">
                        <div className="col1"><img src={xrp} alt='ripple' className="logoH" /></div>
                        <div className="col2">RIPPLE</div>
                        <div className="col3">{getBigCoinValue.ripple.bid}</div>
                        <div className="col4">{getBigCoinValue.ripple.ask}</div>
                    </div>
                }
                {
                    !_.isEmpty(getLittleCoinValue.xmr) &&   
                    <div id="mod6" className="moduloB">
                        <div className="col1"><img src={mnr} alt='monero' className="logoH" /></div>
                        <div className="col2">MONERO</div>
                        <div className="col3">{getLittleCoinValue.xmr.bid}</div>
                        <div className="col4">{getLittleCoinValue.xmr.ask}</div>
                    </div>
                }
                {
                    !_.isEmpty(getLittleCoinValue.zcash) &&   
                    <div id="mod7" className="moduloA">
                        <div className="col1"><img src={zch} alt='zcash' className="logoH" /></div>
                        <div className="col2">ZCASH</div>
                        <div className="col3">{getLittleCoinValue.zcash.bid}</div>
                        <div className="col4">{getLittleCoinValue.zcash.ask}</div>
                    </div>
                }
                {
                    !_.isEmpty(getLittleCoinValue.eos) &&   
                    <div id="mod8" className="moduloB">
                        <div className="col1"><img src={eos} alt='eos' className="logoH" /></div>
                        <div className="col2">EOS</div>
                        <div className="col3">{getLittleCoinValue.eos.bid}</div>
                        <div className="col4">{getLittleCoinValue.eos.ask}</div>
                    </div>
                }
                {
                    !_.isEmpty(getLittleCoinValue.dash) &&   
                    <div id="mod9" className="moduloA">
                        <div className="col1"><img src={dsh} alt='dash' className="logoH" /></div>
                        <div className="col2">DASH</div>
                        <div className="col3">{getLittleCoinValue.dash.bid}</div>
                        <div className="col4">{getLittleCoinValue.dash.ask}</div>
                    </div>
                }
                {
                    !_.isEmpty(getLittleCoinValue.iota) &&   
                    <div id="mod10" className="moduloB">
                        <div className="col1"><img src={omg} alt='iota' className="logoH" /></div>
                        <div className="col2">IOTA</div>
                        <div className="col3">{getLittleCoinValue.iota.bid}</div>
                        <div className="col4">{getLittleCoinValue.iota.ask}</div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Pizarra;