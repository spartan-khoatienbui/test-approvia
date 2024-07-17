import { FC, forwardRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface Props extends Omit<LinkProps, 'to'> {
  href: string;
}

const RouterLink: FC<Props> = forwardRef<HTMLAnchorElement, Props>(({ href, ...other }, ref) => (
  <Link ref={ref} to={href} {...other} />
));

RouterLink.displayName = 'RouterLink';

export default RouterLink;
