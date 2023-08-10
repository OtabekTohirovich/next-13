"use client"
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter()
  return (
    <div className="navbar1">
      <button onClick={()=>router.push('/')}>Bosh sahifa</button>
      <button onClick={()=>router.push('/about')}>Haqimda</button>
      <button onClick={()=>router.push('/contact')}>Bog'lanish</button>
      <button onClick={()=>router.push('/posts')}>Post</button>
    </div>
  );
};

export default Navbar;
