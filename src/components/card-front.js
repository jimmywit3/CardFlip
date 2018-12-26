import React, {Component} from 'react';

export default class CardFront extends Component {
  render() {
    return (
      <div className='card-side side-front'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xs-6'>
              <img src='https://pp.userapi.com/c830408/v830408210/1a0d84/9A4MWacaORs.jpg' />
            </div>
            <div className='col-xs-6 side-front-content'>
              <h2>Fedor</h2>
              <p>Задача организации, в особенности же консультация с широким активом представляет собой интересный эксперимент проверки новых предложений. Задача организации, в особенности же начало повседневной работы по формированию позиции играет важную роль в формировании систем массового участия.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}