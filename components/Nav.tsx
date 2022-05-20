import { AppBar } from "@mui/material";
import { styled } from "@mui/system";
import React, { memo } from "react";

const StyledNav = styled(AppBar, {
    name: "StyledNav"
})({
    color: "#FD9FBF",
    backgroundColor: "#001d76",
    height: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20
});

const Nav = memo(() => {
    return <StyledNav>
        <h3>Liquidwork</h3>
    </StyledNav>
});

export default Nav; 