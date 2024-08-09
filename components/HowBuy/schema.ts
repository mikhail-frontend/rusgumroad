const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Как приобрести курс?",
    "totalTime": "PT10M",
    "step": [

        {
            "@type": "HowToSection",
            "name": "Выберите курс на сайте Udemy.com",
            "itemListElement": [
                {
                    "@type": "HowToStep",
                    "position": "1",
                    "image": "https://rusudemy.com/icons/icon-128x128.png",
                    "text": "Скопируйте ссылку на&nbsp;курс, который хотите купить"
                }],
            "position": "1"
        },
        {
            "@type": "HowToSection",
            "name": "Отправьте заявку в telegram",
            "url": "https://t.me/rus_udemy",
            "itemListElement": [
                {
                    "@type": "HowToStep",
                    "position": "1",

                    "text": "Пришлите ссылку на курс и e-mail"
                }],

            "position": "2"
        },

        {
            "@type": "HowToSection",
            "name": "Приобретаем Вам курс",
            "itemListElement": [
                {
                    "@type": "HowToStep",
                    "position": "1",
                    "text": "<strong>Предоплата не&nbsp;требуется</strong> Мы купим курс за Вас, вышлем подтверждение покупки и номер электронного кошелька для оплаты наших услуг.  После перевода средств вы получите доступ к курсу.",
                }],
            "position": "3"
        },

    ]
}
export default schema