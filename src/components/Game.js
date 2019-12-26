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

  random = (e) => {
    if (e > 0) {
      let Newrandom = Math.floor(1 + Math.random() * (e - 1));
      console.log(Newrandom);
      this.props.dispatch({ type: 'guess/fetch', payload: { Newrandom } });

    }
  }
  
  render() {

    console.log('props', this.props.guess.count.number);
    return (

      <Layout style={{ textAlign: 'center', height: '100%' }}>
        <Header>
          <Title level={2} style={{ color: 'white', lineHeight: '2' }}>Guess The Number</Title>
        </Header>
        <Content style={{ display: 'flex', flexDirection: 'column', padding: '2rem' }}>
          <h1>{this.props.guess.count}</h1>
          <div>
            <Button type="primary" onClick={() => this.random(500)} >Easy</Button>
            <Button >Medium</Button>
            <Button type="primary" >Hard</Button>

          </div>
          <Card title="Guess number between 1 to " bordered={false} style={{ width: 500, alignSelf: 'center', margin: '2rem' }}>
            <Form className="login-form" >
              <InputNumber min={1} placeholder='Enter number' type='number' style={{ width: '200px' }} />
            </Form>
            <Button type="primary" htmlType="submit" style={{ margin: '0.5rem' }}>
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




