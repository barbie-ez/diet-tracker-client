import React from 'react';
import { connect } from 'react-redux';
import * as mealActions from '../../redux/actions/mealActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
class MealsPage extends React.Component {
  state = {
    meal: {
      name: ''
    }
  };

  handleChange = event => {
    const meal = { ...this.state.meal, name: event.target.value }; //copied state because state needs to be immutable
    this.setState({ meal });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.actions.createMeal(this.state.meal);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Meals</h2>
        <h3>Add Meals</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.meal.name}
        />
        <input type="submit" value="Save" />
        {this.props.meals.map(meal => (
          <div key={meal.name}>{meal.name}</div>
        ))}
      </form>
    );
  }
}

MealsPage.propTypes = {
  meals: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    meals: state.meals
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(mealActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MealsPage);
