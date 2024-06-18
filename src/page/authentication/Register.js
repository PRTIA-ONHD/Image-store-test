import { Box } from '@mui/material';
import LayoutRegister from "../../component/authentication/layoutRegister"

function App() {

    return (
        <>
            <title>Register</title>
            <Box
                component="main"
                sx={{
                    display: "flex",
                    backgroundColor: "#778899",
                    flexDirection: 'column',
                    minHeight: '100vh',
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundImage: 'url("https://c.wallhere.com/photos/ff/6b/winter_night_canon_germany_stars_star_nightshot_nacht-893861.jpg!d")',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            >
                <Box
                    sx={{
                        width: 800,
                        height: 800,
                        backgroundColor: "#FFFFFF",
                        borderRadius: 5
                    }}>
                    <LayoutRegister />
                </Box>
            </Box >
        </>
    );
}

export default App;
