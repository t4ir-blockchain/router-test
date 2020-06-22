<template>
  <div>
    <h1>점심메뉴 추천</h1>
    <button @click="pick">랜덤메뉴 추천</button>
    <div>
      {{ choice }}
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'Lunch',
  data() {
    return {
      choice: '',
      menu: ['노랑통닭', '소풍', '김밥카페', '양자강', '순남시레기']
    }
  },
  methods: {
    pick() {
      this.choice = _.sample(this.menu)
      // menu 배열의 메뉴 중, 하나를 랜덤하게 선택한다.
    }
  }
}
</script>

<style>

</style>