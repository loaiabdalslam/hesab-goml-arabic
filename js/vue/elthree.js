
var goml_gafr = new Vue({
    el:'#dynamic_gafr',
    data: {
        charsequence:'',
        chargomlsequence:'',
        charsequence_ques:'',
        chargomlsequence_ques:'',
        mixed_array:'',
    },
    methods:{
      logger: function () {
        charsequence =  unique_char(this.$refs.reveal_sentence.value)
        this.charsequence = charsequence.split("").join(" - ")
        this.$refs.seq_char.value = this.charsequence
        this.chargomlsequence = getlistofchar_backlistofnumbers(numbers_goml_small,charsequence.split(""))
        this.$refs.seq_goml_char.value = this.chargomlsequence.join(" - ")
        

      },
      logger_ques: function(){
        charsequence_ques =  unique_char(this.$refs.reveal_sentence_ques.value)
        this.charsequence_ques = charsequence_ques.split("").join(" - ")
        
        this.$refs.seq_char_ques.value = this.charsequence_ques
        this.chargomlsequence_ques = getlistofchar_backlistofnumbers(numbers_goml_small,charsequence_ques.split(""))
        this.$refs.seq_goml_char_ques.value = this.chargomlsequence_ques.join(" - ")




      if( this.chargomlsequence.length == this.chargomlsequence_ques.length){
          mixed_array = []
          for(var x = 0; x < this.chargomlsequence.length; x++){
            
            mixed_array.push(this.chargomlsequence[x] + this.chargomlsequence_ques[x])

          }
          //console.log(mixed_array)
          this.$ref.the_answer_gafr.value = backlistofchar_getlistofnumbers(numbers_goml_small_seq,mixed_array).join(" - ")



      }else{
          console.log("not ok ")
      }
      

      }
    }
  })