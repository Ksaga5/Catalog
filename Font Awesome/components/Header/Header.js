class Header {
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }
/*=================Счетчик корзина=================*/
    render(count) {
        const html = `
           <div class="header-container">
                <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">
                <div class="navigation">
        <div class="logo">
            <img src="img/logotype.png" alt="" class="logotype">
        </div>

        <div class="nav-menu">
            <ul class="menu">
           
                 <li class="nav-item"><a href="main.html" class="nav-link">Главная</a>
                </li>
                <li class="nav-item"><a href="index.html" class="nav-link">Мужчины</a>
                </li>
                <li class="nav-item"><a href="index.html" class="nav-link">Женщины</a>
                </li>
                <li class="nav-item"><a href="index.html" class="nav-link">Дети</a>
            </li>
                
            </ul>
        </div>

        <div class="search-block">
            <div class="searsh">
                <input type="text" class="search-form" placeholder="Поиск">
                <a href="#" class="search-btn"><i class="fas fa-search"></i></a>
            </div>
        </div>
                    <a href="#" class="auth-link"><i class="fas fa-shopping-cart"></i>Корзина ${count}</a>
                </div>
          
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();

const productsStore = localStorageUtil.getProducts();
headerPage.render(productsStore.length);