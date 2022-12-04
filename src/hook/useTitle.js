import { useEffect } from 'react';

const useTitle = title => {
   
             useEffect(()=>{
        document.title=`${title}-Qian`
    },[title])
  
};

export default useTitle;