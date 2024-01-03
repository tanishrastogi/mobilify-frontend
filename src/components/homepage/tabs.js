import { Tab , Tabs } from "@mui/material";
import React, { useState } from "react";

const Tabs1 = ()=>{

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return <div>
        <Tabs value={value} onChange={handleChange}>
            <Tab value="tab1"/>
            <Tab value="tab3"/>
            <Tab value="tab2"/>
        </Tabs>
    </div>;
}

export default Tabs1;