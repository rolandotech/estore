import React from 'react';
import './style.scss';
import FadeLoader from "react-spinners/FadeLoader";
import { Box } from '@mui/material';



const AppLoader = (props) => {
    const {loading, containerStyle = {}} = props;

    return (
        <Box component="div" sx={[containerStyle, {display: loading ? 'flex' : 'none'}]} className="apploadContainer">
            <FadeLoader
                color="#c6c6c6"
                loading={loading}
                cssOverride={{
                    display: "block",
                    margin: "0 auto",
                    borderColor: "red",
                }}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </Box>
    )

}

export default AppLoader;