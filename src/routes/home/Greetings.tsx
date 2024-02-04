import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

export default function Greetings() {
  const hire_me = `
                                                                                                                                       
                                                                                                                                     
HHHHHHHHH     HHHHHHHHHIIIIIIIIIIRRRRRRRRRRRRRRRRR   EEEEEEEEEEEEEEEEEEEEEE     MMMMMMMM               MMMMMMMMEEEEEEEEEEEEEEEEEEEEEE
H:::::::H     H:::::::HI::::::::IR::::::::::::::::R  E::::::::::::::::::::E     M:::::::M             M:::::::ME::::::::::::::::::::E
H:::::::H     H:::::::HI::::::::IR::::::RRRRRR:::::R E::::::::::::::::::::E     M::::::::M           M::::::::ME::::::::::::::::::::E
HH::::::H     H::::::HHII::::::IIRR:::::R     R:::::REE::::::EEEEEEEEE::::E     M:::::::::M         M:::::::::MEE::::::EEEEEEEEE::::E
  H:::::H     H:::::H    I::::I    R::::R     R:::::R  E:::::E       EEEEEE     M::::::::::M       M::::::::::M  E:::::E       EEEEEE
  H:::::H     H:::::H    I::::I    R::::R     R:::::R  E:::::E                  M:::::::::::M     M:::::::::::M  E:::::E             
  H::::::HHHHH::::::H    I::::I    R::::RRRRRR:::::R   E::::::EEEEEEEEEE        M:::::::M::::M   M::::M:::::::M  E::::::EEEEEEEEEE   
  H:::::::::::::::::H    I::::I    R:::::::::::::RR    E:::::::::::::::E        M::::::M M::::M M::::M M::::::M  E:::::::::::::::E   
  H:::::::::::::::::H    I::::I    R::::RRRRRR:::::R   E:::::::::::::::E        M::::::M  M::::M::::M  M::::::M  E:::::::::::::::E   
  H::::::HHHHH::::::H    I::::I    R::::R     R:::::R  E::::::EEEEEEEEEE        M::::::M   M:::::::M   M::::::M  E::::::EEEEEEEEEE   
  H:::::H     H:::::H    I::::I    R::::R     R:::::R  E:::::E                  M::::::M    M:::::M    M::::::M  E:::::E             
  H:::::H     H:::::H    I::::I    R::::R     R:::::R  E:::::E       EEEEEE     M::::::M     MMMMM     M::::::M  E:::::E       EEEEEE
HH::::::H     H::::::HHII::::::IIRR:::::R     R:::::REE::::::EEEEEEEE:::::E     M::::::M               M::::::MEE::::::EEEEEEEE:::::E
H:::::::H     H:::::::HI::::::::IR::::::R     R:::::RE::::::::::::::::::::E     M::::::M               M::::::ME::::::::::::::::::::E
H:::::::H     H:::::::HI::::::::IR::::::R     R:::::RE::::::::::::::::::::E     M::::::M               M::::::ME::::::::::::::::::::E
HHHHHHHHH     HHHHHHHHHIIIIIIIIIIRRRRRRRR     RRRRRRREEEEEEEEEEEEEEEEEEEEEE     MMMMMMMM               MMMMMMMMEEEEEEEEEEEEEEEEEEEEEE
                                                                                                                                     
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
                                                                                                                                     
  `;
  return (
    <div className="px-10 py-20 md:py-52 flex flex-col justify-center items-center gap-2 md:gap-4">
      <TypeAnimation
        sequence={[
          "Hi,",
          200,
          "Hi, I'm Peter.K",
          () => {
            console.log(hire_me);
          },
        ]}
        className="text-2xl md:text-6xl"
        wrapper="h1"
        cursor={false}
      />
      {/* <h1 className="text-2xl md:text-6xl">Hi, I'm Peter.K</h1> */}
      <div className="text-sm italic text-gray-400">Web|App Developer</div>
      <Link to="/contact">
        <div className="rounded-sm shadow-lg px-4 py-2 outline-1 bg-slate-950 outline-slate-700 text-sm md:text-md hover:animate-pulse hover:brightness-150">
          <span className="text-gray-400 mr-6">1</span>
          <span className="text-red-500">hire</span> Peter.K --now
        </div>
      </Link>
    </div>
  );
}
