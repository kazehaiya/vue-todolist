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
                    isFinished: false,
                    isHidden: true
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
        todos: [{
            contents: "example list",
            isFinished: false,
            isHidden: true
        }]
    },
    methods: {
        changestate: function(pos) {
            pos.isFinished = !pos.isFinished;
        },
        delete_list: function(pos) {
            pos.isHidden = !pos.isHidden;
        },
        toogleSeen: function(pos) {
            pos.isHidden = !pos.isHidden;
        }
    }
})