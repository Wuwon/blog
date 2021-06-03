import React from 'react';
import {Row,Col} from 'reactstrap'

const Header = () => {
    return (
        <div id="page-header" className="mb-3">
            <Row>
                <Col md="6" sm="auto" className="text-center m-auto">
                    <h1>Read Our Blog</h1>
                    <p>Wuny's side project Work Blog</p>
                </Col>
            </Row>
        </div>
        )
    
};

export default Header;