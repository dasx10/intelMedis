<template>
  <b-container>
    <h2 class='text-center'>Авторизация</h2>
    <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">
      <b-form-group label="Email:" label-for="input-1">
        <b-form-input id="input-1" v-model.trim="form.email" type="email" required placeholder="Введите email" ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Пароль:" label-for="input-2">
        <b-form-input id="input-2" v-model.trim="form.password" type='password' required placeholder="Введите пароль" ></b-form-input>
      </b-form-group>
      <div class="text-center my-4">
        <b-button type="submit" class='mx-2' variant="primary">Вход</b-button>
        <b-button type="reset" class='mx-2' variant="danger">Сброс</b-button>
      </div>
    </b-form>
  </b-container>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          password: '',
        },
        show: true
      }
    },
    methods: {
      async onSubmit() {
        let req = await this.$store.dispatch('login',this.form);
        console.log(req)
      },
      onReset(){
        this.form.email = ''
      }
    }
  }
</script>