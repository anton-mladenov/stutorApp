import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addSkill } from '../actions/stutor'


class NewSearch extends PureComponent {
state = {searchResults:[]}
matchingScore = (s, t) => {
  if (!s.length) return t.length;
  if (!t.length) return s.length;
  return Math.min(
    this.matchingScore(s.toLowerCase().substr(1), t) + 1,
    this.matchingScore(t.toLowerCase().substr(1), s) + 1,
    this.matchingScore(s.toLowerCase().substr(1), t.toLowerCase().substr(1)) + (s[0] !== t[0] ? 1 : 0)
  ) + 1;
}

getScore = (s) => {
  let dataReturn=[]
  const data = this.props.data.skills;
  for (let i = 0; i < data.length; i++) {
    let obj = {score: this.matchingScore(s, data[i].name), id: data[i].id, name: data[i].name}
    dataReturn.push(obj)
  }
  return dataReturn.sort(function(a, b){return a.score - b.score}).slice(0,3);
}

handleChange = (event) => {
  event.preventDefault()
  this.setState({
    searchResults: event.target.value.length >=3 ? this.getScore(event.target.value) : []
  })
}

  render () {
    return (
      <div>

    <input type="text" onChange={this.handleChange} placeholder="Find a skill"/>
	<ul>
		{this.state.searchResults.map(a => <button key={a.id} onClick={()=>this.props.addSkill(a.id, this.currentUserId)}><li key={a.id}>Did you mean {a.name}?</li></button>)}
    </ul> 
	</ div>

    )



  }

}
const mapStateToProps = (state) => {
  return {
    data: state
  }
}

export default connect(mapStateToProps, {addSkill})( NewSearch )
