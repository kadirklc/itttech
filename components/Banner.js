import React from 'react';

const Banner = () => {
        return (
            <section className="banner-one" id="banner">
                <span className="banner-one__shape-1"></span>
                <span className="banner-one__shape-2"></span>
                <span className="banner-one__shape-3"></span>
                <span className="banner-one__shape-4"></span>
                <div className="container">
                    <div className="banner-one__moc">
                        <img src="/assets/images/mocs/banner-kobasis-dashboard.png" alt="ITT Kobasis" />
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-8">
                            <div className="banner-one__content">
                                <h3 className="banner-one__title">İhtiyacınız Olan <br />
                                    <span>Yazılımı</span> Sunuyoruz</h3>
                                <p className="banner-one__text">ITT, istikrarlı, ölçeklenebilir ve gelişmiş ürünler oluşturmak için
                                    <br /> aradığınız uzmanlığı sunar.<br />
                                </p>
                                <a href="#features" className="banner-one__btn thm-btn "><span>Başlayalım</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default Banner;
