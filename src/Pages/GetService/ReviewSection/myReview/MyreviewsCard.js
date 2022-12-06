import { Table } from 'flowbite-react';
import React from 'react';
import { FaTrash } from 'react-icons/fa';

const MyreviewsCard = ({review}) => {
    const{reviews,_id}=review
     
    const handleDelete = id =>{

        const proceed = window.confirm('are you delete this review')
        if(proceed){
            fetch(`https://percat-service-server.vercel.app/reviews/${id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })
        }
    }
    return (
        <div className="overflow-x-auto">

        <Table>
  <Table.Head>
    <Table.HeadCell>
      Review name
    </Table.HeadCell>
    <Table.HeadCell>
     review Photo
    </Table.HeadCell>
    <Table.HeadCell>
      Price
    </Table.HeadCell>
    <Table.Cell>
        <a
          href="/tables"
          className="font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
           <FaTrash onClick={()=>handleDelete(_id)}></FaTrash>
        </a>
      </Table.Cell>
  </Table.Head>
  <Table.Body className="divide-y">
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {
            reviews
        }
      </Table.Cell>
     
     
      
    </Table.Row>
    
  </Table.Body>
</Table>
    </div>
    );
};

export default MyreviewsCard;