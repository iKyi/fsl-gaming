import { Route, Routes, useLocation } from "react-router";
import HomePage from "./pages/HomePage";
import SnackbarProvider from "providers/SnackbarProvider";
import BlockingSnabarsProvider from "providers/BlockingSnabarsProvider";
import PageWithNavWrapper from "components/Reusable/Layout/PageWithNavWrapper";
import { useContext, useEffect } from "react";
import { StrapiContext } from "providers/StrapiPublicProvider";
import SeoComp from "components/Reusable/Seo";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import FourOhFourComp from "components/FourOhFour/FourOhFourComp";
import Leaderboards from "components/Leaderboards/Leaderboards";
import ChampionsLeague from "components/Games/ChampionsLeague/ChampionsLeagueComp";

const App: React.FC = () => {
  const { seo } = useContext(StrapiContext);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const { wallet, connected } = useWallet();
  const { connection } = useConnection();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connection, wallet, connected]);

  return (
    <>
      <PageWithNavWrapper>
        <SeoComp seo={seo} />
        <Routes>
          <Route element={<HomePage />} index />
          <Route element={<Leaderboards />} path="/leaderboards" />
          <Route element={<ChampionsLeague />} path="champions-league" />
          <Route path="*" element={<FourOhFourComp />} />
        </Routes>
      </PageWithNavWrapper>

      <SnackbarProvider />
      <BlockingSnabarsProvider />
    </>
  );
};

export default App;
