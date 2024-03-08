// ----------------------------------------------------------------------

import { SvgColor } from '~shared';

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

export type TNavConfig = {
  title: string;
  path: string;
  icon: React.ReactNode;
};

const navConfig: TNavConfig[] = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
];

export default navConfig;
