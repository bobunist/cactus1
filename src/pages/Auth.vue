<template>
    <div class="flex flex-col justify-center text-center items-center">
        <p class="text-2xl mt-12 mb-12">Регистрация</p>
        <div class="flex flex-col justify-between space-y-6 border px-4 py-6 rounded-xl">
            <my-input @input="setEmail(regForm.email)" v-model="regForm.email" inputType="text" hint="Почта:"></my-input>
            <my-input @input="setFirstName(regForm.firstName)" v-model="regForm.firstName" inputType="text"
                hint="Имя:"></my-input>
            <my-input @input="setMiddleName(regForm.middleName)" v-model="regForm.middleName" inputType="text"
                hint="Фамилия:"></my-input>
            <my-input @input="setPhoneNumber(regForm.phoneNumber)" v-model="regForm.phoneNumber" inputType="text"
                hint="Номер телефона:"></my-input>
            <my-input @input="setCity(regForm.city)" v-model="regForm.city" inputType="text" hint="Город:"></my-input>
            <my-input @input="setPassword(regForm.password)" v-model="regForm.password" inputType="password" hint="Пароль:"></my-input>
        </div>
        <button class="self-center text-white bg-primary rounded-lg w-fit px-4 py-2 mt-12">Зарегистрироваться</button>
    </div>
</template>
  
<script>
import { mapState, mapMutations } from 'vuex';

export default {
    computed: {
        ...mapState('regModule', [
            'email',
            'firstName',
            'middleName',
            'phoneNumber',
            'city',
        ])
    },
    data() {
        return {
            regForm: {
                email: '',
                firstName: '',
                middleName: '',
                phoneNumber: '',
                city: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapMutations({
            setEmail: 'regModule/setEmail',
            setFirstName: 'regModule/setFirstName',
            setMiddleName: 'regModule/setMiddleName',
            setPhoneNumber: 'regModule/setPhoneNumber',
            setCity: 'regModule/setCity',
            setPassword: 'regModule/setPassword',
        }),
        updateData() {
            this.updateForm({
                email: this.regForm.email,
                firstName: this.regForm.firstName,
                middleName: this.regForm.middleName,
                phoneNumber: this.regForm.phoneNumber,
                city: this.regForm.city,
            })
        }
    }
}
</script>
  