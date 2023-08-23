import React from 'react';
import {ErrorPopup, SuccessPopup} from "../core/Popup";

const onSubmit = async() => {
    event.preventDefault()
    const message = {
        email: event.target.email.value,
    };
    let text = `ittyazilim.com'a bir kişi gelişmelere mail adresi ile abone oldu:%0A%0A -  Mail: ${message.email}`;

    fetch(`https://api.telegram.org/bot6408614729:AAG-bsVOuvjOwKyZ7iNZSQR6vBVlCsZg9ys/sendMessage?chat_id=-908023957&text=${text}`)
        .then(response => response.json())
        .then(data => SuccessPopup("İşlem Başarılı."))
        .catch(error => ErrorPopup(error))

}
const Subscribe = () => {
        return (
            <section className="mailchimp-one">
                <div className="container">
                    <div className="block-title text-center">
                        <h2 className="block-title__title">Gelişmelerden Haberdar <span>Olmak İçin</span> <br /> Abone Olun.</h2>
                    </div>
                    <form onSubmit={onSubmit} action="#" className="mailchimp-one__mc-form mc-form"
                          data-url="#">
                        <input type="email" name="email" id="mc-email" className="formInput" placeholder="Email address" />

                        <button type="submit"><i className="dimon-icon-right-arrow"></i></button>
                    </form>
                    <div className="mc-form__response"></div>
                </div>
            </section>
        )
}
export default Subscribe;
