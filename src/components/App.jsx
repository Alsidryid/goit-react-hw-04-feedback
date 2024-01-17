import {  useState } from "react";
import Statistics from "./Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import  Notification  from "./Notification/Notification";

 const voteOptions = ['good', 'neutral', 'bad']

 const App = () => {
  const [votes, setVotes] = useState({
        good: 0,
        neutral: 0,
    bad: 0
  })

  
      const countTotalFeedback = () => {
        const {good, neutral, bad} = votes
        const total = good + neutral + bad
        return total
    }
    const countPositiveFeedbackPercentage = () => {
        const total = countTotalFeedback();
        if (!total) {
            return 0
        }
        const value = votes['good']
        return Number(((value / total) * 100).toFixed(2))
    }

  const onLeaveFeedback = (keyName) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [keyName]: prevVotes[keyName] + 1
    }))
  }

      const total = countTotalFeedback();
      const percGood = countPositiveFeedbackPercentage()
      const {good, neutral, bad } = votes
        const options = voteOptions
  return (
          <>
            <Section title="Please leave your feedback">
              <FeedbackOptions
                options={options}
                onLeaveFeedback={onLeaveFeedback}
              />
            </Section>
            <Section title="Statistics">
                {countTotalFeedback() <= 0  ? <Notification message="There is no feedback"/> : <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={total}
                  positivePercentage={percGood}
                />}
            </Section>
          </>
            

    )
 }
 
export default App


