export const themeColorTaggle=()=>({type:'THEME_COLOR'});

export const fatchLoading=()=>({type:'FATCH_LOADING'});
export const fatchLoaded=()=>(dispatch)=>{
    setTimeout(()=>dispatch('FATCH_LOADED'),1000);    
};