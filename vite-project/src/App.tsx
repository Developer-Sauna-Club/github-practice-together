import Button from '@/components/Button';
import { Box } from '@chakra-ui/react';
import Tab from './components/Tab';

function App() {
  return (
    <>
      <div>프로젝트 초기 세팅 완료</div>
      <Box bg="tomato" w="100%" p={4} color="white">
        This is the Box
      </Box>
      <Button />
      <h1>아무거나 쓰기</h1>
      <div>프로젝트 초기 세팅 완료!!!!!!!!우히히</div>
      <Button />

      <Tab>
        <Tab.Item title="Item1" index="item1">
          Content1
        </Tab.Item>
        <Tab.Item title="Item2" index="item2">
          Content2
        </Tab.Item>
        <Tab.Item title="Item3" index="item3">
          Content3
        </Tab.Item>
      </Tab>
    </>
  );
}

export default App;
