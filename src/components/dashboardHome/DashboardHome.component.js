import React, {PureComponent} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './DashboardHome.style.css';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const style = {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

class DashboardHome extends PureComponent {
    render() {

        const data = [
            { name: 'a', value: 12, fill: 'red'},
            { name: 'b', value: 52 },
            { name: 'c', value: 120 }
        ]

        return (
            <Grid middle="xs" fluid>
                <Row className="home-row" center="xs" around="xs">
                    <Col className="home-items" xs={5}>
                        <LineChart width={530} height={200} data={data}
                                   margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="pv" stroke="red" />
                            <Line type="monotone" dataKey="uv" stroke="red" />
                        </LineChart>
                    </Col>
                    <Col className="home-items" xs={5}>

                    </Col>
                </Row>
                <Row className="home-row" center="xs" around="xs">
                    <Col className="home-items" xs={5}> blablablabla</Col>
                    <Col className="home-items" xs={5}> blablablabla</Col>
                </Row>
            </Grid>
        );
    }
}

export default DashboardHome;