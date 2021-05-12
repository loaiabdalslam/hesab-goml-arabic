/*
var app1 = new Vue({
	el:"#elhome-container",
	data:{
		message: "Hello From The Other Side"
	}
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})


var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})


var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'ABCDEFG'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})


var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})
*/



var goml_gafr = new Vue({
  el:'#goml_gafr',
  data: {
    char_len:0,
    unique_char_len :0,
    goml_large_value: 0,
    goml_small_value: 0,
    goml_small_value_amz:0,
    goml_large_value_amz:0
  },
  methods:{
    logger: function () {
      this.goml_large_value = calculateGoml(numbers_goml_large,this.$refs.textboxObj.value)
      this.goml_small_value = calculateGoml(numbers_goml_small,this.$refs.textboxObj.value)
      this.goml_large_value_amz = calculateGoml(numbers_goml_amazaghi_large,this.$refs.textboxObj.value)
      this.goml_small_value_amz = calculateGoml(numbers_goml_small_amazaghi,this.$refs.textboxObj.value)
      this.char_len = CharsInText(this.$refs.textboxObj.value)[0]
      this.unique_char_len = CharsInText(this.$refs.textboxObj.value)[1]
    }
  }
})