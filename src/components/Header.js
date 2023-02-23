
import { useEffect, useRef, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faMedium, faStackOverflow, faHackerrank,  } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const headerRef = useRef(null)

    const [socials, setSocials] = useState([
        {icon: faEnvelope, url:"mailto:amitha4g@gmail.com"}, 
        {icon: faLinkedin, url:"https://www.linkedin.com/in/amitha-perera-28699645/"}, 
        {icon: faGithub, url:"https://github.com/amitham"}, 
        {icon: faMedium, url:"https://medium.com/@amitha4g"}, 
        {icon: faStackOverflow, url:"https://stackoverflow.com/users/5222505/amitha-mahesh"}, 
        {icon: faHackerrank, url:"https://www.hackerrank.com/amitha4g?hr_r=1"}]);
    
    useEffect(() => {
        let prevScrolPos = window.scrollY;

        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const headerElement = headerRef.current;
            if(!headerElement){
                return;
            }
            if(prevScrolPos > currentScrollPos) {
                headerElement.style.transform = "translateY(0)";
            } else {
                headerElement.style.transform = "translateY(-200px)";
            }
            prevScrolPos = currentScrollPos;
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    
    const handleClick = (anchor) => {

    }

    return(
        <Box 
            position="fixed"
            top={0}
            left={0}
            right={0}
            translateY={0}
            transitionProperty="transform"
            transitionDuration=".3s"
            transitionTimingFunction="ease-in-out"
            backgroundColor="#18181b"
            ref={headerRef}>
                <Box color="white" maxWidth="1280px" margin="0 auto">
                    <HStack
                        px={16}
                        py={4}
                        justifyContent="space-between"
                        alignItems="center">                            
                            <nav>
                                <HStack spacing={8}>
                                    {                                        
                                        socials.map(({icon, url}) => (
                                            <a key={url} href={url} target="_blank" rel='noopener noreferrer'>
                                                <FontAwesomeIcon icon={icon} size="2x" key={url} />
                                            </a>
                                        ))
                                    }                       
                                </HStack>
                            </nav>
                            <nav>
                                <HStack spacing={8}>
                                    <a href='#project' onClick={handleClick("projects")}>
                                        Projects
                                    </a>
                                    <a href='#contactme' onClick={handleClick("contactme")}>
                                        Contact Me
                                    </a>
                                </HStack>
                            </nav>
                    </HStack>
                </Box>           
        </Box>
    )
}

export default Header;