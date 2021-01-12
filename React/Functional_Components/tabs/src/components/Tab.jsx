import React, { useState } from 'react';

const Tab = () => {
    const [tab, setTab] = useState({
        selectedTab: 1,
    });

    const clickTab = (e, value) => {
        setTab({ selectedTab: value });
    }

    return (
        <div className="">
            <h1 className="">Tags</h1>
            {[1, 2, 3].map((item, index) => {
                return <button className="btn btn-outline-primary" onClick={e => clickTab(e, item)} key={index}>Tab: {item}</button>
            })}

            <p>Tab {tab.selectedTab} content is showing here.</p>
        </div >
    )

}

export default Tab;
