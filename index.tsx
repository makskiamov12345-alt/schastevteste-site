<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>СчастьеВТесте — Семейная пиццерия в Буграх на Шекспира д.7</title>
    
<meta name="description" content="Самая вкусная пицца, супы, салаты и выгодные сеты в Буграх! Доставка на ул. Шекспира, дом 7 и по району.">
<meta property="og:title" content="СчастьеВТесте — Семейная пиццерия">
<meta property="og:description" content="Горячая пицца, домашние супы и закуски. Работаем с 11:30  до 22. Заказывайте онлайн!">
<meta property="og:type" content="website">

<meta property="og:image" content="https://makskiamov12345-alt.github.io/schastevteste-site/images/preview.jpg">
<meta property="og:image:width" content="1024">
<meta property="og:image:height" content="1024">
    
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍕</text></svg>">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Pacifico&display=swap" rel="stylesheet">
    
    <style>
        /* --- VARIABLES --- */
        :root {
            --primary: #FF5252;
            --primary-hover: #FF7675;     
            --accent: #FFD166;
            --bg-color: #FFFDF5;
            --card-bg: #FFFFFF;
            --text-main: #4A4A4A;
            --text-light: #8D8D8D;
            --font-main: 'Nunito', sans-serif;
            --font-hand: 'Pacifico', cursive;
            
            --shadow-cozy: 0 8px 20px rgba(255, 82, 82, 0.08);
            --shadow-float: 0 15px 30px rgba(255, 165, 2, 0.15);
            --radius: 24px;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
            font-family: var(--font-main);
            color: var(--text-main);
            line-height: 1.6;
            overflow-x: hidden;
            background-color: #FFFDF5;
            background-image: 
                radial-gradient(at 0% 0%, hsla(253,16%,7%,0) 0, hsla(253,16%,7%,0) 50%), 
                radial-gradient(at 50% 0%, hsla(225,39%,30%,0) 0, hsla(225,39%,30%,0) 50%), 
                radial-gradient(at 100% 0%, hsla(339,49%,30%,0) 0, hsla(339,49%,30%,0) 50%), 
                radial-gradient(at 80% 50%, hsla(39,96%,75%,0.3) 0px, transparent 50%), 
                radial-gradient(at 0% 50%, hsla(36,100%,74%,0.3) 0px, transparent 50%), 
                radial-gradient(at 80% 100%, hsla(347,88%,68%,0.1) 0px, transparent 50%), 
                radial-gradient(at 0% 100%, hsla(40,100%,74%,0.3) 0px, transparent 50%);
            background-attachment: fixed;
        }

        a { text-decoration: none; color: inherit; transition: 0.3s; }
        ul { list-style: none; }
        img { max-width: 100%; display: block; object-fit: cover; }
        button { font-family: var(--font-main); cursor: pointer; border: none; outline: none; }

        /* --- ANIMATIONS --- */
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }
        @keyframes slideDown {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        /* --- HEADER --- */
        header {
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(8px);
            padding: 15px 5%;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 4px 20px rgba(219, 186, 142, 0.2);
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 3px solid var(--accent);
        }

        .logo-container {
            display: flex;
            align-items: center;
            gap: 15px;
            text-decoration: none;
        }

        .logo-img { height: 60px; width: auto; }
        .logo-text { font-family: var(--font-hand); font-size: 1.5rem; color: var(--text-main); line-height: 1; }
        /* Стили для фразы в центре */
.header-tagline {
    font-family: var(--font-hand); /* Используем красивый рукописный шрифт */
    font-size: 1.4rem;
    color: var(--text-main);
    opacity: 0.8;
    flex: 1;
    text-align: center;
    padding: 0 20px;
}

/* Скрываем фразу на планшетах и мобильных (меньше 992px, чтобы не теснила кнопки) */
@media (max-width: 992px) {
    .header-tagline {
        display: none;
    }
}

        .btn-chat-small {
            background: var(--accent); color: var(--text-main); padding: 8px 20px;
            border-radius: 50px; font-weight: 800; font-size: 0.9rem; border: 2px solid white;
            box-shadow: 0 4px 10px rgba(255, 209, 102, 0.4); transition: all 0.3s;
        }
        .btn-chat-small:hover { transform: scale(1.05); background: #FFDD85; }

        .header-right { display: flex; align-items: center; gap: 15px; }
        .phone-link { font-weight: 700; color: var(--text-main); font-size: 0.95rem; display: none; }
        @media(min-width: 768px) { .phone-link { display: block; } }

        /* --- STICKY NAV --- */
        .sticky-nav {
            position: sticky; top: 92px; z-index: 900;
            background: rgba(255, 253, 245, 0.95); backdrop-filter: blur(5px);
            padding: 10px 0; overflow-x: auto; white-space: nowrap;
            display: flex; gap: 10px; justify-content: center;
            border-bottom: 1px solid rgba(0,0,0,0.05);
            -ms-overflow-style: none; scrollbar-width: none;
        }
        .sticky-nav::-webkit-scrollbar { display: none; }
        
        .nav-btn {
            background: white; border: 1px solid #eee; padding: 8px 16px; border-radius: 20px;
            font-weight: 700; font-size: 0.9rem; color: var(--text-main); transition: 0.2s;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        .nav-btn:hover { background: var(--accent); border-color: var(--accent); transform: translateY(-2px); }

        /* --- HERO --- */
        .hero {
            text-align: center; padding: 120px 20px 80px;
            background: linear-gradient(rgba(255, 126, 95, 0.6), rgba(254, 180, 123, 0.6)), url('images/zastavka.jpg');
            background-size: cover; background-position: center; background-attachment: fixed;
            color: white; border-radius: 0 0 50px 50px; margin-bottom: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        .hero h1 { 
            font-family: var(--font-hand); 
            font-size: 3rem; 
            margin-bottom: 15px; 
            text-shadow: 2px 4px 0px rgba(0,0,0,0.2); 
            line-height: 1.2;
            animation: float 6s ease-in-out infinite; 
            
            /* --- ИЗМЕНЕНИЯ ЗДЕСЬ (0.1px) --- */
            -webkit-text-stroke: 0.1px black;
            text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        }
        
        .subtitle { background: white; color: #FF5252; padding: 12px 30px; border-radius: 30px; font-size: 1.1rem; font-weight: 700; display: inline-block; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15); margin-bottom: 25px; }
        
        .btn-main {
            display: inline-block; background: var(--primary); color: white; padding: 15px 40px;
            border-radius: 50px; font-size: 1.1rem; font-weight: 800; border: 4px solid rgba(255,255,255,0.3);
            box-shadow: 0 10px 20px rgba(255, 82, 82, 0.4); transition: all 0.3s;
        }
        .btn-main:hover { transform: translateY(-5px) scale(1.05); background: var(--primary-hover); }

        /* --- MENU --- */
        .section-title {
            text-align: center; color: var(--text-main); font-family: var(--font-hand);
            font-weight: 400; font-size: 2.8rem; margin: 40px 0 20px; text-shadow: 2px 2px 0px #fff;
        }
        
        .menu-category-title {
            grid-column: 1 / -1; font-family: var(--font-main); font-weight: 800; color: var(--primary);
            font-size: 1.8rem; margin: 40px 0 20px; text-align: center;
            display: flex; align-items: center; justify-content: center; gap: 15px; scroll-margin-top: 150px;
        }
        .menu-category-title::before, .menu-category-title::after {
            content: ''; display: block; width: 50px; height: 4px; background: var(--accent); border-radius: 10px;
        }

        .menu-container {
            max-width: 1200px; margin: 0 auto; padding: 0 20px 60px;
            display: grid; 
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); 
            gap: 35px; 
            align-items: start;
        }

        /* --- CARD STYLE --- */
        .pizza-item {
            background: var(--card-bg); border-radius: var(--radius);
            box-shadow: var(--shadow-cozy); overflow: hidden; transition: all 0.4s ease;
            border: 2px solid transparent;
            height: fit-content;
        }
        .pizza-item:hover { transform: translateY(-8px); box-shadow: var(--shadow-float); border-color: var(--accent); }

        details > summary { list-style: none; cursor: pointer; outline: none; }
        details > summary::-webkit-details-marker { display: none; }

        .card-img {
            width: 100%;
            aspect-ratio: 2 / 3;
            object-fit: cover;
            border-radius: 0 0 20px 20px;
            margin-bottom: -20px;
            position: relative;
            z-index: 1;
            transition: transform 0.5s ease;
        }

        @media(min-width: 992px) { .pizza-item:hover .card-img { transform: scale(1.05); } }

        .card-body-preview {
            padding: 30px 20px 10px; position: relative; z-index: 2;
            background: var(--card-bg); border-radius: 20px 20px 0 0;
        }

        .card-title {
            font-size: 1.2rem; font-weight: 800; margin-bottom: 8px; color: var(--text-main);
            display: flex; justify-content: space-between; align-items: flex-start; line-height: 1.2;
        }

        .price-tag {
            font-size: 0.9rem; color: white; background: var(--text-light);
            padding: 4px 10px; border-radius: 20px; white-space: nowrap; margin-left: 10px;
        }

        .expand-hint {
            font-size: 0.9rem; color: var(--primary); font-weight: 700;
            margin-top: 10px; display: inline-block; border-bottom: 2px dotted var(--primary);
        }

        .details-content { padding: 0 20px 25px; animation: slideDown 0.4s ease; }
        .ingredients { font-size: 0.9rem; margin-bottom: 15px; line-height: 1.4; color: #666; font-style: italic; }

        /* Controls inside Details */
        .price-row {
            display: flex; justify-content: space-between; align-items: center;
            background: #FFF9E5; margin: 0 -20px -25px; padding: 15px 20px;
            border-top: 2px dashed #FFE082; gap: 10px;
        }

        .card-weight { font-size: 1.1rem; color: var(--primary); font-weight: 700; }

        .qty-control {
            display: flex; align-items: center; background: white; border-radius: 50px;
            padding: 2px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); margin-right: 5px;
        }
        .qty-btn {
            width: 28px; height: 28px; border-radius: 50%; background: #FFF4D9; color: var(--text-main);
            font-weight: 800; display: flex; align-items: center; justify-content: center; transition: 0.2s;
        }
        .qty-btn:hover { background: var(--accent); color: white; }
        .qty-val { width: 25px; text-align: center; font-weight: 700; font-size: 1rem; }

        .btn-order-item {
            background: var(--text-main); color: white; padding: 10px 20px; border-radius: 50px;
            font-weight: 700; font-size: 0.95rem; transition: 0.3s;
        }
        .btn-order-item:hover { background: var(--primary); transform: scale(1.05); }
        .btn-order-item:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
        
        .btn-order-item.is-remove { background: #e0e0e0; color: #666; }
        .btn-order-item.is-remove:hover { background: #d4d4d4; color: #333; }

        /* Checkbox Style */
        .extra-options-block {
            background: #fdfdfd; border: 1px solid #f0f0f0; border-radius: 15px; padding: 10px; margin-bottom: 15px;
        }
        .extra-options-title { font-size: 0.85rem; font-weight: 700; color: #888; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px; }
        
        .extra-option-label {
            display: flex; align-items: center; gap: 8px; font-size: 0.9rem; 
            margin-bottom: 8px; padding: 8px; border: 1px solid #eee; border-radius: 10px; cursor: pointer; background: white;
        }
        .extra-option-label:last-child { margin-bottom: 0; }
        .extra-option-label:hover { background: #FFF9E5; border-color: var(--accent); }
        .extra-option-label input { width: 18px; height: 18px; accent-color: var(--primary); }

        /* --- WIDGET STYLES --- */
        .chat-widget { position: fixed; bottom: 30px; right: 30px; z-index: 2000; display: flex; flex-direction: column; align-items: flex-end; }
        .chat-btn {
            width: 65px; height: 65px; background: var(--primary); color: white;
            border-radius: 50%; font-size: 30px; display: flex; align-items: center; justify-content: center;
            box-shadow: 0 10px 25px rgba(255,82,82,0.4); border: 4px solid white; transition: 0.3s;
        }
        .chat-btn:hover { transform: scale(1.1) rotate(10deg); }

        .chat-window {
            width: 350px; height: 500px; background: white; border-radius: 25px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.2); margin-bottom: 20px; display: none;
            flex-direction: column; overflow: hidden; border: 4px solid var(--accent);
        }
        .chat-window.active { display: flex; }

        /* VIEW: CHAT */
        #viewChat { display: flex; flex-direction: column; height: 100%; }
        .chat-header { background: var(--accent); padding: 15px; display: flex; align-items: center; gap: 10px; }
        .chat-messages { flex: 1; padding: 15px; overflow-y: auto; background: #fafafa; }
        .message { background: white; padding: 10px 15px; border-radius: 15px; margin-bottom: 10px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); max-width: 85%; font-size: 0.9rem; }
        .msg-bot { border-bottom-left-radius: 2px; border: 1px solid #eee; }
        .msg-user { background: var(--primary); color: white; align-self: flex-end; border-bottom-right-radius: 2px; }
        .chat-input-area { padding: 10px; border-top: 1px solid #eee; display: flex; gap: 5px; background: white;}
        .chat-input-area button {
    width: 50px;           /* Ширина кнопки */
    height: 50px;          /* Высота кнопки */
    border-radius: 50%;    /* Делает кнопку круглой */
    background: var(--primary); /* Красный цвет (как у бренда) */
    color: white;          /* Белая стрелочка */
    font-size: 1.5rem;     /* Размер самой стрелочки */
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
    box-shadow: 0 4px 10px rgba(255, 82, 82, 0.3); /* Тень для красоты */
}

.chat-input-area button:hover {
    background: var(--primary-hover);
    transform: scale(1.1); /* Легкое увеличение при наведении */
}
        #chatInput { flex: 1; padding: 10px; border-radius: 20px; border: 1px solid #ddd; }

        /* VIEW: CART */
        #viewCart { display: none; flex-direction: column; height: 100%; }
        .cart-items-list { flex: 1; overflow-y: auto; padding: 15px; }
        .cart-item-row { display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #eee; padding-bottom: 10px; margin-bottom: 10px; }
        .cart-controls { display: flex; align-items: center; gap: 8px; }
        .btn-mini { width: 24px; height: 24px; background: #eee; border-radius: 50%; font-weight: bold; display: flex; align-items: center; justify-content: center; }
        .cart-footer { padding: 15px; background: #fdfdfd; border-top: 1px solid #eee; }
        .btn-checkout { width: 100%; background: var(--primary); color: white; padding: 12px; border-radius: 15px; font-weight: 700; }
        .btn-checkout:disabled { background: #ccc; cursor: not-allowed; }
        .btn-clear { display: block; width: 100%; text-align: center; margin-top: 10px; color: #999; font-size: 0.85rem; text-decoration: underline; background: none; border: none; }

        /* --- MOBILE FIXES --- */
        @media(max-width:480px) {
            header {
                padding: 10px 15px; 
            }
            .logo-text {
                font-size: 1.2rem;
            }
            .logo-img {
                height: 40px; 
            }
            .btn-chat-small {
                padding: 6px 12px;
                font-size: 0.8rem;
            }
            .chat-window {
                width: 90vw; height: 70vh; right: 5vw;
            }
            .hero h1 {
                font-size: 1.8rem; 
                line-height: 1.3;
            }
        }

/* --- FOOTER --- */
        footer {
            background: rgba(255, 255, 255, 0.95); padding: 30px 5%; text-align: center;
            border-top: 3px solid var(--accent); margin-top: 60px; color: var(--text-main);
        }
        footer p { margin: 8px 0; font-size: 0.95rem; }

        /* Добавляем стили для вашей ссылки */
        .footer-link {
            color: inherit; /* Цвет как у текста вокруг */
            text-decoration: none; /* Убираем стандартное подчеркивание */
            border-bottom: 1px dashed rgba(74, 74, 74, 0.3); /* Делаем аккуратный пунктир снизу */
            transition: 0.3s;
        }

        .footer-link:hover {
            color: var(--primary); /* При наведении ссылка станет красной */
            border-bottom-color: var(--primary); /* Пунктир тоже покраснеет */
            opacity: 1;
        }
    </style>
</head>
<body>

<header>
    <a href="#" class="logo-container">
        <img src="logo.png" alt="СчастьеВТесте" class="logo-img" onerror="this.style.display='none';this.nextElementSibling.style.display='inline'">
        <span style="display:none; font-size: 2rem;">🍕</span>
        <div class="logo-text">Счастье<br><span style="color:var(--primary); font-size:1.3rem;">ВТесте</span></div>
    </a>

    <div class="header-tagline">Семейная пиццерия в Буграх</div>

    <div class="header-right">
        <a href="tel:+79819794269" class="phone-link">📞 +7 (981) 979-42-69</a>
        <button class="btn-chat-small" onclick="openCartDirectly()">🛒 Корзина <span id="headerCartCount">(0)</span></button>
    </div>
</header>

    <section class="hero">
        <div style="position: relative; z-index: 2;">
            <h1>Как у итальянской мамы, только никуда не надо ехать!</h1>
            <div class="subtitle">❤️ Сделано с любовью и хрустящей корочкой</div>
            <br>
            <button class="btn-main" onclick="document.getElementById('menu').scrollIntoView({behavior: 'smooth'})">
                Хочу кушать!
            </button>
        </div>
    </section>

    <div class="sticky-nav">
        <button class="nav-btn" onclick="document.getElementById('cat-pizza').scrollIntoView({behavior: 'smooth'})">🍕 Пицца</button>
        <button class="nav-btn" onclick="document.getElementById('cat-salad').scrollIntoView({behavior: 'smooth'})">🥗 Салаты</button>
        <button class="nav-btn" onclick="document.getElementById('cat-soup').scrollIntoView({behavior: 'smooth'})">🍵 Супы</button>
        <button class="nav-btn" onclick="document.getElementById('cat-snacks').scrollIntoView({behavior: 'smooth'})">🍟 Закуски</button>
       <button class="nav-btn" onclick="document.getElementById('cat-sets').scrollIntoView({behavior: 'smooth'})"> Ролл в тортилье</button>
        <button class="nav-btn" onclick="document.getElementById('cat-sets').scrollIntoView({behavior: 'smooth'})">🎁 Сеты</button>
    </div>
    
    <section id="menu">
        <h2 class="section-title">Наши вкусняшки</h2>
        <div class="menu-container">

            <div id="cat-pizza" class="menu-category-title"><span>🍕 Горячая Пицца</span></div>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                       <img src="images/margarita.jpg" class="card-img" alt="Маргарита" loading="eager">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Маргарита</span><span class="price-tag">520 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">Классика! Сочный томатный соус, много моцареллы и щепотка любви.</p>
                        <div class="extra-options-block">
                            <div class="extra-options-title">🎯 Дополнительно:</div>
                            <label class="extra-option-label"><input type="checkbox" class="extra-cheese-check"> 🧀 Сырный бортик (+120₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-double-check"> 🧀 Двойной сыр (+100₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-spicy-check"> 🌶️ Острый соус (+50₽)</label>
                        </div>
                        <div class="price-row">
                            <span class="card-weight">600г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Маргарита', 520)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>
 
            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                       <img src="images/salami.jpg" class="card-img" alt="Салями" loading="eager">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Салями</span><span class="price-tag">760 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">Щедрая порция пряной салями, много тягучей моцареллы и насыщенный томатный соус. Сочная классика на хрустящем тесте.</p>
                        <div class="extra-options-block">
                            <div class="extra-options-title">🎯 Дополнительно:</div>
                            <label class="extra-option-label"><input type="checkbox" class="extra-cheese-check"> 🧀 Сырный бортик (+120₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-double-check"> 🧀 Двойной сыр (+100₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-spicy-check"> 🌶️ Острый соус (+50₽)</label>
                        </div>
                        <div class="price-row">
                            <span class="card-weight">720г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Салями', 760)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>
           
            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                       <img src="images/vitamin.jpg" class="card-img" alt="Витамин" loading="eager">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Витамин</span><span class="price-tag">600 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">Овощной взрыв: томаты, грибочки, перчик, лук и маслины.</p>
                        <div class="extra-options-block">
                            <div class="extra-options-title">🎯 Дополнительно:</div>
                            <label class="extra-option-label"><input type="checkbox" class="extra-cheese-check"> 🧀 Сырный бортик (+120₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-double-check"> 🧀 Двойной сыр (+100₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-spicy-check"> 🌶️ Острый соус (+50₽)</label>
                        </div>
                        <div class="price-row">
                            <span class="card-weight">720г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Витамин', 600)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                       <img src="images/vetchina grib.jpg" class="card-img" alt="Грибная" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Грибная</span><span class="price-tag">650 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">Свежие шампиньоны, домашний соус и сыр.</p>
                        <div class="extra-options-block">
                            <div class="extra-options-title">🎯 Дополнительно:</div>
                            <label class="extra-option-label"><input type="checkbox" class="extra-cheese-check"> 🧀 Сырный бортик (+120₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-double-check"> 🧀 Двойной сыр (+100₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-spicy-check"> 🌶️ Острый соус (+50₽)</label>
                        </div>
                        <div class="price-row">
                            <span class="card-weight">700г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Грибная', 620)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                       <img src="images/i3pizz.jpg" class="card-img" alt="i3Пицц" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>i3Пицц</span><span class="price-tag">690 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">Сытно! Фарш, охотничьи колбаски и соленые огурчики.</p>
                        <div class="extra-options-block">
                            <div class="extra-options-title">🎯 Дополнительно:</div>
                            <label class="extra-option-label"><input type="checkbox" class="extra-cheese-check"> 🧀 Сырный бортик (+120₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-double-check"> 🧀 Двойной сыр (+100₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-spicy-check"> 🌶️ Острый соус (+50₽)</label>
                        </div>
                        <div class="price-row">
                            <span class="card-weight">700г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'i3Пицц', 690)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                       <img src="images/fray chiken.jpg" class="card-img" alt="Фрай-чикен" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Фрай-чикен</span><span class="price-tag">690 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">Копченая курочка, грибы и томаты.</p>
                        <div class="extra-options-block">
                            <div class="extra-options-title">🎯 Дополнительно:</div>
                            <label class="extra-option-label"><input type="checkbox" class="extra-cheese-check"> 🧀 Сырный бортик (+120₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-double-check"> 🧀 Двойной сыр (+100₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-spicy-check"> 🌶️ Острый соус (+50₽)</label>
                        </div>
                        <div class="price-row">
                            <span class="card-weight">720г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Фрай-чикен', 690)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                       <img src="images/ogma.jpg" class="card-img" alt="Огма" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Огма</span><span class="price-tag">690 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">Изысканно: секретный соус, прошутто и благородный пармезан.</p>
                        <div class="extra-options-block">
                            <div class="extra-options-title">🎯 Дополнительно:</div>
                            <label class="extra-option-label"><input type="checkbox" class="extra-cheese-check"> 🧀 Сырный бортик (+120₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-double-check"> 🧀 Двойной сыр (+100₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-spicy-check"> 🌶️ Острый соус (+50₽)</label>
                        </div>
                        <div class="price-row">
                            <span class="card-weight">650г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Огма', 690)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                       <img src="images/vetchina grib.jpg" class="card-img" alt="Ветчина-грибы" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Ветчина-грибы</span><span class="price-tag">670 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">Старая добрая классика. Ветчина, грибы и маслинки.</p>
                        <div class="extra-options-block">
                            <div class="extra-options-title">🎯 Дополнительно:</div>
                            <label class="extra-option-label"><input type="checkbox" class="extra-cheese-check"> 🧀 Сырный бортик (+120₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-double-check"> 🧀 Двойной сыр (+100₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-spicy-check"> 🌶️ Острый соус (+50₽)</label>
                        </div>
                        <div class="price-row">
                            <span class="card-weight">700г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Ветчина-грибы', 670)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                       <img src="images/bbq.jpg" class="card-img" alt="BBQ" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>BBQ</span><span class="price-tag">710 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">С дымком! Копченая курица, грудинка и много соуса барбекю.</p>
                        <div class="extra-options-block">
                            <div class="extra-options-title">🎯 Дополнительно:</div>
                            <label class="extra-option-label"><input type="checkbox" class="extra-cheese-check"> 🧀 Сырный бортик (+120₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-double-check"> 🧀 Двойной сыр (+100₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-spicy-check"> 🌶️ Острый соус (+50₽)</label>
                        </div>
                        <div class="price-row">
                            <span class="card-weight">720г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'BBQ', 710)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                       <img src="images/peperony.jpg" class="card-img" alt="Пеперони" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Пеперони</span><span class="price-tag">710 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">Остренько! Пеперони и халапеньо согреют в любую погоду.</p>
                        <div class="extra-options-block">
                            <div class="extra-options-title">🎯 Дополнительно:</div>
                            <label class="extra-option-label"><input type="checkbox" class="extra-cheese-check"> 🧀 Сырный бортик (+120₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-double-check"> 🧀 Двойной сыр (+100₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-spicy-check"> 🌶️ Острый соус (+50₽)</label>
                        </div>
                        <div class="price-row">
                            <span class="card-weight">730г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Пеперони', 710)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                       <img src="images/mysnay kapella.jpg" class="card-img" alt="Мясная капелла" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Мясная капелла</span><span class="price-tag">710 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">Много мяса не бывает! Ветчина, сервелат, грудинка. Ух!</p>
                        <div class="extra-options-block">
                            <div class="extra-options-title">🎯 Дополнительно:</div>
                            <label class="extra-option-label"><input type="checkbox" class="extra-cheese-check"> 🧀 Сырный бортик (+120₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-double-check"> 🧀 Двойной сыр (+100₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-spicy-check"> 🌶️ Острый соус (+50₽)</label>
                        </div>
                        <div class="price-row">
                            <span class="card-weight">790г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Мясная капелла', 710)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                       <img src="images/big pig.jpg" class="card-img" alt="Big-Pig" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Big-Pig</span><span class="price-tag">710 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">Для большого аппетита. Грудинка, грибы и острый соус.</p>
                        <div class="extra-options-block">
                            <div class="extra-options-title">🎯 Дополнительно:</div>
                            <label class="extra-option-label"><input type="checkbox" class="extra-cheese-check"> 🧀 Сырный бортик (+120₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-double-check"> 🧀 Двойной сыр (+100₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-spicy-check"> 🌶️ Острый соус (+50₽)</label>
                        </div>
                        <div class="price-row">
                            <span class="card-weight">750г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Big-Pig', 710)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                       <img src="images/aliot.jpg" class="card-img" alt="Алиот" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Алиот</span><span class="price-tag">690 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">Нежный сливочный соус и пряные охотничьи колбаски.</p>
                        <div class="extra-options-block">
                            <div class="extra-options-title">🎯 Дополнительно:</div>
                            <label class="extra-option-label"><input type="checkbox" class="extra-cheese-check"> 🧀 Сырный бортик (+120₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-double-check"> 🧀 Двойной сыр  (+100₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-spicy-check"> 🌶️ Острый соус (+50₽)</label>
                        </div>
                        <div class="price-row">
                            <span class="card-weight">710г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Алиот', 690)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                       <img src="images/karbonara.jpg" class="card-img" alt="Карбонара" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Карбонара</span><span class="price-tag">700 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">Как паста, только пицца! Грудинка, яйцо и пармезан.</p>
                        <div class="extra-options-block">
                            <div class="extra-options-title">🎯 Дополнительно:</div>
                            <label class="extra-option-label"><input type="checkbox" class="extra-cheese-check"> 🧀 Сырный бортик (+120₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-double-check"> 🧀 Двойной сыр (+100₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-spicy-check"> 🌶️ Острый соус (+50₽)</label>
                        </div>
                        <div class="price-row">
                            <span class="card-weight">680г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Карбонара', 700)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                       <img src="images/kravc.jpg" class="card-img" alt="Кравц" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Кравц</span><span class="price-tag">740 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">Богатый состав:Белый соус, сервелат, куриное филе, грибы, томаты, маслины, красный лук, укроп.</p>
                        <div class="extra-options-block">
                            <div class="extra-options-title">🎯 Дополнительно:</div>
                            <label class="extra-option-label"><input type="checkbox" class="extra-cheese-check"> 🧀 Сырный бортик (+120₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-double-check"> 🧀 Двойной сыр (+100₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-spicy-check"> 🌶️ Острый соус (+50₽)</label>
                        </div>
                        <div class="price-row">
                            <span class="card-weight">800г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Кравц', 740)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                       <img src="images/neapolitanskay.jpg" class="card-img" alt="Неаполитанская" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Неаполитанская</span><span class="price-tag">720 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">Вкус Италии. Курица, ветчина и соленые огурчики.</p>
                        <div class="extra-options-block">
                            <div class="extra-options-title">🎯 Дополнительно:</div>
                            <label class="extra-option-label"><input type="checkbox" class="extra-cheese-check"> 🧀 Сырный бортик (+120₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-double-check"> 🧀 Двойной сыр (+100₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-spicy-check"> 🌶️ Острый соус (+50₽)</label>
                        </div>
                        <div class="price-row">
                            <span class="card-weight">800г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Неаполитанская', 720)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                       <img src="images/syrny rae.jpg" class="card-img" alt="Сырный рай" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Сырный рай</span><span class="price-tag">860 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">5 сыров: моцарелла, фета, чеддер и дор блю, пармезан. Мечта!</p>
                        <div class="extra-options-block">
                            <div class="extra-options-title">🎯 Дополнительно:</div>
                            <label class="extra-option-label"><input type="checkbox" class="extra-cheese-check"> 🧀 Сырный бортик (+120₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-double-check"> 🧀 Двойной сыр (+100₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-spicy-check"> 🌶️ Острый соус (+50₽)</label>
                        </div>
                        <div class="price-row">
                            <span class="card-weight">700г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Сырный рай', 860)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                       <img src="images/cezar.jpg" class="card-img" alt="Пицца Цезарь" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Пицца Цезарь</span><span class="price-tag">770 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">Любимый салат теперь на тесте. Соус цезарь в комплекте.</p>
                        <div class="extra-options-block">
                            <div class="extra-options-title">🎯 Дополнительно:</div>
                            <label class="extra-option-label"><input type="checkbox" class="extra-cheese-check"> 🧀 Сырный бортик (+120₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-double-check"> 🧀 Двойной сыр (+100₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-spicy-check"> 🌶️ Острый соус (+50₽)</label>
                        </div>
                        <div class="price-row">
                            <span class="card-weight">770г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Пицца Цезарь', 770)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                       <img src="images/dary mora.jpg" class="card-img" alt="Дары моря" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Дары моря</span><span class="price-tag">870 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">Роскошно. Креветки, лосось и устричный соус.</p>
                        <div class="extra-options-block">
                            <div class="extra-options-title">🎯 Дополнительно:</div>
                            <label class="extra-option-label"><input type="checkbox" class="extra-cheese-check"> 🧀 Сырный бортик (+120₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-double-check"> 🧀 Двойной сыр (+100₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-spicy-check"> 🌶️ Острый соус (+50₽)</label>
                        </div>
                        <div class="price-row">
                            <span class="card-weight">740г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Дары моря', 870)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                       <img src="images/c ananacom.jpg" class="card-img" alt="С ананасами" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>С ананасами</span><span class="price-tag">850 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">Спорно? Нет, вкусно! Креветки и сладкий ананас.</p>
                        <div class="extra-options-block">
                            <div class="extra-options-title">🎯 Дополнительно:</div>
                            <label class="extra-option-label"><input type="checkbox" class="extra-cheese-check"> 🧀 Сырный бортик (+120₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-double-check"> 🧀 Двойной сыр (+100₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-spicy-check"> 🌶️ Острый соус (+50₽)</label>
                        </div>
                        <div class="price-row">
                            <span class="card-weight">650г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Пицца с ананасами', 850)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                       <img src="images/sinyaagrusha.jpeg" class="card-img" alt="Синяя груша" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Синяя груша</span><span class="price-tag">800 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">Гурманам посвящается: сладкая груша и терпкая горгонзола.</p>
                        <div class="extra-options-block">
                            <div class="extra-options-title">🎯 Дополнительно:</div>
                            <label class="extra-option-label"><input type="checkbox" class="extra-cheese-check"> 🧀 Сырный бортик (+120₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-double-check"> 🧀 Двойной сыр (+100₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-spicy-check"> 🌶️ Острый соус (+50₽)</label>
                        </div>
                        <div class="price-row">
                            <span class="card-weight">680г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Синяя груша', 800)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>
            
            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                       <img src="images/kalcone.jpg" class="card-img" alt="Кальцоне" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Кальцоне</span><span class="price-tag">720 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">Открытая пицца, полная сокровищ! Внутри вас ждут шампиньоны, сервелат, ветчина, красный лук, яйцо и свежая петрушка под расплавленной моцареллой.</p>
                        <div class="extra-options-block">
                            <div class="extra-options-title">🎯 Дополнительно:</div>
                            <label class="extra-option-label"><input type="checkbox" class="extra-cheese-check"> 🧀 Сырный бортик (+120₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-double-check"> 🧀 Двойной сыр (+100₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-spicy-check"> 🌶️ Острый соус (+50₽)</label>
                        </div>
                        <div class="price-row">
                            <span class="card-weight">680г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Кальцоне', 720)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>
<article class="pizza-item">
                <details>
                    <summary class="card-header">
                       <img src="images/teriyaki.jpg" class="card-img" alt="Терияки" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Терияки</span><span class="price-tag">730 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">Домашний соус, куриное филе, болгарский перец, соус терияки, кунжут.</p>
                        <div class="extra-options-block">
                            <div class="extra-options-title">🎯 Дополнительно:</div>
                            <label class="extra-option-label"><input type="checkbox" class="extra-cheese-check"> 🧀 Сырный бортик (+120₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-double-check"> 🧀 Двойной сыр (+100₽)</label>
                            <label class="extra-option-label"><input type="checkbox" class="extra-spicy-check"> 🌶️ Острый соус (+50₽)</label>
                        </div>
                        <div class="price-row">
                            <span class="card-weight">680г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Терияки', 730)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>
            <div id="cat-salad" class="menu-category-title"><span>🥗 Свежие Салаты</span></div>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                        <img src="images/salatces.jpg" class="card-img" alt="Цезарь с курицей" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Цезарь с курицей</span><span class="price-tag">450 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">Хрустящие листья, курочка и фирменная заправка.</p>
                        <div class="price-row">
                            <span class="card-weight">250г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Цезарь с курицей', 450)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                        <img src="images/salatkrevetka.jpg" class="card-img" alt="Цезарь с креветками" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Цезарь с креветкой</span><span class="price-tag">550 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">Морская версия любимого салата.</p>
                        <div class="price-row">
                            <span class="card-weight">250г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Цезарь с креветками', 550)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                        <img src="images/salatutka.jpg" class="card-img" alt="Дикая утка" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Дикая утка</span><span class="price-tag">490 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">Необычно! Утиная грудка с апельсиновым соусом.</p>
                        <div class="price-row">
                            <span class="card-weight">250г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Дикая утка', 600)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <div id="cat-soup" class="menu-category-title"><span>🍵 Домашние Супы</span></div>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                        <img src="images/grib.jpg" class="card-img" alt="Грибной суп" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Грибной крем-суп</span><span class="price-tag">310 ₽</span></div>
                            <span class="expand-hint">Вкусненько ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <div class="price-row">
                            <span class="card-weight">300мл</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Грибной крем-суп', 310)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                        <img src="images/tikva.jpg" class="card-img" alt="Тыквенный суп" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Тыквенный крем-суп</span><span class="price-tag">310 ₽</span></div>
                            <span class="expand-hint">Вкусненько ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <div class="price-row">
                            <span class="card-weight">300мл</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Тыквенный крем-суп', 310)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                        <img src="images/brokkoli.jpg" class="card-img" alt="Брокколи суп" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Крем-суп из брокколи</span><span class="price-tag">310 ₽</span></div>
                            <span class="expand-hint">Вкусненько ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <div class="price-row">
                            <span class="card-weight">300мл</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Крем-суп из брокколи', 310)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>
      
            <div id="cat-snacks" class="menu-category-title"><span>🍟 Похрустеть</span></div>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                        <img src="images/fri.jpg" class="card-img" alt="Картофель Фри" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Картофель Фри</span><span class="price-tag">240 ₽</span></div>
                            <span class="expand-hint">Вкусненько ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <div class="price-row">
                            <span class="card-weight">200г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Картофель Фри', 240)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                        <img src="images/adaxo.jpg" class="card-img" alt="Дольки Айдахо" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Дольки Айдахо</span><span class="price-tag">250 ₽</span></div>
                            <span class="expand-hint">Вкусненько ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <div class="price-row">
                            <span class="card-weight">200г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Дольки Айдахо', 250)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                        <img src="images/krily bbq.jpg" class="card-img" alt="Крылья BBQ" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Крылья BBQ</span><span class="price-tag">320 ₽</span></div>
                            <span class="expand-hint">Вкусненько ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <div class="price-row">
                            <span class="card-weight">250г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Крылья BBQ', 320)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                        <img src="images/naggetsy.jpg" class="card-img" alt="Наггетсы" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Наггетсы</span><span class="price-tag">290 ₽</span></div>
                            <span class="expand-hint">Вкусненько ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <div class="price-row">
                            <span class="card-weight">6 шт</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Наггетсы', 290)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                        <img src="images/cheese.jpg" class="card-img" alt="Хот-чиз" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Хот-чиз</span><span class="price-tag">290 ₽</span></div>
                            <span class="expand-hint">Вкусненько ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <div class="price-row">
                            <span class="card-weight">6 шт</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Хот-чиз', 290)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>
  <article class="pizza-item">
                <details>
                    <summary class="card-header">
                        <img src="images/rene palochki.jpg" class="card-img" alt="Рыбные палочки" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Рыбные палочки</span><span class="price-tag">330 ₽</span></div>
                            <span class="expand-hint">Вкусненько ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <div class="price-row">
                            <span class="card-weight">6 шт</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">-</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, 1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Рыбные палочки', 330)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>
            <div id="cat-sets" class="menu-category-title"><span>🎁 Выгодные Сеты</span></div>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                       <img src="images/set1.jpg" class="card-img" alt="Пивной сет" onerror="this.src='https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500'" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Пивной сет</span><span class="price-tag">1 250 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">Идеальный набор для вечеринки с друзьями! Картофель фри, наггетсы, луковые кольца, Хот-Чиз, крылья BBQ.</p>
                        <div class="price-row">
                            <span class="card-weight">920 г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">−</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, +1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Пивной сет', 1250)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                       <img src="images/set2.jpg" class="card-img" alt="Комбо №1" onerror="this.src='https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500'" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Комбо №1</span><span class="price-tag">1 280 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">Классика с пиццей и прохладным напитком. Пицца "Фрай-чикен", пицца "Ветчина Грибы", лимонад 1 л (на выбор).</p>
                        <div class="price-row">
                            <span class="card-weight">1.5 кг</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">−</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, +1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Комбо №1', 1280)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                       <img src="images/set3.jpg" class="card-img" alt="Комбо №2" onerror="this.src='https://images.unsplash.com/photo-1593560708920-6316e4e6d0d9?w=500'" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Комбо №2</span><span class="price-tag">1 820 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">Мясное удовольствие с гарниром для всей семьи. Пицца "Биф мясо", пицца "Мясная капелла", наггетсы, картофель фри.</p>
                        <div class="price-row">
                            <span class="card-weight">1.9 кг</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">−</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, +1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Комбо №2', 1820)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                       <img src="images/set4.jpg" class="card-img" alt="Комбо №3" onerror="this.src='https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500'" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Комбо №3</span><span class="price-tag">1 890 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">Ассорти из пицц для любителей разнообразия. Пицца "BBQ", пицца "ВитаМин", пицца "Кравц".</p>
                        <div class="price-row">
                            <span class="card-weight">2.2 кг</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">−</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, +1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Комбо №3', 1890)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                       <img src="images/set5.jpg" class="card-img" alt="Комбо №4" onerror="this.src='https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500'" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Комбо №4</span><span class="price-tag">1 999 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">Сытное комбо с пиццами и напитком для компании. Пицца "Карбонара", пицца "Цезарь", картошка фри 2 шт, лимонад 1 л (на выбор).</p>
                        <div class="price-row">
                            <span class="card-weight">1.8 кг</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">−</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, +1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Комбо №4', 1999)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                       <img src="images/set6.jpg" class="card-img" alt="Детский бокс №1" onerror="this.src='https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=500'" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Детский бокс №1</span><span class="price-tag">550 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">Легкий и вкусный перекус для детей. Картофель фри, наггетсы, соус (на выбор), сок 0.2 л.</p>
                        <div class="price-row">
                            <span class="card-weight">360 г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">−</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, +1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Детский бокс №1', 550)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                       <img src="images/set7.jpg" class="card-img" alt="Детский бокс №2" onerror="this.src='https://images.unsplash.com/photo-1590947132387-155cc02f3212?w=500'" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Детский бокс №2</span><span class="price-tag">800 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">Набор для маленьких гурманов. Хот-Чиз, картошка фри, наггетсы, соус (на выбор), сок 0.2 л.</p>
                        <div class="price-row">
                            <span class="card-weight">520 г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">−</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, +1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Детский бокс №2', 800)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>
 <div id="cat-pizza" class="menu-category-title"><span>Ролл в тортилье</span></div>
                 </article>

            <article class="pizza-item">
                <details>
                    <summary class="card-header">
                       <img src="images/cesar roll.jpg" class="card-img" alt="Цезарь ролл" onerror="this.src='https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=500'" loading="lazy">
                        <div class="card-body-preview">
                            <div class="card-title"><span>Цезарь ролл</span><span class="price-tag">199 ₽</span></div>
                            <span class="expand-hint">Узнать состав ✨</span>
                        </div>
                    </summary>
                    <div class="details-content">
                        <p class="ingredients">Салат айсберг, томат, куриное филе в панировке, соус цезарь.</p>
                        <div class="price-row">
                            <span class="card-weight">200 г</span>
                            <div class="qty-control">
                                <button class="qty-btn" onclick="updateQty(this, -1)">−</button>
                                <span class="qty-val">1</span>
                                <button class="qty-btn" onclick="updateQty(this, +1)">+</button>
                            </div>
                            <button class="btn-order-item" onclick="addToCart(this, 'Цезарь ролл', 199)">Буду!</button>
                        </div>
                    </div>
                </details>
            </article>
        </div>
    </section>

    <div class="chat-widget">
        <div class="chat-window" id="chatWindow">
            
            <div id="viewChat">
                <div class="chat-header">
                    <div style="background:white; border-radius:50%; width:35px; height:35px; display:flex; align-items:center; justify-content:center;">👨‍🍳</div>
                    <div style="flex:1"><b>Тестяшка</b><br><small>Онлайн</small></div>
                    <button onclick="switchView('cart')" style="background:white; padding:5px 12px; border-radius:15px; font-weight:700; font-size:0.8rem;">🛒 Корзина</button>
                </div>
                <div class="chat-messages" id="chatBody"></div>
                <div class="chat-input-area">
                    <input type="text" id="chatInput" placeholder="Напишите сообщение...">
                    <button onclick="handleUserSend()">➤</button>
                </div>
            </div>

            <div id="viewCart">
                <div class="chat-header" style="background: #fff; border-bottom:1px solid #eee;">
                    <div style="font-weight:800; font-size:1.1rem;">Ваш заказ</div>
                    <button onclick="switchView('chat')" style="margin-left:auto; font-size:1.5rem; color:#999;">×</button>
                </div>
                <div class="cart-items-list" id="cartList">
                    </div>
                <div class="cart-footer">
                    <div style="display:flex; justify-content:space-between; margin-bottom:10px; font-weight:800; font-size:1.1rem;">
                        <span>Итого:</span>
                        <span id="cartTotal">0 ₽</span>
                    </div>
                    <button class="btn-checkout" onclick="startCheckout()">Оформить заказ</button>
                    <button class="btn-clear" onclick="clearCart()">Очистить корзину</button>
                </div>
            </div>

        </div>
        <button class="chat-btn" onclick="toggleChatWidget()">💬</button>
    </div>

    <footer>
        <div class="logo-container" style="justify-content: center; margin-bottom: 20px;">
            <img src="logo.png" alt="СчастьеВТесте" class="logo-img" style="height: 50px;">
            <div class="logo-text">Счастье<br><span style="color:var(--primary); font-size:1.3rem;">ВТесте</span></div>
        </div>
        <div style="text-align:center; opacity:0.8;">
            <p>📍 г.Бугры, ул. Шекспира дом 7</p>
            <p>📞 +7 (981) 979-42-69</p>
        </div>
        <p style="margin-top: 30px; font-size: 0.9rem; opacity: 0.6; text-align:center;">
    © 2026 <a href="https://t.me/sergkane" target="_blank" class="footer-link">Made with Love ❤️</a>
</p>
    </footer>

<script>
        // DATA
        let cart = [];
        let orderStep = 0;
        let deliveryType = ''; // 'delivery' или 'pickup'
        
        // !!! ВАШ URL ВЕБХУКА !!!
        const MAKE_WEBHOOK = 'https://hook.eu1.make.com/xk17lstupk6r6w6t86w7npv705tt41pn';

        // DOM
        const chatWindow = document.getElementById('chatWindow');
        const viewChat = document.getElementById('viewChat');
        const viewCart = document.getElementById('viewCart');
        const chatBody = document.getElementById('chatBody');
        const cartList = document.getElementById('cartList');
        const cartTotalSpan = document.getElementById('cartTotal');
        const headerCount = document.getElementById('headerCartCount');
        const chatInput = document.getElementById('chatInput');

        // INIT
        window.addEventListener('DOMContentLoaded', () => {
            loadCart();
            checkWorkingHours();
        });
        
        chatInput.addEventListener('keypress', (e) => { 
            if (e.key === 'Enter') handleUserSend(); 
        });

        // Phone Formatter
        chatInput.addEventListener('input', function(e) {
            // Форматируем телефон только на шаге ввода телефона (шаг 3)
            if(orderStep === 3) {
                let x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
                if (!x[2]) { e.target.value = x[1] ? '+7' : ''; return; }
                e.target.value = !x[3] ? `+7 (${x[2]}` : `+7 (${x[2]}) ${x[3]}` + (x[4] ? `-${x[4]}` : '') + (x[5] ? `-${x[5]}` : '');
            }
        });

        function checkWorkingHours() {
            const now = new Date();
            const hours = now.getHours();
            const btn = document.querySelector('.btn-checkout');
            if (hours >= 23 || hours < 10) {
                if(btn) {
                    btn.disabled = true;
                    btn.innerText = "Мы закрыты (с 10 до 23)";
                    btn.style.background = "#ccc";
                    btn.style.cursor = "not-allowed";
                }
                return false;
            }
            return true;
        }

        function toggleChatWidget() {
            if(chatWindow.classList.contains('active')) {
                chatWindow.classList.remove('active');
            } else {
                chatWindow.classList.add('active');
                switchView('chat'); 
                if(chatBody.children.length === 0) {
                    botSay("Привет! 👋 Я Тестяшка. Добавляй вкусняшки в меню (кнопка 'Буду!'), а здесь мы оформим заказ.");
                }
            }
        }

        function openCartDirectly() {
            chatWindow.classList.add('active');
            switchView('cart');
        }

        function switchView(viewName) {
            if(viewName === 'cart') {
                viewChat.style.display = 'none';
                viewCart.style.display = 'flex';
                renderCart();
                checkWorkingHours();
            } else {
                viewChat.style.display = 'flex';
                viewCart.style.display = 'none';
            }
        }

        function botSay(html) {
            chatBody.innerHTML += `<div class="message msg-bot">${html}</div>`;
            chatBody.scrollTop = chatBody.scrollHeight;
        }

        function userSay(text) {
            chatBody.innerHTML += `<div class="message msg-user">${text}</div>`;
            chatBody.scrollTop = chatBody.scrollHeight;
        }

        function updateQty(btn, change) {
            const wrapper = btn.closest('.qty-control');
            const valSpan = wrapper.querySelector('.qty-val');
            let val = parseInt(valSpan.innerText);
            val += change;
            if (val < 1) val = 1;
            valSpan.innerText = val;
        }

        function addToCart(btn, name, basePrice) {
            btn.disabled = true;
            const container = btn.closest('.details-content');
            if(!container) return; 

            const qtySpan = container.querySelector('.qty-val');
            const qty = qtySpan ? parseInt(qtySpan.innerText) : 1;

            let finalName = name;
            let finalPrice = basePrice;
            
            const cheeseCheck = container.querySelector('.extra-cheese-check');
            if(cheeseCheck && cheeseCheck.checked) { finalName += " (🧀)"; finalPrice += 150; }
            
            const doubleCheck = container.querySelector('.extra-double-check');
            if(doubleCheck && doubleCheck.checked) { finalName += " (🍕)"; finalPrice += 200; }
            
            const spicyCheck = container.querySelector('.extra-spicy-check');
            if(spicyCheck && spicyCheck.checked) { finalName += " (🌶️)"; finalPrice += 50; }

            const existing = cart.find(i => i.name === finalName);
            if(existing) { existing.qty += qty; } 
            else { cart.push({ name: finalName, price: finalPrice, qty: qty }); }

            saveCart();
            updateHeaderCount();
            if(viewCart.style.display === 'flex') renderCart();

            const checkboxes = container.querySelectorAll('input[type="checkbox"]');
            checkboxes.forEach(cb => cb.checked = false);

            const originalText = btn.innerText;
            btn.innerText = "Готово! ✔";
            btn.style.backgroundColor = "#4CAF50";

            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = "";
                btn.disabled = false; 
            }, 1000);
        }

        function updateHeaderCount() {
            const total = cart.reduce((a,b) => a + b.qty, 0);
            headerCount.innerText = `(${total})`;
        }

        function renderCart() {
            cartList.innerHTML = "";
            let total = 0;
            if(cart.length === 0) {
                cartList.innerHTML = "<div style='text-align:center; color:#ccc; margin-top:50px;'>Корзина пуста 🕸️</div>";
                cartTotalSpan.innerText = "0 ₽";
                return;
            }
            cart.forEach((item, index) => {
                total += item.price * item.qty;
                cartList.innerHTML += `
                <div class="cart-item-row">
                    <div style="flex:1;">
                        <div style="font-weight:700; font-size:0.9rem;">${item.name}</div>
                        <div style="color:#888; font-size:0.8rem;">${item.price} ₽</div>
                    </div>
                    <div class="cart-controls">
                        <button class="btn-mini" onclick="changeQty(${index}, -1)">-</button>
                        <span style="font-weight:700; min-width:20px; text-align:center;">${item.qty}</span>
                        <button class="btn-mini" onclick="changeQty(${index}, 1)">+</button>
                    </div>
                </div>`;
            });
            cartTotalSpan.innerText = total + " ₽";
        }

        function changeQty(index, delta) {
            cart[index].qty += delta;
            if(cart[index].qty <= 0) cart.splice(index, 1);
            saveCart();
            renderCart();
            updateHeaderCount();
        }

        function clearCart() {
            if(confirm('Очистить корзину?')) {
                cart = [];
                saveCart();
                renderCart();
                updateHeaderCount();
            }
        }

        function saveCart() {
            try { localStorage.setItem('pizzaCart', JSON.stringify(cart)); } catch(e) {}
        }

        function loadCart() {
            try {
                const saved = localStorage.getItem('pizzaCart');
                if (saved) {
                    cart = JSON.parse(saved);
                    updateHeaderCount();
                }
            } catch(e) {}
        }

        // --- ЛОГИКА ОФОРМЛЕНИЯ ЗАКАЗА ---

        function startCheckout() {
            if(!checkWorkingHours()) {
                alert("Извините, мы уже закрыты! Работаем с 11:30 до 22:30.");
                return;
            }
            if(cart.length === 0) { alert("Корзина пуста!"); return; }
            
            switchView('chat');
            
            // ШАГ 1: Спрашиваем способ получения
            orderStep = 1; 
            botSay(`
                Отлично! 😋 Как хотите получить заказ?<br><br>
                <button onclick="setDeliveryType('delivery')" style="background:#FF5252; color:white; border:none; padding:8px 15px; border-radius:15px; margin-right:5px; cursor:pointer;">🚚 Доставка</button>
                <button onclick="setDeliveryType('pickup')" style="background:#FFD166; color:#4A4A4A; border:none; padding:8px 15px; border-radius:15px; cursor:pointer;">🏃 Самовывоз</button>
            `);
        }

        // Обработка выбора (Доставка / Самовывоз)
        function setDeliveryType(type) {
            deliveryType = type;
            
            if (type === 'pickup') {
                userSay("🏃 Самовывоз");
                window.address = "Самовывоз (из ресторана)";
                orderStep = 3; // Пропускаем шаг адреса, идем к телефону
                setTimeout(() => botSay("Хорошо. Самовывоз с ул. Шекспира д.7.<br>Напишите ваш <b>номер телефона</b> для связи:"), 500);
            } else {
                userSay("🚚 Доставка");
                orderStep = 2; // Идем к вводу адреса
                setTimeout(() => botSay("Напишите <b>адрес доставки</b> (Улица, дом, квартира):"), 500);
            }
        }

        async function handleUserSend() {
            const text = chatInput.value.trim();
            if(!text) return;

            // Если мы на шаге 1 (выбор кнопками), игнорируем текстовый ввод или просим нажать кнопку
            if(orderStep === 1) {
                botSay("Пожалуйста, выберите вариант кнопкой выше ⬆️");
                return;
            }

            userSay(text);
            chatInput.value = '';

            // ШАГ 2: Ввод адреса (только для доставки)
            if(orderStep === 2) {
                window.address = text;
                orderStep = 3;
                setTimeout(() => botSay("Принято. Теперь <b>номер телефона</b> для связи:"), 500);
            } 
            // ШАГ 3: Ввод телефона (общий для всех)
            else if (orderStep === 3) {
                const cleanPhone = text.replace(/\D/g, '');
                if(cleanPhone.length < 10) {
                    botSay("Номер слишком короткий! Попробуйте еще раз 📱");
                    return;
                }
                window.phone = text;
                orderStep = 0; // Завершаем
                
                botSay("⏳Отправляю ваш заказ🍕 С любовью, "Ваша Счастье в тесте"");

                const total = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
                const payload = { 
                    cart, 
                    address: window.address, 
                    phone: window.phone, 
                    total,
                    type: deliveryType // Передаем тип заказа (доставка/самовывоз)
                };

                try {
                    await fetch(MAKE_WEBHOOK, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(payload)});
                    setTimeout(() => {
                        botSay(`✅ <b>Заказ принят!</b><br>Сумма: ${total} ₽<br>Тип: ${deliveryType === 'pickup' ? 'Самовывоз' : 'Доставка'}<br>Менеджер скоро позвонит.`);
                        cart = [];
                        saveCart();
                        updateHeaderCount();
                    }, 1000);
                } catch(e) { 
                    console.error(e);
                    botSay("Ошибка сети. Позвоните нам!"); 
                }
            } 
            else {
                setTimeout(() => botSay("Я принимаю только заказы через корзину 🛒"), 500);
            }
        }
    </script>
</body>
</html>
