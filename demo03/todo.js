let vm = new Vue({
    el: '#app',
    data: {
        todos: [{
                isSelected: false,
                title: 'study'
            },
            {
                isSelected: false,
                title: 'code'
            }
        ],
        title: '',
        current: '',
        hash: ''
    },
    created() {
        this.todos = JSON.parse(localStorage.getItem('data')) || this.todos;
        this.hash = window.location.hash.slice(2) || all;
        window.addEventListener('hashchange', () => {
            this.hash = window.location.hash.slice(2) || all;
        }, false)
    },
    watch: {
        // deep watch
        todos: {
            handler() {
                localStorage.setItem('data', JSON.stringify(this.todos));
            },
            deep: true
        }
    },
    methods: {
        add() {
            this.todos.push({
                isSelected: false,
                title: this.title,
            });
            this.title = '';
        },
        remove(todo) {
            this.todos = this.todos.filter(item => item !== todo);
        },
        remember(todo) {
            this.current = todo;
        },
        cancel() {
            this.current = '';
        }
    },
    computed: {
        filterTools() {
            if (this.hash === 'all') {
                return this.todos
            }
            if (this.hash === 'completed') {
                return this.todos.filter(p => p.isSelected);
            }
            if (this.hash === 'incomplete') {
                return this.todos.filter(p => !p.isSelected)
            }
            return this.todos;
        },
        count() {
            return this.todos.filter(item => item.isSelected).length;
        }
    },
    directives: {
        focusAa(el, bindings) {
            if (bindings.value) {
                el.focus();
            }
        }
    }
})