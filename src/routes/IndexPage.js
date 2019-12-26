import React from 'react';
import { connect } from 'dva';
import Game from '../components/Game.js';
import { Test } from '../components/test.js';

function IndexPage() {
  return (
    <div>
      {/* <Game/> */}
      <Test></Test>
    </div>
    
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
