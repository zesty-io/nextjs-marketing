/**
 * Zesty.io AutoGenerated Header Component
 * This file is used in [...slug.js] for example. It is not necceary and may be deleted or modified as needed.
 * 
 */

import { Grid, Typography, Box } from "@mui/material";

import MarketingNav from "./marketing-example/MarketingNav.js";

function Header() {
       
    return (
    <Grid container>
        <Grid item md={4}>
            <Grid container paddingY={1}>
                <img src="https://brand.zesty.io/zesty-io-logo-dark.svg" height="36" alt="zesty logo" />
                <Typography paddingY={1} paddingX={2}>Marketing Examples</Typography>
            </Grid>
        </Grid>
        <Grid item md={8}>
            <MarketingNav/>
        </Grid>
    </Grid>
    );
}

export default Header;
