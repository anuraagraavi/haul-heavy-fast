import { forwardRef, useTransition, type MouseEvent } from "react";
import { Link, useNavigate, type LinkProps } from "react-router-dom";

/**
 * Same as react-router `Link`, but navigates inside `startTransition` so Suspense with a
 * `null` fallback can keep showing the outgoing route until the next chunk is ready.
 */
const TransitionLink = forwardRef<HTMLAnchorElement, LinkProps>(function TransitionLink(
  { onClick, replace, state, preventScrollReset, relative, to, target, ...rest },
  ref,
) {
  const navigate = useNavigate();
  const [, startTransition] = useTransition();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    if (e.button !== 0) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const t = target ?? e.currentTarget.getAttribute("target");
    if (t && t !== "_self") return;
    e.preventDefault();
    startTransition(() => {
      navigate(to, { replace, state, preventScrollReset, relative });
    });
  };

  return (
    <Link
      ref={ref}
      to={to}
      replace={replace}
      state={state}
      preventScrollReset={preventScrollReset}
      relative={relative}
      target={target}
      onClick={handleClick}
      {...rest}
    />
  );
});

export default TransitionLink;
