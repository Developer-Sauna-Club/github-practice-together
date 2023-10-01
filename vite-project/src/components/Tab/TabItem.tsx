import styled from '@emotion/styled';
import PropTypes from 'prop-types';

type TabItemProps = {
  title: string;
  active?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  index?: string;
};

type TabItemWrapperProps = {
  active?: boolean;
};

const TabItemWrapper = styled.div<TabItemWrapperProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 60px;
  background-color: ${({ active }) => (active ? '#ddf' : '#eee')};
  cursor: pointer;
`;

const TabItem = ({ title, active, ...props }: TabItemProps) => {
  return (
    <TabItemWrapper active={active} {...props}>
      <h1>{title}</h1>
    </TabItemWrapper>
  );
};

TabItem.defaultProps = {
  __TYPE: 'Tab.Item'
};

TabItem.propTypes = {
  __TYPE: PropTypes.oneOf(['Tab.Item'])
};

export default TabItem;
