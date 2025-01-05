<template>
    <footer>
        <div class="container">
            <div class="heading">
                <h2 class="title">Контакты</h2>
                <p>
                    Если вам интересно мое резюме и вы хотите сотрудничать со мной,
                    здесь я оставлю контакты для связи
                </p>
            </div>

            <ul :class="$style.list">
                <li
                    v-for="item in contactItems"
                    :key="item.link"
                    :class="$style.item"
                >
                    <a target="_blank" :title="item.title" :href="item.link"><img :src="`/img/contact/${item.icon}.svg`" :alt="item.title"></a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script lang="ts" setup>
const contactItems = [
    {
        title: "Я в LinkedIn",
        link: "https://linkedin.com/in/ignatov-vadim",
        icon: "linkedin"
    },
    {
        title: "Я в VK",
        link: "https://vk.com/tekken_thug7",
        icon: "vk"
    },
    {
        title: "Я в Telegram",
        link: "https://t.me/Tekken_thug",
        icon: "tg"
    },
    {
        title: "Gmail",
        link: "mailto:ignatov0131@gmail.com",
        icon: "gmail"
    },
    {
        title: "HH.ru",
        link: "https://hh.ru/resume/6bd4fcd6ff080a0a800039ed1f594873764b79",
        icon: "hh"
    }
]
</script>

<style lang="scss" module>
.list {
    display: flex;
    justify-content: center;
}

.item {
    color: #DCC48E;
    margin: 0 15px;

    a {
        width: 25px;
        height: 25px;

        img {
            width: 100%;
            @include trans();
        }
    }

    &:hover img {
        filter: saturate(30%);
    }
}
</style>