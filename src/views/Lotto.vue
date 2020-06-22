<template>
  <div>
    <h1>로또 번호 추천</h1>
    <button @click="pick">로또 번호 추천</button>
    <div>
      {{ choice }}
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'Lotto',
  data() {
    return {
      choice: []
    }
  },
  methods: {
    pick() {
      this.choice = _.sampleSize(_.range(1, 46), 6)
      // menu 배열의 메뉴 중, 하나를 랜덤하게 선택한다.
    }
  }
}
</script>

<style>

</style>