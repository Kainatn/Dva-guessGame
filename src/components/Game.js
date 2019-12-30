import React, { Component, PureComponent } from 'react';
import 'antd/dist/antd.css';
import { connect } from 'dva';
import { Layout, Typography, Button, Form, InputNumber, Card } from 'antd';
const { Header, Footer, Content } = Layout;
const { Title } = Typography;

@connect(({ guess }) => ({
  guess
}))
class Game extends PureComponent {

  //Generate Random number
  random = (e) => {
    if (e > 0) {
      let Newrandom = Math.floor(1 + Math.random() * (e - 1));
      this.props.dispatch({ type: 'guess/fetch', payload: Newrandom });
    }
  }

  //get value of user guessed  
  changeDone = (e) => {
    console.log(e);
    this.props.dispatch({ type: 'guess/comp', payload: e });
  }

  //Compare random number to user guessed number

  checkNumberHandler = (e) => {
    e.preventDefault();
    console.log(this.props.guess.count);
    this.props.guess.count === this.props.guess.guessedNo
      ?
      alert('Congratulation You guessed the number ')
      :
      this.props.guess.count < this.props.guess.guessedNo
        ?
        alert('You guessed Big Number')
        :
        alert('You guessed Small  Number')
  }
  render() {
    console.log(this.props.guess.count);
    return (

      <Layout style={{ textAlign: 'center', height: '100%' }}>
        <Header>
          <Title level={2} style={{ color: 'white', lineHeight: '2' }}>Guess The Number</Title>
        </Header>
        <Content style={{ display: 'flex', flexDirection: 'column', padding: '2rem' }}>
          <h1>{this.props.guess.state}</h1>
          <div>
            <Button type="primary" onClick={() => this.random(100)} >Easy</Button>
            <Button onClick={() => this.random(500)} >Medium</Button>
            <Button type="primary" onClick={() => this.random(1000)}>Hard</Button>

          </div>
          <Card title="Guess the  number " bordered={false} style={{ width: 500, alignSelf: 'center', margin: '2rem' }}>

            <InputNumber min={1} placeholder='Enter number' type='number' style={{ width: '200px' }} onChange={this.changeDone} disabled={this.props.guess.enable} />

            <Button type="primary" style={{ margin: '0.5rem' }} onClick={this.checkNumberHandler} >
              Guess
            </Button>
          </Card>
        </Content>
        <Footer>All right reserve to Guess The Number </Footer>
      </Layout>
    )
  }
}
export default Game;




