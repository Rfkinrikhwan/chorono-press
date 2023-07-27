import { Outlet, useLocation } from "react-router-dom"
import Navbar from "./Components/Navbar";


export interface NewsType {
  toLowerCase(): string;
  map: any;
  contentSnippet: string;
  isoDate: string;
  link: string;
  title: string;
  image: { small: string, large: string };
  slice: any;
  id: number;
  cnbc: any;
}


export default function Layout() {
  const location = useLocation()

  return (
    <div>
      {location.pathname == `/see-all` ? '' : <Navbar />}
      <Outlet />
    </div>
  )
}
