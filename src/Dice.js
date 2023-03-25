import diceBlue01 from './assets/dice-blue-1.svg';

function Dice() {

  // img src 속성으로 파일 경로를 './assets/dice-blue-1.svg' 바로 작성하면 이미지 안뜸
  return <img src={diceBlue01} alt="주사위"/>
}

export default Dice;