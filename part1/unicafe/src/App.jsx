import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const StatisticLine = ({text, value}) => 
<tr>
  <td>{text}</td>
  <td>{value}</td>
</tr>

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = good / all * 100 + ' %'

  if (all === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <table>
      <tbody>
        <StatisticLine text = "good" value = {good}/>
        <StatisticLine text = "neutral" value = {neutral}/>
        <StatisticLine text = "bad" value = {bad}/>
        <StatisticLine text = "all" value = {all}/>
        <StatisticLine text = "average" value = {average}/>
        <StatisticLine text = "positive" value = {positive}/>
      </tbody>
    </table>
  )
}
    

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGood} text='good' />
      <Button onClick={handleNeutral} text='neutral' />
      <Button onClick={handleBad} text='bad' />
      <h1>statistics</h1>
      <Statistics good = {good} bad = {bad} neutral = {neutral}/>
    </div>
  )
}

export default App