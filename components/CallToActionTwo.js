import React from 'react';
import Link from "next/link";

const CallToActionTwo = () => {
        return (
            <section className="cta-two">
                <div className="container d-flex justify-content-center ">
                    <div>
                        <div>
                            <div className="cta-two__content">
                                <i className="cta-two__icon dimon-icon-data"></i>
                                <div className="block-title text-left">
                                    <h2 className="block-title__title">Müşterilerle <span>Etkileşim</span> <br /> Tek
                                        Platformda.</h2>
                                </div>
                                <div className="cta-two__text">
                                    <p>Günümüz iş dünyasında müşteri etkileşimleri, başarılı bir işletme için hayati önem taşımaktadır. Müşterilerin ihtiyaçlarına hızlı ve etkili bir şekilde yanıt vermek, onların memnuniyetini artırmak ve işletmenin büyümesini desteklemek için kritik bir faktördür. Bu bağlamda, "Müşterilerle Etkileşim Tek Platformda" yaklaşımı, işletmelerin müşteri iletişimini merkezi bir platformda bir araya getirerek daha verimli ve tutarlı bir deneyim sunmasını sağlar.

                                    </p>
                                    <p>Sonuç olarak, "Müşterilerle Etkileşim Tek Platformda" yaklaşımı, müşteri memnuniyetini artırmak, işletme verimliliğini artırmak ve daha kişiselleştirilmiş hizmetler sunmak isteyen işletmeler için önemli bir çözüm sunar. Bu yaklaşım, müşteri odaklı bir işletme kültürünün oluşturulmasına katkıda bulunabilir ve rekabet avantajı sağlayabilir.</p>
                                </div>
                                <Link href="/projects" ><a  className="thm-btn"><span>Projelerinizi Görmek İstiyorum.</span></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default CallToActionTwo;
