new Vue({
  el: "#app",
  data:{
    id: 1,
    name: "",
    course: "",
    term: "",
    studentsList: [],
  },
  methods: {
    addLast: function(){
      this.studentsList.push({id: this.id, name: this.name, course: this.course, term: this.term});
      this.id ++;
    }
  }
})