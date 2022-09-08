import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useWallet } from "@solana/wallet-adapter-react";
import CupIcon from "components/Icons/CupIcon";
import LogoIcon from "components/Icons/LogoIcon";
import getPlaceSuffix from "utils/getPlaceSuffix";
import { centerFlex } from "utils/sxUtils";

export interface ILeaderBoardEntry {
  place?: number;
  walletId: string;
  acc: number;
  nft: string;
  points: number;
  goals: number;
}

export type LeaderTablePropsType = {
  items: ILeaderBoardEntry[];
};

const LeaderTable: React.FC<LeaderTablePropsType> = ({ items }) => {
  const { publicKey } = useWallet();

  const userAdress = publicKey?.toString();

  if (items.length === 0) return null;
  // *************** RENDER *************** //
  return (
    <Box
      sx={{
        maxWidth: "100%",
        overflow: "auto",
      }}
    >
      <Table
        sx={{
          borderCollapse: "separate",
          minWidth: 500,
        }}
      >
        <TableHead>
          <TableRow
            sx={{
              th: {
                border: 0,
                fontWeight: 300,
              },
            }}
          >
            <TableCell>PLACE</TableCell>
            <TableCell>WALLET</TableCell>
            <TableCell>ACc.</TableCell>
            <TableCell>NFT</TableCell>
            <TableCell>POINTS</TableCell>
            <TableCell>GOALS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item, index: number) => {
            const isOfCurrentUser = userAdress && userAdress === item.walletId;
            return (
              <TableRow
                key={item.walletId}
                sx={{
                  background: isOfCurrentUser
                    ? `linear-gradient(208.35deg, rgba(0, 245, 245, 0.13) 36.37%, rgba(0, 142, 245, 0.13) 46.39%)`
                    : `linear-gradient(115.7deg, rgba(176, 72, 253, 0.1) 10.28%, rgba(98, 22, 210, 0.1) 24.23%, rgba(62, 78, 204, 0.1) 38.19%, rgba(62, 117, 213, 0.1) 54.61%)`,
                  td: {
                    py: 2,
                    borderTop: `1px solid ${
                      isOfCurrentUser ? "rgba(0, 245, 245, 1)" : "#3C325F"
                    }`,
                    borderBottom: `1px solid ${
                      isOfCurrentUser ? "rgba(0, 245, 245, 1)" : "#3C325F"
                    }`,
                    "&:first-of-type": {
                      borderLeft: `1px solid ${
                        isOfCurrentUser ? "rgba(0, 245, 245, 1)" : "#3C325F"
                      }`,
                    },
                    "&:last-of-type": {
                      borderRight: `1px solid ${
                        isOfCurrentUser ? "rgba(0, 245, 245, 1)" : "#3C325F"
                      }`,
                    },
                  },
                  "&:last-of-type": {
                    td: {
                      borderBottom: "1px solid #3C325F",
                    },
                  },
                  "&:first-of-type": {
                    td: {
                      borderColro: "rgba(176, 72, 253, 1)",
                    },
                  },
                }}
              >
                <TableCell
                  sx={{
                    fontSize: 16,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        ...centerFlex,
                        mr: 1,
                        visibility: index === 0 ? undefined : "hidden",
                      }}
                    >
                      <CupIcon />
                    </Box>
                    <Box>
                      {item?.place ?? 0}
                      {getPlaceSuffix(item?.place ?? 99999).toLocaleUpperCase()}
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        ...centerFlex,
                        mr: 1,
                      }}
                    >
                      <LogoIcon />
                    </Box>
                    <Box> {item?.walletId}</Box>
                  </Box>
                </TableCell>
                <TableCell>{item?.acc}</TableCell>
                <TableCell>{item?.nft}</TableCell>
                <TableCell>{item?.points}</TableCell>
                <TableCell>{item?.goals}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Box>
  );
};

export default LeaderTable;
