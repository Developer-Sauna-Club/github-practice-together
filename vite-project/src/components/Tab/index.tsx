import React, { useMemo, useState } from 'react';
import TabItem from './TabItem';

const childrenToArray = (
  // 말그대로 children 을 배열로 바꿔주는 함수, 그냥 children으로는 안되서 그런거겠지?
  children: React.ReactNode,
  ...types: string[]
): React.ReactElement[] => {
  return React.Children.toArray(children).reduce<React.ReactElement[]>(
    (acc, element) => {
      if (
        React.isValidElement(element) &&
        types.includes(element.props.__TYPE)
      ) {
        acc.push(element);
      }
      return acc;
    },
    []
  );
};

type TabProps = {
  children: React.ReactNode;
};

const Tab = ({ children }: TabProps) => {
  const [currentActive, setCurrentActive] = useState(() => {
    const index = childrenToArray(children, 'Tab.Item')[0];
    return index;
  });

  const items = useMemo(() => {
    return childrenToArray(children, 'Tab.Item').map((element) => {
      const res = React.cloneElement(element, {
        ...element.props,
        key: element.props.index,
        active: element.props.index === currentActive.props.index,
        onClick: () => {
          setCurrentActive(res);
        }
      });
      return res;
    });
  }, [children, currentActive]);

  return (
    <div>
      <div>{items}</div>
      <div>{currentActive?.props.children}</div>
    </div>
  );
};

Tab.Item = TabItem;

export default Tab;
