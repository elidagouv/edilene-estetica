import '../styles/Section5.css'

function Section5() {
    return (
        <section id='section5'>
            <div id='logo-branca'>
                    <img src="/images/logobranca.png" alt="logo" />
                </div>
            <div id='content_section5'>
                <div className='flex'>
                    <div className='flex-location'>
                        <img src="/images/location.png" alt="Localização" />
                        <h3>Localização</h3>
                    </div>
                    <p>R. Silveira, 46 - Nova Caruaru, Caruaru - PE, 55014-658</p>
                </div>
                <div id='division-white'>
                    <img src="/images/division-white.png" alt="" />
                </div>
                <div className='flex'>
                    <div className='flex-telefone'>
                        <img src="/images/telefone.png" alt="Telefone" />
                        <h3>Telefone</h3>
                    </div>
                    <p>(81) 9332-1845</p>
                    <div className='flex-logo'>
                        <a href="https://www.instagram.com/edilenegouveia.estetica?igsh=MTB4MXA4Mnl5ZWpoZw==" target='blank'><img src="/images/instagram.png" alt="Logo instagram" /></a>
                        <a href="https://m.facebook.com/edilene.gouveia.estetica/" target='blank'><img src="/images/facebook.png" alt="Logo facebook" className='logo-face' /> </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section5