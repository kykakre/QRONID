import React from 'react';
import styled from 'styled-components'
import PhoneCard from "../Components/PhoneCard/PhoneCard";

export default function PhonePage (props)  {
    const Flex = styled.div`
    
        display: flex;
      align-items: center;
      justify-content: center;
    `
    return (
        <Flex>
            <div className="content-min">
                <div className="card-min">
                    <PhoneCard phoneSetting={props.phoneSetting} personPhone={props.personPhone}/>
                </div>
            </div>
        </Flex>

    );
};

