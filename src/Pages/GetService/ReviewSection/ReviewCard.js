import React from 'react';
import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../Context/AuthProvider/Authprovider';

const ReviewCard = ({review}) => {
    const { reviews}=review
    const {user} =useContext(AuthContext)
    return (
        <div>
    
 <div className="container  flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-900 dark:text-gray-100">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div>
            <p className="">{user?.photoURL?
<img className='rounded-full h-14 w-14' src={user?.photoURL} alt="" /> :
<FaUserCircle className='h-10 w-10'></FaUserCircle>
} </p>
			</div>
			<div>
				<h4 className="font-bold">{user?.displayName}</h4>
				<span className="text-xs dark:text-gray-400">2 days ago</span>
			</div>
		</div>
		
	</div>
	<div className="p-4 space-y-2 text-sm dark:text-gray-400">
		
    <span>{reviews}</span>
	</div>
</div> 
                
        </div>
    );
};

export default ReviewCard;