import React, { useState } from  'react';

const Tab = ({tabs, idx, selectTab}) => {
    console.log(tabs)
    console.log(idx)


    return(
        <div>
            <h1> Tab {idx + 1}</h1>
            <button onClick={(e)=>selectTab(idx)}>select</button>
        </div>

    );
}

export default Tab