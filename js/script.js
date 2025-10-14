// Language data
const translations = {
    ru: {
        // Site title
        'site-title': 'Цифровая Родология',
        
        // Menu
        'menu-home-text': 'Главная',
        'menu-services-text': 'Тарифы',
        'menu-about-text': 'О методе',
        'menu-contact-text': 'Контакты',
        
        // Hero section
        'hero-title': 'Цифровая Родология',
        'hero-subtitle': 'Трансформация через числа и судьбу',
        'hero-name': 'Вероника Задорожная',
        'hero-description': 'Мастер Цифровой Родологии и трансформации судьбы',
        'cta-book': 'Забронировать место — 1000 грн',
        'cta-details': 'Подробнее',
        
        // Intro section
        'intro-title': '«Цифровая Родология» - первый в Украине курс',
        'intro-description': 'Родовые сценарии считываются через числа и трансформируются через осознанность.',
        'intro-point-1': 'Раскрой коды мамы, папы и своей родовой миссии.',
        'intro-point-2': 'Пойми, какие программы ты несёшь - и как их исцелить.',
        
        // Signs section
        'signs-title': '«Ты живёшь не своей жизнью, если…»',
        'sign-1': 'Испытываешь постоянное чувство вины или долга;',
        'sign-2': 'Отслеживаешь повторение сценариев родителей;',
        'sign-3': 'Испытываешь трудности с деньгами и/или отношениями;',
        'sign-4': 'Ощущаешь, что «что-то мешает быть собой»;',
        'sign-5': 'Слабая связь с мамой и/или отцом.',
        'quote': '«То, что ты называешь судьбой - часто просто незавершённый сценарий рода.»',
        'method-title': 'Цифровая Родология соединяет нумерологию, психологию и родологию в одном методе.',
        'benefits-title': 'Ты получишь:',
        'benefit-1': 'Расшифровку своей родовой Матрицы по дате рождения.',
        'benefit-2': 'Понимание сценариев мамы, папы, детей.',
        'benefit-3': 'Авторскую визуальную карту рода (матрицу 1–9).',
        'benefit-4': 'Практики исцеления родовых узлов.',
        
        // Program section
        'program-title': 'ПРОГРАММА КУРСА',
        'program-subtitle': '5 модулей личной трансформации',
        'module-1-title': 'Введение в Цифровую Родологию',
        'module-1-desc': 'Род как система и родовые коды.',
        'module-2-title': 'Родовая матрица',
        'module-2-desc': 'Расчет и чтение матрицы 1-9',
        'module-3-title': 'Родовые сценарии',
        'module-3-desc': 'Фигура рода (мама - папа - ребенок), диагностика',
        'module-4-title': 'Женская и мужская линии',
        'module-4-desc': 'Баланс мамы и папы. Внутреннее исцеление',
        'module-5-title': 'Родовые коды изобилия',
        'module-5-desc': 'Деньги, предназначение, сила рода',
        'cta-buy': 'Купить курс',
        
        // Results section
        'results-title': 'РЕЗУЛЬТАТЫ И ТРАНСФОРМАЦИИ',
        'results-subtitle': 'После курса ты почувствуешь, что…',
        'result-1': 'Понимаешь свою маму и папу без боли.',
        'result-1-desc': 'Поймёшь, какие программы ты несешь из рода, и как они влияют на твою жизнь.',
        'result-2': 'Отпускаешь чувство долга и вины.',
        'result-2-desc': 'Научишься принимать и благодарить родителей, даже если отношения были сложными.',
        'result-3': 'Возвращаешь доверие, лёгкость и свободу.',
        'result-3-desc': 'Уберёшь финансовые блоки, связанные с родовыми программами.',
        'result-4': 'Деньги начинают приходить легче.',
        'result-4-desc': 'Узнаешь своё предназначение и как его реализовать, опираясь на силу рода.',
        
        // Footer
        'footer-title': 'Цифровая Родология',
        'footer-name': 'Вероника Задорожная',
        'footer-description': 'Мастер Цифровой Родологии',
        'footer-privacy': 'Политика конфиденциальности',
        'footer-terms': 'Договор оферты',
        'footer-contact': 'Контакты',
        'footer-copyright': '© 2025 Цифровая Родология. Все права защищены.',
        
        // Modals
        'modal-privacy-title': 'Политика конфиденциальности',
        'modal-privacy-text-1': 'Мы ценим вашу конфиденциальность и обязуемся защищать ваши личные данные. Эта политика конфиденциальности объясняет, как мы собираем, используем и защищаем информацию о вас.',
        'modal-privacy-text-2': 'Собираемая информация:',
        'modal-privacy-item-1': 'Имя и контактные данные',
        'modal-privacy-item-2': 'Информация для оплаты услуг',
        'modal-privacy-item-3': 'Данные о использовании сайта',
        'modal-privacy-text-3': 'Использование информации:',
        'modal-privacy-item-4': 'Предоставление запрошенных услуг',
        'modal-privacy-item-5': 'Улучшение качества наших услуг',
        'modal-privacy-item-6': 'Обратная связь с клиентами',
        'modal-privacy-text-4': 'Мы не передаем ваши данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных законодательством.',
        
        'modal-terms-title': 'Договор оферты',
        'modal-terms-text-1': 'Настоящий договор является официальным предложением (офертой) на предоставление услуг в области цифровой родологии.',
        'modal-terms-text-2': 'Условия предоставления услуг:',
        'modal-terms-item-1': 'Услуги предоставляются в соответствии с выбранным пакетом',
        'modal-terms-item-2': 'Оплата производится в полном объеме до начала оказания услуг',
        'modal-terms-item-3': 'Доступ к материалам предоставляется после подтверждения оплаты',
        'modal-terms-text-3': 'Возврат средств:',
        'modal-terms-item-4': 'Возврат средств возможен в течение 14 дней с момента оплаты при условии, что услуги не были оказаны',
        'modal-terms-item-5': 'При частичном использовании услуг возврат осуществляется пропорционально',
        'modal-terms-text-4': 'Оплачивая услуги, вы соглашаетесь с условиями настоящего договора.',
        
        'modal-contact-title': 'Контакты',
        'modal-contact-name': 'Вероника Задорожная',
        'modal-contact-position': 'Мастер Цифровой Родологии',
        'modal-contact-email': 'Email: info@digital-rodology.com',
        'modal-contact-phone': 'Телефон: +380 (XX) XXX-XX-XX',
        'modal-contact-hours': 'График работы: Пн-Пт с 10:00 до 18:00',
        // Program section
        'program-title': 'ПРОГРАММА КУРСА',
        'program-subtitle': '5 модулей личной трансформации',
        'module-1-title': 'Введение в Цифровую Родологию',
        'module-1-desc': 'Род как система и родовые коды.',
        'module-2-title': 'Родовая матрица',
        'module-2-desc': 'Расчет и чтение матрицы 1-9',
        'module-3-title': 'Родовые сценарии',
        'module-3-desc': 'Фигура рода (мама - папа - ребенок), диагностика',
        'module-4-title': 'Женская и мужская линии',
        'module-4-desc-1': 'Баланс мамы и папы',
        'module-4-desc-2': 'Внутреннее исцеление',
        'module-5-title': 'Родовые коды изобилия',
        'module-5-desc': 'Деньги, предназначение, сила рода',
        'pro-track-title': 'PRO',
        'pro-track-desc': 'Для специалистов',
        'pro-track-subtitle': '«Практик Цифровой Родологии»',
        'pro-track-item-1': 'Методика консультаций и этика.',
        'pro-track-item-2': 'Диагностика по цифровой родограмме.',
        'pro-track-item-3': 'Практикум: анализ 3-х реальных кейсов.',
        'pro-track-item-4': 'Сертификация и диплом Школы Цифровой Психологии.',
        'pro-track-button': 'Записаться на PRO',
        'buy-course-button': 'Купить курс',

        // Results section
        'results-title': 'РЕЗУЛЬТАТЫ И ТРАНСФОРМАЦИИ',
        'results-subtitle': 'После курса ты почувствуешь, что…',
        'result-1': 'Понимаешь свою маму и папу без боли.',
        'result-2': 'Отпускаешь чувство долга и вины.',
        'result-3': 'Возвращаешь доверие, лёгкость и свободу.',
        'result-4': 'Деньги начинают приходить легче.',
        'result-5': 'Обрел(а) внутренний покой - потому что наконец живёшь своей, а не чужой жизнью.',

        // Target section
        'target-title': 'ДЛЯ КОГО:',
        'target-card-1': 'Для тех, кто устал от повторяющихся сценариев.',
        'target-card-2': 'Для психологов, коучей, нумерологов, родологов.',
        'target-card-3': 'Для тех, кто хочет понять свою миссию в роду.',
        'target-note': 'Нет базовых требований - всё с нуля, шаг за шагом.',

        // Format section
        'format-title': 'ФОРМАТ И УЧАСТИЕ',
        'format-duration': '6 недель',
        'format-duration-desc': 'видеоуроки + живые эфиры',
        'format-feature-1-title': 'Практики',
        'format-feature-1-desc': 'Реальные упражнения для трансформации',
        'format-feature-2-title': 'Закрытый чат',
        'format-feature-2-desc': 'Поддержка и общение с единомышленниками',
        'format-feature-3-title': 'Сертификат',
        'format-feature-3-desc': 'Сертификат участника курса',

        // About method section
        'about-title': 'О методе',
        'about-card-1-title': 'Цифровая Родология',
        'about-card-1-desc': 'Уникальная методика, объединяющая древние знания нумерологии с современными практиками трансформации.',
        'about-card-2-title': 'Индивидуальный подход',
        'about-card-2-desc': 'Каждая консультация уникальна и учитывает все аспекты вашей личности и жизненной ситуации.',
        'about-card-3-title': 'Глубинная работа',
        'about-card-3-desc': 'Работа на уровне подсознания для достижения устойчивых и глубоких изменений.',

        // Pricing section
        'pricing-title': 'ТАРИФЫ',
        'pricing-basic-title': 'Basic',
        'pricing-basic-desc': 'Для личной трансформации',
        'pricing-basic-item-1': '5 модулей курса',
        'pricing-basic-item-2': 'Видеоуроки',
        'pricing-basic-item-3': 'Закрытый чат',
        'pricing-basic-item-4': 'Сертификат участия',
        'pricing-basic-button': 'Выбрать',
        'pricing-pro-title': 'PRO',
        'pricing-pro-desc': 'Для специалистов',
        'pricing-pro-item-1': 'Всё из Базового +',
        'pricing-pro-item-2': 'Живые вебинары',
        'pricing-pro-item-3': 'Методика консультаций',
        'pricing-pro-item-4': '3 реальных кейса',
        'pricing-pro-item-5': 'Диплом Школы',
        'pricing-pro-button': 'Выбрать',
        'pricing-master-title': 'MASTER',
        'pricing-master-desc': 'Индивидуальный формат',
        'pricing-master-item-1': 'Всё из PRO +',
        'pricing-master-item-2': 'Сопровождение куратора',
        'pricing-master-item-3': 'Супервизия + сертификат мастера',
        'pricing-master-item-4': 'Разбор ваших кейсов',
        'pricing-master-button': 'Выбрать',

        // Author section
        'author-title': 'ОБ АВТОРЕ',
        'author-name': 'Вероника Задорожная',
        'author-description-1': 'Цифровой психолог, основательница первой Школы Цифровой Психологии в Украине.',
        'author-description-2': 'Автор систем: ',
        'author-system-1': '«Цифровая Кармология»',
        'author-system-2': '«Цифровая Родология»',

        // Contact section
        'contact-title': 'Остались вопросы?',
        'contact-subtitle': 'Задайте их прямо сейчас, и мы свяжемся с вами',
        'contact-name-label': 'Ваше имя',
        'contact-email-label': 'Email',
        'contact-message-label': 'Ваш вопрос',
        'contact-button': 'Отправить вопрос',
        'contact-telegram-text': 'Или свяжитесь напрямую с менеджером:',
        'contact-telegram-button': 'Написать в Telegram'

    },
    uk: {
        // Site title
        'site-title': 'Цифрова Родологія',
        
        // Menu
        'menu-home-text': 'Головна',
        'menu-services-text': 'Тарифи',
        'menu-about-text': 'Про метод',
        'menu-contact-text': 'Контакти',
        
        // Hero section
        'hero-title': 'Цифрова Родологія',
        'hero-subtitle': 'Трансформація через числа и долю',
        'hero-name': 'Вероніка Задорожна',
        'hero-description': 'Майстер Цифрової Родології та трансформації долі',
        'cta-book': 'Забронювати місце — 1000 грн',
        'cta-details': 'Детальніше',
        
        // Intro section
        'intro-title': '«Цифрова Родологія» - перший в Україні курс',
        'intro-description': 'Родові сценарії зчитуються через числа і трансформуються через усвідомленість.',
        'intro-point-1': 'Розкрий коди мами, тата і своєї родової місії.',
        'intro-point-2': 'Зрозумій, які програми ти несеш - і як їх зцілити.',
        
        // Signs section
        'signs-title': '«Ти живеш не своїм життям, якщо…»',
        'sign-1': 'Відчуваєш постійне почуття провини або обов\'язку;',
        'sign-2': 'Відстежуєш повторення сценаріїв батьків;',
        'sign-3': 'Відчуваєш труднощі з грошима та/або стосунками;',
        'sign-4': 'Відчуваєш, що «щось заважає бути собою»;',
        'sign-5': 'Слабкий зв\'язок з мамою та/або татом.',
        'quote': '«Те, що ти називаєш долею - часто просто незавершений сценарій роду.»',
        'method-title': 'Цифрова Родологія поєднує нумерологію, психологію та родологію в одному методі.',
        'benefits-title': 'Ти отримаєш:',
        'benefit-1': 'Розшифровку своєї родової Матриці за датою народження.',
        'benefit-2': 'Розуміння сценаріїв мами, тата, дітей.',
        'benefit-3': 'Авторську візуальну карту роду (матрицю 1–9).',
        'benefit-4': 'Практики зцілення родових вузлів.',
        
        // Program section
        'program-title': 'ПРОГРАМА КУРСУ',
        'program-subtitle': '5 модулів особистої трансформації',
        'module-1-title': 'Вступ до Цифрової Родології',
        'module-1-desc': 'Рід як система і родові коди.',
        'module-2-title': 'Родова матриця',
        'module-2-desc': 'Розрахунок і читання матриці 1-9',
        'module-3-title': 'Родові сценарії',
        'module-3-desc': 'Фігура роду (мама - тато - дитина), діагностика',
        'module-4-title': 'Жіноча і чоловіча лінії',
        'module-4-desc': 'Баланс мами і тата. Внутрішнє зцілення',
        'module-5-title': 'Родові коди достатку',
        'module-5-desc': 'Гроші, призначення, сила роду',
        'cta-buy': 'Купити курс',
        
        // Results section
        'results-title': 'РЕЗУЛЬТАТИ І ТРАНСФОРМАЦІЇ',
        'results-subtitle': 'Після курсу ти відчуєш, що…',
        'result-1': 'Розумієш свою маму і тата без болю.',
        'result-1-desc': 'Зрозумієш, які програми ти несеш з роду, і як вони впливають на твоє життя.',
        'result-2': 'Відпускаєш почуття обов\'язку і провини.',
        'result-2-desc': 'Навчишся приймати і дякувати батькам, навіть якщо стосунки були складними.',
        'result-3': 'Повертаєш довіру, легкість і свободу.',
        'result-3-desc': 'Забереш фінансові блоки, пов\'язані з родовими програмами.',
        'result-4': 'Гроші починають приходити легше.',
        'result-4-desc': 'Дізнаєшся своє призначення і як його реалізувати, спираючись на силу роду.',
        
        // Footer
        'footer-title': 'Цифрова Родологія',
        'footer-name': 'Вероніка Задорожна',
        'footer-description': 'Майстер Цифрової Родології',
        'footer-privacy': 'Політика конфіденційності',
        'footer-terms': 'Договір оферти',
        'footer-contact': 'Контакти',
        'footer-copyright': '© 2025 Цифрова Родологія. Всі права захищені.',
        
        // Modals
        'modal-privacy-title': 'Політика конфіденційності',
        'modal-privacy-text-1': 'Ми цінуємо вашу конфіденційність і зобов\'язуємося захищати ваші особисті дані. Ця політика конфіденційності пояснює, як ми збираємо, використовуємо і захищаємо інформацію про вас.',
        'modal-privacy-text-2': 'Збирається інформація:',
        'modal-privacy-item-1': 'Ім\'я та контактні дані',
        'modal-privacy-item-2': 'Інформація для оплати послуг',
        'modal-privacy-item-3': 'Дані про використання сайту',
        'modal-privacy-text-3': 'Використання інформації:',
        'modal-privacy-item-4': 'Надання запитуваних послуг',
        'modal-privacy-item-5': 'Покращення якості наших послуг',
        'modal-privacy-item-6': 'Зворотний зв\'язок з клієнтами',
        'modal-privacy-text-4': 'Ми не передаємо ваші дані третім особам без вашої згоди, за винятком випадків, передбачених законодавством.',
        
        'modal-terms-title': 'Договір оферти',
        'modal-terms-text-1': 'Цей договір є офіційною пропозицією (офертою) на надання послуг у сфері цифрової родології.',
        'modal-terms-text-2': 'Умови надання послуг:',
        'modal-terms-item-1': 'Послуги надаються відповідно до обраного пакету',
        'modal-terms-item-2': 'Оплата проводиться в повному обсязі до початку надання послуг',
        'modal-terms-item-3': 'Доступ до матеріалів надається після підтвердження оплати',
        'modal-terms-text-3': 'Повернення коштів:',
        'modal-terms-item-4': 'Повернення коштів можливе протягом 14 днів з моменту оплати за умови, що послуги не були надані',
        'modal-terms-item-5': 'При частковому використанні послуг повернення здійснюється пропорційно',
        'modal-terms-text-4': 'Оплачуючи послуги, ви погоджуєтеся з умовами цього договору.',
        
        'modal-contact-title': 'Контакти',
        'modal-contact-name': 'Вероніка Задорожна',
        'modal-contact-position': 'Майстер Цифрової Родології',
        'modal-contact-email': 'Email: info@digital-rodology.com',
        'modal-contact-phone': 'Телефон: +380 (XX) XXX-XX-XX',
        'modal-contact-hours': 'Графік роботи: Пн-Пт з 10:00 до 18:00',
        // Добавить после существующих переводов для Results section

        // Program section
        'program-title': 'ПРОГРАМА КУРСУ',
        'program-subtitle': '5 модулів особистої трансформації',
        'module-1-title': 'Вступ до Цифрової Родології',
        'module-1-desc': 'Рід як система і родові коди.',
        'module-2-title': 'Родова матриця',
        'module-2-desc': 'Розрахунок і читання матриці 1-9',
        'module-3-title': 'Родові сценарії',
        'module-3-desc': 'Фігура роду (мама - тато - дитина), діагностика',
        'module-4-title': 'Жіноча і чоловіча лінії',
        'module-4-desc-1': 'Баланс мами і тата',
        'module-4-desc-2': 'Внутрішнє зцілення',
        'module-5-title': 'Родові коди достатку',
        'module-5-desc': 'Гроші, призначення, сила роду',
        'pro-track-title': 'PRO',
        'pro-track-desc': 'Для спеціалістів',
        'pro-track-subtitle': '«Практик Цифрової Родології»',
        'pro-track-item-1': 'Методика консультацій і етика.',
        'pro-track-item-2': 'Діагностика по цифровій родограмі.',
        'pro-track-item-3': 'Практикум: аналіз 3-х реальних кейсів.',
        'pro-track-item-4': 'Сертифікація і диплом Школи Цифрової Психології.',
        'pro-track-button': 'Записатися на PRO',
        'buy-course-button': 'Купити курс',

        // Results section
        'results-title': 'РЕЗУЛЬТАТИ І ТРАНСФОРМАЦІЇ',
        'results-subtitle': 'Після курсу ти відчуєш, що…',
        'result-1': 'Розумієш свою маму і тата без болю.',
        'result-2': 'Відпускаєш почуття обов\'язку і провини.',
        'result-3': 'Повертаєш довіру, легкість і свободу.',
        'result-4': 'Гроші починають приходити легше.',
        'result-5': 'Знайшов(ла) внутрішній спокій - тому що нарешті живеш своїм, а не чужим життям.',

        // Target section
        'target-title': 'ДЛЯ КОГО:',
        'target-card-1': 'Для тих, хто втомився від повторюваних сценаріїв.',
        'target-card-2': 'Для психологів, коучів, нумерологів, родологів.',
        'target-card-3': 'Для тих, хто хоче зрозуміти свою місію в роді.',
        'target-note': 'Немає базових вимог - все з нуля, крок за кроком.',

        // Format section
        'format-title': 'ФОРМАТ І УЧАСТЬ',
        'format-duration': '6 тижнів',
        'format-duration-desc': 'відеоуроки + живі ефіри',
        'format-feature-1-title': 'Практики',
        'format-feature-1-desc': 'Реальні вправи для трансформації',
        'format-feature-2-title': 'Закритий чат',
        'format-feature-2-desc': 'Підтримка і спілкування з однодумцями',
        'format-feature-3-title': 'Сертифікат',
        'format-feature-3-desc': 'Сертифікат учасника курсу',

        // About method section
        'about-title': 'Про метод',
        'about-card-1-title': 'Цифрова Родологія',
        'about-card-1-desc': 'Унікальна методика, що поєднує стародавні знання нумерології з сучасними практиками трансформації.',
        'about-card-2-title': 'Індивідуальний підхід',
        'about-card-2-desc': 'Кожна консультація унікальна і враховує всі аспекти вашої особистості та життєвої ситуації.',
        'about-card-3-title': 'Глибинна робота',
        'about-card-3-desc': 'Робота на рівні підсвідомості для досягнення стійких і глибоких змін.',

        // Pricing section
        'pricing-title': 'ТАРИФИ',
        'pricing-basic-title': 'Basic',
        'pricing-basic-desc': 'Для особистої трансформації',
        'pricing-basic-item-1': '5 модулів курсу',
        'pricing-basic-item-2': 'Відеоуроки',
        'pricing-basic-item-3': 'Закритий чат',
        'pricing-basic-item-4': 'Сертифікат участі',
        'pricing-basic-button': 'Вибрати',
        'pricing-pro-title': 'PRO',
        'pricing-pro-desc': 'Для спеціалістів',
        'pricing-pro-item-1': 'Все з Базового +',
        'pricing-pro-item-2': 'Живі вебінари',
        'pricing-pro-item-3': 'Методика консультацій',
        'pricing-pro-item-4': '3 реальних кейси',
        'pricing-pro-item-5': 'Диплом Школи',
        'pricing-pro-button': 'Вибрати',
        'pricing-master-title': 'MASTER',
        'pricing-master-desc': 'Індивідуальний формат',
        'pricing-master-item-1': 'Все з PRO +',
        'pricing-master-item-2': 'Супровід куратора',
        'pricing-master-item-3': 'Супервізія + сертифікат майстра',
        'pricing-master-item-4': 'Розбір ваших кейсів',
        'pricing-master-button': 'Вибрати',

        // Author section
        'author-title': 'ПРО АВТОРА',
        'author-name': 'Вероніка Задорожна',
        'author-description-1': 'Цифровий психолог, засновниця першої Школи Цифрової Психології в Україні.',
        'author-description-2': 'Автор систем: ',
        'author-system-1': '«Цифрова Кармологія»',
        'author-system-2': '«Цифрова Родологія»',

        // Contact section
        'contact-title': 'Залишились питання?',
        'contact-subtitle': 'Задайте їх прямо зараз, і ми зв\'яжемось з вами',
        'contact-name-label': 'Ваше ім\'я',
        'contact-email-label': 'Email',
        'contact-message-label': 'Ваше питання',
        'contact-button': 'Надіслати питання',
        'contact-telegram-text': 'Або зв\'яжіться напряму з менеджером:',
        'contact-telegram-button': 'Написати в Telegram'
    }
};

// Create flying sparks
function createSparks() {
    const container = document.getElementById('sparksContainer');
    const sparkCount = 30;
    
    for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement('div');
        spark.classList.add('spark');
        
        // Random properties
        const size = Math.random() * 3 + 2;
        const left = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 20;
        const drift = (Math.random() - 0.5) * 100;
        
        spark.style.width = `${size}px`;
        spark.style.height = `${size}px`;
        spark.style.left = `${left}%`;
        spark.style.animationDuration = `${duration}s`;
        spark.style.animationDelay = `${delay}s`;
        spark.style.setProperty('--drift', `${drift}px`);
        
        container.appendChild(spark);
    }
}

// Language switching
function switchLanguage(lang) {
    // Update all elements with data-key attribute
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Save language preference
    localStorage.setItem('preferred-language', lang);
}

// Modal functions
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Menu item activation
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.menu-item').forEach(i => {
            i.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Initialize on page load
window.addEventListener('DOMContentLoaded', function() {
    createSparks();
    
    // Set language based on preference or browser language
    const savedLang = localStorage.getItem('preferred-language');
    const browserLang = navigator.language.startsWith('uk') ? 'uk' : 'ru';
    const initialLang = savedLang || browserLang;
    
    switchLanguage(initialLang);
    
    // Add event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', function() {
            switchLanguage(this.dataset.lang);
        });
    });
});