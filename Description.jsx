import "./Description.css";
import styled from "styled-components";
import React, { useState,useEffect,useRef } from "react";

const StyledWrapper = styled.div`

  width: 120vw;
    min-height: 80vh;
    overflow-x: hidden;
    position: relative;

  .button {
    position: relative;
    text-decoration: none;
    color: #e8e8e8;
    padding: 15px 30px;
    width: 120px;
    height: 50px;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
    border: none;
    overflow: hidden;
    background: linear-gradient(-45deg, rgb(47, 173, 74) 20%, rgb(23, 134, 107) 80% );
    transition: all 0.3s cubic-bezier(0.215, 0.610, 0.355, 1);
  }

  .button span , .button span::before {
    position: absolute;
    top: 0%;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    pointer-events: none;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.215, 0.610, 0.355, 1);
  }

  .button span::before {
    content: 'Click Me!';
    top: -100%;
  }

  .button:before {
    top: 0;
    left: 0;
    border-top: 2px solid #e8e8e8;
    border-left: 2px solid #e8e8e8;
  }

  .button:after {
    bottom: 0;
    right: 0;
    border-bottom: 2px solid #e8e8e8;
    border-right: 2px solid #e8e8e8;
  }

  .button:after,
  .button:before {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.215, 0.610, 0.355, 1);
  }

  .button:hover {
    box-shadow: 0 0 30px rgb(230, 230, 250),
    0 0 30px rgb(230, 230, 250);
    ;
  }

  .button:hover:before,
  .button:hover:after {
    width: 100%;
    height: 100%;
  }

  .button:hover span {
    top: 100%;
  }

  .button:active {
    scale: 0.95;
    box-shadow: 0 0 10px rgb(230, 230, 250),
    0 0 10px rgb(230, 230, 250);
    ;
  }`;

  const StyledWrapper1 = styled.div`
    width: 120vw;
    min-height: 80vh;
    overflow-x: hidden;
    position: relative;
    
  `;
  
  // const SectionContainer = styled.div`
  //   display: flex;
  //   flex-direction: column;
  //   width: 100%;
  // `;
  
  // const Section = styled(motion.div)`
  //   width: 100%;
  //   min-height: 100vh;
  //   position: relative;
  //   padding: 2rem;
  //   box-sizing: border-box;
  // `;
  
  const WaveBackground = styled.div`
    position: fixed;
    width: 60vw;
    height: 90vh;
    opacity: 0.6;
    left: 20%;
    top: 70%;
    transform: translate(-50%, -50%);
    background: linear-gradient(744deg, rgb(157, 157, 202), rgb(241, 95, 59) 60%,rgb(201, 141, 29));
    border-radius: 40%;
    animation: wave 105s infinite linear;
    
    &:nth-child(2) {
      animation-duration: 50s;
      opacity: 0.4;
    }
    
    &:nth-child(3) {
      animation-duration: 45s;
      opacity: 0.2;
    }
    
    @keyframes wave {
      0% {
        transform: translate(-50%, -50%) rotate(0deg);
      }
      100% {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  `;

  const Resume=styled.div`
  .button {
    line-height: 1;
    background-color: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.35em;
    padding: 0.75em 1em;
    padding-right: 1.25em;
    color: #fff;
    border: 1px solid transparent;
    font-weight: 700;
    border-radius: 2em;
    font-size: 1rem;
    box-shadow: 0 0.7em 1.5em -0.5em hsla(249, 62%, 51%, 0.745);
    transition: transform 0.3s;

    background: linear-gradient(
      90deg,
      rgba(77, 54, 208, 1) 0%,
      rgba(132, 116, 254, 1) 100%
    );
  }

  .button__icon {
    width: 1.5em;
    height: 1.5em;
  }

  .button:hover {
    border-color: #f4f5f2;
  }

  .button:active {
    transform: scale(0.98);
    box-shadow: 0 0.5em 1.5em -0.5em hsla(249, 62%, 51%, 0.745)
  `;
  

function Description({darkMode,changeTheme})
{
    
        const [isOpen, setIsOpen] = useState(false);
      
        const toggleSidebar = () => {
          setIsOpen((prev) => !prev);
        };

         const [text, setText] = useState("");
  const message = "Rajshree Dandge!";

  const indexRef = useRef(0); // persists between renders

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = indexRef.current;

      if (currentIndex < message.length) {
        setText((prev) => prev + message[currentIndex]);
        indexRef.current += 1; // increment index
      } else {
        clearInterval(interval); // stop typing when done
      }
    }, 100); // Typing speed

    return () => clearInterval(interval);
  }, []);

    return <StyledWrapper>
          <div className="overall">
    <div className="Description">
        
        {isOpen && (
        <div className="contact">
           {/* <a href="https://github.com/RGitLog18" target="_blank" rel="noopener noreferrer" title="Visit Insta Account Account"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1024px-Instagram_logo_2022.svg.png" alt="insta" width="45px" height="40px" style={{border:"1px solid black"}}/>
            </a> */}
           <a> <img src="data:image/png;base64,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" alt="linkedin" width="45px" height="40px" style={{border:"1px solid black"}}/>
            </a>
            <a><img src="data:image/jpeg;base64,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" alt="github" width="45px" height="40px" style={{border:"1px solid black"}}/>
            </a>
            {/* <a><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEU7V53///8gRZUyUZrn6vKKl785VZxAW6Dh5O5yg7QmSZbR1uUxUJojR5Y2U5vx8vdbcKqyutSXosVidq3a3urM0uPCyd6ps9B7i7n09vrx9Pm4wNikrs1MZKRYbqp/j7tqfbGapsiPnMIAMY0VP5JdM9iBAAAD+UlEQVR4nO3dbVOjMBSG4fDSUEISXtRatta67v7/37hF7eiMs5iKyTmHee4Zx08i13RIhACq7K1mqCu1lqp6aC4w9fqtr5z1mnrHfiztrav6D8K2M+vRXdKmay/CsiiodydKRVG+ClvrqfclUt62L8JunZ/gVNFNwt5Q70fETH8WVusbZN7TVaYaR70XUXONGiz1TkTNDqpe60D6mq/Vqg/D6UCk3gOEEEIIIYQQQgghhMjz1hr3ofz8ZZwxxlpbFFr2NUJ9tvmbzf2u2ZbjmGXZOI6/2rLc3jZ3u0P/MGz2N0dtnZPJ9NYdN7sy+7p2q+Q
            Rtc0f70N0b0vY0tLGDuE8eUJtdH8NT5zQ2vsrfbKEOj+NVwMlCQvffO2RLDRP3/EJEubD94BihPm1Q6g0Yb77LlCIcAFQhtBdPwvKEprNAqAEoX9cAhQg1KZdudB9e54QIvTdMiB/Yb5dubA4LQSyF7qrzucFCpd/hNyFi49C7kK9dCBlLzSH1QuXA3kLi/3ahWbBaaEMoVv2Nzd/4cLTJgFC+3ydpd3eNp+65bz2dMVhOB5ORzstjX6OMVC50D9otntnJK74ahsIHHKhDw/qYxjwRuyzg0UdBKzlPncWNpQeBD86GLYaKvQQfCnoxOIg9iA8Z+4ChE+Sn410IUu+Vt4s+F7IhL8VPM6ECXeSD0OVB1xIvJc7Gaow4e/VC59XL9xInvAhhFBAEELIPwgh5B+EEPIPQgj5ByGE/INQhlD/vzChndnCy1aoq2YyIUI9t4UpWqMPW+VdUkl72T9wHXtJd6sX9rQXxRMIid+fm0C4p51OEggfaVfBEwiJl/njC0fiVfD4Qup1/vhC6nX++ELqdf74QupV8PhC6lum4guPxKdP8YXUd3lHF7bUN4VFF96uXkg9HcYXPlDfMhVdSH4pLrrwhvoO4uhC8v+uEls4Ug800YUl9WQRXdis/jOkfxgjtpD+HunYwj31ZBFd2FFPFtGF1L7oQvrpMLaQ+lJifCHxytqUfyq3MwUg5n6+JD93mohupj8Bq9ynvzMbYACcbx33YswFIYT8gxBC/kEIIf8ghJB/EELIPwgh5B+EEPIPQgj5ByGE/IMQQv5BCCH/IISQfxBCyD8IIeQfhBDyD0II+QchhPyDEEL+QQgh/yCEkH8QQsg/CCHkH4QQ8g9CCPmXUEj01rNUQl2pmuZlRKmEvlZE76ZPJbSDamjeZJNK6BpF9PrBREJdZSrrSV7Wk0ho+rMw6yimnTTCossmYWsJhtMkQm/bF2FW2vSfYgphYadfMgmztkv+auz4Qm26NrsIs6yvnPUplXGF2ltX9a9bUZfNNUNd/SThi+IKq3poLlv5B3kiS8fmdy97AAAAAElFTkSuQmCC
             " alt="facebook" width="45px" height="40px" style={{border:"1px solid black"}}/></a> */}
        </div>
        )}
        <div className="Description-Text">
          
          {/* <WaveBackground /> */}
          {/* <WaveBackground /> */}
          
               <br/>
               <br/>
                <button onClick={toggleSidebar} className="button">
                <span>Contact Here</span>
                </button>
               
                {/* <img onClick={toggleSidebar} src="/public/arrowblue.gif" alt="" height="60px"></img> */}
                <div style={{gap:"0px"}}>
                  <h1>Hi, myself </h1>
                  <h2 style={{fontSize:"13vh"}}>{text}</h2>
                </div>
                
                <p style={{fontSize:"30px", fontStyle:"",fontWeight:"",color:"white"}}>Computer engineering student <br/> 
                passionate about coding and learning new things!</p>
                {/* <p>Explore the features and enjoy your stay!</p> */}
                {/* <button className="Description-Button">Get Started</button> */}

                <p><a href="" download> <button className="button">
        <svg strokeLinejoin="round" strokeLinecap="round" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" height={40} width={40} className="button__icon" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" d="M0 0h24v24H0z" stroke="none" />
          <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
          <path d="M7 11l5 5l5 -5" />
          <path d="M12 4l0 12" />
        </svg>
        <span className="button__text">Download</span>
      </button></a></p>
       
        </div>

        <div className="Description-Image">
            <img  src="/public/proff1.jpg" alt="Rajshree Dandge" height="480px" width="370px"></img>
        </div>
        
        
    </div>

    
    </div>
    
    </StyledWrapper>
  
}

export default Description;