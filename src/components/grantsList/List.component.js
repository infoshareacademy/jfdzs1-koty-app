import React, {PureComponent} from 'react';


class GrantsComponent extends PureComponent {
    componentWillMount() {
        super.componentDidMount && super.componentDidMount();
        this.props.getGrants();
    }

    render() {
        const {grants} = this.props;
        if (grants) {
            return (
                <section className="user">
                    <ul>{grants.map((grant, index) =>
                        <li key={index}>
                            {grant.name}
                        </li>
                    )}
                    </ul>
                </section>
            )
        } else {
            return (
                <section>
                </section>
            )
        }

    }
}
export default GrantsComponent;