var app = new Vue({
  el: '#app',
  data: {
    quiz: quiz, 
    current: 0, 
    success: null, 
    score: 0 
  },
  computed: {
    step: function step () {
      return this.quiz[this.current];
    }
  },
  methods: {
    submitButton: function submitButton (answer) {
      var correction = this.step.choices[this.step.answer];
      correction == answer ? this.success = true : this.success = false
    },
    submitText: function submitText () {
      var answer = this.$refs.textInput.value;
      var correction = this.step.answer;
      correction == answer ? this.success = true : this.success = false
    },
    nextQuestion: function nextQuestion () {
      if (this.success == true)
        this.score++
      this.success = null
      this.current++
    },
    buttonClasses: function buttonClasses (value) {
      var correction = this.step.choices[this.step.answer];
      if (this.success === true) {
        if (correction === value) {
          return 'btn-success';
        } else {
          return ''
        }
      }
      if (this.success === false) {
        if (correction === value) {
          return 'btn-outline-success';
        } else {
          return 'btn-outline-danger';
        }
      }
      return 'btn-outline-dark';
    }
  }
});