<script setup lang="ts">
import Swiper, { Swiper as SwiperInstance } from "swiper";
import { Autoplay } from "swiper/modules";
import 'swiper/css';

import AOS from "aos";
import "aos/dist/aos.css";

import { ref, onMounted, computed } from "vue";
import "@/assets/scss/style.scss";

const headerSliderElement = ref<HTMLElement | null>(null);
const headerSlider = ref<SwiperInstance | null>(null);
const setupSlider = () => {
  if (!headerSliderElement.value) return;

  headerSlider.value = new Swiper(headerSliderElement.value, {
    modules: [Autoplay],
    autoplay: {
      delay: 1000,
    },
    speed: 2000,
    loop: true,
    breakpoints: {
      1280: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 3,
      },
      600: {
        slidesPerView: 2,
      },
      480: {
        slidesPerView: 1,
      }
    }
  });
};

const setupScrollAnimation = () => {
  AOS.init({
    offset: 500,
    duration: 1000,
    delay: 100,
    once: true,
  });
};

onMounted(() => {
  setupSlider();
  setupScrollAnimation();
});

type Tech = { id: string; title: string; image: string };
type Project = { link?: string; image: string; tags: string[] };

const activeTech = ref<Tech | null>(null);
const techItems = ref<Tech[]>([
  {
    id: "html",
    title: "HTML5",
    image: "/img/tech-icons/html5.svg"
  },
  {
    id: "css",
    title: "CSS3",
    image: "/img/tech-icons/css.svg",
  },
  {
    id: "js",
    title: "JavaScript",
  },
  {
    id: "jquery",
    title: "jQuery",
    image: "/img/tech-icons/jquery-2.svg",
  },
  {
    id: "sass",
    title: "Sass",
    image: "/img/tech-icons/sass-1.svg",
  },
  {
    id: "php",
    title: "PHP",
    image: "/img/tech-icons/php-1.svg",
  },
  {
    id: "mysql",
    title: "MySQL",
    image: "/img/tech-icons/mysql-6.svg",
  },
]);
const setActiveTech = (id: string) => {
  activeTech.value = techItems.value.find(item => item.id === id) ?? null;
}

const projects = ref<Project[]>([
  {
    link: "projects/culture/index.html",
    image: "/img/thumb/culture.png",
    tags: ["html", "css"]
  },
  {
    link: "projects/kvast/index.html",
    image: "/img/thumb/kvast.png",
    tags: ["html", "css"]
  },
  {
    link: "projects/marketika/index.html",
    image: "/img/thumb/marketika.png",
    tags: ["html", "css", "js", "sass"]
  },
  {
    link: "projects/merkury/index.html",
    image: "/img/thumb/merkury.png",
    tags: ["html", "css", "js", "jquery", "sass"]
  },
  {
    image: "/img/thumb/shebestan.png",
    tags: ["html", "css", "js", "jquery", "sass", "php", "mysql"],
  },
  {
    link: "projects/surfers-co/index.html",
    image: "/img/thumb/surfers.png",
    tags: ["html", "css", "js", "jquery", "sass", "bootstrap"],
  },
  {
    link: "projects/web-developer/index.html",
    image: "/img/thumb/webdeveloper.png",
    tags: ["html", "css", "js", "jquery", "sass", "bootstrap"],
  },
  {
    link: "projects/pravdom/index.html",
    image: "/img/thumb/logotype.png",
    tags: ["html", "css", "js", "jquery"],
  },
  {
    link: "projects/wooder/index.html",
    image: "/img/thumb/logotype.png",
    tags: ["html", "css", "js", "jquery", "sass"],
  },
  {
    link: "projects/erp/index.html",
    image: "/img/thumb/logotype.png",
    tags: ["html", "css", "js", "jquery", "sass"],
  },
  {
    link: "projects/go-surf/index.html",
    image: "/img/thumb/logotype.png",
    tags: ["html", "css", "js", "jquery", "sass"],
  },
  {
    link: "projects/interface/index.html",
    image: "/img/thumb/logotype.png",
    tags: ["html", "css", "js", "jquery", "sass"],
  },
  {
    link: "projects/martin/index.html",
    image: "/img/thumb/logotype.png",
    tags: ["html", "css", "js", "jquery", "sass"],
  }
]);
const filteredProjects = computed(() => {
  if (!activeTech.value) return projects.value;

  return projects.value.filter(item => item.tags.includes(activeTech.value!.id)); 
});
</script>
<template>
  <header class="header swiper" ref="headerSliderElement">
      <div class="header__slider swiper-wrapper">
         <div v-for="slide in 8" :key="slide" class="header__slider-item swiper-slide">
            <img :src="`/img/slider/${slide}.jpg`" alt="">
         </div>
      </div>
   </header>

   <section class="cv">
      <div class="container">
         <div class="image__wrapper">
            <img src="/img/vadim.png" alt="">
         </div>
         <h1 class="cv__title">Vadim Ignatov</h1>
         <ul class="cv__subtitle">
            <li>// Frontend разработчик</li>
         </ul>
      </div>
   </section>

   <section class="about" data-aos="fade-up">
      <div class="container">
         <div class="heading">
            <h2 class="title">О себе</h2>
            <p>Я пытаюсь расположить людей к себе. Для этого я стараюсь рассказать о себе.<br>Здесь кратко изложены
               сведения о моей жизни :)</p>
         </div>
         <div class="grid__wrapper">
            <div class="grid__item biography">
               <h3 class="grid__title">Биография</h3>
               <p class="grid__text">
                  Молодой парень, 19 лет. Живу в городе Москве, занимаюсь разработкой в сфере веба
                  уже около года,
                  достаточно перспективный молодой человек, люблю
                  выполнять интересные задачи, с легкостью и любознательностью отношусь к изучению новых различных
                  технологий, библиотек, методов.
               </p>
            </div>
            <div class="grid__item education">
               <h3 class="grid__title">Образование</h3>
               <p class="grid__text">
                  В данный момент обучаюсь на втором курсе университета <a href="http://www.mtuci.ru" target="_blank">МТУСИ</a>, на направлении
                  «Информационные системы и технологии»
                  <br>
                  Проходил курсы на портале <a href="https://htmlacademy.ru" target="_blank">htmlacademy</a> по основам верстки на HTML/CSS/JS, после стал самообучаться.
               </p>
            </div>
            <div class="grid__item hobby">
               <h3 class="grid__title">Увлечения</h3>
               <p class="grid__text">Мое хобби - чтение (предпочитаю классику XIX-XX вв.) и занятие спортом. Досуг провожу на открытом воздухе, иногда играю в компьютерные игры.</p>
            </div>
         </div>
      </div>
   </section>

   <section class="tech" data-aos="fade-up">
      <div class="container">
         <div class="heading">
            <h2 class="title">Стек технологий</h2>
            <p>Список изученных технологий постоянно растет, ведь я не стою на месте!<br>Кликнув на интересующую
               технологию,
               ниже можно увидеть проекты, в которые она включена.</p>
         </div>
         <ul class="tech__list">
            <li
              v-for="(tech, index) in techItems"
              :key="tech.id"
              :title="tech.title"
              :class="['tech__item', { 'active': tech.id === activeTech?.id }]"
              @click="setActiveTech(tech.id)"
            >
              <img
                :src="`/img/tech-icons/${tech.id}.svg`"
                :alt="tech.title"
                data-aos="fade"
                :data-aos-delay="(index + 1) * 150"
              >
            </li>
         </ul>
      </div>
   </section>

   <section class="projects" id="projects" data-aos="fade-up">
      <div class="container">
         <div class="heading">
            <h2 class="title">Портфолио работ</h2>
            <p>Здесь распологаются мои работы: от верстки макетов до полноценных сайтов. <br> Кто знает, может когда
               нибудь тут появятся полноценные API :)</p>
         </div>

         <div class="projects__content">
            <transition-group name="list">
              <div
                v-for="project in filteredProjects"
                :key="project.image"
                :class="['projects__item', { 'has-link': project.link }]"
              >
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
   
   <footer class="footer" data-aos="fade-up">
      <div class="container">
         <div class="heading">
            <h2 class="title">Контакты</h2>
            <p>Если вам интересно мое резюме и вы хотите сотрудничать со мной, здесь я оставлю контакты для связи :)</p>
         </div>

         <ul class="contact__list">
            <li class="contact__item"><a target="_blank" title="Я в VK" class="vk" href="https://vk.com/tekken_thug7"><img src="/img/contact/vk.svg" alt=""></a></li>
            <li class="contact__item"><a target="_blank" title="Я в Telegram" class="tg" href="https://t.me/Tekken_thug"><img src="/img/contact/tg.svg" alt=""></a></li>
            <li class="contact__item"><a target="_blank" title="Gmail" class="mail" href="mailto:ignatov0131@gmail.com"><img src="/img/contact/gmail.svg" alt=""></a></li>
            <li class="contact__item"><a target="_blank" title="Резюме на hh.ru" class="hh" href="https://hh.ru/resume/6bd4fcd6ff080a0a800039ed1f594873764b79"><img src="/img/contact/hh.svg" alt=""></a></li>
         </ul>
      </div>
   </footer>
</template>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all .7s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-active {
  display: none;
}
</style>
