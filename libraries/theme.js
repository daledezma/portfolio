import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles={
    global: props => ({
        body:{
            bg: mode( '#f0e7db', '#202023')(props)
        }
    })
}

const components={
    Heading: {
        variants:{
            'section-title': { textDecoration: 'underline', fontSize: 20, textUnderlineOffset: 6, textDecorationColor: '#525252',
            textDecorationThickness: 4, marginTop: 3, marginBottom: 4 }
        }
    },
    Link:{
        baseStyle: props => ({
            color: mode('#3d7aed', 'teal.200')(props), textUnderlineOffset: 3
        })
    }
}

const fonts={
    heading: "'neue-haas-grotesk-display'"
}

const colors={
    glassTeal: '#88ccca'
}

const config={
    initalColorMode: 'light',
    useSystemColorMode: true
}

const theme = extendTheme({
    styles, components, colors, config, fonts
})

export default theme