import React from 'react';
import PageHeader from '../../multiPageComponents/pageHeader.jsx';

export default function Home():React.ReactElement {

    return (
        <React.Fragment>
            <PageHeader headerText="Starfield Planet Archive" subheaderText="Your go-to settled systems mapper" />

            <h2>
                What would you like to do?
            </h2>
            <table>
                <thead>
                    <tr>
                        <td>
                            <h3>
                                Search for planets
                            </h3>
                            <p>
                                You'll be able to find planets based on a series of filters and criteria.
                            </p>
                        </td>
                        <td>
                            <h3>
                                Plan a series of outposts
                            </h3>
                            <p>
                                You'll be able to specify the resources you want to harvest, and we will find how to do this with the fewest outposts possible.
                            </p>
                        </td>
                    </tr>
                </thead>
            </table>
        </React.Fragment>
    );
};