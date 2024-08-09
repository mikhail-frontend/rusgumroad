const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Как оплатить GUMROAD?",
    "totalTime": "PT10M",
    "step": [
        {
            "@type": "HowToSection",
            "name": "Выберите цифровой товар на сайте GUMROAD",
            "itemListElement": [
                {
                    "@type": "HowToStep",
                    "position": "1",
                    "image": " https://rusgumroad.web.app/1.svg",
                    "text": "Скопируйте ссылку на цифровой товар, который хотите купить"
                }
            ],
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
                    "image": " https://rusgumroad.web.app/2.svg",
                    "text": "Пришлите ссылку на товар, а дальше будем действовать мы⚡️"
                }
            ],
            "position": "2"
        },
        {
            "@type": "HowToSection",
            "name": "Приобретаем Вам цифровой товар",
            "itemListElement": [
                {
                    "@type": "HowToStep",
                    "position": "1",
                    "image": " https://rusgumroad.web.app/3.svg",
                    "text": "Мы купим товар за Вас, вышлем подтверждение покупки и номер электронного кошелька для оплаты наших услуг.   После перевода средств вы получите доступ к&nbsp;товару."
                }
            ],
            "position": "3"
        }
    ]
}
export default schema
