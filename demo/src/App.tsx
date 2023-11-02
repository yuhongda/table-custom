import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'
import { Divider, Typography, Row, Col } from 'antd'
const { Title } = Typography
import { Example } from './components/Example'

type ResultDataType<T> = T[]

const Wrapper = styled.div`
  padding: 20px;
`

function App() {
  return (
    <Wrapper>
      <header className="App-header">
        <Title>{`table-custom`}</Title>
        <Divider />
        <Row gutter={16}>
          <Col span={24}>
            <Example />
          </Col>
        </Row>
      </header>
    </Wrapper>
  )
}

export default App
