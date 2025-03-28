

interface HeaderProps {
    title:string;
  }
  


const Header: React.FC<HeaderProps> = ({title}) => {
  return (
    <div className = "h-[10vh]  fixed top-0 footer  flex flex-row justify-center items-center text-3xl font-sans font-[700]  bg-[#9cffa6] text-[#355938]">
        <h1> {title} </h1>
    </div>

  );
};

export default Header;