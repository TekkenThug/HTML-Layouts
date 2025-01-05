import { TechItem, Tech, Project } from "./types";

export const TECH_ITEMS: TechItem[] = [
  {
    id: Tech.Html,
    title: "HTML5",
  },
  {
    id: Tech.Css,
    title: "CSS3",
  },
  {
    id: Tech.JavaScript,
    title: "JavaScript",
  },
  {
    id: Tech.TypeScript,
    title: "TypeScript",
  },
  {
    id: Tech.React,
    title: "React",
  },
  {
    id: Tech.Vue,
    title: "Vue",
  },
  {
    id: Tech.Jquery,
    title: "jQuery",
  },
  {
    id: Tech.Sass,
    title: "Sass",
  },
  {
    id: Tech.PHP,
    title: "PHP",
  },
  {
    id: Tech.Laravel,
    title: "Laravel",
  },
  {
    id: Tech.MySQL,
    title: "MySQL",
  },
  {
    id: Tech.GIT,
    title: "GIT",
  },
  {
    id: Tech.NodeJS,
    title: "NodeJS",
  },
];

export const PROJECTS: Project[] = [
  {
      link: "projects/culture/index.html",
      image: "/img/thumb/culture.png",
      tags: [Tech.Html, Tech.Css]
  },
  {
      link: "projects/kvast/index.html",
      image: "/img/thumb/kvast.png",
      tags: [Tech.Html, Tech.Css]
  },
  {
      link: "projects/marketika/index.html",
      image: "/img/thumb/marketika.png",
      tags: [Tech.Html, Tech.Css, Tech.JavaScript, Tech.Sass]
  },
  {
      link: "projects/merkury/index.html",
      image: "/img/thumb/merkury.png",
      tags: [Tech.Html, Tech.Css, Tech.JavaScript, Tech.Sass, Tech.Jquery]
  },
  {
      image: "/img/thumb/shebestan.png",
      tags: [Tech.Html, Tech.Css, Tech.JavaScript, Tech.Sass, Tech.Jquery, Tech.PHP, Tech.MySQL],
  },
  {
      link: "projects/surfers-co/index.html",
      image: "/img/thumb/surfers.png",
      tags: [Tech.Html, Tech.Css, Tech.JavaScript, Tech.Sass, Tech.Jquery],
  },
  {
      link: "projects/web-developer/index.html",
      image: "/img/thumb/webdeveloper.png",
      tags: [Tech.Html, Tech.Css, Tech.JavaScript, Tech.Sass, Tech.Jquery],
  },
  {
      link: "projects/pravdom/index.html",
      image: "/img/thumb/logotype.png",
      tags: [Tech.Html, Tech.Css, Tech.JavaScript, Tech.Jquery],
  },
  {
      link: "projects/wooder/index.html",
      image: "/img/thumb/logotype.png",
      tags: [Tech.Html, Tech.Css, Tech.JavaScript, Tech.Sass, Tech.Jquery],
  },
  {
      link: "projects/erp/index.html",
      image: "/img/thumb/logotype.png",
      tags: [Tech.Html, Tech.Css, Tech.JavaScript, Tech.Sass, Tech.Jquery],
  },
  {
      link: "projects/go-surf/index.html",
      image: "/img/thumb/logotype.png",
      tags: [Tech.Html, Tech.Css, Tech.JavaScript, Tech.Sass, Tech.Jquery],
  },
  {
      link: "projects/interface/index.html",
      image: "/img/thumb/logotype.png",
      tags: [Tech.Html, Tech.Css, Tech.JavaScript, Tech.Sass, Tech.Jquery],
  },
  {
      link: "projects/martin/index.html",
      image: "/img/thumb/logotype.png",
      tags: [Tech.Html, Tech.Css, Tech.JavaScript, Tech.Sass, Tech.Jquery],
  },
  {
      link: "projects/mavic/index.html",
      image: "/img/thumb/logotype.png",
      tags: [Tech.Html, Tech.Css, Tech.JavaScript, Tech.Sass, Tech.Jquery],
  }
];
