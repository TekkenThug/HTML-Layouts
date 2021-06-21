<?php require('parts/header.php') ?>

    <main class="main-content">
      <section class="crumbs">
        <div class="container">
          <ul class="crumbs__list">
            <li class="crumbs__item"><a href="index.html">Главная</a></li>
            <li class="crumbs__item">Контакты</li>
          </ul>
        </div>
      </section>

      <section class="contacts">
        <div class="container">
          <div class="contacts__inner">
            <div class="contacts__left">
              <h2 class="contacts__title">Контакты</h2>
              <div class="contacts__block">
                <span class="contacts__block-signature">Телефон:</span>
                <a class="contacts__block-content" href="tel:79999999999"
                  >+7 (999) 999-99-99</a
                >
              </div>
              <div class="contacts__block">
                <span class="contacts__block-signature">Адрес:</span>
                <span class="contacts__block-content"
                  >г. Москва, ул. Пушкина, д. Колотушкина
                </span>
                <a class="contacts__block-link" href="#">Как добраться?</a>
              </div>
              <div class="contacts__block">
                <span class="contacts__block-signature">E-mail:</span>
                <a
                  class="contacts__block-content"
                  href="mailto:info@websitename.ru"
                  >info@websitename.ru</a
                >
              </div>
              <div class="contacts__block">
                <span class="contacts__block-signature">Социальные сети:</span>
                <ul class="contacts__block-social">
                  <li>
                    <a href="#">
                      <img src="images/icons/social/vk.svg" alt="vk" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="images/icons/social/inst.svg" alt="inst" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img
                        src="images/icons/social/youtube.svg"
                        alt="youtube"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="contacts__right">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A88b17071e5792f4c95d9d0e562c977d240a3054c16eb2c7a0e4142595c261fe2&amp;source=constructor"
                width="100%"
                height="100%"
                frameborder="0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>

    <?php require('parts/footer.php') ?>
