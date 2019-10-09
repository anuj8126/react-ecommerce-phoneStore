import React  from 'react';
import styled from 'styled-components';

export default function Title({name , title}){
    return(
     <>
     <div className="row">
     <div className="col-10 mx-auto- my-2 text-center text-title">
     <h1 className="mx-2 "><span className=" display-5 ">{name}</span><span className="mx-3 display-3 ">{title}</span> </h1>
     </div>
     </div>
     </>
    )

}