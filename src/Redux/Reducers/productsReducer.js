const initState={
    products:[]
}

const productsReducer=(state=initState,action)=>{
    const funcs={
        'LOAD_PRODUCTS':()=>({...state,products:action.payload}),
        'ADD_PRODUCT':()=>alert(action.payload),
        'DEL_PRODUCT':()=>alert(action.payload)
    }

    if(Object.keys(funcs).includes(action.type))
    return funcs[action.type]();
    else 
    return state;
}

export default productsReducer;