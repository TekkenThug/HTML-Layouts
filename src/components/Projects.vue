<template>
    <section>
        <div class="container">
            <div class="heading">
                <h2 class="title">Портфолио работ</h2>
                <p>Здесь распологаются мои работы: от верстки макетов до полноценных сайтов. <br> Кто знает, может когда
                    нибудь тут появятся полноценные API :)</p>
            </div>

            <div :class="$style.content">
                <transition-group name="list">
                    <div v-for="project in filteredProjects" :key="project.image"
                        :class="[$style.item, { [$style['has-link']]: project.link }]">
                        <a v-if="project.link" :href="project.link">
                            <img :src="project.image" alt="">
                            <span v-if="project.link">Смотреть</span>
                        </a>

                        <img v-else :src="project.image" alt="">
                    </div>
                </transition-group>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { PROJECTS } from '@/consts';
import { TechItem } from '@/types';
import { computed } from 'vue';

const props = defineProps<{ active: TechItem | null }>()

const filteredProjects = computed(() => {
    if (!props.active) return PROJECTS;

    return PROJECTS.filter(item => item.tags.includes(props.active.id));
});
</script>

<style lang="scss" module>
.content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 15px;
    column-gap: 10px;

    @media (max-width: 986px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 400px) {
        grid-template-columns: 1fr;
    }
}

.item {
    @include trans();

    a {
        display: block;
    }

    img {
        width: 100%;
        display: block;
        @include trans();
    }

    span {
        display: inline-block;
        opacity: 0;
        visibility: hidden;
        position: absolute;
        top: 50%;
        left: 50%;
        font-weight: 500;
        @include titleFont();
        font-size: 36px;
        color: #1E1E24;
        transform: translate(-50%, -50%);
        @include trans();
    }

    &.has-link {
        &:hover {
            background-color: #DCC48E;
            color: #1E1E24;
            border-radius: 5px;
            transform: translate(-5px, -5px);
            box-shadow: 5px 5px 18px -5px rgba(0, 0, 0, 0.75);

            img {
                opacity: 0;
            }

            span {
                opacity: 1;
                visibility: visible;
            }
        }
    }
}
</style>