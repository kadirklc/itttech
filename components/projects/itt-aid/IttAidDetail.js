import React from 'react';
import Link from "next/link";

const KobasisDetail = () => {
        return (
            <section className="blog-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="blog-one__single">
                                <div className="blog-one__image">
                                    <img src="/assets/images/projects/kobasis/kobasis_dashboard_desktop.png" alt="" />

                                </div>
                                <div className="blog-one__content">
                                    {/*<ul className="list-unstyled blog-one__meta">*/}
                                    {/*    <li><a href="#">By Admin</a></li>*/}
                                    {/*    <li><a href="#">22 Oct, 2019</a></li>*/}
                                    {/*    <li><a href="#">2 Comments</a></li>*/}
                                    {/*</ul>*/}
                                    <h3 className="blog-one__title">
                                        ITT AİD: Bağış ve Yardım Yönetiminde Çığır Açan Çözümler
                                    </h3>
                                    <p className="blog-one__text">ITT AİD, modern bağış toplama ve yardım yönetimi ihtiyaçlarınızı karşılamak üzere geliştirilen öncü bir platformdur. Kurban takip, bağış yönetimi, kampanya organizasyonu ve özel projeleriniz için sunduğu kapsamlı özelliklerle fark yaratır.
                                        <br/><br/>
                                        İnternet Site Entegrasyonu: ITT AİD, internet sitenizi kolayca entegre ederek bağış ve yardım kampanyalarınızı online platformda etkin bir şekilde yönetmenize olanak tanır. Aynı zamanda sitenizin performansını izlemeniz ve güncellemeleri hızlıca gerçekleştirmeniz için kullanıcı dostu araçlar sunar.
                                        <br/><br/>
                                        Kurban Takip ve Bağışçıya Videolu Geri Bildirim: Kurban takibi, özellikle kurban bayramı gibi dönemlerde önemlidir. ITT AİD, her kurban kesimini video formatında kaydederek bağışçılara geri bildirim sağlamanızı kolaylaştırır. Bu, bağışçılarınızın güvenini artırır ve bağışçı bağlılığını yükseltir.
                                        <br/><br/>
                                        🔗 DERBİS Entegrasyonu: Sadece bir giriş ile bağışlarınızı tamamlayın! Dernekler Bilgi Sistemi ile entegre olmamız sayesinde işleriniz hız kazanıyor, karmaşa son buluyor.
                                        <br/><br/>
                                        Bağış Bağlama Otomasyonu: Bağışçılarınızın birden fazla kampanyaya katkı sağlamasını kolaylaştırmak adına geliştirilmiş bir özelliktir. Bir bağışı farklı kampanyalara yönlendirerek daha fazla farkındalık sağlamanıza yardımcı olur.
                                        <br/><br/>
                                        Kampanya / Proje Yönetimi: ITT AİD, kampanyalarınızı ve projelerinizi kolayca oluşturmanızı, düzenlemenizi ve takip etmenizi sağlar. Etkili bir projenin temellerini atmak ve esneklikle revize etmek için ideal bir çözümdür.
                                        <br/><br/>
                                        Kurum İhtiyaçlarına Özel Geliştirmeler: Her kurumun ihtiyaçları farklıdır. ITT AİD, kurumunuzun veya derneğinizin gereksinimlerine özel olarak geliştirilmiş çözümler sunarak en iyi hizmeti almanızı sağlar.
                                        <br/><br/>
                                        Yetim, Öğrenci, Hafız Sponsorluk Takibi: ITT AİD, yetimler, öğrenciler ve hafızlar gibi özel grupların bağışlarını güvenilir bir şekilde yönetmenizi sağlar. Bu sayede bu gruplara yönelik sponsorluk programlarınızı etkin bir şekilde yönetebilirsiniz.
                                        <br/><br/>
                                        ITT AİD ile bağış ve yardım yönetimi süreçlerinizi daha verimli, şeffaf ve etkili hale getirin. Kullanıcı odaklı yaklaşımımızla her adımda yanınızda olacağız. Detaylı bilgi almak ve platformumuzu denemek için bize ulaşın.

                                    </p>

                                </div>
                            </div>
                            <div className="share-block">
                                <div className="left-block">
                                    {/*<p>Tags: <a href="#">Business,</a> <a href="#">Agency,</a> <a*/}
                                    {/*    href="#">Technology</a></p>*/}
                                </div>
                                <div className="social-block">
                                    {/*<a className="fa fa-facebook-square" href="#"></a>*/}
                                    {/*<a className="fa fa-twitter" href="#"></a>*/}
                                    <a className="fa fa-linkedin" href="https://www.linkedin.com/company/itt-teknoloji/"></a>
                                    {/*<a className="fa fa-pinterest-p" href="#"></a>*/}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar">
                                <div className="sidebar__single sidebar__post">
                                    <h3 className="sidebar__title">Diğer Projelerimizide İnceleyin</h3>
                                    <div className="sidebar__post-wrap">
                                        <div className="sidebar__post__single">
                                            <div className="sidebar__post-image">
                                                <div className="inner-block"><img src="/assets/images/blog/lp-1-1.jpg"
                                                                                  alt="Awesome Image" /></div>
                                            </div>
                                            <div className="sidebar__post-content">
                                                <h4 className="sidebar__post-title"><Link href="/projects/abasis">Ayni Bağış Yönetim Sistemi
                                                    İnsani yardım kuruluşları için ayni bağış yönetim sistemi.</Link></h4>
                                            </div>
                                        </div>
                                        <div className="sidebar__post__single">
                                            <div className="sidebar__post-image">
                                                <div className="inner-block"><img src="/assets/images/blog/lp-1-2.jpg"
                                                                                  alt="Awesome Image" /></div>
                                            </div>
                                            <div className="sidebar__post-content">
                                                <h4 className="sidebar__post-title"><Link href="/projects/itt-aid">Sosyal yardım kuruluşları için
                                                    genel amaçlı yönetim
                                                    programı.</Link></h4>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                {/*<div className="sidebar__single sidebar__category">*/}
                                {/*    <h3 className="sidebar__title">Categories</h3>*/}
                                {/*    <ul className="sidebar__category-list">*/}
                                {/*        <li className="sidebar__category-list-item"><a href="#">Business</a></li>*/}
                                {/*        <li className="sidebar__category-list-item"><a href="#">Introductions</a></li>*/}
                                {/*        <li className="sidebar__category-list-item"><a href="#">One Page Template</a>*/}
                                {/*        </li>*/}
                                {/*        <li className="sidebar__category-list-item"><a href="#">Parallax Effects</a>*/}
                                {/*        </li>*/}
                                {/*        <li className="sidebar__category-list-item"><a href="#">New Technologies</a>*/}
                                {/*        </li>*/}
                                {/*        <li className="sidebar__category-list-item"><a href="#">Video Backgrounds</a>*/}
                                {/*        </li>*/}
                                {/*    </ul>*/}
                                {/*</div>*/}
                                {/*<div className="sidebar__single sidebar__tags">*/}
                                {/*    <h3 className="sidebar__title">Tags</h3>*/}
                                {/*    <ul className="sidebar__tags-list">*/}
                                {/*        <li className="sidebar__tags-list-item"><a href="#">Business,</a></li>*/}
                                {/*        <li className="sidebar__tags-list-item"><a href="#">Agency,</a></li>*/}
                                {/*        <li className="sidebar__tags-list-item"><a href="#">Technology,</a></li>*/}
                                {/*        <li className="sidebar__tags-list-item"><a href="#">Parallax,</a></li>*/}
                                {/*        <li className="sidebar__tags-list-item"><a href="#">Innovative,</a></li>*/}
                                {/*        <li className="sidebar__tags-list-item"><a href="#">Professional,</a></li>*/}
                                {/*        <li className="sidebar__tags-list-item"><a href="#">Experience,</a></li>*/}
                                {/*    </ul>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default KobasisDetail;
