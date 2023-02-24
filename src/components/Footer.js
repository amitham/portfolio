import React from "react";
import { Box } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box 
            position="relative"
            bottom={0}
            left={0}
            right={0}           
            backgroundColor="#18181b"
        >
            <Box color="white" maxWidth="1280px" margin="0 auto" h='40px'>
                © 2023 Amitha Mahesh Perera. All rights reserved.                
            </Box>
        </Box>
    )
}

export default Footer;