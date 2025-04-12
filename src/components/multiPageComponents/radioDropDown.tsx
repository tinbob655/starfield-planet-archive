import React from 'react';

interface RadioProps {
    name:string,
    options: string[],
    children: React.ReactElement,
};

export default function Radio({name, options, children}:RadioProps):React.ReactElement {

    const wrapperId:string = String(Math.random());

    let finalHTML:React.ReactElement[] = [];
    options.forEach((option) => {

        const id = name+option

        finalHTML.push(
            <React.Fragment>
                <div>
                    <input type="radio" name={name} id={id} value={option} />
                    <label htmlFor={id}>
                        {option}
                    </label>
                </div>
            </React.Fragment>
        );
    });

    return (
        <React.Fragment>
            <div onClick={() => {toggleShown()}} style={{cursor: 'pointer'}}>
                {children}
            </div>

            <div className="dropDownWrapper" id={wrapperId}>
                {finalHTML}
            </div>
        </React.Fragment>
    );

    function toggleShown():void {
        document.getElementById(wrapperId)?.classList.toggle('shown');
    };
};