
import { useDispatch, useSelector } from 'react-redux';
import { fatchLoaded, fatchLoading, themeColorTaggle } from '../../Redux/Actions/baseAppActions';
import './MainLayout.css';
import {BarWave} from 'react-cssfx-loading';


const MainLayout=()=>{
    const dispatch=useDispatch();
    const {fatch_loading,theme_color}=useSelector(({baseAppReducer})=>baseAppReducer);

    return(
        <div  className='MainApp' style={{backgroundColor:theme_color?'white':'black',color:theme_color?'black':'white'}}>
            {fatch_loading&&<BarWave color={theme_color?'black':'white'} className='LoadingStatus' width='50px' height='50px'/>}
            <h1>MainLayout</h1>
            <button onClick={()=>dispatch('TEST')}>Test REDUX</button>
            <button onClick={()=>dispatch(themeColorTaggle())}>Change Theme Color</button>
            <button onClick={()=>dispatch(fatch_loading?fatchLoaded():fatchLoading())}>Loading Toggle</button>
        </div>
    )
}

export default MainLayout;