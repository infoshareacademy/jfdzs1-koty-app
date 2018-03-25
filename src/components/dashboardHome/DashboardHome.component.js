import React, {PureComponent} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './DashboardHome.style.css';
import LineRechart from './LineRechart';




class DashboardHome extends PureComponent {
    render() {
        return (
            <Grid middle="xs" fluid>
                <Row className="home-row" center="xs" around="xs">
                    <Col className="home-items" md={5}>
                        <LineRechart/>
                    </Col>
                    <Col className="home-items" md={5}>
                        <LineRechart/>
                    </Col>
                </Row>
                <Row className="home-row" center="xs" around="xs">
                    <Col className="home-items" md={2}> <h3>Pliki do pobrania</h3> </Col>
                    <Col className="home-items" md={2}> <h3>Informacje o dotacjach </h3></Col>
                    <Col className="home-items" md={2}> <h3>Terminarz </h3></Col>
                    <Col className="home-items" md={2}> <h3>Dodatkowe informacje </h3></Col>
                </Row>
            </Grid>
        );
    }
}

export default DashboardHome;