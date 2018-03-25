import React from 'react'

const GrantsComponent = ({ getGrants, grants }) => {
    getGrants();
    console.log('dupa');
    if(grants) {
        console.log(grants);
        return (
            <section className="user">
                <ul>{grants.map((grant, index) =>
                        <li key={index}>
                            {grant.value}
                        </li>
                    )}
                </ul>
            </section>
        );
    } else {
        return (
            <section>
            </section>
        )
    }
};

export default GrantsComponent;