import { sidebarLinks } from "./navbar";

const Links = () => {

  return (
    <nav className="hidden xl:block sm:hidden">
      <ul className="flex [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 ">
      {sidebarLinks.map(({ title, route }) => (
          <li key={title}>
            <a href={route}>{title}</a>
          </li>
        ))} 
      </ul>
    </nav>
  );
};

export default Links;
