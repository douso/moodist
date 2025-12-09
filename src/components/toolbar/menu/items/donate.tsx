import { SiBuymeacoffee } from 'react-icons/si/index';

import { Item } from '../item';

export function Donate() {
  return (
    <Item
      href="https://buymeacoffee.com/remvze"
      icon={<SiBuymeacoffee />}
      label="购买我一杯咖啡"
    />
  );
}
