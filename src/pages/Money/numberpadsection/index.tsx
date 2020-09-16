import React from 'react'
import './numberpadsection.scss'
import {parseOutput} from '../../../utils/compute'


type TProps = {
  value: number
  onChange: (value: number) => void
  onOk: () => void
}

const NumberPadSection: React.FC<TProps> = (props) => {

  const output = props.value.toString()

  const setOutput = (output: string) => {
    let value: number

    if (output.length > 16) {
      value = parseFloat(output.slice(0, 16))
    } else if (output.length === 0) {
      value = 0
    } else {
      value = parseFloat(output)
    }

    props.onChange(value)
  }

  const onClickPad = (e: React.MouseEvent<HTMLDivElement>) => {
    const text = (e.target as HTMLButtonElement).textContent
    if (text === null) return
    if (text === 'OK') {
      props.onOk()
      return
    }

    setOutput(parseOutput(output, text))
  }



  return (
    <div className="number-pad-section">
      <div className="output">
        {output}
      </div>
      <div className="pad clearfix" onClick={onClickPad}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>删除</button>

        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>

        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="ok">OK</button>

        <button className="zero">0</button>
        <button className="dot">.</button>
      </div>
    </div>
  )
}

export default NumberPadSection