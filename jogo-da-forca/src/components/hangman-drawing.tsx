import styled from "styled-components"

const Base = styled.div`
  height: 10px;
  width: 250px;
  background-color: #fff;
  margin-left: 80px;
`

const VerticalLine = styled.div`
  height: 250px;
  width: 10px;
  background-color: #fff;
  margin-left: 150px;
`

const HorizontalLine = styled.div`
  height: 10px;
  width: 140px;
  background-color: #fff;
  position: absolute;
  right: 80px;
  top: 0;
`

const VerticalLineSmall = styled.div`
  height: 40px;
  width: 10px;
  background-color: #fff;
  margin-left: 150px;
  position: absolute;
  top: 0;
  right: 70px;
`

const Head = styled.div`
  height: 30px;
  width: 30px;
  border: 7px solid #fff;
  border-radius: 50%;
  position: absolute;
  top: 39px;
  right: 54px;
`

const Body = styled.div`
  height: 80px;
  width: 10px;
  background-color: #fff;
  position: absolute;
  top: 80px;
  right: 70px;
`

const RightArm = styled.div`
  height: 10px;
  width: 50px;
  background-color: #fff;
  position: absolute;
  top: 90px;
  right: 28px;
  rotate: -30deg;
`

const LeftArm = styled.div`
  height: 10px;
  width: 50px;
  background-color: #fff;
  position: absolute;
  top: 90px;
  right: 70px;
  rotate: 30deg;
`
const RightLeg = styled.div`
  height: 10px;
  width: 50px;
  background-color: #fff;
  position: absolute;
  top: 160px;
  right: 30px;
  rotate: 30deg;
`
const LeftLeg = styled.div`
  height: 10px;
  width: 50px;
  background-color: #fff;
  position: absolute;
  top: 160px;
  right: 70px;
  rotate: -30deg;
`


export default function HangmanDrawing() {
  return (
    <div style={{
      position: 'relative',
    }}>
      <LeftLeg />
      <RightLeg />
      <LeftArm />
      <RightArm />
      <Body />
      <Head />
      <VerticalLineSmall />
      <HorizontalLine />
      <VerticalLine />
      <Base />
    </div>
  )
}
