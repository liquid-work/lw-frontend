import { styled } from "@mui/system";
import React, { memo, useMemo } from "react";
import Chip from '@mui/material/Chip';
import { formatEth } from "../blockchain/helpers";

const StyledBalanceChip = styled(Chip, {
    name: "StyledBalanceChip"
})({
    color: "#001d76",
    backgroundColor: "#FD9FBF",
    fontSize: 20
});

const BalanceChip = memo(() => {
    // const formattedBalance = useMemo(() => formatEth(balance) || 0 + " MATICx", [balance]);

    return <StyledBalanceChip label={0} />
});

export default BalanceChip; 