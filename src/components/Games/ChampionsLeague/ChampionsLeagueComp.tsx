import { useWallet } from "@solana/wallet-adapter-react";
import { useAppDispatch } from "app/hooks";
import { getAndBindAllChampionsLeagueData } from "features/games/championsLeagueSlice";
import { useEffect } from "react";
import ChampionsGame from "./ChampionsGame";
import GameLoginGuard from "components/Reusable/GameLoginGuard";

export type ChampionsLeaguePropsType = {};

const ChampionsLeague: React.FC<ChampionsLeaguePropsType> = () => {
  const dispatch = useAppDispatch();
  const { publicKey } = useWallet();

  const walletPublicKey = publicKey?.toString();

  useEffect(() => {
    dispatch(getAndBindAllChampionsLeagueData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // *************** RENDER *************** //
  return (
    <GameLoginGuard
      walletBoxTitle={`CHAMPIONS <span class="TP">LEAGUE</span>`}
      walletBoxSubtitle="CONNECT YOUR WALLET"
    >
      <ChampionsGame walletId={walletPublicKey!} />
    </GameLoginGuard>
  );
};

export default ChampionsLeague;
