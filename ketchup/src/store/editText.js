const texteditor = {
    strict: true,
    namespace: true,
    state: {
            fill:'#000000',
            fontsize:24,
            fontfamily: {"fontfamily": "inherit"},
            fontstyle: 'nomal',
            fontWeight:'nomal',
            textAlign:'',
            textDecoration:''
    },
    getter: {
    },
    mutations: {
        setfill(state,data){
            state.fill = data
        },
        setfontsize(state,data){
            state.fontsize = data
        },
        setfontfamily(state,data){
            state.fontfamily = data
        },
        setfontstyle(state,data){
            state.fontstyle = data
        },
        setfontweight(state,data){
            state.fontWeight = data
        },
        settextAlign(state,data){
            state.textAlign = data
        },
        settextDecoration(state,data){
            state.textDecoration = data
        },

    },
    actions: {

    },
    modules:{

    }
}
export default texteditor