import { useRouter } from "next/router";

function ActiveLink({ children, href, type }) {
  const router = useRouter();
    
  const link = {
    color: router.asPath === href ? "#4999f5" : "#707070",
    background: router.asPath === href ? "white" : "none",
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={type == "link" ? router.asPath === href ? "text-white" : "text-gray-600" : type == "bottom" ? "text-green-500" : "text-green-500"}
    >
      {children}
    </a>
  );
}

export default ActiveLink;