import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import emailjs from 'emailjs-com';
import './Form.scss';

function CookieForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formInfo, setFormInfo] = useState({
    name: '',
    email: '',
    quantity: '1',
    address: '',
    addressTwo: '',
    city: '',
    state: '',
    zipcode: '',
    amount: 30,
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (name === 'quantity') {
      setFormInfo({
        ...formInfo,
        [name]: value,
        amount: parseInt(value) * 30,
      });
    } else {
      setFormInfo({
        ...formInfo,
        [name]: value,
      });
    }
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(formInfo);

    //John Pattis
    const response = await emailjs.send(
      'service_9y9c91u',
      'template_rllf8x8',
      formInfo,
      'iHZKvGQZm10JDnZpb'
    );

    //Seans
    // const response = await emailjs.send(
    //   'service_obwznk9',
    //   'template_vb6ls7f',
    //   formInfo,
    //   'dJ8ZMsIbApKk8xjLU'
    // );

    response
      ? console.log('SUCCESS!', response.status, response.text)
      : console.log('FAILED...');

    setFormSubmitted(true);
  };

  return (
    <div className="formArea">
      {!formSubmitted ? (
        <Form onSubmit={submitHandler}>
          <Row className="mb-3">
            <Form.Group className="mb-3" controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Name"
                onChange={changeHandler}
                name="name"
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={changeHandler}
                name="email"
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="quantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Quantity"
                min={1}
                onChange={changeHandler}
                name="quantity"
                value={formInfo.quantity}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="amount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="text"
                placeholder="Amount"
                name="amount"
                value={'$' + formInfo.amount}
                plaintext
                readOnly
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              placeholder="1234 Main St"
              onChange={changeHandler}
              name="address"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              placeholder="Apartment, studio, or floor"
              onChange={changeHandler}
              name="addressTwo"
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control onChange={changeHandler} name="city" required />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control onChange={changeHandler} name="state" required />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control onChange={changeHandler} name="zipcode" required />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      ) : (
        <div className="orderTotal">
          <h2>Your order total is...</h2>
          <h1>${formInfo.amount}.00</h1>
          <h4>Please follow this link for payment...</h4>
          <a
            type="image"
            href="https://www.paypal.com/donate?token=LGf8X5RquUchY-v_fQxRwWdTXdz8gMh0V83Gz2jOzxzQiiS7jS96YS4TGhSUSjZy0Jz48zINaOcIjiRH"
          >
            Link to Donation
          </a>
        </div>
      )}
    </div>
  );
}

export default CookieForm;