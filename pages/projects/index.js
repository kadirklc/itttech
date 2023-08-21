import Layout from "../../components/Layout";
import NavTwo from "../../components/NavTwo";
import PageHeader from "../../components/PageHeader";
import News from "../../components/News";
import Footer from "../../components/Footer";
import Link from "next/link";

// <div className="wow fadeInUp" data-wow-duration="1500ms">
//     <div className="service-one__single text-center">
//         <div className="service-one__inner">
//             <i className="service-one__icon dimon-icon-target"></i>
//             <h3><a href="#">SEO and <br /> Backlinks</a></h3>
//             <p>Lorem ipsum is are <br /> many variations of <br /> pass of majority.</p>
//             <a href="#" className="service-one__link"><i className="dimon-icon-right-arrow"></i></a>
//         </div>
//     </div>
// </div>
// <div className="wow fadeInDown" data-wow-duration="1500ms">
//     <div className="service-one__single text-center">
//         <div className="service-one__inner" style={cart}>
//             <i className="service-one__icon dimon-icon-visualization"></i>
//             <h3><a href="#">Content <br /> Marketing</a></h3>
//             <p>Lorem ipsum is are <br /> many variations of <br /> pass of majority.</p>
//             <a href="#" className="service-one__link"><i className="dimon-icon-right-arrow"></i></a>
//         </div>
//     </div>
// </div>

const cart = {
    height: "1000px",
    position: "relative",
    // cursor: "pointer"
}
const inspectButton = {
    position: "absolute",
    width: "250px",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    // cursor: "pointer"
}

const NewsPage = () => (


    <Layout pageTitle="ITT | Projeler">
        <NavTwo />
        <PageHeader title="Projeler" />
        <div className={"container mt-5"}>

            <section className="service-one" id="features">
                <div className="container">
                    <div className="block-title text-center">
                        <h2 className="block-title__title">İhtiyacınıza Uygun Favori<br /> <span>Yazılım</span>  Projelerimiz.
                        </h2>
                    </div>
                    <div className={"d-flex justify-content-center align-content-center"}>
                        <div className="row w-100">
                            <div className={"cartContainer"} >
                                <div className="wow fadeInDown" data-wow-duration="1500ms">
                                    <div className="service-one__single text-center">
                                        <div className="service-one__inner" style={cart}>
                                            <i className="service-one__icon dimon-icon-presentation"></i>
                                            <h3><a href="#">Kobasis</a></h3>
                                            <p >Kolay Bağış Sistemi <br/>
                                                İnsani Yardım Kuruluşları için mobil - online nakdî bağış toplama sistemi..</p>
                                            {/*<a href="#" className="service-one__link"><i className="dimon-icon-right-arrow"></i></a>*/}
                                            <div style={{margin: "20px"}}>

                                                <div className={"service-one__inner"}>
                                                    <ul>
                                                        <li>
                                                            Ayrıntılı raporlama ekranları
                                                        </li>
                                                        <li>
                                                            Mobil erişim
                                                        </li>
                                                        <li>
                                                            Hızlı ve güvenilir sistem
                                                        </li>
                                                        <li>
                                                            DERBİS ile kolay entegrasyon
                                                        </li>
                                                        <li>
                                                            Bağışçı Memnuniyeti
                                                        </li>
                                                        <li>
                                                            Kullanıcı dostu arayüz
                                                        </li>
                                                        <li>
                                                            Tüm altyapı sistemleri ile kolay entegrasyon
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <Link href="/projects/kobasis">
                                                <button className="thm-btn pricing-one__btn" style={inspectButton}>
                                                    <span>Detaylı İncele</span>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="wow fadeInDown" data-wow-duration="1500ms">
                                    <div className="service-one__single text-center">
                                        <div className="service-one__inner" style={cart}>
                                            <i className="service-one__icon dimon-icon-presentation"></i>
                                            <h3><a href="#">Abasis</a></h3>
                                            <p className={"mx-5"} >Ayni Bağış Yönetim Sistemi <br/>
                                                İnsani yardım kuruluşları için ayni bağış yönetim sistemi.</p>
                                            {/*<a href="#" className="service-one__link"><i className="dimon-icon-right-arrow"></i></a>*/}
                                            <div style={{margin: "20px"}}>

                                                <div className={"service-one__inner"}>
                                                    <ul>
                                                        <li>
                                                            Ayrıntılı raporlama ekranları
                                                        </li>
                                                        <li>
                                                            Mobil erişim
                                                        </li>
                                                        <li>
                                                            Hızlı ve güvenilir sistem
                                                        </li>
                                                        <li>
                                                            DERBİS ile kolay entegrasyon
                                                        </li>
                                                        <li>
                                                            Bağışçı Memnuniyeti
                                                        </li>
                                                        <li>
                                                            Kullanıcı dostu arayüz
                                                        </li>
                                                        <li>
                                                            Tüm altyapı sistemleri ile kolay entegrasyon
                                                        </li>
                                                        <li>
                                                            Depo Yönetimi
                                                        </li>
                                                        <li>
                                                            Stok takip sistemi
                                                        </li>
                                                        <li>
                                                            Barkod sistemi ile kolay takip
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <Link href="/projects/kobasis">
                                                <button className="thm-btn pricing-one__btn" style={inspectButton}>
                                                    <span>Detaylı İncele</span>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="wow fadeInDown" data-wow-duration="1500ms">
                                    <div className="service-one__single text-center">
                                        <div className="service-one__inner" style={cart}>
                                            <i className="service-one__icon dimon-icon-presentation"></i>
                                            <h3><a href="#">ITT AİD</a></h3>
                                            <p >Sosyal yardım kuruluşları için <br/>genel amaçlı yönetim <br/>programı.</p>
                                            {/*<a href="#" className="service-one__link"><i className="dimon-icon-right-arrow"></i></a>*/}
                                            <div style={{margin: "20px"}}>

                                                <div className={"service-one__inner"}>
                                                    <ul>
                                                        <li>
                                                            İnternet site entegrasyonu
                                                        </li>
                                                        <li>
                                                            Kurban takip ve bağışçıya videolu geri bildirim
                                                        </li>
                                                        <li>
                                                            Bağış bağlama otomasyonu
                                                        </li>
                                                        <li>
                                                            Kampanya / proje yönetimi
                                                        </li>
                                                        <li>
                                                            Kurum ihtiyaçlarına özel geliştirmeler
                                                        </li>
                                                        <li>
                                                            Yetim, öğrenci, hafız sponsorluk takibi
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <Link href="/projects/kobasis">
                                                <button className="thm-btn pricing-one__btn" style={inspectButton}>
                                                    <span>Detaylı İncele</span>
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Footer />
    </Layout>

)

export default NewsPage;

