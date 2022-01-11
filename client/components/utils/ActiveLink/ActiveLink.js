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
  <div
  className={`${router.asPath === href && "border-b-2"} py-2 box-border`}
  >
    <a
      href={href}
      onClick={handleClick}
      className={ type == "link" ? router.asPath === href ? "font-semibold cursor " : "font-semibold  text-gray-100 " : type == "bottom" ? "text-green-500" : "text-green-500"   }
    >
      {children}
    </a>
    </div>
  );
}

export default ActiveLink;