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
                                        ABASİS: Stok Yönetiminde Yenilikçi Çözüm
                                    </h3>
                                    <p className="blog-one__text">Verimli stok yönetimi ve bağış süreçleri artık daha kolay ve güvenilir bir şekilde yönetiliyor! ABASİS, özellikle dernekler, kurumlar ve bağış toplama organizasyonları için geliştirilmiş bir web tabanlı uygulamadır. Güçlü özellikleri sayesinde stok takibi, dağıtım, bağış yönetimi ve raporlama süreçlerinizi optimize eder.
                                        <br/><br/>
                                        Ayrıntılı Raporlama Ekranları: Stok hareketlerinden dağıtımlara kadar her adımı ayrıntılı raporlarla takip edebilirsiniz. Gelecekteki stok planlamalarınızı daha verimli şekilde gerçekleştirebilirsiniz.
                                        <br/><br/>
                                        Mobil Erişim: Tablet veya telefonlarınızla her yerden stok işlemlerinizi gerçekleştirebilirsiniz. Hızlı tepki verilmesi gereken durumlar için ideal bir çözümdür.
                                        <br/><br/>
                                        Hızlı ve Güvenilir Sistem: Stok girişleri, çıkışları, sayımları ve dağıtımları hızlı ve güvenilir bir şekilde gerçekleştirebilirsiniz. Otomatik kontroller sayesinde hatalı işlemleri önlemeniz kolaylaşır.
                                        <br/><br/>
                                        DERBİS ile Kolay Entegrasyon: Dernekler Bilgi Sistemi ile entegrasyon sayesinde ayni bağış işlemlerini tek bir girişle tamamlayabilirsiniz. Veri tutarlılığını sağlayarak iş süreçlerinizi hızlandırabilirsiniz.
                                        <br/><br/>
                                        Bağışçı Memnuniyeti: Bağışçılarınıza kağıt makbuzlarıyla uğraşmadan elektronik makbuzlarla bağış yapma imkanı sunar. Hem sizin hem de bağışçılarınızın zamanını tasarruf eder.
                                        <br/><br/>
                                        Kullanıcı Dostu Arayüz: Hızlı ve kolay işlem yapma olanağı sunan arayüz sayesinde stok işlemlerini sıkıntısız bir şekilde gerçekleştirebilirsiniz.
                                        <br/><br/>
                                        Tüm Altyapı Sistemleri ile Kolay Entegrasyon: Mevcut sistemlerinizle sorunsuz uyum sağlayarak veri transferini güvenli bir şekilde gerçekleştirebilirsiniz.
                                        <br/><br/>
                                        Depo Yönetimi: Depolarınızdaki bağışları kolayca kontrol edebilir, eksiklikleri hızlıca tespit edip önlem alabilirsiniz.
                                        <br/><br/>
                                        Stok Takip Sistemi: Ürün girişleri ve çıkışları hakkında detaylı bilgiye erişebilir, depolarınızdaki envanteri kolayca yönetebilirsiniz.
                                        <br/><br/>
                                        Barkod Sistemi ile Kolay Takip: Barkod sistemi sayesinde ayni bağışları hızla tanımlayabilir, takip edebilir ve doğrulayabilirsiniz.
                                        <br/><br/>
                                        ABASİS ile stok yönetiminizdeki karmaşıklığı ortadan kaldırın, süreçleri optimize edin ve daha etkin bir bağış yönetimi sağlayın! Detaylı bilgi ve demo talepleri için bize ulaşın.
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
                                                <h4 className="sidebar__post-title"><Link href="/projects/kobasis">Kolay Bağış Sistemi
                                                    İnsani Yardım Kuruluşları için mobil - online nakdî bağış toplama sistemi.</Link></h4>
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
