<template>
    <section :class="$style.tech">
        <div class="container">
            <div class="heading">
                <h2 class="title">Стек технологий</h2>

                <p>
                    Список изученных технологий постоянно растет, ведь я не стою на месте!<br>Кликнув на интересующую
                    технологию,
                    ниже можно увидеть проекты, в которые она включена.
                </p>
            </div>

            <ul :class="$style.list">
                <li v-for="tech in TECH_ITEMS" :key="tech.id" :title="tech.title"
                    :class="[$style.item, { [$style.active]: tech.id === activeTech?.id }]" @click="activeTech = tech">
                    <img :src="`/img/tech-icons/${tech.id}.svg`" :alt="tech.title" />

                    <span :class="$style.itemTitle">{{ tech.title }}</span>
                </li>
            </ul>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { TECH_ITEMS } from "@/consts";
import { TechItem } from "@/types";

const activeTech = defineModel<TechItem | null>();
</script>

<style lang="scss" module>
.tech {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 35px 15px;
}

.item {
    border: 2px solid transparent;
    border-radius: 8px;
    padding: 13px;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    @include trans();
    transition-delay: .15s;
    position: relative;
    cursor: pointer;
    user-select: none;

    &:hover {
        border-color: #8E7C93;
        box-shadow: 5px 5px 18px -5px rgba(0, 0, 0, 0.75);
        transform: translate(-5px, -5px);

        .itemTitle {
            opacity: 1;
            transform: translateY(25px);
        }
    }

    &.active:hover {
        border-color: #DCC48E;
    }

    &.active {
        background-color: #DCC48E;
        transform: translate(-5px, -5px);
        box-shadow: 5px 5px 18px -5px rgba(0, 0, 0, 0.75);

        img {
            filter: invert(0);
        }

        .itemTitle {
            opacity: 1;
            transform: translateY(25px);
        }
    }

    img {
        @include trans();
        width: 100%;
        filter: invert(0.8);
    }

    @media (max-width: 768px) {
        width: 60px;
        height: 60px;
        padding: 8px;
    }

    @media (max-width: 400px) {
        width: 50px;
        height: 50px;
    }
}

.itemTitle {
    @include trans();
    position: absolute;
    bottom: -5px;
    font-size: 12px;
    transition-delay: .15s;
    font-weight: 600;
    opacity: 0;
    pointer-events: none;
}
</style>