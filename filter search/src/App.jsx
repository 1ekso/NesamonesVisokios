import { useState } from 'react';
import RudasisLokys from './components/RudasisLokys';
import Lusis from './components/Lusis';
import RegionFilter from './components/RegionFilter';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
  };

  const handleCategorySelect = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory('all'); 
    } else {
      setSelectedCategory(category);
    }
  };

  return (
    <>
      <RegionFilter onSelectRegion={handleRegionSelect} onSelectCategory={handleCategorySelect} />

      <Container>
        <Row style={{ padding: '30px', border: '1px solid green' }}>
          {(selectedRegion === 'all' || selectedRegion === 'kaunas') && (selectedCategory === 'all' || selectedCategory === 'Siltakraujis') ? (
            <Col lg={6}><Lusis /></Col>
          ) : null}
          {(selectedRegion === 'all' || selectedRegion === 'siauliai') && (selectedCategory === 'all' || selectedCategory === 'Invazinis') ? (
            <Col lg={6}><RudasisLokys /></Col>
          ) : null}
        </Row>

        <Row style={{ padding: '30px', border: '1px solid red' }}>
          {(selectedRegion === 'all' || selectedRegion === 'kaunas') && (selectedCategory === 'all' || selectedCategory === 'Siltakraujis') ? (
            <Col lg={6}><Lusis /></Col>
          ) : null}
          {(selectedRegion === 'all' || selectedRegion === 'siauliai') && (selectedCategory === 'all' || selectedCategory === 'Invazinis') ? (
            <Col lg={6}><RudasisLokys /></Col>
          ) : null}
        </Row>

        
      </Container>
    </>
  );
}

export default App;
