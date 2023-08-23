import Layout from "../../components/Layout";
import NavTwo from "../../components/NavTwo";
import PageHeader from "../../components/PageHeader";
import NewsDetails from "../../components/NewsDetails";
import Footer from "../../components/Footer";
import KobasisDetail from "../../components/projects/kobasis/KobasisDetail";
import ScreenshotsApp from "../../components/projects/kobasis/ScreenshotsApp";
import React, {useState} from "react";
import Video from "../../components/projects/kobasis/Video";


const sendMassage = (data) => {
        const massage = {
                email: data.email,
                name: data.name,
                msg: data.massage
        };
        const fullMassage = `<b>ittyazilim.com üzerinden bir adet iletişim formu alındı.<b>
         İsim: ${massage.name}, Mail: ${massage.email}, Mesaj: ${massage.msg}`;
        const token = "6408614729:AAG-bsVOuvjOwKyZ7iNZSQR6vBVlCsZg9ys";
        const chat_id = -908023957;
        let text = `ittyazilim.com üzerinden bir adet iletişim formu alındı(kobasis):%0A%0A - İsim: ${massage.name}%0A - Mail: ${massage.mail}%0A - Mesaj: ${massage.msg}`;

        fetch(`https://api.telegram.org/bot6408614729:AAG-bsVOuvjOwKyZ7iNZSQR6vBVlCsZg9ys/sendMessage?chat_id=-908023957&text=${text}`)
            .then(response => response.json())
            .then(data => console.log('data',data));
}
// sendMassage()
const onSubmit = async() => {
        event.preventDefault()

        // Get data from the form.
        const data = {
                name: event.target.name.value,
                email: event.target.email.value,
                massage: event.target.massage.value,
        }
        console.log(data)
        sendMassage(data)

        // Send the data to the server in JSON format.
        // const JSONdata = JSON.stringify(data)

        // API endpoint where we send form data.
        // const endpoint = '/api/form'

        // Form the request for sending data to the server.
        // const options = {
        //         // The method is POST because we are sending data.
        //         method: 'POST',
        //         // Tell the server we're sending JSON.
        //         headers: {
        //                 'Content-Type': 'application/json',
        //         },
        //         // Body of the request is the JSON data we created above.
        //         body: data,
        // }

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        // const result = await response.json()
        // alert(`Is this your full name: ${result.data}`)}
}

const NewsDetailsPage = () => (


    <Layout pageTitle="ITT | Kobasis">
        <NavTwo />
        <PageHeader title="KOBASİS" />
        <KobasisDetail/>
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
                                            <textarea name="massage" required placeholder="Mesajınızı giriniz" className="reply-form__field"></textarea>
                                            <button  className="reply-form__btn thm-btn" type="submit">
                                                    <span>Hemen Başvur</span></button>
                                    </div>
                            </div>
                    </form>
            </div>

        <Footer />
    </Layout>

)

export default NewsDetailsPage;
