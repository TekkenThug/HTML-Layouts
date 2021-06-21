<?php require('parts/header.php') ?>
<main class="main-content">
  <section class="crumbs">
    <div class="container">
      <ul class="crumbs__list">
        <li class="cart__clear-btn">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
              <path d="M9.66843 4.82697L8.57255 4.78677L8.33496 11.275L9.43084 11.315L9.66843 4.82697Z" fill="#0278AE" />
              <path d="M7.54777 4.80688H6.45117V11.2952H7.54777V4.80688Z" fill="#0278AE" />
              <path d="M5.66502 11.2748L5.42743 4.78654L4.33154 4.82677L4.56916 11.315L5.66502 11.2748Z" fill="#0278AE" />
              <path d="M0.475098 2.10188V3.19848H1.61777L2.52427 13.4998C2.54912 13.7829 2.78619 14.0001 3.07037 14.0001H10.9109C11.1951 14.0001 11.4324 13.7828 11.457 13.4996L12.3636 3.19848H13.5247V2.10188H0.475098ZM10.4087 12.9035H3.57246L2.71857 3.19848H11.2628L10.4087 12.9035Z" fill="#0278AE" />
              <path d="M8.79099 0H5.20875C4.70486 0 4.29492 0.409937 4.29492 0.913828V2.65013H5.39151V1.09659H8.60822V2.65013H9.70481V0.913828C9.70481 0.409937 9.29488 0 8.79099 0Z" fill="#0278AE" />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="14" height="14" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span>Очистить корзину</span>
        </li>
        <li class="crumbs__item"><a href="index.html">Главная</a></li>
        <li class="crumbs__item">Корзина</li>
      </ul>
    </div>
  </section>

  <section class="cart">
    <div class="container">
      <div class="cart__inner">
        <form class="cart__form">
          <table class="cart__list">
            <tr class="cart__item">
              <td class="cart__item-img">
                <div>
                  <img src="images/content/item/item.png" alt="" />
                </div>
              </td>

              <td class="cart__item-name">
                Magic Leap One AR VR гарнитура шлем виртуальной реальности
              </td>
              <td class="cart__item-count">
                <span class="less"></span>
                <div>
                  <input type="number" disabled max="99" value="1" />
                </div>
                <span class="more"></span>
              </td>
              <td class="cart__item-total"><span>99 990</span> ₽</td>
              <td class="cart__item-delete">
                <button>
                  <img src="images/icons/delete.svg" alt="">
                </button>
              </td>
            </tr>
            <tr class="cart__item">
              <td class="cart__item-img">
                <div>
                  <img src="images/content/item/item-2.png" alt="" />
                </div>
              </td>

              <td class="cart__item-name">
                Magic Leap One AR VR гарнитура шлем виртуальной реальности
              </td>
              <td class="cart__item-count">
                <span class="less"></span>
                <div>
                  <input type="number" disabled max="99" value="1" />
                </div>
                <span class="more"></span>
              </td>
              <td class="cart__item-total"><span>199 990</span> ₽</td>
              <td class="cart__item-delete">
                <button>
                  <img src="images/icons/delete.svg" alt="">
                </button>
              </td>
            </tr>
            <tr class="cart__item">
              <td class="cart__item-img">
                <div>
                  <img src="images/content/products/product-10.png" alt="" />
                </div>
              </td>

              <td class="cart__item-name">
                Magic Leap One AR VR гарнитура шлем виртуальной реальности
              </td>
              <td class="cart__item-count">
                <span class="less"></span>
                <div>
                  <input type="number" disabled max="99" value="1" />
                </div>
                <span class="more"></span>
              </td>
              <td class="cart__item-total"><span>1 990</span> ₽</td>
              <td class="cart__item-delete">
                <button>
                  <img src="images/icons/delete.svg" alt="">
                </button>
              </td>
            </tr>
            <tr class="cart__item">
              <td class="cart__item-img">
                <div>
                  <img src="images/content/products/product-5.png" alt="" />
                </div>
              </td>

              <td class="cart__item-name">
                Magic Leap One AR VR гарнитура шлем виртуальной реальности
              </td>
              <td class="cart__item-count">
                <span class="less"></span>
                <div>
                  <input type="number" disabled max="99" value="1" />
                </div>
                <span class="more"></span>
              </td>
              <td class="cart__item-total"><span>6 890</span> ₽</td>
              <td class="cart__item-delete">
                <button>
                  <img src="images/icons/delete.svg" alt="">
                </button>
              </td>
            </tr>
            <tr class="cart__item">
              <td class="cart__item-img">
                <div>
                  <img src="images/content/products/product-2.png" alt="" />
                </div>
              </td>

              <td class="cart__item-name">
                Magic Leap One AR VR гарнитура шлем виртуальной реальности
              </td>
              <td class="cart__item-count">
                <span class="less"></span>
                <div>
                  <input type="number" disabled max="99" value="1" />
                </div>
                <span class="more"></span>
              </td>
              <td class="cart__item-total"><span>7 990</span> ₽</td>
              <td class="cart__item-delete">
                <button>
                  <img src="images/icons/delete.svg" alt="">
                </button>
              </td>
            </tr>
          </table>
          <div class="cart__order">
            <div class="cart__order-top">
              <h2 class="cart__order-title">Оформление заказа</h2>
              <div class="cart__order-total">
                Сумма заказа: <span><b>188 970</b> ₽</span>
              </div>
            </div>
            <div class="cart__order-middle">
              <div class="cart__order-row">
                <div class="cart__order-subtitle">
                  Способ получения заказа:
                </div>
                <label class="custom-radio">
                  <input type="radio" name="delivery" value="Moscow" />
                  <div>Доставка по Москве</div>
                </label>
                <label class="custom-radio">
                  <input type="radio" name="delivery" value="Russia" />
                  <div>Доставка по России</div>
                </label>
              </div>
              <div class="cart__order-row">
                <div class="cart__order-subtitle">Данные для доставки:</div>
                <div class="cart__order-fields">
                  <label for="address">Адрес доставки:</label>
                  <input type="text" id="address" />
                </div>
                <div class="cart__order-flex">
                  <div class="cart__order-fields">
                    <label for="entrance">Подъезд:</label>
                    <input type="text" id="entrance" />
                  </div>
                  <div class="cart__order-fields">
                    <label for="intercom">Домофон:</label>
                    <input type="text" id="intercom" />
                  </div>
                  <div class="cart__order-fields">
                    <label for="floor">Этаж:</label>
                    <input type="text" id="floor" />
                  </div>
                  <div class="cart__order-fields">
                    <label for="apartment">Квартира:</label>
                    <input type="text" id="apartment" />
                  </div>
                </div>
                <div class="cart__order-fields">
                  <label for="comment">Комментарий:</label>
                  <input type="text" id="comment" placeholder="Необязательно" />
                </div>
              </div>
              <div class="cart__order-row">
                <div class="cart__order-subtitle">Контакты получателя:</div>
                <div class="cart__order-fields">
                  <label for="fullname">Имя и фамилия:</label>
                  <input type="text" id="fullname" placeholder="Антон Антонов" />
                </div>
                <div class="cart__order-fields">
                  <label for="phone">Номер телефона:</label>
                  <input type="text" id="phone" placeholder="+7 (999) 999-99-99" />
                </div>
              </div>
              <div class="cart__order-row">
                <div class="cart__order-subtitle">Способ оплаты:</div>
                <label class="custom-radio">
                  <input type="radio" name="delivery" value="cash" />
                  <div>Картой или наличными при получении</div>
                </label>
                <label class="custom-radio">
                  <input type="radio" name="delivery" value="credit" />
                  <div>Купить в кредит</div>
                </label>
                <a class="cart__order-submit order open-popup-link" href="#popup-order">Оформить заказ</a>
                <!-- <button class="cart__order-submit" type="submit">
          </button> -->
                <input class="custom-check" checked type="checkbox" id="policy-agree" />
                <label for="policy-agree">
                  Я согласен с
                  <a href="policy.php">политикой конфиденциальности</a>
                </label>
              </div>
            </div>

            <div class="cart__order-bottom">
              <span>или позвоните нам по номеру:</span>
              <a href="tel:+79876543210">+7 (987) 654-32-10</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</main>

<?php require('parts/popup-order.php') ?>

<?php require('parts/footer.php') ?>