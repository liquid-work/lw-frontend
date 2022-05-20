import { AppBar } from "@mui/material";
import { styled } from "@mui/system";
import React, { memo } from "react";
import BalanceChip from "./BalanceChip";

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
    padding: 20
});

const Nav = memo(() => {
    return <StyledNav>
        <h3>Liquidwork</h3>
        <BalanceChip />
    </StyledNav>
});

export default Nav; 