import React from 'react';

const CallToAction = () => {
        return (
            <section className="cta-one">
                {/*<img src="/assets/images/background/cta-one-bg.png" className="cta-one__bg" alt="Awesome Image" />*/}
                <div className="container">
                    {/*<img src="/assets/images/mocs/cta-moc-1-1.png" className="cta-one__moc" alt="Awesome Image" />*/}
                    <div className="row justify-content-lg-center">
                        <div >
                            <div className="cta-one__content">
                                <i className="cta-one__icon dimon-icon-data1"></i>
                                <div className="block-title text-left">
                                    <h2 className="block-title__title">Müşterilerimiz için <span>Güçlü</span> Araçlar
                                    </h2>
                                </div>
                                <div  style={{fontSize: "18px"}}>
                                    <p>Başarılı bir yazılım firması olarak, müşterilerimizin işlerini büyütmelerine, verimliliklerini artırmalarına ve rekabet avantajı elde etmelerine yardımcı olmak için güçlü araçlar sunuyoruz. Müşterilerimize sunduğumuz bu araçlar, onların ihtiyaçlarına özel çözümler sunma kapasitesini artırırken, iş süreçlerini daha akıllıca yönetmelerine olanak tanır.</p>
                                </div>
                                <ul className="list-unstyled">
                                    <li><i className="fa fa-check"></i>Teknolojik yeniliklerle geliştirilmiş araçlar sunuyoruz.</li>
                                    <li><i className="fa fa-check"></i>Müşteri ihtiyaçlarına özel platformlar ve çözümler sağlıyoruz.
                                    </li>
                                    <li><i className="fa fa-check"></i>Veri analizi ve raporlama için güçlü araçlar sunuyoruz.</li>
                                    <li><i className="fa fa-check"></i>Süreç otomasyonu ile verimliliği artırıyoruz.</li>
                                    <li><i className="fa fa-check"></i>Kullanımı kolaylaştırmak için eğitim ve destek sağlıyoruz.
                                    </li>
                                </ul>
                                {/*<a href="#" className="thm-btn"><span>Get Started</span></a>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default CallToAction;
