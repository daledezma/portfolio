import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from '@emotion/styled';

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 20px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;
    &:hover img{
        transform: rotate(360deg);
        transition-duration: 1s;

    }
`
const Logo = () => {
    const userAstronautImg = `/images/user-astronaut${useColorModeValue('','-dark')}.svg`

    return(
        <Link href="/">
                <LogoBox>
                    <Image src={userAstronautImg} width={20} height={20} alt="logo image" />
                    <Text color={useColorModeValue('gray.800', 'whiteAlpha.800')} fontFamily="M Plus Rounded 1c" fontWeight="bold" ml={3}>
                        Daniel Ledezma
                    </Text>
                </LogoBox>
        </Link>
    )
}

export default Logo