<template>
    <b-navbar toggleable="lg" type="light" fixed='top' class='px-1' variant='light'>
        <img src="/img/logo.png">
        <div class="d-flex flex-column mx-2">
            <small class="text-center py-0 text-info">Медицинский центр</small>
            <span class="text-primary text-center mx-0">ИНТЕЛ-МЕДИС</span>
        </div>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item v-for="el in links" :key="el" :to="'/'+el.to">{{el.name}}</b-nav-item>
                <b-nav-item-dropdown right>
                    <template v-slot:button-content>
                        Лечение
                    </template>
                    <b-dropdown-item v-for='el in drops' :key='el' :to='"/"+el.to'>{{el.name}}</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>
<script>
export default {
    data:()=>({
        links:[
            {
                name:'Главная',
                to:''
            },
            {
                name:'Контакты',
                to:'contact'
            },
            {
                name:'Документы',
                to:'document'
            },
            {
                name:'Вызов на дом',
                to:'doctor'
            },
            {
                name:'Оплата',
                to:'cost'
            }
        ],
        drops:[
            {
                name:'Выведение из запоя',
                to:''
            },
            {
                name:'Алкогольная Зависимость',
                to:'',
            },
            {
                name:'Никотиновая Зависимость',
                to:''
            },
            {
                name:'Игромания',
                to:"",
            },
            {
                name:"Физиотерапия",
                to:""
            }
        ]
    })
}
</script>