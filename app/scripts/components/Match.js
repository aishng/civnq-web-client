/**
 * @jsx React.DOM
 */

'use strict';

var React           = require('react/addons'),
    Panel           = require('react-bootstrap/Panel'),
    Well            = require('react-bootstrap/Well'),
    ListGroup       = require('react-bootstrap/ListGroup'),
    ListGroupItem   = require('react-bootstrap/ListGroupItem');

var Match = React.createClass({ 
 
 generatePlayerElement: function(i) {
    return (
      <div key={i}>
        <ListGroupItem>{this.props.data.teams[i]}</ListGroupItem>
      </div>
    )
 },


 generatePlayers: function(num) {
    var players = [];
    for(var i = 0; i < num; i++) {
      players.push(this.generatePlayerElement(i));
    }
    return players;
 },
 

  render: function() {
    var players = this.generatePlayers(this.props.data.teams.length);
    return (
      <Panel>
        <h3> Game #1000 </h3>
        <Well>
          <p>Type: {this.props.data.match_type}</p>
          <p>Reported by: Arvius</p>
        </Well>

        <Well>
          <ListGroup>
            {players}
          </ListGroup>
        </Well>
        <Well>
          Comments:
          {this.props.data.comment}
        </Well>
      </Panel>
    );
  }

});

module.exports = Match;