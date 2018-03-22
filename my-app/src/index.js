import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import {Icon} from 'semantic-ui-react';
import Button from 'react-bootstrap/lib/Button';
import Table from 'react-bootstrap/lib/Table';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

class Prisoners extends React.Component {
  constructor () {
    super ();
    this.state = {
      wrong: false,
      wrongA: false,
      wro: false,
      hide: false,
      wr: false,
      wrongB: false,
      nash: false,
      bgColor: '#455A64',
      iconD: false,
      iconcooperate: false,
      iconC: false,
      iconcD: false,
      icondefect: false,
      icon_wrongA: false,
      icon_wrongB: false,
      icon_wrongC: false,
      iconCorrect: false,
    };
  }

  render () {
    const wro = this.state.wro;
    return (
      <div>
        <Table bordered responsive>
          <tbody>
            <tr>
              <th colSpan="2" />
              <th colSpan="2">Player 2</th>
            </tr>
            <tr>
              <th colSpan="2" />
              <th>Cooperate</th>
              <th>Defect</th>
            </tr>
            <tr>
              <th>Player 1</th>
              <th>Cooperate</th>
              <td className={this.state.wrongA ? 'wrong' : null}>
                <span>2</span>
                <span>2</span>
              </td>
              <td className={this.state.wrong ? 'wrong' : null}>
                <span>0</span>
                <span>3</span>
              </td>
            </tr>
            <tr>
              <th colSpan="1" />
              <th>Defect</th>
              <td className={this.state.wrongB ? 'wrong' : null}>
                <span>3</span>
                <span>0</span>
              </td>
              <td className={this.state.nash ? 'true' : null}>
                <span>1</span>
                <span>1</span>
              </td>
            </tr>
          </tbody>
        </Table>

        <Row className="show-grid" align="left">

          <Col sm={12} md={6}>
            <div>
              <h4>Player 1</h4>
              <Button
                id="defect"
                style={{backgroundColor: this.state.bgCol}}
                className="butFocusPri"
                onClick={this.onCli.bind (this)}
              >
                {this.state.iconD ? <Icon name="checkmark" /> : null}Defect
              </Button>
              <Button
                id="cooperate"
                style={{backgroundColor: this.state.bgColor}}
                className="butFocusPri"
                onClick={this.onClick.bind (this)}
              >
                {this.state.iconC ? <Icon name="checkmark" /> : null}Cooperate
              </Button>

              <h4>Player 2</h4>

              {wro
                ? <div>
                    <Button
                      id="cooperate_pla_2"
                      className="butFocusPri"
                      onClick={this.onClick.bind (this)}
                    >
                      {this.state.iconcC ? <Icon name="checkmark" /> : null}
                      Cooperate
                    </Button>
                    <Button
                      id="defe"
                      className="butFocusPri"
                      onClick={this.onClick.bind (this)}
                    >
                      {this.state.iconcD ? <Icon name="checkmark" /> : null}
                      Defect
                    </Button>

                  </div>
                : <div>
                    <Button
                      id="cooperate_pla"
                      disabled={!this.state.wr}
                      className="butFocusPri"
                      onClick={this.onCli.bind (this)}
                    >
                      {this.state.iconcooperate
                        ? <Icon name="checkmark" />
                        : null}
                      Cooperate
                    </Button>
                    <Button
                      id="defec"
                      disabled={!this.state.wr}
                      className="butFocusPri"
                      onClick={this.onCli.bind (this)}
                    >
                      {this.state.icondefect ? <Icon name="checkmark" /> : null}
                      Defect
                    </Button>
                  </div>}

            </div>

          </Col>
          <Col sm={12} md={6}>

            The choices are: <p />
            <p>
              1.
              {' '}
              {this.state.icon_wrongA ? <Icon name="x" color="red" /> : null}
              {' '}
              Both of them are silent and both serve just 1 year of prison
              {' '}
            </p>
            <p>
              {' '}
              2.
              {' '}
              {this.state.icon_wrongB ? <Icon name="x" color="red" /> : null}
              Player 1 betrays Player 2 = Player 1 free, Player 2 gets 3 years
              {' '}
            </p>
            <p>
              {' '}
              3.
              {' '}
              {this.state.icon_wrongC ? <Icon name="x" color="red" /> : null}
              Player 2 betrays Player 1 = Player 2 free, Player 1 gets 3 years
              {' '}
            </p>
            <p>
              {' '}
              4.
              {' '}
              {this.state.iconCorrect
                ? <Icon name="checkmark" color="green" />
                : null}
              {' '}
              Both betray each other and serve 2 years in prison
              {' '}
            </p>

          </Col>
        </Row>
      </div>
    );
  }

  onClick (e) {
    if (e.target.id === 'cooperate') {
      this.setState (prevState => ({wro: true, iconD: false, iconC: true}));
      this.setState ({bgColor: '#2962ff'});
    }
    if (e.target.id === 'cooperate_pla_2') {
      this.setState (prevState => ({
        wr: true,
        wrongA: true,
        iconcC: true,
        icon_wrongA: true,
      }));
    }
    if (e.target.id === 'defe') {
      this.setState (prevState => ({
        wrong: true,
        iconcD: true,
        icon_wrongB: true,
      }));
    }
  }

  onCli (e) {
    if (e.target.id === 'defect') {
      this.setState (prevState => ({
        wr: true,
        wro: false,
        iconD: true,
        iconC: false,
      }));
      this.setState ({bgCol: '#2962ff'});
    }
    if (e.target.id === 'cooperate_pla') {
      this.setState (prevState => ({
        wr: true,
        wrongB: true,
        iconcooperate: true,
        icon_wrongC: true,
      }));
    }
    if (e.target.id === 'defec') {
      this.setState (prevState => ({
        wr: true,
        nash: true,
        icondefect: true,
        iconCorrect: true,
      }));
    }
  }
}

class Scissors extends React.Component {
  constructor () {
    super ();
    this.state = {
      nash: false,
      bgColor: '#455A64',
      rock: false,
      paper: false,
      sci: false,
      rocki: false,
      paperi: false,
      scii: false,
      explan: false,
    };
  }

  render () {
    return (
      <div>
        <Table bordered responsive>
          <tbody>
            <tr>
              <th colSpan="2" />
              <th colSpan="3">Player 2</th>
            </tr>
            <tr>
              <th colSpan="2" />
              <th>Rock</th>
              <th>Paper</th>
              <th>Scissors</th>
            </tr>
            <tr>
              <th colSpan="1" />
              <th>Rock</th>
              <td className={this.state.rock ? 'wrong' : null}>
                <span>0</span><span>0</span>
              </td>
              <td className={this.state.rock ? 'wrong' : null}>
                <span>-1</span><span>1</span>
              </td>
              <td className={this.state.rock ? 'true' : null}>
                <span>1</span><span>-1</span>
              </td>
            </tr>
            <tr>
              <th>Player 1</th>
              <th>Paper</th>
              <td className={this.state.paper ? 'true' : null}>
                <span>1</span><span>-1</span>
              </td>
              <td className={this.state.paper ? 'wrong' : null}>
                <span>0</span><span>0</span>
              </td>
              <td className={this.state.paper ? 'wrong' : null}>
                <span>-1</span><span>1</span>
              </td>
            </tr>
            <tr>
              <th colSpan="1" />
              <th>Scissors</th>
              <td className={this.state.sci ? 'wrong' : null}>
                <span>-1</span><span>1</span>
              </td>
              <td className={this.state.sci ? 'true' : null}>
                <span>1</span><span>-1</span>
              </td>
              <td className={this.state.sci ? 'wrong' : null}>
                <span>0</span><span>0</span>
              </td>
            </tr>
          </tbody>
        </Table>
        <Row className="show-grid" align="left">
          <Col sm={12} md={6}>
            <h4>Check out the odds of winning as Player 1</h4>
            <Button
              id="rock"
              className="butFocusSci"
              style={{backgroundColor: this.state.bgColor}}
              onClick={this.onClick.bind (this)}
            >
              {this.state.rocki ? <Icon name="checkmark" /> : null}Rock
            </Button>
            <Button
              id="paper"
              className="butFocusSci"
              style={{backgroundColor: this.state.bgColo}}
              onClick={this.onClick.bind (this)}
            >
              {this.state.paperi ? <Icon name="checkmark" /> : null}Paper
            </Button>
            <Button
              id="sci"
              className="butFocusSci"
              style={{backgroundColor: this.state.bgCol}}
              onClick={this.onClick.bind (this)}
            >
              {this.state.scii ? <Icon name="checkmark" /> : null}Scissors
            </Button>

            {this.state.rocki
              ? <p>
                  If you choose rock, you will lose against paper, have a tie with rock
                  and win against scissors. In theory if you lose with rock you should go ahead and choose
                  scissors next time. If you win with rock you should move forward to paper.
                </p>
              : null}
            {this.state.paperi
              ? <p>
                  If you choose paper, you will lose against scissors, have a tie with paper
                  {' '}
                  and win against rock. In theory if you lose with paper you should move forward to
                  rock. If you win with paper you should move forward to scissors.
                </p>
              : null}
            {this.state.scii
              ? <p>
                  If you choose scissors, you will lose against rock, have a tie with scissors
                  {' '}
                  and win against paper. In theory if you lose with scissors you should move forward
                  to paper. If you win with scissors you should move forward to rock.
                </p>
              : null}

          </Col>
          <Col sm={12} md={6}>
            {this.state.explan
              ? <div>
                  <h4>Interesting psychological facts: </h4>
                  <p>
                    {this.state.rocki
                      ? <Icon name="checkmark" color="green" />
                      : null}
                    Rock: It's very aggressive since represents a fist. Player thinks of it as a weapon
                    {' '}
                    and will most probably use it if other strategies don't work.
                  </p>
                  <p>
                    {this.state.scii
                      ? <Icon name="checkmark" color="green" />
                      : null}
                    Scissors: They are somewhat aggressive since they are sharp. Represent controlled
                    {' '}
                    aggression and mostly used when someone is confident or winning.
                  </p>
                  <p>
                    {this.state.paperi
                      ? <Icon name="checkmark" color="green" />
                      : null}
                    Paper: A cunning move. Represents an open hand which is friendly and passive.
                    {' '}
                    Some players might not use when losing because it might be seen as a weakness.
                    Some players might see it as a sign of superiority.
                  </p>
                  <p>
                    Of course it's just a theory of winning in rock-paper-scissors, but it might
                    {' '}
                    work.
                  </p>
                </div>
              : null}

          </Col>
        </Row>
      </div>
    );
  }
  onClick (e) {
    if (e.target.id === 'rock') {
      console.log ('rock');
      this.setState (prevState => ({
        rock: true,
        rocki: true,
        paperi: false,
        scii: false,
        explan: true,
      }));
      this.setState ({bgColor: '#2962ff'});
    }
    if (e.target.id === 'paper') {
      this.setState (prevState => ({
        paper: true,
        paperi: true,
        rocki: false,
        scii: false,
        explan: true,
      }));
      console.log ('paper');
      this.setState ({bgColo: '#2962ff'});
    }
    if (e.target.id === 'sci') {
      this.setState (prevState => ({
        sci: true,
        scii: true,
        rocki: false,
        paperi: false,
        explan: true,
      }));
      console.log ('sci');
      this.setState ({bgCol: '#2962ff'});
    }
  }
}

class ShowHide extends React.Component {
  constructor () {
    super ();
    this.state = {
      childVisible: false,
      childVis: false,
      close: false,
      icon: false,
      iconB: false,
      jumbo: true,
      prison: false,
      scis: false,
    };
  }

  render () {
    return (
      <div className="container">

        <Row>
          {this.state.jumbo
            ? <Col sm={12} md={6}>
                <h1>Game theory</h1>

                <p>
                  Game theory is a mathematical method of finding optimal startegies between two or more sides which are
                  {' '}
                  fighting for realization of their interests.
                  Here you can check out two pay off matrices for basic game theory games.
                  {' '}
                </p>

              </Col>
            : null}
          {this.state.prison
            ? <Col sm={12} md={6}>
                <h1>Game theory: Prisonner's dilemma</h1>
                <p>
                  {' '}
                  This example shows an interesting behaviour where two individuals might not
                  cooperate even tho it's in their best interest.
                </p>
                <p>
                  {' '}
                  In short: two people are arrested and charged as being part of a criminal gang. They can't communicate with
                  each other. Police doesn't have enough evidence to convict them but they really want to. So prisoners are given
                  {' '}
                  an opportunity of either betraying each other by testifying against each other or to cooperate with each other
                  and stay silent. Below you can choose what you think would most likely be choice of the prisoners. Green
                  {' '}
                  color will represent correct choice.
                </p>
              </Col>
            : null}
          {this.state.scis
            ? <Col sm={12} md={6}>
                <h1>Game theory: Rock-paper-scissors</h1>
                <p>
                  Rock–paper–scissors is an example of game theory game. A player has 1/3 probability
                  {' '}
                  of winning in every round. The game is quite interesting because according to research
                  winners tend to stick to their winning choice and losers tend to move to the next
                  option. Mathematically speaking the best option of playing this game is choosing your
                  {' '}
                  strategy at random.
                </p>
              </Col>
            : null}

          <Col sm={12} md={6}>
            <Button className="butFocus" onClick={() => this.onClick ()}>
              {this.state.icon ? <Icon name="checkmark" /> : null}
              Prisonner's dilemma
            </Button>
            <Button className="butFocus" onClick={() => this.onScissors ()}>
              {this.state.iconB ? <Icon name="checkmark" /> : null}
              Rock-paper-scissors
            </Button>
            {this.state.close
              ? <Button
                  className="btn butFocus over"
                  onClick={() => this.onClickK ()}
                >
                  Close<Icon name="remove" />
                </Button>
              : null}

          </Col>
        </Row>

        {this.state.childVisible ? <Prisoners /> : null}
        {this.state.childVis ? <Scissors /> : null}
      </div>
    );
  }

  onClick () {
    this.setState (prevState => ({
      childVisible: true,
      childVis: false,
      close: true,
      icon: true,
      iconB: false,
      jumbo: false,
      prison: true,
      scis: false,
    }));
  }
  onClickK () {
    this.setState (prevState => ({
      childVisible: false,
      childVis: false,
      close: false,
      icon: false,
      iconB: false,
      jumbo: true,
      prison: false,
      scis: false,
    }));
  }
  onScissors () {
    this.setState (prevState => ({
      childVis: true,
      childVisible: false,
      close: true,
      iconB: true,
      icon: false,
      jumbo: false,
      prison: false,
      scis: true,
    }));
  }
}

ReactDOM.render (<ShowHide />, document.getElementById ('root'));
