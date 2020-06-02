<template>
    <div>
        <h2 class="text-center">Физиотерапия</h2>
        <div class="my-5">
            <img src="/img/narcologyFiz/1.jpg" class="float-lg-left pr-lg-4">
            <div class="bl">
                <p> В медицинском центре «ИНТЕЛ-МЕДИС» в комплексном лечении, а также дальнейшей реабилитации больных, мы максимально полно используются современные физиотерапевтические методики. </p>
                <h4>Используем такие виды физиотерапевтического лечения:</h4>
                <ul>
                    <li>Электросон-терапия</li>
                    <li>Транскраниальная электростимуляция</li>
                    <li>Электротранквилизация <router-link to="/fiz/electro" title="подробнее..."><b-icon icon="info-circle"></b-icon></router-link></li>
                    <li>Дарсонвализация <router-link to="/fiz/dars" title="подробнее..."><b-icon icon="info-circle"></b-icon></router-link></li>
                    <li>Красная/инфракрасная лазерная терапия <router-link to="/fiz/lazer" title="подробнее..."><b-icon icon="info-circle"></b-icon></router-link></li></ul>
                        <h5> Подробно о применении в наркологии </h5>
                        <ul>
                            <li>
                                <router-link to="/fiz/electro/narcology">Электротранквилизации</router-link>
                            </li>
                            <li>
                                <router-link to="/fiz/lazer/narcology">Лазерной терапии</router-link>
                            </li>
                        </ul>
            </div>
        </div>
        <div class="my-5">
            <img src="/img/narcologyFiz/2.jpg" class="float-lg-right pl-lg-4">
            <div class="bl">
                <p> Физиотерапевтические методики способствуют быстрейшему восстановлению больных, нормализации вегетативно-сосудистых, неврологических и соматических расстройств (снижается болевой синдром, улучшаются функции легких, почек, в организме улучшается кровообращение, обмен веществ, повышается сопротивляемость организма). Также применение этих методов лечения позволяет повысить эффективность проводимой терапии, снизить дозу психотропных препаратов, получаемых пациентами, и уменьшить продолжительность лечения. </p><p> Использование физиотерапии в реабилитационных программах, наряду с клинической реабилитацией признано как одно из наиболее действенных направлений эффективных наркологических программ в странах Европы и США. </p>
                <button @click="$router.push('/fiz/info')" type="button" class="btn mt-5 btn-primary" style="max-width: 200px;">Подробнее</button>
                </div>
            </div>
    </div>
</template>
<style lang="scss" scoped>
img{
    height: 33%;
    min-height: 200px;
    max-height: 350px;
}
</style>