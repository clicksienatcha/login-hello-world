import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      email: '',
      password: '',
      nodata: ''

    };



  }


  handleSubmit() {
    //console.log('test',this.state);
    const { email, password } = this.state;
    if (email == 'natcha@gmail.com') {
      alert('Login Success');
      this.setState({
        nodata: ''
      })
    } else {
      this.setState({
        nodata: 'E-mail or Password is incorrect'
      })
    }
  }

  render() {


    return (
      <Col xs-12 align='center' style={{ padding: 10,backgroundColor:'white', }}>


        <Col xs="6" style={{ backgroundColor:'ghostwhite', padding: 10, color: 'black', border: '1px solid #ddd', }}>
          <div align='center'>
            <img src={logo} style={{ width: 180 }} className="App-logo" alt="logo" />

          </div>
          <div align='left'>
            <Label for="exampleEmail" align='left'>Email</Label>
            <Input type="email"
              onChange={event => this.setState({ email: event.target.value })}
              name="email" id="exampleEmail" placeholder="with a placeholder" />
            <Label for="examplePassword" stlye={{ textAlign: 'left' }}>Password</Label>
            <Input type="password"
              onChange={event => this.setState({ password: event.target.value })}
              name="password" id="examplePassword" placeholder="password placeholder" />
          </div>

          
          <div align='center' style={{ marginTop: 30, }}>
          <div style={{ color: 'red' }}>{this.state.nodata}</div>
            <Button onClick={() => { this.handleSubmit() }} type="submit" value="Sign in" color="info" >Sign in</Button>
          </div>

          <Row>
            <Col xs='6' align='left' style={{ color: '#007bff' }}>
              <a>Forget password ?</a>
            </Col>
            <Col xs='6' align='right' style={{ color: '#007bff' }}>
              <a>Create a new account</a>
            </Col>
          </Row>

        </Col>
      </Col>

    );
  }
}



export default App;
