
var goml_gafr = new Vue({
    el:'#dynamic_gafr',
    data: {
        qes_sentence:'',
        unique_chars:'',
        takser_chars:''
    },
    methods:{
      logger: function () {
        qes_sentence =  unique_char(this.$refs.qes_sentence.value)
        this.unique_chars = qes_sentence.split("").join(" - ")
        this.$refs.unique_chars.value = this.unique_chars

        takser_chars = getlistofchar_backlistofnumbers(takser_table,qes_sentence)
        takser_chars = unique_char(takser_chars.join(""))
        this.$refs.takser_raw.value = takser_chars.split("").join(" - ")


        tathleth_raw = getlistofchar_backlistofnumbers(tathleth_table,takser_chars)
        tathleth_raw = unique_char(tathleth_raw.join(""))
        this.$refs.tathleth_raw.value = tathleth_raw.split("").join(" - ")

        this.$refs.answer_raw.value = unique_char(tathleth_raw+takser_chars).split("").join(" - ")

        array = unique_char(tathleth_raw+takser_chars).split("")
        console.log(array)
        

      },

    }
  })