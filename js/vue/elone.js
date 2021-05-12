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
    el:'#nature_gafr',
    data: {
      light:0,
      dark :0,
      water: 0,
      air: 0,
      fire:0,
      soil:0,
      total_natures:0,
      predominant :'برجاء كتابة اي جملة للكشف عن الطبائع'
    },
    methods:{
      logger: function () {
        natures = calculate_nature_of_chars(numbers_goml_small_balance,nature_goml,this.$refs.textboxObj.value)
        this.light = natures['light']
        this.dark = natures['dark']
        this.water = natures['water']
        this.air = natures['air']
        this.fire = natures['fire']
        this.soil = natures['soil']
        this.predominant = natures_in_arabic[Object.keys(natures).reduce((a, b) => natures[a] > natures[b] ? a : b)];
        this.total_natures = this.light+this.dark+this.water+this.air+this.fire+this.soil
      },
      get_percentage: function(nature){
        nature_percent = Math.round((this[nature] / this.total_natures) * 100,2)
        nature_name = natures_in_arabic[nature]
        return `نسبة عنصر ${nature_name} تساوي ${nature_percent} %`

      }
    }
  })