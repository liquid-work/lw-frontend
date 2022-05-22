import { AppBar } from "@mui/material";
import { styled } from "@mui/system";
import React, { memo } from "react";
import MumbaiBalanceChip from "./MumbaiBalanceChip";

const StyledNav = styled(AppBar, {
    name: "StyledNav"
})({
    color: "#FD9FBF",
    backgroundColor: "#001d76",
    height: 70,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    position: "relative"
});

const Nav = memo(() => {
    return <StyledNav>
        <h3>Liquidwork</h3>
    </StyledNav>
});

export default Nav; 