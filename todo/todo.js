var vm=new Vue({
    el:"#root",
    data:{
        text:"",
        lis:localStorage.todo?JSON.parse(localStorage.todo):[],
        state:2
    },
    methods:{
        add(){
            if(!this.text){
                alert("请输入内容");
                return ;
            }
            var ids=0;
            this.lis.push({id:++ids,title:this.text,style:0});
            this.text="";
        },
        changeState(val){
            this.state=val;
        },
        change(value){
            value.style=value.style==0?1:0;
        },
        del(id){
            this.lis=this.lis.filter(el=>{
                return el.id!=id;
            })
        },
        edit(obj){
            obj.edit = !obj.edit;
        }
    },
    computed: {
        stat() {
            return this.lis.filter((ele)=>{
                if(this.state==2){
                    return ele;
                }else{
                    return ele.style==this.state;
                }
            })
        }
    }
});
vm.$watch('lis',function(){
    localStorage.todo=JSON.stringify(this.lis);
},{deep:true});