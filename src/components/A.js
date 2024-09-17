const A = ({ children, href }) => (
  <a href={href} class="text-blue-500 hover:text-blue-700 underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-blue-500">
    {children}
  </a>
);

export default A;