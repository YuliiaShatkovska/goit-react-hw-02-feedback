import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveReview = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = [good, neutral, bad];

    const total = totalFeedback.reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    const positivePercentage = (good / total) * 100;
    return Math.round(positivePercentage);
  };

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <div className="container">
        <Section title="Please leave feedback" />
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveReview={this.onLeaveReview}
        />
        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={this.countTotalFeedback()}
            percentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </div>
    );
  }
}

export default App;
