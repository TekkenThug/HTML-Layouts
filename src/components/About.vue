<template>
    <section>
        <div class="container">
            <div class="heading">
                <h2 class="title">О себе</h2>

                <p>
                    Я пытаюсь расположить людей к себе. Для этого я стараюсь рассказать о себе.<br>Здесь кратко изложены
                    сведения о моей жизни :)
                </p>
            </div>

            <ul :class="$style.list">
                <li :class="$style.item" :style="{ backgroundImage: `url('../img/biography-bg.jpg')` }">
                    <h3 :class="$style.itemTitle">Биография</h3>

                    <p :class="$style.itemText">
                        23 года. Живу в городе Москве, занимаюсь разработкой в сфере веба
                        уже около 3,5 лет,
                        достаточно перспективный молодой человек, люблю
                        выполнять интересные задачи, с легкостью и любознательностью отношусь к изучению новых различных
                        технологий, библиотек, методов.
                    </p>
                </li>

                <li :class="$style.item" :style="{ backgroundImage: `url('../img/education-bg.jpg')` }">
                    <h3 :class="$style.itemTitle">Образование</h3>

                    <p :class="$style.itemText">
                        Закончил бакалавриат по направлению «Информационные системы и технологии»
                        в университете <a href="http://www.mtuci.ru" target="_blank">МТУСИ</a>
                        <br>
                        Проходил курсы на портале <a href="https://htmlacademy.ru" target="_blank">htmlacademy</a> по
                        основам верстки на HTML/CSS/JS, после стал самообучаться.
                    </p>
                </li>

                <li :class="$style.item" :style="{ backgroundImage: `url('../img/hobby-bg.jpg')` }">
                    <h3 :class="$style.itemTitle">Увлечения</h3>

                    <p :class="$style.itemText">
                        Мое хобби - чтение (предпочитаю классику XIX-XX вв.) и занятие спортом.
                        Досуг провожу на открытом воздухе, иногда играю в компьютерные игры.
                    </p>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" module>
.list {
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(3, 1fr);

    @media (max-width: 1200px) {
        grid-template-columns: 1fr;
        
        .grid__item {
            min-height: 200px;
        }
    }
}

.item {
    border-radius: 8px;
    padding: 20px 32px;
    min-height: 400px;
    text-align: left;
    background-color: #DCC48E;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    align-items: center;

    &::before {
        content: "";
        border-radius: 8px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(#000, .8);
        z-index: 1;
        @include trans();
    }

    &:hover::before {
        background-color: rgba(#000, .5);
    }

    &:hover {
        .itemTitle {
            opacity: 0;
            visibility: hidden;
        }

        .itemText {
            opacity: 1;
            visibility: visible;
        }
    }

    &.biography {
        background-image: url('../img/biography-bg.jpg');
    }

    &.education {
        background-image: url('../img/education-bg.jpg');
    }

    &.hobby {
        background-image: url('../img/hobby-bg.jpg');
    }

    @media (max-width: 1200px) {
        min-height: 200px;
    }
}

.itemTitle {
    @include trans();
    display: inline-block;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    line-height: 32px;
    letter-spacing: .2px;
    z-index: 2;
}

.itemText {
    @include trans();
    font-size: 18px;
    line-height: 30px;
    z-index: 2;
    align-self: center;
    opacity: 0;
    visibility: hidden;

    a {
        text-decoration: underline;
    }
}

.itemText,
.itemTitle {
    text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.45);
}
</style>