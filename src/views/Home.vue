<template>
  <div>
    <div class="row d-flex border-bottom" v-for="i in 6" :key='i' :class='i%2==0?"flex-row-reverse":""'>
      <div class="col-lg-6 align-self-center py-2 py-lg-4">
        <h2>
          {{["Вызов врачей на дом","Выведение из запоя","Алкогольная Зависимость","Никотиновая Зависимость","Игромания","Физиотерапия"][i-1]}}
        </h2>
        <h5 class="my-2 my-lg-4">
          Если Вам не хочется выходить из дома и пользоваться общественным транспортом. Ваше состояние здоровья или Ваших родственников не позволяет свободно передвигаться по городу. Если Вы хотели бы видеть врача в определённое и удобное для Вас время суток</h5>
        <button type="button" class="btn mt-4 mx-auto mx-sm-1 px-4 btn-primary" style="max-width: 200px;">Подробнее</button>
      </div>
      <div class="col-lg-6 align-self-center d-sm-flex d-none my-1 my-md-2 my-lg-3">
        <img :src="`/img/home/${i-1}.jpg`">
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  img{
    width:95%;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.2) 5px 5px 10px;
  }
</style>