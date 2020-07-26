import React from 'react';

//before adding json with robots
// const Card = () => {

//     return (
//         //br line pa padding ma margin grow animation
//         <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
//             <img alt="robots" src='https://robohash.org/test?200x200'/>
//             <div>
//                 <h2>Jane Doe</h2>
//                 <p>jane.doe@email.com</p>
//             </div>
//         </div>
//     );
// }


// //with props
// const Card = (props) => {
// //distracturing

//     return (
//         //br line pa padding ma margin grow animation
//         <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
//             <img alt="robots" src={'https://robohash.org/${props.id}?200x200'}/>
//             <div>
//                 <h2>{props.name}</h2>
//                 <p>{props.email}</p>
//             </div>
//         </div>
//     );
// }

// //with props
// const Card = (props) => {
//     //distracturing pari one
//     const {name, email, id} = props
//         return (
//             //br line pa padding ma margin grow animation
//             <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
//                 <img alt="robots" src={'https://robohash.org/${id}?200x200'}/>
//                 <div>
//                     <h2>{name}</h2>
//                     <p>{email}</p>
//                 </div>
//             </div>
//         );
//     }

//with props
const Card = ({name, email, id}) => {
    //distracturing part 2
        return (
            //br line pa padding ma margin grow animation
            <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
                <img alt="robots" src={'https://robohash.org/${id}?200x200'}/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        );
    }
export default Card;
