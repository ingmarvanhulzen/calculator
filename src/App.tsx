import Button from "./components/Button";
import Container from "./components/Container";
import Display from "./components/Display";
import Row from "./components/Row";

function App() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gradient-to-r from-neutral-700 to-neutral-800">
      <Container>
        <Display value={10} />
        <Row>
          <Button variant="secondary">A/C</Button>
          <Button variant="secondary"></Button>
          <Button variant="secondary"></Button>
          <Button>÷</Button>
        </Row>
        <Row>
          <Button variant="tertiary">7</Button>
          <Button variant="tertiary">8</Button>
          <Button variant="tertiary">9</Button>
          <Button>×</Button>
        </Row>
        <Row>
          <Button variant="tertiary">4</Button>
          <Button variant="tertiary">5</Button>
          <Button variant="tertiary">6</Button>
          <Button>-</Button>
        </Row>
        <Row>
          <Button variant="tertiary">1</Button>
          <Button variant="tertiary">2</Button>
          <Button variant="tertiary">3</Button>
          <Button>+</Button>
        </Row>
        <Row>
          <Button variant="tertiary" span={1}>
            0
          </Button>
          <Button variant="tertiary">,</Button>
          <Button>=</Button>
        </Row>
      </Container>
    </div>
  );
}

export default App;
