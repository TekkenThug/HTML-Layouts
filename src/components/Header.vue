<template>
    <header :class="$style.header">
        <div :class="$style.imageWrapper">
            <img src="/img/vadim.png" alt="">
        </div>

        <h1>Vadim Ignatov</h1>

        <ul :class="$style.subtitle">
            // Frontend разработчик
        </ul>
    </header>
</template>

<style module lang="scss">
.header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.imageWrapper {
    position: relative;
    width: 180px;
    height: 180px;
    margin: 0 auto;
    background-repeat: repeat;
    @include trans();

    &::before {
        content: "";
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23DCC48EFF' stroke-width='5' stroke-dasharray='8%2c 20' stroke-dashoffset='33' stroke-linecap='square'/%3e%3c/svg%3e");
        border-radius: 100px;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: all 1s ease-out;
    }

    &::after {
        content: "";
        border-radius: 100px;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        width: 100%;
        height: 100%;
        transition: all 1s ease-out;
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%2388498FFF' stroke-width='5' stroke-dasharray='8%2c 4' stroke-dashoffset='33' stroke-linecap='square'/%3e%3c/svg%3e");

    }

    &:hover::before {
        transform: rotate(120deg);
        opacity: 0;
    }

    &:hover::after {
        opacity: 1;
    }

    img {
        width: 100%;
        border-radius: 50%;
        padding: 2px;
    }
}

.subtitle {
    font-size: 20px;

    li {
        margin-bottom: 15px;
    }
}
</style>