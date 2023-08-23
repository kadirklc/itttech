import Layout from "../../components/Layout";
import NavTwo from "../../components/NavTwo";
import PageHeader from "../../components/PageHeader";
import NewsDetails from "../../components/NewsDetails";
import Footer from "../../components/Footer";
import KobasisDetail from "../../components/projects/kobasis/KobasisDetail";
import ScreenshotsApp from "../../components/projects/kobasis/ScreenshotsApp";
import React, {useState} from "react";
import Video from "../../components/projects/kobasis/Video";
import {ErrorPopup, SuccessPopup} from "../../core/Popup";
import AbasisDetail from "../../components/projects/abasis/AbasisDetail";
import IttAidDetail from "../../components/projects/itt-aid/IttAidDetail";


const sendmessage = (data) => {
    const message = {
        email: data.email,
        name: data.name,
        msg: data.message
    };
    let text = `ittyazilim.com üzerinden bir adet iletişim formu alındı:%0A%0A - İsim: ${message.name}%0A - Konu: Kobasis%0A - Mail: ${message.email}%0A - Mesaj: ${message.msg}`;
    fetch(`https://api.telegram.org/bot6408614729:AAG-bsVOuvjOwKyZ7iNZSQR6vBVlCsZg9ys/sendMessage?chat_id=-908023957&text=${text}`)
        .then(response => response.json())
        .then(data => SuccessPopup("İşlem Başarılı."))
        .catch(error => ErrorPopup(error))
}
const onSubmit = async() => {
    event.preventDefault()
    const data = {
        name: event.target.name.value,
        email: event.target.email.value,
        message: event.target.message.value,
    }
    sendmessage(data)
}
const NewsDetailsPage = () => (
    <Layout pageTitle="ITT | Itt-aid">
        <NavTwo />
        <PageHeader title="ITT AİD" />
        <IttAidDetail/>
        <ScreenshotsApp/>
        <div className={"mb-5"}>
            <Video />
        </div>
        <div className={"container my-5"}>

            <h2 className="blog-details__content-title">Hemen Başvuru Yapın</h2>
            <form onSubmit={onSubmit} className="reply-form">
                <div className="row">
                    <div className="col-lg-6">
                        <input name="name" required type="text" placeholder="İsminizi giriniz" className="reply-form__field" />
                    </div>
                    <div className="col-lg-6">
                        <input name="email" required type="text" placeholder="Email giriniz" className="reply-form__field" />
                    </div>
                    <div className="col-lg-12">
                        <textarea name="message" required placeholder="Mesajınızı giriniz" className="reply-form__field"></textarea>
                        <button  className="reply-form__btn thm-btn" type="submit">
                            <span>Hemen Başvur</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <Footer />
    </Layout>
)

export default NewsDetailsPage;
