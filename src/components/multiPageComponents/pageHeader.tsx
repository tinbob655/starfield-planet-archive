import React from 'react';

interface params {
    headerText: string;
    subheaderText: string;
};

export default function PageHeader({headerText, subheaderText}:params):React.JSX.Element {

    return (
        <React.Fragment>
            <h1 className="alignLeft">
                {headerText}
            </h1>
            <p className="alignLeft" style={{marginLeft: '15%'}}>
                {subheaderText}
            </p>
            <div className="dividerLine"></div>
        </React.Fragment>
    );
};