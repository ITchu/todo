Vue.component('custom-input',{
    props:["title"],
    template:`
    <div class="input">
        <input type="text" @focus="focus" v-model="title">
    </div>
    `,
    methods:{
        focus(){
            this.$emit("change");
        }
    }
})



Vue.component('custom-list',{
    props:["custom","state"],
    template:`
    <ul class="list" v-show="state==true">
        <li v-for="item in custom" @click="click(item.title)">{{item.title}}</li>
    </ul>
    `,
    methods:{
        click(val){
            this.$emit("change",val)
        }
    }
})