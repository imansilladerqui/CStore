import React from 'react';

import Logo from '../../assets/images/logo-Crypto-store-1.svg';

const Login = () => {

    return (
        <div className="section-10 herosection">
            <div className="mycontain containhero">
                <div className="div-block-45"></div>
                <div className="div-block-6">
                    <h1 className="heading-11">Ingresa <br/>a tu cuenta<br/>para poder<br/>comprar bitcoins</h1>
                    <img src={Logo} width="188" alt="" className="image-48"/>
                </div>
            </div>
            <div id="w-node-1721e26f55b7-41e38604" className="logindiv">
                <div className="login w-form">
                    {/* <div className="div-block-57">
                        <Link to="/" className="button-3 w-button"></Link>
                        <h1 className="heading-12">LOGIN</h1>
                    </div>
                    <form id="email-form" name="email-form" data-name="Email Form" className="form-3">
                        <label for="name" className="field-label-copy">Mail</label>
                        <input type="text" className="text-field-6 w-input" maxlength="256" name="name" data-name="Name" id="name"/>
                            <label for="email" className="field-label">Contraseña</label>
                        <input type="email" className="text-field-6 w-input" maxlength="256" name="email" data-name="Email" id="email" required=""/>
                        <input type="submit" value="INICIAR SESIÓN" data-wait="Please wait..." className="submit-button-3 w-button"/>
                        <div className="text-block-10">Olvidé mi contraseña</div>
                    </form> */}
                </div>
                {/* <div className="div-block-50"></div> */}
                <div className="login-redes w-form">
                    <form id="email-form" name="email-form" data-name="Email Form" className="form4">
                        <input
                            type="submit"
                            value="LOGIN CON GOOGLE"
                            data-wait="Please wait..."
                            className="buttonredes w-button"
                            onClick={(e)=>{
                                e.preventDefault()
                                window.location = 'auth/google'
                        }}/>
                        {/* <div className="div-block-51 w-clearfix">
                            <div className="text-block-11">¿No tienes cuenta?</div>
                            <input type="submit" value="Registrate" data-wait="Please wait..." className="submit-button-4 w-button"/>
                        </div> */}
                    </form>
                    <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                        <div>Oops! Something went wrong while submitting the form.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Login;