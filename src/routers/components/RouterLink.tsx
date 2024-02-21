import { forwardRef, Ref } from 'react';
import { Link } from 'react-router-dom';

// ----------------------------------------------------------------------

type Props = {
  href: string;
};

export const RouterLink: React.FC<Props> = forwardRef(({ href, ...other }, ref) => (
  <Link ref={ref as Ref<HTMLAnchorElement> | undefined} to={href} {...other} />
));
