import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import PageHeader from "../components/PageHeader";
import NewsDetails from "../components/NewsDetails";
import Footer from "../components/Footer";
import KobasisDetail from "../components/projects/kobasis/KobasisDetail";
import ScreenshotsApp from "../components/projects/kobasis/ScreenshotsApp";
import React from "react";
import Video from "../components/projects/kobasis/Video";
import Swiper from "react-id-swiper";

const NewsDetailsPage = () => (

    <Layout pageTitle="ITT | Kobasis">
        <NavTwo />
        <PageHeader title="HAKKIMIZDA" />

        <section className="testimonials-one">
            <div className="container">
                <div className="block-title text-center">
                    <h2 className="block-title__title">
                        Misyonumuz <span>VE</span> Vizyonumuz

                    </h2>
                </div>
                <div className={"d-flex flex-column gap-5"}>
                    <div className="item">
                        <div className="testimonials-one__single">
                            <div className="testimonials-one__inner">
                                <h3>Vizyonumuz</h3>
                                <span>ITT</span>


                                <p style={{ marginBottom: "0px",fontSize: "17px", paddingLeft: "20px", paddingRight: "20px"}}>
                                    Sivil Toplum ve insani yardım alanlarında faaliyet gösteren kuruluşların yurtiçindeki ve yurtdışındaki koordinatörleri, partnerleri, kamu kurum ve kuruluşları ile iş birliği içerisinde, sağlıklı bir şekilde ihtiyaç duyduğu veri akış sisteminin oluşturulması, bu alandaki faaliyetlerinin yeni gelişen teknoloji ve imkanlarla desteklenmesi için gerekli çalışmayı yürütmek. Yeni teknolojileri araştırmak, geliştirmek ve uygulamak.
                                </p>

                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="item">
                        <div className="testimonials-one__single">
                            <div className="testimonials-one__inner">
                                <h3>Misyonumuz</h3>
                                <span>ITT</span>
                                <p style={{marginTop: "30px", marginBottom: "0px",fontSize: "17px", paddingLeft: "20px", paddingRight: "20px"}}>
                                    Ülkemiz ve Dünyadaki ihtiyaç sahiplerine maddi manevi yardım faaliyetlerinde bulunan, hayırseverlerden almış olduğu bağışları ihtiyaç sahiplerine ulaştıran sivil toplum kuruluşlarının ve çeşitli kurumların teknoloji ve yazılım alanındaki ihtiyaçlarına en etkili çözümü en iyi şekilde organize ederek ulaştırmaktır.                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <Footer />
    </Layout>

)

export default NewsDetailsPage;
