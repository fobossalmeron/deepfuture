import { useRouter } from "next/router";
import Link from "next/link";

const ActiveLink = ({ children, ...props }) => {
  const router = useRouter();
  const child = React.Children.only(children);
  return (
    <Link {...props} passHref>
      {React.cloneElement(child, {
        active: router.pathname.includes(props.href),
      })}
    </Link>
  );
};

export default ActiveLink;
