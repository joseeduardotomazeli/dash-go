import { cloneElement, ReactElement } from 'react';
import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';

interface ActiveLinkProps extends LinkProps {
  shouldMatchExactHref?: boolean;
  children: ReactElement;
}

function ActiveLink(props: ActiveLinkProps) {
  const { asPath } = useRouter();

  const { shouldMatchExactHref = false, children, ...restProps } = props;

  let isActive = false;

  if (
    shouldMatchExactHref &&
    (asPath === restProps.href || asPath === restProps.as)
  )
    isActive = true;

  if (
    !shouldMatchExactHref &&
    (asPath.startsWith(String(restProps.href)) ||
      asPath.startsWith(String(restProps.as)))
  )
    isActive = true;

  return (
    <Link {...restProps}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50',
      })}
    </Link>
  );
}

export default ActiveLink;
