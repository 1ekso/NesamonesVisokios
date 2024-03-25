import { useState } from 'react';
import { Dropdown, Button, Container, Row, Col } from 'react-bootstrap';

function RegionFilter({ onSelectRegion, onSelectCategory }) {
  const [selectedRegion, setSelectedRegion] = useState('all');

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    onSelectRegion(region);
  };

  const handleCategorySelect = (category) => {
    onSelectCategory(category);
  };

  return (
    <>
      <Container style={{ border: "1px solid black" }}>
        <Row style={{ border: "1px solid pink" }}>
          <Col lg={6} md={12}>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select Region
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleRegionSelect('all')}>All Regions</Dropdown.Item>
                <Dropdown.Item onClick={() => handleRegionSelect('kaunas')}>Kaunas</Dropdown.Item>
                <Dropdown.Item onClick={() => handleRegionSelect('siauliai')}>Šiauliai</Dropdown.Item>
                <Dropdown.Item onClick={() => handleRegionSelect('vilnius')}>Vilnius</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col lg={6} md={12} className="d-md-none">
            <Row className="justify-content-center">
              <Col>
                <Button variant="primary" block onClick={() => handleCategorySelect('Invazinis')}>Invazinis</Button>
              </Col>
              <Col>
                <Button variant="primary" block onClick={() => handleCategorySelect('Siltakraujis')}>Siltakraujis</Button>
              </Col>
            </Row>
          </Col>
          <Col lg={3} md={6} className="d-none d-md-block">
            <Button variant="primary" onClick={() => handleCategorySelect('Invazinis')}>Invazinis</Button>
          </Col>
          <Col lg={3} md={6} className="d-none d-md-block">
            <Button variant="primary" onClick={() => handleCategorySelect('Siltakraujis')}>Siltakraujis</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default RegionFilter;
