import React from 'react';
import Card from './Card';

//now add array, and be sure to add key to <Card and pass id to id so dom can be properly updated
const CardList=({ robots })=>{
    // remove constant and add it to brackets as it is js
        return (
            <div>
                {
                    robots.map((user, i) =>{
                        return(
                            <Card 
                    key={i}
                    id={robots[i].id}
                    name={robots[i].name}
                    email={robots[i].email}
                    />
                        );
                    })
                }
            </div>
        );
    }
    // const cardComponent = robots.map((user, i) => {
    //     return (
    //     <Card 
    //     key={i}
    //     id={robots[i].id}
    //     name={robots[i].name}
    //     email={robots[i].email}
    //     />
    //     );
    // })
    // return(
    //     <div>
    //         {/* this is how it is done in js */}
    //     {cardComponent}
    //     </div>
    // );
    // }

//before
// const CardList=({ robots })=>{
//     return(
//         <div>
//         <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} />,
//         <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} />,
//         <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />
//         </div>
//     );
//     }

export default CardList;