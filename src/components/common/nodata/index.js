import nodataComponent from './nodata.vue'
const defaults = {
    target: "",
    text: "",
    flag: true,
    fontSize: 14,
    size: 'sm',
    img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAYAAACI7Fo9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNzA2YTI1MC0yYzdiLTcxNDQtYjU4Ny1mM2Y5MGE1M2E0ODgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTI3NTI3QkYyOTY1MTFFN0JDQTBFQTQ0NEU5RjcxRjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTI3NTI3QkUyOTY1MTFFN0JDQTBFQTQ0NEU5RjcxRjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA3MDZhMjUwLTJjN2ItNzE0NC1iNTg3LWYzZjkwYTUzYTQ4OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowNzA2YTI1MC0yYzdiLTcxNDQtYjU4Ny1mM2Y5MGE1M2E0ODgiLz4gPC9y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'
}

function merag(target) {
    for (let i = 1, j = arguments.length; i < j; i++) {
        let source = arguments[i] || {};
        for (let prop in source) {
            if (source.hasOwnProperty(prop)) {
                let value = source[prop];
                if (value !== undefined) {
                    target[prop] = value;
                }
            }
        }
    }
    return target;
};
const nodata = {
    install: function(Vue) {
        var nodataConstructor = Vue.extend(nodataComponent);
        Vue.prototype.$nodata = function(options) {
            console.log(options);
            var data = merag({}, defaults, options);
            var nodatas = new nodataConstructor({
                data() {
                        return data;
                    },
                    methods: {
                        close() {
                            this.flag = false
                        }
                    },
                    computed: {
                        newSize() {
                            return 'pio-nodata-content pio-nodata-' + this.size;
                        }
                    }
            })
            Vue.nextTick(function() {
                document.querySelector(data.target).appendChild(nodatas.$mount().$el);
            })
        }
    }
}

export default nodata;