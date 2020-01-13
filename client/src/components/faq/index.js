import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

const FaqTab = (props) => {

    const tabs = [
        'bitcoin',
        'invertir',
        'compraventa',
        'trading',
        'transferencias',
        'atesoramiento'
    ]

    useEffect(() => {
        const script = document.createElement('script');

        script.src = '../../assets/js/webflow.js';
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
    }, [])

    const jsUcfirst = (stringName) => {
        return stringName.charAt(0).toUpperCase() + stringName.slice(1);
    }

    return (
        <div className="section-faqs herosection-faqs">
            <div className="container faq-container">
                <h2 className="pricing-h1 faq-h2">Preguntas Frecuentes</h2>
                <div data-easing="ease-in" data-duration-in="300" className="w-tabs">
                    <div className="tabs-menu w-tab-menu">
                        {tabs.map((name, id) => (
                            <Link key={id+1} to={`/faq/${name}`} data-w-tab={`Tab ${id+1}`} className={`tab-link-tab-2 w-inline-block w-tab-link ${((props.location.pathname.indexOf(name) !== -1) ? 'w--current' : '')}`}>
                                <div key={id}>{jsUcfirst(name)}</div>
                            </Link>
                        ))}
                </div>
                <div className="w-tab-content">
                    <div data-w-tab="Tab 1" className={`w-tab-pane ${((props.location.pathname.indexOf('bitcoin') !== -1) ? 'w--tab-active' : '')}`}>
                        <div className="faq-wrap">
                            <div className="faq-question">
                                <div className="faq-plus-wrap">
                                    <div className="faq-plus-l"></div>
                                    <div className="faq-plus"></div>
                                </div>
                                <div className="faq-q-text">¿Qué es Bitcoin? Sistema de pagos (1/3)</div>
                            </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text">El dinero que tenemos depositado en el banco, el que le debemos a la tarjeta de crédito, un porfolio de acciones de Apple, el pago electrónico de la boleta de gas o luz, de un sueldo o el de un ticket aéreo, son solo <em>números en la pantalla</em> de un sistema de pagos operado por entidades financieras y gobernado por bancos centrales y otros entes reguladores.<br/><br/>Este sistema, tal cual está concebido, es caro y poco eficiente para el usuario. ¿Porque que pagar para enviar dinero a China o esperar días para que se acredite en la cuenta? ¿Porque nos cobran por depositar un cheque en una cuenta o por recibir un pago en dólares americanos desde el exterior? ¿Porque pagar costos de mantenimiento y comisiones abusivas y absurdas cuando las mismas operaciones se pueden realizar virtualmente gratis?<br/><br/>En este contexto -para decirlo en pocas palabras- el Bitcoin fue inventado como un Sistema Descentralizado de Pagos (para pagar, enviar y recibir dinero) que no requiere, ni el aval ni el respaldo de una autoridad central.</p>
                        </div>
                    </div>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">¿Qué es Bitcoin? Innovación (2/3)</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text">Sabemos que, en el mundo digital, todo se puede copiar y replicar tantas veces como uno quiera. Por eso, lo más difícil al implementar un nuevo Sistema de Pagos es asegurarse que nadie pueda gastar dos veces los mismos fondos.<br/><br/>Tradicionalmente, esto se lograba teniendo una autoridad central (como puede ser cualquier Entidad Financiera en el mundo real o empresas como PayPal en el mundo digital) que verificaba todas y cada una de las transacciones.<br/><br/>La principal innovación, la que hace al Bitcoin tan especial, es que utiliza un sistema de ‘consenso descentralizado’, esto quiere decir millones de computadoras interconectadas a una red enorme donde la misma transacción se verifica y se valida simultáneamente desde diferentes computadoras, lugares, ciudades e incluso países.<br/><br/>Esto es, básicamente, poder realizar o recibir un pago sin necesidad de intermediarios, sin usar bancos, si necesidad de pagar comisiones ni esperar días para que los fondos se acrediten.</p>
                        </div>
                    </div>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">¿Qué es Bitcoin? El futuro (3/3)</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text">Si definimos al Bitcoin como un nuevo Sistema de Pagos, son sus principales características y propiedades que lo presentan como una alternativa real al Dólar, al Euro y a las principales monedas del mundo utilizadas hoy en día.<br/><br/>El Bitcoin es global e imposible de falsificar, las transacciones en bitcoin son en tiempo real e irreversibles, transparentes, baratas y seguras.<br/><br/>Desde que se inventó en 2008, el Bitcoin creció hasta tal punto de convertirse en una tecnología (llamada Block-Chain), una moneda, un vehículo de inversión y una comunidad de millones de usuarios que la avalan.</p>
                        </div>
                    </div>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">¿Cómo se guarda un Bitcoin? Revolución (1/3)</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text">Bitcoin es revolucionario porque le brinda total autonomía al individuo. No se necesita de nadie, no se debe depender de una institución y no es necesario confiar en un tercero para guardar un Bitcoin de manera segura.<br/><br/>Para poder comprar un Bitcoin, primero hay que pensar bien que es lo que es lo que está guardando y para que se lo guarda. De la misma manera que uno se toma un minuto para elegir su banco o compañía de seguros, hay que hacer lo mismo al momento de empezar a operar con Bitcoins.<br/><br/>Guardar un Bitcoin quiere decir: Definir como y donde se va a atesorar y de que manera voy a transferirlos o recibirlos. Buscar la mejor solución de acuerdo a un determinado perfil operativo o según las necesidades de cada uno.</p>
                        </div>
                    </div>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">¿Cómo se guarda un Bitcoin? Billeteras Virtuales (2/3)</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text">Una de las opciones más seguras para atesorar y operar con sus Bitcoins es a través una Billetera Física (Hardware Wallet). Se trata de un pequeño dispositivo o microcomputadora, muy similar en forma y tamaño al tele-comando de un auto pero con una pequeña pantalla, que permite atesorar, enviar y recibir Bitcoins.<br/><br/>Estas Wallets (Billeteras Virtuales), también conocidas como Almacenamiento en Frio (Cold Storage) se conectan a Internet de manera esporádica solamente para ejecutar transacciones. Por eso son extremadamente seguras, porque al estar off-line casi todo el tiempo, no se pueden hackear.</p>
                        </div>
                    </div>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">¿Cómo se guarda un Bitcoin? Consejo (3/3)</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text"><strong><em className="italic-text-21">Almacene sus Bitcoins usted mismo</em></strong><em className="italic-text-23">, tomando los recaudos necesarios y con el apoyo adecuado, el mejor custodio de sus activos es usted. Pero es importantísimo que sepa que cuando uno mismo atesora (guarda) sus propios Bitcoins, </em><strong><em className="italic-text-22">es usted y nadie más que usted el responsable por la seguridad e integridad de sus monedas</em></strong><em>.</em></p>
                        </div>
                    </div>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text"><em className="italic-text-4">¿De dónde salen los Bitcoins?</em></div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text"><em className="italic-text">Para entender en profundidad como se crea un nuevo Bitcoin, hay que antes adentrarse en el concepto de crypto-minado, pero para explicarlo muy fácilmente: Hay gente (y grandes empresas) que arman computadoras que trabajan las 24 horas del día sin parar y sirven solo para una cosa: Verificar transacciones realizadas con Bitcoins. Estas computadoras se conectan a la red descentralizada, comienzan a verificar las transacciones y así validan los pagos realizadas con Bitcoins.</em><br/><br/><em className="italic-text-2">Por este trabajo, esta gente es recompensada con nuevos Bitcoins por un valor proporcional a la cantidad de poder computacional que estos agregan a la red. En otras palabras, el sistema está fundado de tal modo que, más transacciones ayudas a validar, mas Bitcoins creás y más te llevas a tu billetera.</em><br/><br/><em className="italic-text-3">El Minado de Bitcoins es negocio en sí mismo, un modelo de negocios complejo y una tipología de inversión completamente diferente, que hoy se presenta un gran potencial en términos de crecimiento y retornos.</em></p>
                        </div>
                    </div>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">¿Quién controla Bitcoin?</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text"><em className="italic-text-5">No hay una persona o entidad central a cargo del Bitcoin porque este, de manera natural y consensuada, se auto-regula a sí mismo.</em><br/><br/><em className="italic-text-6">Bitcoin es un sistema de Código abierto, esto quiere decir que es distribuido y desarrollado libremente, donde programadores de todo el mundo pueden proponer cambios en el software, pero al final son los “Mineros” (las millones de computadoras que validan las transacciones) que, con su poder de procesamiento, “votan” si aceptan o no la actualización propuesta.</em><br/><br/><em className="italic-text-7">Si el cambio que se propone empeora el funcionamiento de la red, el mismo se descarta por mayoría (o falta de adeptos), si el cambio al software mejora el funcionamiento de la red, se acepta por consenso, básicamente porque les conviene a todos.</em><br/><br/><em className="italic-text-8">Es por esto, y por otras herramientas de índole técnico, que es casi imposible manipular al Bitcoin y lo que lo hace particularmente disruptivo.</em></p>
                        </div>
                    </div>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">¿Porqué el bitcoin es un bien preciado?</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text"><em className="italic-text-9">La pregunta sería, ¿Qué es lo que le da valor al Bitcoin? ¿Qué es lo que lo hace valioso?. La respuesta es sencilla: Los Bitcoins son escasos y cada vez más útiles.</em><br/><br/><em className="italic-text-10">Miremos Oro como un ejemplo de moneda. Hay una cantidad limitada de Oro en la tierra. Cada vez que se extrae nuevo oro de una mina, las reservas disponibles caen y por ende se vuelve más difícil y más caro encontrar y minar oro nuevo. Lo mismo sucede con el Bitcoin.</em><br/><br/><em className="italic-text-11">Hay solo 21 millones de Bitcoins, y a medida que el tiempo pasa y su aceptación crece, se vuelven cada vez más difícil de minar, y así el precio aumenta.</em></p>
                        </div>
                    </div>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">¿Qué es la tecnología Blockchain? El inicio (1/2)</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text"><em className="italic-text-12">Para entenderlo rápidamente, podemos decir que el Bitcoin fue la primera aplicación desarrollada con tecnología Block-Chain.</em><br/><br/><em className="italic-text-13">A este punto, es innegable que el Block-Chain es una invención por demás ingeniosa, disruptiva al máximo y claramente revolucionaria que, desde su creación en 2008, ha evolucionado a algo mucho más grande que el Bitcoin.</em><br/><br/><em className="italic-text-14">Al Bitcoin lo llaman “el oro digital” por una buena razón. A la fecha, El Bitcoin ya ha pasado los 140 Billones de dólares americanos de capitalización ($140,694,449,570). Esto quiere decir que, si Bitcoin fuera un Banco Norteamericano, ocuparía el 5to lugar en el Ranking de los bancos más grandes de los Estados Unidos.</em><br/><br/><em className="italic-text-15">Pero lo que hace pensar que esta tecnología llegó para quedarse, es que hoy ya se están generando una innumerable cantidad de aplicaciones basadas en Block-Chain que generan valor en nuestra vida diaria, como internet en tu auto por ejemplo, y lo mejor de todo es que uno no tiene que saber como funciona el Block-Chain para usarlo.</em></p>
                        </div>
                    </div>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">¿Qué es la tecnología Blockchain? El concepto (2/2)</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text"><em className="italic-text-15">Para entender el concepto de tecnología Block-Chain, tratando de simplificar la idea al máximo, imagine un libro contable con muchas transacciones (asientos contables) que se replica millones de veces a través de una red de computadoras interconectadas.<br/><br/>Luego imagine que esta red está diseñada para actualizar ese libro -ya replicado millones de veces- casi en tiempo real, con las nuevas transacciones que se van generando minuto a minuto.<br/><br/>Imagine luego que todas esas computadoras interconectadas están continuamente validando este Libro Contable -las 24 horas del día, sin interrupción, al mismo tiempo y en simultaneo- que a su vez se sigue actualizando todo el tiempo haciéndolo inviolable.<br/><br/>Si puedo imaginárselo, entonces usted tiene ya un conocimiento básico sobre Tecnología Block-Chain.</em></p>
                        </div>
                    </div>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">¿Qué son las cryptomonedas?</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text"><em className="italic-text-17">Una cryptomoneda es dinero digital que se genera mediante técnicas de encriptación. Son las mismas técnicas las que verifican las transferencias de fondos de manera descentralizada, sin depender de entidades financieras, bancos centrales o entes reguladores.</em><br/><br/><em className="italic-text-16">El Bitcoin fue la primera cryptomoneda. Es más, hasta fines de 2016 seguía siendo casi la única, no había mucho más para considerar. Si se quería invertir en el éxito de las Cryptomonedas, se tenía que comprar Bitcoin, punto. Había otras Cryptomonedas, pero ninguna para considerar como un instrumento de inversión serio.<br/><br/>Mientras el Bitcoin sigue siendo la cryptomoneda dominante, en 2017 la participación de mercado del Bitcoin cayó abruptamente del 90% al 40%.<br/><br/>Esto se puede adjudicar a muchos factores, pero no podemos obviar que el crecimiento en la popularidad del Ethereum -llamémosla la segunda cryptomoneda mas importante- tuvo que ver para que el merado se abra a nuevas y más Cryptomonedas con alta probabilidad de subsistencia y rendimiento a largo plazo. Estas últimas son conocidas como Altcoins.<br/><br/>Si la intención es invertir en Cryptomonedas, el Bitcoin sigue siendo la -moneda patrón- o el standard de mercado, pero ya no es el único crypto-activo con potencial.</em></p>
                        </div>
                    </div>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">¿Qué es Ethereum?</div>
                        </div>
                        <div className="faq-answer last-faq-answer">
                            <p className="faq-answer-text"><em className="italic-text-18">Aunque la tecnología de Block-Chain normalmente se asocia al Bitcoin, tiene muchas otras aplicaciones que van más allá de las Cryptomonedas. De hecho, el bitcoin es solo una de las cientos de aplicaciones para las que se usa la tecnología de Block-Chain hoy en día.</em><br/><br/><em className="italic-text-19">Como el Bitcoin, el Ethereum es una red pública de tecnología Block-Chain. La distinción más importante es que Bitcoin y Ethereum difieren, sustancialmente, en el propósito para que se utilizan y en la capacidad computacional de cada una.</em><br/><br/><em className="italic-text-20">Más allá de ser una cryptomoneda mundialmente aceptada e intercambiada, el Ethereum (también conocido con Ether) es asiduamente utilizada por los desarrolladores de aplicaciones.<br/><br/>Antes de la creación del Ethereum, las aplicaciones que usaban tecnología Block-Chain eran diseñadas para realizar un set muy limitado de operaciones (como el Bitcoin, que es un aplicación desarrollada con tecnología Block-Chain que sirve UNICAMENTE como un Sistema de Pagos).<br/><br/>Ethereum permite crear aplicaciones basadas en tecnología Block-Chain de manera mucho más rápida y eficiente que antes, creando -potencialmente- miles de aplicaciones en una sola plataforma.<br/>‍<br/>En términos de inversión, el Ethereum se presenta como una alternativa muy atractiva y complementaria al Bitcoin, porque sigue creciendo en popularidad, su valuación tiene a subir a largo plazo, porque tiene el potencial de superar al Bitcoin y porque es un cryptomoneda mundial y comúnmente aceptada.</em></p>
                        </div>
                    </div>
                </div>
                <div data-w-tab="Tab 2" className={`w-tab-pane ${((props.location.pathname.indexOf('invertir') !== -1) ? 'w--tab-active' : '')}`}>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">¿Qué significa invertir? Apostar al futuro (1/3)</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text">Tener o atesorar un Bitcoin significa tener una acción de un proyecto que tiene como objetivo reemplazar las reservas monetarias de los bancos centrales o convertirse en la moneda dominante para el Comercio Internacional.<br/><br/>No está dicho que vayan a lograrlo, pero con una pequeña porción de una torta tan grande, estas “acciones” de las que hablamos podrían valer cientos de miles de dólares en poco tiempo.<br/><br/>Comprar y atesorar Bitcoins es una apuesta al éxito de esta “Revolución Silenciosa del Dinero”. Tener un Bitcoin en tu Wallet (Billetera Virtual) significa ser socio de este nuevo “ecosistema digital”, que si prospera, si su uso se prolifera de manera exponencial como está previsto, terminarás arrepentido por no haber comprado más cuando tuviste la oportunidad.</p>
                        </div>
                    </div>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">¿Qué significa invertir? A la hora de invertir (2/3)</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text">No hay un Precio Oficial del Bitcoin. Su precio se forma a partir de lo que los compradores estén dispuestos a pagar en ese momento.<br/><br/>El Bitcoin es global y no se ve nunca afectado por la situación financiera o la estabilidad política de un país o región. Es más, cada vez que hay ‘caos’ en el mundo real, el Bitcoin se ve beneficiado ya que es apolítico y se sienta fuera del control o la influencia de cualquier gobierno, no importa cuán poderoso sea. Cuando se piensa en ‘como la política y la economía puede afectar al precio del Bitcoin’, hay que hacerlo a escala global, no hay que guiarse por lo que esté pasando en un determinado país.<br/><br/>Tanto Bitcoin como Ethereum son, como vehículo de inversión, las Cryptomonedas que presentan el mejor ratio de rentabilidad/riesgo.</p>
                        </div>
                    </div>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">¿Qué significa invertir? Los que invirtieron (3/3)</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text">Desde su creación, los inversores en Bitcoin y Ethereum han sido ridículamente exitosos. El crecimiento durante el año 2017 fue estelar, alcanzando retornos que fueron desde los 1,500% a los 15,000%. El precio del Bitcoin voló de USD450 en mayo de 2016 hasta superar los USD19,000 por unidad en diciembre de 2017. Esta escalada generó una euforia tal a nivel mundial que posicionaron al Bitcoin y a otras Cryptomonedas como un activo de ensueño por invertir. A inicios de 2018, luego de una fuerte corrección en los niveles de precios, se espera que los niveles actuales atraigan a nuevos inversores para mantener la tendencia alcista previa al fin del último año. A través de su historia, el Bitcoin ha incrementado su valor de modo rápido y constante, seguido por una y firme caída para luego volver a estabilizarse.<br/><br/>Recomendamos sitios como ‘Bitcoin Wisdom’ o ‘Cryptowatch’ para analizar, en un entorno grafico muy amigable, y entender el precio histórico del Bitcoin.</p>
                        </div>
                    </div>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">¿Qué significa ‘holdear’ Bitcoins?</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text">No se trata de invertir o no en Bitcoin, sino de como invertir. Buy &amp; Hold (Comprar y mantener) es una expresión conocida en el mundo bursátil y la forma más común de invertir en Bitcoin.<br/><br/>Significa comprar el Bitcoin esperando que se incremente su valor (de ahí viene el término “Holdear” un Bitcoin). Si este es su objetivo, no es tan importante el momento que se decida a comprar por que se apuesta a que el precio continuará a subir.</p>
                        </div>
                    </div>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">¿Cuándo hay que comprar? Arte del trading (1/3)</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text">El arte del trading es decidir en qué momento un activo financiero está en una burbuja y cuando “tocó fondo” después de una caída abrupta. Por eso la pregunta del título no puede ser respondida con total seguridad. En Bitcoin, particularmente, lo que hoy parece una pregunta difícil, en retrospectiva es muy fácil de responder.<br/><br/>A veces el precio de una cryptomoneda aumenta, y todo el mundo piensa que ha llegado al pico de la burbuja, y en realidad apenas estaba empezando. Por ejemplo, mucha gente no compró Bitcoins cuando estaban a USD1,000 porque en ese momento les parecía excesivamente caros. Pero algunos meses más tarde esos precios terminaron demostrando ser el punto de partida de una tendencia alcista nunca vista en ningún otro vehículo de inversión.</p>
                        </div>
                    </div>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">¿Cuándo hay que comprar? Temple y paciencia (2/3)</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text">Cuando uno invierte en Bitcoin las reacciones requeridas son muchas veces contra-intuitivas, por eso al inversor paciente le ira siempre mejor que al inversor impulsivo. No hay que apresurarse a comprar luego de una fuerte baja por que puede ser que venga otra, y no hay que ser impetuoso a la hora de comprar por un palpito que mañana va a explotar, porque puede suceder exactamente lo contrario. Por eso el inversor paciente, el que se toma el tiempo para mirar, el que se informa, el que analiza, es el que hoy está ganando mucho dinero con sus Bitcoins.<br/><br/>Pero no solo se debe tener en cuenta el momento justo para “entrar”, la clave, la decisión más importante está en cuando “salir”. Siempre recomendamos a nuestros clientes que, ante las oscilaciones de mercado, antes las noticias que circulan en internet deben siempre mantenerse firmes para no tomar decisiones apresuradas.</p>
                        </div>
                    </div>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">¿Cuándo hay que comprar? Consejo(3/3)</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text">Para invertir en Bitcoins: No vacilar, no ser débil ante las fluctuaciones de mercado, dicho en otras palabras: NO VENDER DEMASIADO RAPIDO. Mantener la posición ante un mercado extremadamente volátil cuando uno se encuentra considerablemente expuesto requiere temple de acero. Por eso decimos que el Bitcoin no es una inversión para cualquiera.<br/><br/>En conclusión, encontrar el momento justo para invertir en Bitcoins requiere mucho análisis y depende de las necesidades y expectativas de cada uno. Por eso recomendamos a nuestros clientes que tengan siempre una perspectiva a largo plazo para reducir el riesgo de volatilidad y eventuales perdidas.</p>
                        </div>
                    </div>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">¿El Bitcoin es una burbuja especulativa?</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text">No se puede comparar una crypto-burbuja con las burbujas financieras tradicionales. En Crypto, 10% arriba no es una burbuja, puede ser perfectamente volatilidad diaria. 100% arriba si, puede ser una burbuja, pero usualmente es solo el inicio en la tendencia alcista. 1000% arriba, seguramente, es una burbuja, pero no hay garantía que realmente vaya a explotar.<br/><br/>En realidad, la pregunta debería ser: ¿Se puede confiar en un activo que tuvo un despegue vertical increíble como lo tuvo el Bitcoin?<br/><br/>La respuesta es: SEGURO, hubiera sido mejor invertir un año atrás, o dos o seis. Pero si uno cree en el potencial de esta tecnología, si creemos en la visión del dinero que propone Bitcoin, hoy podría ser el mejor día para empezar a invertir.</p>
                        </div>
                    </div>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">¿Me conviene Invertir en Bitcoin?</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text">La respuesta a, si debe invertir o no, depende de cuanto cree usted en esta nueva tecnología, en la necesidad de una alternativa al sistema actual monopolizado por los bancos. Es usted quien debe preguntarse cuanto cree realmente que bitcoin se convertirá a largo plazo en un depósito de valor confiable o terminará casi en el olvido como una buena idea que no pudo ser.<br/><br/>Pero piénselo de esta manera, si el sueño se vuelve realidad, y Bitcoin se convierte a largo plazo en un depósito de valor confiable, su precio de venta oscilará los USD2,000,000 por unidad (dependiendo de cuantos Bitcoins se pierden y estén en efectivamente en circulación en ese momento).<br/><br/>Si, en cambio, el Bitcoin no llegase a convertirse en un depósito de valor confiable, es muy probable que su precio tienda a cero.<br/><br/>Pero, pensando en un futuro posible y sin irnos a los extremos, si usted piensa que Bitcoin tiene por lo menos un 10% de probabilidad de convertirse en un depósito de valor confiable, si solo el 10% del sueño se cumple, Bitcoin es una excelente inversión con un retorno muy difícil de igualar por otras alternativas de inversión.<br/><br/>Si bien Bitcoin es considerado como un activo de inversión de alto riesgo, no hay hoy en día inversor profesional que no esté invirtiendo -al menos una pequeña porción de su portfolio- en Bitcoin, Ethereum y otras Cryptomonedas.</p>
                        </div>
                    </div>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">¿Cómo hago para Invertir en Bitcoin?</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text">Visítenos en Recoleta, conozca a su crypto-asesor y éste le presentará todas las alternativas, opciones y modalidades disponibles para invertir en Bitcoins, Ethereum y otras Cryptomonedas.<br/><br/>En su primer visita le crearemos un Perfil Operacional que le permitirá transaccionar con todos nuestros productos y herramientas disponibles.<br/><br/>Una vez que se le ha dado de alta como cliente, se le otorgará un PIN Transaccional y una Clave personal, que serán necesarios para realizar cualquier operación de compra, venta o arbitraje.<br/><br/>Con su PIN y Clave personal, usted podrá emitir libremente ORDENES DE VENTA, ORDENES DE COMPRA y ORDENES DE PAGO que serán liquidadas al momento, ya sea en efectivo, mediante transferencia vía CBU a su cuenta bancaria o -si son Cryptomonedas- en Wallet (Billetera Virtual) que usted elija.</p>
                        </div>
                    </div>
                </div>
                <div data-w-tab="Tab 3" className={`w-tab-pane ${((props.location.pathname.indexOf('compraventa') !== -1) ? 'w--tab-active' : '')}`}>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">Comprar y vender Bitcoins</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text">Abrimos el Crypto Store para facilitar y fomentar la compraventa de Bitcoin en un entorno seguro, profesional y confiable.<br/><br/>Por eso ofrecemos un servicio de compra de Bitcoin al que cualquiera puede acceder y obtenerlos en minutos. De la misma manera, usted puede vender sus Bitcoins en nuestro Crypto Store y recibir dólares o pesos al instante y sin límite de volumen, ya sea en efectivo o vía transferencia bancaria.<br/><br/>En su primer visita le crearemos un Perfil Operacional que le permitirá transaccionar con todos nuestros productos y herramientas disponibles. Una vez que se le ha dado de alta como cliente, se le otorgará un PIN Transaccional y una Clave personal, que serán necesarios para que usted pueda emitir libremente ORDENES DE VENTA, ORDENES DE COMPRA y ORDENES DE PAGO.<br/><br/>Las mismas serán liquidadas al momento, ya sea en efectivo, mediante transferencia vía CBU a su cuenta bancaria o -si son Cryptomonedas- en el Wallet (Billetera Virtual) que usted elija.</p>
                        </div>
                    </div>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">Comprar Bitcoins</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text">Tanto Bitcoins como las principales Cryptomonedas del mercado se pueden adquirir en nuestro Crypto Store en minutos y sin pagar ningún tipo de comisión o fee, para ello es necesario que el cliente genere una ‘Orden de Compra’.<br/><br/>Para poder emitir una ‘Orden de Compra’ es necesario presentar su ‘PIN Transaccional’ y validarse con su clave personal. Si es la primera vez que nos visita, primero tendremos que crearle un ‘Perfil Operacional’. Este proceso no debería demorar más de 5 minutos.<br/><br/>Con el PIN validado, su Crypto-Asesor ingresa la Operación con la cantidad, el tipo de cambio, la moneda de origen, el medio de pago y el wallet (billetera virtual) donde se depositarán las Bitcoins originados en esta transacción.<br/><br/>El cliente recibe su ‘Orden de Compra’ para realizar el pago utilizando el medio que más le convenga. Una vez que se registra el pago, se emite una ‘Liquidación de Compra Confirmada’ que el cliente debe presentar a su Crypto-Asesor para la liquidación de la operación y la ejecución de la transferencia a la Billetera Virtual beneficiaria de los Bitcoins.</p>
                        </div>
                    </div>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">Vender Bitcoins</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text">El Crypto Store le ofrece la posibilidad de liquidar cualquier posición en Bitcoins (y las principales Cryptomonedas) en minutos y con todos los recaudos de seguridad necesarios para operaciones de gran volúmen. Los Bitcoins se pagan al momento, ya sea en efectivo o vía transferencia bancaria, en la moneda que el cliente elija y no se cobra ningún tipo de comisión o fee al cliente.<br/><br/>Para poder emitir una ‘Orden de Venta’ es necesario presentar su PIN Transaccional y validarse con su clave personal.<br/><br/>Su Crypto-Asesor ingresa la Operación con la cantidad, el tipo de cambio, la moneda de conversión, el medio de pago y el wallet (billetera virtual) donde recibiremos los Bitcoins originados en esta transacción.<br/><br/>El cliente recibe su ‘Orden de Venta’ para que realice la transferencia de los Bitcoins que desea vender. Una vez confirmada la recepción de las Cryptomonedas, se emite una ‘Orden de Venta Confirmada’ que el Cliente debe presentar para cobrar el dinero producido por esta transacción.</p>
                        </div>
                    </div>
                </div>
                <div data-w-tab="Tab 4" className={`w-tab-pane ${((props.location.pathname.indexOf('trading') !== -1) ? 'w--tab-active' : '')}`}>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">¿Qué es el Trading?</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text">Si usted ya posee Bitcoins, bienvenido entonces al Trading de Cryptomonedas.<br/><br/>El Trading quiere decir comprar y vender (o vender y comprar) con un objetivo especulativo de generar rentabilidades en el tiempo en el corto plazo. Para el Bitcoin, corto plazo quiere decir semanas, días, horas e incluso minutos.<br/><br/>El Trading también se refiere a comprar una cryptomoneda con otra cryptomoneda. Al tener Bitcoins usted puede empezar a comprar otras Cryptomonedas que usualmente no se pueden comprar con dólares americanos ni ninguna otra moneda del mundo real.</p>
                        </div>
                    </div>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">Crypto-Trading</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text">El Trading de Bitcoins difiere del “Holdeo” (comprar y mantener). Cuando uno está haciendo Trading con sus Bitcoins significa que esta activamente tratando de comprar a un precio más bajo, para luego venderlo a un precio más alto en un intervalo relativamente corto de tiempo. Para ganar en el Trading de Bitcoins se requiere conocimiento, practica y tener la capacidad de volver a intentarlo después de un error que pudo haberle costado carísimo.<br/><br/>Una operación de arbitraje entre distintas Cryptomonedas, diversificar su portfolio, volcar su posición actual hacia Cryptomonedas más atractivas (o menos volátiles) o simplemente utilizar sus Bitcoins para transferir Ethereum, son todas operaciones de Trading que puede realizar cómodamente y de modo seguro en cualquiera de nuestras sucursales.</p>
                        </div>
                    </div>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">¿Cómo hacer Trading?</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text">Visítenos en Recoleta, conozca a su crypto-asesor y éste le presentará las mejores alternativas disponibles, las dinámicas que existen en el funcionamiento del mercado y también los riesgos ligados a esta operatoria.<br/><br/>En su primer visita le crearemos un Perfil Operacional que le permitirá transaccionar con todos nuestros productos y herramientas disponibles.<br/><br/>Una vez que se le ha dado de alta como cliente, se le otorgará un PIN Transaccional y una Clave personal, que serán necesarios para realizar cualquier operación de compra, venta o arbitraje.<br/><br/>Con su PIN y Clave personal, usted podrá emitir libremente ORDENES DE VENTA, ORDENES DE COMPRA y ORDENES DE PAGO que serán liquidadas al momento, ya sea en efectivo, mediante transferencia vía CBU a su cuenta bancaria o -si son Cryptomonedas- en Wallet (Billetera Virtual) que usted elija.</p>
                        </div>
                    </div>
                </div>
                <div data-w-tab="Tab 5" className={`w-tab-pane ${((props.location.pathname.indexOf('transferencias') !== -1) ? 'w--tab-active' : '')}`}>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">Transferencias</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text">El Crypto Store trae a la Argentina una manera rápida y sencilla de enviar dinero a todo el mundo. Con sus Bitcoins usted puede enviar dinero a cualquier persona en el mundo que tenga acceso a internet sin importar donde se encuentre y sin la necesidad de poseer una cuenta bancaria.<br/><br/>Disfrute y aproveche los beneficios de la red de pagos Bitcoin para enviar o recibir dinero:<br/><br/>- Sin riesgos <br/>- Instantáneo<br/>- Desde / hacia todo el mundo<br/>- Sin costos bancarios<br/>- Sin perder el tipo de cambio</p>
                        </div>
                    </div>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">¿Qué es una transferencia de Bitcoin?</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text">Las Transferencias en Bitcoins son mensajes, como un email, que se firman digitalmente usando técnicas de criptografía y se envían a la red Bitcoin para su verificación.<br/><br/>Cuando usted realiza una transferencia en Bitcoins, la misma necesita ser aprobada por la red antes de considerarla completada. El Sistema Bitcoin utiliza un standard de 6 niveles de confirmaciones antes de poder considerar a una transferencia como ejecutada.<br/><br/>Una vez que la información de la transacción es confirmada (esto quiere decir confirmar que efectivamente posee el Bitcoin que quiere enviar y que no lo haya “gastado” previamente), la transferencia se incluye en un “bloque” de transacciones que se adjunta de manera correlativa al “bloque” previo (como una cadena, de ahí viene el nombre de Block-Chain para esta tecnología). Por eso las transferencias en Bitcoins no se pueden deshacer ni se pueden manipular, porque significaría rehacer todos los bloques sucesivos que se añadieron después.</p>
                        </div>
                    </div>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">¿Cuánto tarda una transferencia de Bitcoin?</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text">Cuánto tarda una transferencia de Bitcoins depende del momento en que se ejecuta la operación. En este momento se tarda un promedio de 78 minutos en enviar y recibir los fondos de una billetera a otra, sin importar en que lugar del mundo se encuentren.<br/><br/>Hemos visto días de 1,118 minutos como así también días en los que se requerían 32 minutos para verificar una transferencia. Cuantas más transacciones la red tiene que procesar, más se tardan en confirmar las transferencias.</p>
                        </div>
                    </div>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">¿Cómo transferir Bitcoin?</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text">Visítenos en Recoleta, conozca a su crypto-asesor y este le presentará todas las alternativas, opciones y modalidades disponibles para enviar y recibir dinero con Bitcoin, Ethereum y otras Cryptomonedas.<br/><br/>Solo necesita crear su Perfil Operativo (un proceso que no demora más de cinco minutos) para que le entreguemos su PIN Transaccional y Clave personal para empezar enviar y recibir dinero a todo el mundo de inmediato.</p>
                        </div>
                    </div>
                </div>
                <div data-w-tab="Tab 6" className={`w-tab-pane ${((props.location.pathname.indexOf('atesoramiento') !== -1) ? 'w--tab-active' : '')}`}>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">Atesoramiento</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text">Para atesorar Bitcoins primero hay que entender y definir como y donde guardarlos de manera segura, minimizando al máximo los potenciales riesgos.<br/><br/>La clave es entender que, no importa que tipo o marca de Wallet (Billetera Virtual) se utilice, uno no puede guardar -efectivamente- un bitcoin, porque Bitcoin no es un objeto y por ende no se puede guardar como se guarda, por ejemplo, un lingote de oro.<br/><br/>Lo que se guarda en un wallet (Billetera Virtual) es una dirección encriptada que determina en que parte de la cadena de bloques (Block-Chain) de la red se ubica ese Bitcoin que usted posee.</p>
                        </div>
                    </div>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">Llave perdida</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text">Cuando usted es poseedor de un bitcoin, lo que en realidad posee es una “Llave Privada” (Private Key) que desbloquea una dirección especifica en la red, es esa llave lo que se debe proteger utilizando todos los recaudos posibles y la que se va a guardar en el Wallet (Billetera Virtual).<br/><br/>Y aquí viene la regla de oro en el atesoramiento de Bitcoins: NUNCA LE DE A NADIE SU “LLAVE PRIVADA”</p>
                        </div>
                    </div>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">Billetera virtual</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text">La manera más fácil de guardar un Bitcoin (y cualquier otra Cryptomoneda) es en una “Digital Wallet” (Billetera Virtual Digital). Estas pueden estar localizadas en una página de internet o localmente en una computadora o Smartphone. Nosotros NO recomendamos esta opción por los riesgos que acarrea, la mejor opción es un Physical o Hardware Wallet (Billetera Virtual Física) que guarda los Bitcoins fuera de Internet.<br/><br/>La mayoría de las Hardware Wallets (Billeteras Físicas) son un poco más grandes que una tarjeta USB, muy parecido al tele-comando de un auto, que se conecta fácilmente a una computadora utilizando un PIN secreto como primer nivel de seguridad, seguido de un palabra clave secundaria llamada “seed” en el caso que se olvide ese PIN secreto y no se pueda acceder a los Bitcoins.<br/><br/>Otro beneficio adicional del Hardware Wallet (Billetera Física) es su total anonimato con el que se puede guardar y transaccionar Bitcoins. No hay información personal ligada a ese dispositivo, por ende, ninguna información identificatoria del propietario podría filtrarse.<br/><br/>Las Hardware Wallets (Billeteras Físicas) no pueden ser atacadas por Virus u otros Malwares y, si ocasionalmente se pierde, los fondos se pueden recuperar utilizando un set de palabras claves previamente creados.</p>
                        </div>
                    </div>
                    <div className="faq-wrap">
                        <div className="faq-question">
                            <div className="faq-plus-wrap">
                                <div className="faq-plus-l"></div>
                                <div className="faq-plus"></div>
                            </div>
                            <div className="faq-q-text">Trezor</div>
                        </div>
                        <div className="faq-answer">
                            <p className="faq-answer-text">En el Crypto Store, importamos, comercializamos y recomendamos un Hardware Wallet (Billetera Virtual Física) llamada Trezor. Es, como dicen ellos, “un Banco Privado en tus manos”.<br/><br/>Los desarrolladores de Trezor son los creadores de la primera y más segura Billetera Física de Cryptomonedas. Son pioneros en la industria y vienen innovando en el atesoramiento de Bitcoins desde 2013.<br/><br/>El Sistema Trezor es una interface muy fácil de usar para transaccionar desde el dispositivo externo, también llamado Trezor.<br/><br/>Soporta, no solo Bitcoins sino otras 20 Cryptomonedas comúnmente aceptadas. Además tiene un sistema de doble autenticación (2FA) de última generación para prevenir accesos no autorizados.<br/><br/>El Código mediante el cual fue programado Trezor es abierto y ha sido revisado y validado por los mejores expertos alrededor del mundo.<br/><br/>En el Crypto Store, cuando se le entrega un Trezor a un cliente, se lo capacita de manera exhaustiva en el uso y manejo del Trezor, se le entrega documentación como consejos útiles y le brindamos un servicio de soporte técnico telefónico y via email.</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
          </div>
        </div>
    );
};


export default FaqTab;