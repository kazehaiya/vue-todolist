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
})

var list = new Vue({
    el: "#list",
    data: {
        right: "right",
        todos: []
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
        }
    }
})