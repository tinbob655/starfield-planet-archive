import React from 'react';
import PageHeader from '../../multiPageComponents/pageHeader';
import Radio from '../../multiPageComponents/radioDropDown';

export default function PlanetFinder():React.ReactElement {

    return (
        <React.Fragment>
            <PageHeader headerText="Planet Finder" subheaderText="Filter every planet in Starfield" />

            <h2 className="alignLeft">
                The search begins here
            </h2>
            <p className="alignLeft" style={{marginLeft: '7.5%'}}>
                Use the filters below to find planets based on your criteria. Once you're done, click the "Search" button.
            </p>

            <div className="contentBox" style={{width: '65%'}}>
                <form onSubmit={(event:React.FormEvent) => {formSubmitted(event);}}>
                    <table>
                        <thead>
                            <tr>
                                <td colSpan={2}>
                                    
                                    {/*system name*/}
                                    <label htmlFor="system">
                                        <p className="inputHeader">
                                            System name:
                                        </p>
                                    </label>
                                    <input type="text" name="system" placeholder='System name...' />
                                </td>
                                <td>

                                    {/*life*/}
                                    <Radio name="life" options={['Yes', 'No']} >
                                        <p className="inputHeader">
                                            Allow life?
                                        </p>
                                    </Radio>
                                </td>
                                <td>

                                    {/*type*/}
                                    <p className="inputHeader">
                                        Planet type:
                                    </p>
                                    <Radio name="planetType" options={['Barren', 'Rock', 'Ice', 'Ice Giant', 'Gas Giant', 'Hot Gas Giant', 'Asteroid']} />
                                </td>
                            </tr>
                            <tr>
                                <td>

                                    {/*temperature*/}
                                    <p className="inputHeader">
                                        Temperature:
                                    </p>
                                    <Radio name="temperature" options={['Deep Freeze', 'Frozen', 'Cold', 'Temperate', 'Hot', 'Scorched', 'Inferno']} />
                                </td>
                                <td colSpan={2}>

                                    {/*atmosphere*/}
                                    <p className="inputHeader">
                                        Atmosphere:
                                    </p>
                                    <Radio name="atmosphere" options={['None', 'Any', 'Thin O2', 'Thin O2 (Corrosive)', 'Thin O2 (Toxic)', 'Std O2', 'Std O2 (Corrosive)', 'Std O2 (Toxic)', 'High O2', 'High O2 (Corrosive)', 'High O2 (Toxic)', 'Extr O2', 'Thin CO2', 'Thin CO2 (Corrosive)', 'Std CO2', 'Std CO2 (Corrosive)', 'High CO2', 'High CO2 (Corrosive)', 'Extr CO2', 'Extr CO2 (Corrosive)', 'Thin M', 'Thin M (Corrosive)', 'Std M', 'Std M (Corrosive)', 'Std M (Toxic)', 'High M', 'High M (Corrosive)', 'High M', 'High M (Corrosive)', 'Extr M', 'Extr M (Corrosive)', 'Thin N2', 'Thin N2 (Corrosive)', 'Std N2', 'High N2', 'High N2 (Corrosive)', 'Extr N2', 'H2']} />
                                </td>
                                <td>

                                    {/*magnetosphere*/}
                                    <label htmlFor="magnetosphere">
                                        <p className="inputHeader">
                                            Magnetosphere:
                                        </p>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>

                                    {/*extreme environment*/}
                                    <label htmlFor="extremeEnvironment">
                                        <p className="inputHeader">
                                            Allow extreme environments?
                                        </p>
                                    </label>
                                </td>
                                <td>

                                    {/*water*/}
                                    <label htmlFor="water">
                                        <p className="inputHeader">
                                            Water type:
                                        </p>
                                    </label>
                                </td>
                                <td colSpan={2}>

                                    {/*resources*/}
                                    <label htmlFor="resources">
                                        <p className="inputHeader">
                                            Resources:
                                        </p>
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>

                                    {/*gravity*/}
                                    <label htmlFor="gravity">
                                        <p className="inputHeader">
                                            Gravity:
                                        </p>
                                    </label>
                                </td>
                                <td colSpan={2}>

                                    {/*level*/}
                                    <label htmlFor="level">
                                        <p className="inputHeader">
                                            Level:
                                        </p>
                                    </label>
                                </td>
                            </tr>
                        </thead>
                    </table>
                </form>
            </div>
        </React.Fragment>
    );

    function formSubmitted(event:React.FormEvent):void {
        event.preventDefault();
    };
};