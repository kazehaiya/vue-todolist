var STORE_NAME = "listItem";
var storage = window.localStorage;

var title = new Vue({
    el: "#the_title",
    data: {
        message: "Vue TodoList",
        newItem: ""
    },
    methods: {
        add: function() {
            var content = this.newItem.trim();
            // 不为空则添加待办事项
            if (content.length > 0 && typeof content == "string") {
                list.todos.push({
                    contents: content,
                    isFinished: false
                });
                this.newItem = "";
            }
        }
    }
});

var list = new Vue({
    el: "#list",
    data: {
        right: "right",
        todos: []
    },
    mounted: function () {
        this.getList();
    },
    methods: {
        changestate: function(pos) {
            pos.isFinished = !pos.isFinished;
        },
        delete_list: function(pos) {
            this.todos.splice(pos, 1);
        },
        toogleSeen: function(pos) {
            pos.isHidden = !pos.isHidden;
        },
        getList: function(){
            this.todos = JSON.parse(storage.getItem(STORE_NAME) || '[]');
        },
        setList: function() {
            storage.setItem(STORE_NAME,JSON.stringify(this.todos));
        }
    },
    watch: {
        todos: {
            handler: function(){
                this.setList();
            },
            deep: true
        }
    }
});
