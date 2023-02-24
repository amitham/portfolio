import { Avatar, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import FullScreenSection from './FullScreenSection';

const LandingSection = () => {
    return (
        <FullScreenSection
            justifyContent="center"
            alignItems="center"
            isDarkBackground
            backgroundColor="#18181b">
                <VStack spacing={16}>
                    <VStack spacing={4} alignItems="center">
                    {/* require("../images/me.jpg") */}
                        {/* <Avatar src="https://i.pravatar.cc/150?img=7" */}
                        <Avatar src={require("../images/me.jpg")}
                            size="2x1"
                            name="your name"/>
                            <Heading as="h4" size="md" noOfLines={1}>
                                Hello, I am Amitha!
                            </Heading>
                    </VStack>
                    <VStack spacing={10}>
                        <Heading noOfLines={1}>
                            A fullstack developer specialised in JavaScript and .Net
                        </Heading>
                    </VStack>
                </VStack>            
        </FullScreenSection>
    )
}

export default LandingSection;