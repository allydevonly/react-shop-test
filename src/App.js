import React from 'react';
import { Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import product from './product';
import './App.css'; // Import the CSS file

const firstName = " there"; // Replace "Votre prénom" with your first name
const imageSrc = "url_de_votre_image"; // Replace "url_de_votre_image" with the URL of your image

function App() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <Card className="card">
            <Card.Img variant="top" className='imgprod' src={product.image} />
            <Card.Body className="text-center">
              <Name />
              <Price />
              <Description /
              >
            </Card.Body>
          </Card>

        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-lg-6 text-center">
          <p className="greeting">{firstName ? `Hello, ${firstName} !` : "Hello to all!"}</p>
          <div className='footer'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
