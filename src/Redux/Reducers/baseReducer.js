const initState={
    fatch_loading:false,
    theme_color:true,
}

const baseAppReducer=(state=initState,action)=>{

    const funcs={
        'TEST':()=>{alert('TEST');return state},
        'THEME_COLOR':()=>({...state,theme_color:!state.theme_color}),

        //---LOADING STATUS
        'FATCH_LOADING':()=>({...state,fatch_loading:true}),
        'FATCH_LOADED':()=>({...state,fatch_loading:false}),
    }

    if(Object.keys(funcs).includes(action.type))
    return funcs[action.type]();
    else 
    return state;  

    

}

export default baseAppReducer;