export enum Tech {
    Html = "html",
    Css = "css",
    JavaScript = "js",
    TypeScript = "ts",
    React = "react",
    Vue = "vue",
    Jquery = "jquery",
    Sass = "sass",
    PHP = "php",
    Laravel = "laravel",
    MySQL = "mysql",
    GIT = "git",
    NodeJS = "nodejs",
}

export type TechItem = { id: Tech; title: string; };

export type Project = { link?: string; image: string; tags: Tech[] };