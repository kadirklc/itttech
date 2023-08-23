import React from 'react';

const Faq = () => {
        return (
            <section className="faq-one">
                <img src="/assets/images/background/faq-one-bg.png" alt="Awesome Image" className="faq-one__bg" />
                <div className="container">
                    <div className="block-title text-center">
                        <h2 className="block-title__title">Sizden Gelen <span>Çok Sorulan</span> <br /> Sorular
                        </h2>
                    </div>
                    <div className="accrodion-grp faq-accrodion">
                        <div className="accrodion active">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>Yazılım güvenliği konusundaki yaklaşımınız nedir?</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>Yazılım güvenliği bizim için önceliklidir. Sürekli güvenlik denetimleri yapar, güvenlik açıklarını en aza indirmek için çaba gösteririz.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accrodion active">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>Hangi büyüklükteki projeleri üstlenirsiniz?</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>Küçük ölçekli projelerden büyük ölçekli kurumsal projelere kadar geniş bir yelpazede projeler üstleniyoruz.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accrodion active">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>Proje teslim süreçleriniz nasıl işliyor?</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>Proje teslim sürecimiz, projenin karmaşıklığına bağlı olarak değişebilir. Genellikle aşamalı teslimatlar yaparız ve müşterinin geri bildirimlerine göre ayarlama yapabiliriz.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="accrodion active">
                            <div className="accrodion-inner">
                                <div className="accrodion-title">
                                    <h4>Ekibinizde hangi uzmanlık alanlarına sahip kişiler bulunuyor?</h4>
                                </div>
                                <div className="accrodion-content">
                                    <div className="inner">
                                        <p>Ekibimizde yazılım geliştiriciler, analizciler, test uzmanları ve proje yöneticileri gibi farklı uzmanlık alanlarına sahip kişiler bulunmaktadır.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default Faq;
