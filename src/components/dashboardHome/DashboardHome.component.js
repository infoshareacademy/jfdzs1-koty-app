import React, {PureComponent} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './DashboardHome.style.css';
import LineRechart from './LineRechart';
import RadialRechart from './RadialRechart';
import BarRechart from './BarRechart';




class DashboardHome extends PureComponent {
    render() {
        return (
            <Grid middle="xs" fluid>
                <Row className="home-row" center="xs" middle="xs" around="xs">
                    <Col className="home-items" md={5}>
                        <LineRechart/>
                    </Col>
                    <Col className="home-items" md={4}>
                        <BarRechart/>
                    </Col>
                    <Col className="home-items" md={3}>
                        <RadialRechart/>
                    </Col>
                </Row>
                <Row className="home-row" center="xs" middle="xs" around="xs">
                    <Col className="home-items" md={3}>
                        <h3>Pliki do pobrania</h3>
                        <i className="material-icons">file_download</i>
                    </Col>
                    <Col className="home-items" md={3}> <h3>Informacje</h3> <h3> o dotacjach </h3></Col>
                    <Col className="home-items" md={3}> <h3>Terminarz </h3></Col>
                    <Col className="home-items" md={3}> <h3>Dodatkowe informacje </h3></Col>
                </Row>
            </Grid>
        );
    }
}

export default DashboardHome;