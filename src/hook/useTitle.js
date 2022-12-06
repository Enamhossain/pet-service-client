import { useEffect } from 'react';

const useTitle = title => {
   
             useEffect(()=>{
        document.title=`pats-${title}`
     },[title])
  
};

export default useTitle;